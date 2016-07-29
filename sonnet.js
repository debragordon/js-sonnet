// Paste the code below into your HTML file.  **DONE**
var sonnet = document.getElementById("sonnet")

// Take the contents of the sonnet div and place it in a variable
var sonnetDiv = sonnet.innerHTML;
// console.log("original sonnet: ", sonnetDiv);

// Find and output the starting position of the word "orphans"
var orphan = sonnetDiv.indexOf("orphans");
console.log("starting position of orphans: ", orphan);

if (orphan === 422) {
  console.log("hey, you were right@ that never happens")
}


switch (orphan) {
  case 410 :
  case 411 :
  case 412 :
  case 413 :
  case 441 :
    console.log("Hey, you were right. That never happens!");
    break;
  case 440 :
    console.log("Hey you were wrong, that never happens");
    break;
  default :
    console.log("WTF");
    break;
}

var myArray = ["first element",2,false,"last element"];
console.log("first type: ", typeof(myArray[0]));
console.log("first type: ", typeof(myArray[1]));
console.log("first type: ", typeof(myArray[2]));
console.log("first type: ", typeof(myArray[3]));

for (var i = 0; i < 150; i += 10) {
  console.log("current value :", i);
}







// Output the number of characters in the sonnet
var number = sonnetDiv.length;
console.log("number of characters in the sonnet: ", number);

// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
var replace = sonnetDiv.replace(/the /gi, "a large ").replace(/winter/, "yuletide");
// console.log("Replaced words: ", replace);

// Set the content of the sonnet div with the new string
sonnet.innerHTML = replace;
// console.log("I swapped out the original HTML on the page for my updated version: ",replace);

// I think I am finished with the assignment but I don't understand what I did