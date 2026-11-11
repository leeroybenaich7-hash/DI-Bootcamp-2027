// ============================================================
// Week 3 - Day 2 - Daily Challenge : Creating Objects
// ============================================================
// What you will learn:
// Creating objects
//
// Instructions
// In this exercise, you will use object oriented programming concepts to
// define and use a custom object in JavaScript.
//
// 1. Create a class named Video. The class should be constructed with the
//    following parameters:
//    - title (a string)
//    - uploader (a string, the person who uploaded it)
//    - time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
//    "uploader parameter watched all time parameter of title parameter!"
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances
//    (ie. title, uploader, time).
//    Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.
// ============================================================

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

// 3. First instance
const video1 = new Video("JavaScript Classes", "Leeroy", 600);
video1.watch();

// 4. Second instance
const video2 = new Video("Object Destructuring", "Sarah", 420);
video2.watch();

// 5. Bonus: an array of objects is the best structure (each video has named properties)
const videosData = [
  { title: "Arrow Functions", uploader: "Tom", time: 300 },
  { title: "Array Methods", uploader: "Lea", time: 540 },
  { title: "The DOM", uploader: "David", time: 720 },
  { title: "Promises", uploader: "Noa", time: 900 },
  { title: "Fetch API", uploader: "Yoni", time: 480 },
];

// 6. Bonus: loop through the array to create the instances
console.log("--- Bonus ---");
const videos = [];
for (const { title, uploader, time } of videosData) {
  const video = new Video(title, uploader, time);
  videos.push(video);
  video.watch();
}
