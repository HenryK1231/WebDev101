// 1. Find the first paragraph 
// 2. Count the number of words in it 
// 3. Calculate how long it would take to read 
//    Avg reading speed in US: ~250 words per minute 
// 4. update the paragraph to include the reading time 
      
function insertReadingTime() {
    let $p = document.querySelector("p");
    let text = $p.innerText;
    let list = text.split(" ");
    let words = list.length;
    let duration = words / 250;
    $p.innerText += " (Reading time: " + duration + " minutes)";
}
insertReadingTime();
function countWords(the_text) {
    return the_text.split(" ").length;
}
function wordsToMinutes(words) {
    return words / 250;
}
function insertReadingTime($p) {
    if ($p.innerText && $p.matches("p")) {
      let words = countWords($p.innerText);
      let duration = wordsToMinutes(words);
      $p.innerText += " (Reading time: " + duration + " minutes)";
    }
}
insertReadingTime(document.querySelector("p"));
let $paragraphs = document.querySelectorAll("p");
let count = $paragraphs.length;
let $p = document.querySelector('p'); 
let text = $p.innerText; 
let list = text.split(" "); 
let words = list.length; 
let duration = words / 250;
for (let i = 0; i < count; i++) {
    insertReadingTime($paragraphs[i]);
}
$p.innerText += " (Reading time: " + duration + " minutes)"; 

