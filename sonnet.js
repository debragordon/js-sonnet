// Paste the code below into your HTML file.  **DONE**
var sonnet = document.getElementById("sonnet")

// Take the contents of the sonnet div and place it in a variable
var sonnetDiv = sonnet.innerHTML;
console.log("original sonnet: ", sonnetDiv);

// Find and output the starting position of the word "orphans"
var orphan = sonnetDiv.indexOf("orphans");
console.log("starting position of orphans: ", orphan);

// Output the number of characters in the sonnet
var number = sonnetDiv.length;
console.log("number of characters in the sonnet: ", number);

// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
var replace = sonnetDiv.replace(/the /gi, "a large ").replace(/winter/, "yuletide");
console.log("Replaced words: ", replace);

// Set the content of the sonnet div with the new string
sonnet.innerHTML = replace;
console.log("I swapped out the original HTML on the page for my updated version: "replace);

// I think I am finished with the assignment but I don't understand what I did