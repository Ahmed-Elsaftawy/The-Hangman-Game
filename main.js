// // set the section of the word
// const sectionNames = ["Programming", "Movies", "Countries", "Animals", "Space", "Food", "Sports", "History", "Science", "Music"];
// const sections = {
//     "Programming": ["python", "script", "binary", "source", "syntax", "github", "buffer", "render", "string", "thread"],
//     "Movies": ["avatar", "batman", "psycho", "aliens", "frozen", "wall-e", "casper", "scream", "snatch", "amélie"],
//     "Countries": ["brazil", "france", "canada", "mexico", "greece", "turkey", "jordan", "norway", "poland"],
//     "Animals": ["rabbit", "jaguar", "monkey", "donkey", "falcon", "lizard", "spider", "walrus", "turtle", "baboon"],
//     "Space": ["saturn", "galaxy", "nebula", "meteor", "pulsar", "cosmos", "rocket", "lander", "planet", "quasar"],
//     "Food": ["cheese", "burger", "cookie", "cherry", "banana", "potato", "shrimp", "yogurt", "garlic", "muffin"],
//     "Sports": ["soccer", "tennis", "boxing", "karate", "hockey", "squash", "rowing", "racing", "league", "player"],
//     "History": ["empire", "knight", "viking", "pharao", "castle", "colony", "treaty", "soviet", "dynast", "temple"],
//     "Science": ["proton", "neuron", "theory", "energy", "fossil", "fusion", "magnet", "liquid", "enzyme", "sensor"],
//     "Music": ["guitar", "violin", "lyrics", "rhythm", "chorus", "singer", "record", "studio", "ballad", "modern"]
// };
// // get the random secion
// const ranodmSection = sectionNames[Math.floor(Math.random() * sectionNames.length)];
// //letters 
// const lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// // get the random word 
// const word = new Map(Object.entries(sections)).get(ranodmSection)[Math.floor(Math.random() * sectionNames.length)];

// // add the section name  to the right place
// const wordPlace = document.querySelector(".category");
// wordPlace.innerHTML = `Word From : <span>${ranodmSection}</span>`

// // game rules
// const guessLetters = 6;
// let guessTries = 7;
// const message = document.querySelector(".messege");

// //generarte letters function 
// function generarteLeters() {
//     //the div that has the letters
//     const lettersContainer = document.querySelector(".letters");
//     for (let i = 0; i < 26; i++) {
//         // create a div for the letters 
//         const letter = document.createElement("div");
//         letter.textContent = lettersArr[i].toUpperCase();
//         letter.className = "letter";
//         //add the letter div to the letters container
//         lettersContainer.appendChild(letter);
//         document.body.appendChild(lettersContainer);
//     }
//     const letters = lettersContainer.children;
//     [...letters].forEach((ele) => {
//         ele.addEventListener("click", () => {
//             const clickedLetter = ele.textContent.toLowerCase();
//             const allTheLetterFields = document.querySelector(".letters-guess").children;
//             let found = false;

//             for (let i = 0; i < word.length; i++) {
//                 if (word[i] === clickedLetter) {
//                     allTheLetterFields[i].textContent = clickedLetter.toUpperCase();
//                     found = true;
//                 }
//             }

//             if (found) {
//                 ele.style.pointerEvents = 'none';
//                 ele.style.opacity = '0.5';

//             } else {
//                 guessTries--;
//                 generartor.next();
//                 if (guessTries == 0) {
//                     message.textContent = "you lost the man is dead";
//                     const allBtns = document.querySelectorAll(".letters .letter");
//                     allBtns.forEach((ele) => {
//                         ele.style.opacity = "0.5"
//                         ele.style.pointerEvents = 'none';
//                     })

//                 }

//             }

//         });

//     })

// }

// //generate the field for guessing 
// function generateFields() {
//         let letterGuessContainer = document.querySelector(".letters-guess");
//     for (let i = 0; i < guessLetters; i++) {
//         //generate the div field
//         const field = document.createElement("div");
//         field.classList.add("field");
//         // add the field to the letters guess
//         letterGuessContainer.appendChild(field);
//         document.body.appendChild(letterGuessContainer);
//     }
// }

// function* generateBody() {
//     yield document.getElementById("1").style.opacity = "1";
//     yield document.getElementById("2").style.display = "block";
//     yield document.getElementById("3").style.display = "block";
//     yield document.getElementById("4").style.display = "block";
//     yield document.getElementById("5").style.display = "block";
//     yield document.getElementById("6").style.display = "block";
//     yield document.getElementById("7").style.display = "block";

// }
// let generartor = generateBody();


// window.onload = function () {
//     console.log(word);
//     generarteLeters();
//     generateFields();
// }


// another try 


// // game rules
const guessLetters = 6;
let guessTries = 7;
const message = document.querySelector(".messege");


//generate letters
//letters 
const lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//generarte letters function 
function generarteLeters() {
    //the div that has the letters
    let lettersContainer = document.querySelector(".letters");
    for (let i = 0; i < 26; i++) {
        // create a div for the letters 
        const letter = document.createElement("div");
        letter.textContent = lettersArr[i].toUpperCase();
        letter.className = "letter";
        //add the letter div to the letters container
        lettersContainer.appendChild(letter);

    }
    document.body.appendChild(lettersContainer);
}



// // set the section of the word
const sections = {
    "Programming": ["code", "function", "array", "compiler", "debug", "logic", "database", "api", "git", "variable"],
    "Movies": ["up", "jaws", "titanic", "inception", "elf", "saw", "matrix", "mulan", "dune", "gladiator"],
    "Countries": ["usa", "uk", "china", "germany", "japan", "italy", "peru", "spain", "thailand", "india"],
    "Animals": ["cat", "dog", "elephant", "bear", "fox", "giraffe", "cow", "lion", "octopus", "dolphin"],
    "Space": ["sun", "moon", "star", "mars", "earth", "comet", "galaxy", "orbit", "void", "blackhole"],
    "Food": ["egg", "pie", "pasta", "pizza", "sushi", "cake", "burger", "banana", "sandwich", "chili"],
    "Sports": ["golf", "ski", "tennis", "rugby", "cricket", "judo", "sumo", "boxing", "soccer", "baseball"],
    "History": ["war", "art", "rome", "greece", "maya", "aztec", "relic", "ancient", "era", "civilization"],
    "Science": ["atom", "ion", "cell", "genetics", "mass", "light", "wave", "force", "gravity", "biology"],
    "Music": ["pop", "jazz", "opera", "blues", "techno", "rock", "folk", "reggae", "classical", "disco"]
};
//setions names
const sectionNames = Object.keys(sections);
//wrog attemps
let wrongAttemps = 0;
//select the draw
let hangManDraw = document.querySelector(".hangman-draw");

// geet the random values 
let randomSectionIndex = Math.floor(Math.random() * sectionNames.length);
let randomSectionName = sectionNames[randomSectionIndex]
let randomValues = sections[randomSectionName];
let wordIndex = Math.floor(Math.random() * randomValues.length);
// the random word
let randomWord = randomValues[wordIndex];
// set the status of the correct answer
let correct = randomWord.length;
//add the word to the sectoin field category
const sectionField = document.querySelector(".category span");
sectionField.textContent = randomSectionName;
sectionField.style.textTransform = "capitalize";
//the letters of the random word
let lettersAndSpaces = Array.from(randomWord);
//generate the field for guessing 
function generateFields() {

    let letterGuessContainer = document.querySelector(".letters-guess");
    for (let i = 0; i < lettersAndSpaces.length; i++) {
        //generate the div field
        const field = document.createElement("div");
        field.classList.add("field");
        // append the field to the letters guess container
        letterGuessContainer.appendChild(field);
        document.body.appendChild(letterGuessContainer);
    }


};

//generator function for showing the draw 
function* generateBody() {
    yield document.getElementById("1").style.opacity = "1";
    // increase the wrong attemps 
    wrongAttemps++;
    yield document.getElementById("2").style.display = "block";
    wrongAttemps++;  // increase the wrong attemps 
    yield document.getElementById("3").style.display = "block";
    wrongAttemps++;  // increase the wrong attemps 

    yield document.getElementById("4").style.display = "block";
    wrongAttemps++;  // increase the wrong attemps 
    yield document.getElementById("5").style.display = "block";
    wrongAttemps++;  // increase the wrong attemps 
    yield document.getElementById("6").style.display = "block";
    wrongAttemps++;  // increase the wrong attemps 
    yield document.getElementById("7").style.display = "block";
    wrongAttemps++;// increase the wrong attemps 
}
let generartor = generateBody();


//handel the comparing letters
document.addEventListener("click", (e) => {
    if (e.target.className === "letter") {
        //get all  the letters the user clicked on
        //set status for check the chosen word 
        let theStatus = false;
        e.target.style.cssText = "opacity:0.5; pointer-events:none;cursor:default; background-color:#222";
        //if the letter is correct
        if (randomWord.includes(e.target.textContent.toLowerCase())) {
            //make the status true
            theStatus = true;

            // the clicked letter 
            let clickedLetter = e.target.textContent.toLowerCase();
            // add the letter to its correct place
            let fieldsIndex = Array.from(document.querySelector(".letters-guess").children);
            // get the index of the chosen letter
            lettersAndSpaces.forEach((field, index) => {
                if (field == clickedLetter) {
                    fieldsIndex[index].textContent = clickedLetter;
                    correct--;
                }

            })
            //if the user get the full name (win)
            if (correct == 0) {
                endGame();
                document.querySelectorAll(".letter").forEach((ele) => ele.classList.add('disable'));
            }
        } else { // if the clicked letter is not correct
            if (!generartor.next().done) {
                //add class wrong on the draw
                hangManDraw.classList.add(`wrong-${wrongAttemps}`);
                if (wrongAttemps === 7) {
                    endGame();
                }
            } else {

                //disable all the divs letter
                const letterDivs = document.querySelectorAll(".letter");
                letterDivs.forEach((letter) => letter.style.cssText = "opacity:0.5; pointer-events:none;cursor:default; background-color:#222");
                //run end game function 
                endGame()

            }

        }


    }
})
//end game function
function endGameMessage() {
    let hasBeenCalled = false;
    //return function that checks the parent function wont be called twice
    return function () {
        if (!hasBeenCalled) {
            const popup = document.createElement("div");
            popup.className = "popup";
            // the user get the right word
            if (wrongAttemps < 7) {
                popup.textContent = "Winner, You Saved The Man";
                popup.style.backgroundColor = "#d4edda"
                document.body.appendChild(popup);
                //play the success sound 
                document.querySelector("#success").play()
                handePopup()
            } else {
                popup.innerHTML = `You Lost The Word is <span>${randomWord.toUpperCase()}</span>`;
                popup.style.backgroundColor = "#f8d7da"
                document.body.appendChild(popup);
                //play the fail sound 
                document.querySelector("#fail").play()

                handePopup()
            }
        }
    }


}
const endGame = endGameMessage()


function handePopup() {
    document.addEventListener("click", (e) => {
        document.querySelector(".popup").style.opacity = "0";
    })

}

window.onload = function () {
    generarteLeters()
    generateFields()
    //making the footer 
    const footer = document.createElement("footer");
    footer.textContent = "The Hangman Game Created By Ahmed Elsaftawy";
    document.body.appendChild(footer);
}