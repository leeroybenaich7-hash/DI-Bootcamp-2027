// ============================================================
// Week 3 - Day 4 - Mini-Project : Robo-Friends Search
// ============================================================
// What you will create
// A Robo-Friends Search with Advanced Javascript
//
// PART I : The website
// The webpage displays Cards of Robots with their respective image and information.
// You have to create the cards by using the values from the array of objects provided.
//
// PART II : The filter
// When you search for a specific name in the search box, the webpage filters
// the cards displayed. For example if you write "nic" in the search box, you will
// display the robot which name contains "nic", which means only one robot: "Nicholas".
// Display the cards in the DOM, using DOM elements and selectors,
// and filter them with the search box.
//
// PART III : The style
// You can use your own images or use robohash.org to generate a new Robot Image.
// ============================================================

const robots = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", image: "https://robohash.org/1?200x200" },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", image: "https://robohash.org/2?200x200" },
  { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", image: "https://robohash.org/3?200x200" },
  { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", image: "https://robohash.org/4?200x200" },
  { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", image: "https://robohash.org/5?200x200" },
  { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", image: "https://robohash.org/6?200x200" },
  { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", image: "https://robohash.org/7?200x200" },
  { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", image: "https://robohash.org/8?200x200" },
  { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", image: "https://robohash.org/9?200x200" },
  { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", image: "https://robohash.org/10?200x200" },
];

const robotList = document.getElementById("robotList");
const searchBox = document.getElementById("searchBox");

// create one card with destructuring
const createCard = ({ name, email, image }) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = image;
  img.alt = name;

  const title = document.createElement("h2");
  title.textContent = name;

  const mail = document.createElement("p");
  mail.textContent = email;

  card.append(img, title, mail);
  return card;
};

// display a list of robots in the DOM
const displayRobots = (list) => {
  robotList.innerHTML = "";
  list.forEach((robot) => robotList.appendChild(createCard(robot)));
};

// filter the robots when the user types in the search box
searchBox.addEventListener("input", (event) => {
  const search = event.target.value.toLowerCase().trim();
  const filtered = robots.filter((robot) => robot.name.toLowerCase().includes(search));
  displayRobots(filtered);
});

// show all the robots at the start
displayRobots(robots);
