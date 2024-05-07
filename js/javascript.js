/*bron van deze DOM code: https://www.devdungeon.com/content/run-javascript-after-dom-fully-loaded#:~:text=has%20fully%20loaded.-,Use%20DOMContentLoaded%20event%20callback,after%20the%20DOM%20is%20loaded.*/
document.addEventListener('DOMContentLoaded', function () {
    /*array die de content bevat van de antwoorden*/
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

    /*wijst aan dat content een stuk tekst is*/
    let antwoord = "";

    /*bepaalt wat het mysteryAnswer naar verwijst*/
    let mysteryAnswer = Math.floor(Math.random() * antwoorden.length);

    console.log("De mysteryAnswer: " + mysteryAnswer);
    /*constanten hier verwijzen naar elementen als plaatjes en H1 in de html*/
    const antwoordVeld = document.querySelector("h1")
    const ballKnop = document.querySelector("#movingImage")
    const refreshKnop = document.querySelector("#refresh")

    /*functie hier genereert het random antwoord*/
    function generateRandomAnswer() {
        mysteryAnswer = Math.floor(Math.random() * antwoorden.length);
        console.log("De mysteryAnswer: " + mysteryAnswer);
    }
    /*functie hier weergeeft het random gepakte antwoord via text.content*/
    function displayRandomAnswer() {
        antwoord = antwoorden[mysteryAnswer];
        console.log("Antwoord: " + antwoord);
        antwoordVeld.textContent = antwoord;
    }


    /*de functies van de balknop in actie gezet die verwijst naar de 8 ball*/
    ballKnop.addEventListener('click', function () {
        generateRandomAnswer();
        displayRandomAnswer();
        clearTextInput();
    });
    /*de functie van de refreshknop in actie gezet die verwijst naar het plaatje van de refresh button*/
    refreshKnop.addEventListener('click', function () {
        antwoordVeld.textContent = "Jouw antwoord is. . .";
    });

    /*mystery number */
    /*getal is origineel 0*/
    let getal = 0;
    let mysteryNumber = Math.floor(Math.random() * 6) + 1; /*het mysterynumber is het random 
    nummer tussen 1 en 6 dat tevoorschijnkomt, vandaar *6 en de +1 is omdat javascript een nummer te laag rekent*/
    console.log("De waarde van mysterynumber is " + mysteryNumber);

    /*alle constante die verwijzen naar de inputs en de andere plaatjes van knoppen*/
    const inputGetal = document.querySelector("#inputGetal");
    const controlKnop = document.querySelector("#control");
    const randomVeld = document.querySelector("#randomVeld");
    const textInput = document.querySelector("#textInput");
    const clearTextButton = document.querySelector("#clearText");
    const movingImage = document.querySelector("#movingImage");

    /*controleertGetal bepaald de betekenis van het ingevoerde getal. Als het gelijk staat aan het mysterynumber dan is het
     correct. Als die kleiner is (<) is het te laag en hoger (>) dan is het te hoog. Gcommuniceerd via text.content weer.*/
    function controleerGetal() {
        const ingevoerdGetal = parseInt(inputGetal.value);
        if (ingevoerdGetal === mysteryNumber) {
            randomVeld.textContent = "Correct!";
            randomGetal();
            antwoordVeld.textContent = "REFRESH NU DE PAGINA!";
            movingImage.classList.add('move-right'); /*verwijst naar de class van het plaatje dat verandert van positie, via css*/
        } else if (ingevoerdGetal < mysteryNumber) {
            randomVeld.textContent = "Te laag getal";
        } else if (ingevoerdGetal > mysteryNumber) {
            randomVeld.textContent = "Te hoog getal";
        }
    }
    /*functie hier zorgt ervoor dat het mysterynumber een random getal is door math.floor en math.random tussen haakjes 
    keer 6 te doen en nogmaals +1 voor correctie*/
    function randomGetal() {
        mysteryNumber = Math.floor(Math.random() * 6) + 1;
        console.log("De waarde van mysterynumber is " + mysteryNumber);
    }


    /*laat de controleerknop werken door het klikbaar te maken met 'click' en dan de functie 'controleerGetal' te laten werken*/
    controlKnop.addEventListener('click', controleerGetal);


});








