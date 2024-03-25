let antwoorden = [
    "Ja, dat is mogelijk.",
    "Nee, dat is niet mogelijk.",
    "Het is onzeker, probeer het later opnieuw.",
    "Zeker weten!",
    "Ik betwijfel het.",
    "Alles wijst erop dat het zo is.",
    "Dat is niet waarschijnlijk.",
    "Het is mogelijk, maar niet erg waarschijnlijk."
];


let antwoord = "";


let mysteryAnswer = Math.floor(Math.random() * antwoorden.length);



console.log("De mysteryAnswer: " + mysteryAnswer);

const antwoordVeld = document.querySelector("h1")
const ballKnop = document.querySelector("#movingImage")
const refreshKnop = document.querySelector("#refresh")


function generateRandomAnswer() {
    mysteryAnswer = Math.floor(Math.random() * antwoorden.length);
    console.log("De mysteryAnswer: " + mysteryAnswer);
}

function displayRandomAnswer() {
    antwoord = antwoorden[mysteryAnswer];
    console.log("Antwoord: " + antwoord);
    antwoordVeld.textContent = antwoord;
}



ballKnop.addEventListener('click', function () {
    generateRandomAnswer();
    displayRandomAnswer();
    clearTextInput();
});

refreshKnop.addEventListener('click', function () {
    antwoordVeld.textContent = "Jouw antwoord is. . .";
});

/*mystery number */

let getal = 0;
let mysteryNumber = Math.floor(Math.random() * 6) + 1; 
console.log("De waarde van mysterynumber is " + mysteryNumber);

const inputGetal = document.querySelector("#inputGetal");
const controlKnop = document.querySelector("#control");
const randomVeld = document.querySelector("#randomVeld");
const textInput = document.querySelector("#textInput");
const clearTextButton = document.querySelector("#clearText");
const movingImage = document.querySelector("#movingImage");


function controleerGetal() {
    const ingevoerdGetal = parseInt(inputGetal.value);
    if (ingevoerdGetal === mysteryNumber) {
        randomVeld.textContent = "Correct!";
        randomGetal();
        antwoordVeld.textContent = "REFRESH NU DE PAGINA!";
        movingImage.classList.add('move-right');
    } else if (ingevoerdGetal < mysteryNumber) {
        randomVeld.textContent = "Te laag getal";
    } else if (ingevoerdGetal > mysteryNumber) {
        randomVeld.textContent = "Te hoog getal";
    }
}

function randomGetal() {
    mysteryNumber = Math.floor(Math.random() * 6) + 1;
    console.log("De waarde van mysterynumber is " + mysteryNumber);
}

function clearTextInput() {
    textInput.value = ""; 
}

controlKnop.addEventListener('click', controleerGetal);

clearTextButton.addEventListener('click', clearTextInput);


  



