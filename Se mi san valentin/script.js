const messages = [
    "Estas segura?",
    "Realmente segura??",
    "Es positivo amor?",
    "Marii por favor...",
    "Solo piensalo mi amor!",
    "Si dices que no me pondre muy triste...",
    "Estare muy triste...",
    "Estare muy muy triste mi pichicienta...",
    "Ok dejare de preguntar...",
    "Es broma, di que siiiii mi vida! ❤️",
    "Di que siiii mi Espongita",
    "Tu y yo, se mi san valentin❤️",
    "Se solo mia!❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
let musica = new Audio("mi-audio.mp3");

