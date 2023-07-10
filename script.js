const proverbs = [
    {
        latin: "Carpe diem",
        translation: "Seize the day."
    },
    {
        latin: "Tempus fugit",
        translation: "Time flies."
    },
    {
        latin: "Per aspera ad astra",
        translation: "Through hardships to the stars."
    },
    {
        latin: "Memento mori",
        translation: "Remember that you will die."
    },
    {
        latin: "Dum spiro spero",
        translation: "While I breathe, I hope."
    },
    {
        latin: "Alea iacta est",
        translation: "The die is cast."
    }
];

const proverbDisplay = document.getElementById("latinText");
const translationDisplay = document.getElementById("translationText");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", generateProverb);

function generateProverb() {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    const randomProverb = proverbs[randomIndex];
    proverbDisplay.textContent = randomProverb.latin;
    translationDisplay.textContent = randomProverb.translation;
}
