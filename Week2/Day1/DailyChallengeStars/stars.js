// ============================================================
// Week 2 - Day 1 - Daily Challenge: Stars
// ============================================================

// ------------------------------------------------------------
// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using
// two nested for loops (Nested means one inside the other).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
//
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// ------------------------------------------------------------

// 1. With one loop
let line = "";
for (let i = 1; i <= 6; i++) {
  line += "* ";
  console.log(line.trim());
}

// 2. With two nested for loops
for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trim());
}
