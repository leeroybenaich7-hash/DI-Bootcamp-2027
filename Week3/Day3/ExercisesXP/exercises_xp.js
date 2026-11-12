// ============================================================
// Week 3 - Day 3 - Exercises XP
// ============================================================
// Exercise 1 : HTML Form        -> see form_get.html
// Exercise 2 : HTML Form #2     -> see form_post.html
// Exercise 3 : JSON Mario       -> this file (+ json_mario.html for the debugger)
// ============================================================

// ------------------------------------------------------------
// Exercise 1 : HTML Form
// ------------------------------------------------------------
// Create a form with a small text input (name), a larger textarea (message)
// and a submit input ("Send"). The form is submitted with a GET method.
// Where will the sent data appear?
// Answer : in the URL (query string), ex: form_get.html?name=Leeroy&message=Hi

// ------------------------------------------------------------
// Exercise 2 : HTML Form #2
// ------------------------------------------------------------
// Same form, but submitted with a POST method.
// Where will the sent data appear? Hint : Look at the Network Tab
// Answer : not in the URL. The data is in the body of the request :
// Network tab -> click the request -> Payload -> Form Data.

// ------------------------------------------------------------
// Exercise 3 : JSON Mario
// ------------------------------------------------------------
// Using this code:
// const marioGame = { detail : "An amazing game!", characters : { mario : {...},
//                     bowser : {...}, princessPeach : {...} } }
//
// 1. Convert this JS object into a JSON object. What happens to the nested objects ?
// 2. Convert and pretty print this JS object into a JSON object.
//    Hint : Check out the JSON lesson on the platform.
// 3. Use your web inspector to add a breakpoint. Check the values of the
//    JSON object in the debugger.

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1. Convert to JSON
const marioJSON = JSON.stringify(marioGame);
console.log(marioJSON);
// What happens to the nested objects ?
// They are converted too : everything becomes ONE single string,
// the nested objects stay nested inside it, and all the keys get double quotes.
console.log(typeof marioJSON); // "string"

// 2. Convert and pretty print (2 spaces of indentation)
const marioJSONPretty = JSON.stringify(marioGame, null, 2);
console.log(marioJSONPretty);

// 3. Breakpoint : open json_mario.html in the browser with the inspector open.
// The "debugger" keyword below pauses the code (like a breakpoint) so we can
// check the values of marioJSON and marioJSONPretty in the Sources tab.
debugger;
