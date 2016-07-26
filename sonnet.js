// Paste the code below into your HTML file.  **DONE**

// Take the contents of the sonnet div and place it in a variable
var sonnetDiv = document.getElementById("sonnet").innerHTML;
console.log(sonnetDiv);

// Find and output the starting position of the word "orphans"
var orphan = sonnetDiv.indexOf("orphans");
console.log(orphan);

// Output the number of characters in the sonnet
var number = sonnetDiv.length;
console.log(number);

// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
var replace = sonnetDiv.replace(/the/g, "a large").replace(/winter/, "yuletide");
console.log(replace);

// Set the content of the sonnet div with the new string
document.getElementById("sonnet").innerHTML = replace;
console.log(replace);

// I think I am finished with the assignment but I don't understand what I did