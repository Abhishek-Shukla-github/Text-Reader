const toggleBtn = document.querySelector("#toggle");
const main = document.querySelector("main");
const textBox = document.querySelector("#text-box");
const close = document.querySelector("#close");
const textArea = document.querySelector("#text");
const readBtn = document.querySelector("#read");
const voiceSelect = document.querySelector("#voiceSelect");

const data = [
    {
        img: "./img/angry.jpg",
        text:"I'm Angry",
    },
    {
        img: "./img/drink.jpg",
        text:"I'm Thirsty"
    },
    {
        img: "./img/food.jpg",
        text:"I'm Hungry"
    },
    {
        img: "./img/grandma.jpg",
        text:"I want to go to the grandma"
    },
    {
        img: "./img/happy.jpg",
        text:"I'm Happy"
    },
    {
        img: "./img/home.jpg",
        text:"I want to go to Home"
    },
    {
        img: "./img/hurt.jpg",
        text:"I'm Hurt"
    },
    {
        img: "./img/outside.jpg",
        text:"I want to go outside"
    },
    {
        img: "./img/sad.jpg",
        text:"I'm sad"
    },
    {
        img: "./img/scared.jpg",
        text:"I'm scared"
    },
    {
        img: "./img/tired.jpg",
        text:"I'm Tired"
    },
    {
        img: "./img/school.jpg",
        text:"I want to go to school"
    },
];

//Creating the box
const createBox = (item) => {
    const { img, text } = item;
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <img src="${img}" alt="${text}">
        <p class="info">${text}</p>
    `;
    //Adding eventListener to speak the text when box is clicked
    box.addEventListener("click", () => {
        setText(text);
        speakText();

        //Add the active class effect
        box.classList.add("active");
        setTimeout(()=>box.classList.remove("active"), 800);
    })

    main.appendChild(box);
}

//Defining the setText and speakText functions
function setText(text) {
    message.text = text;
}

function speakText() {
    speechSynthesis.speak(message);
}

data.forEach(createBox);

//Toggle text reader box
toggleBtn.addEventListener("click", () => { 
    document.getElementById("text-box").classList.toggle("show");
})

//Toggling the Close(X) button
close.addEventListener("click", () => {
    document.querySelector("#text-box").classList.toggle("show");
})

//Fetching all the voices and displaying it in select option
let voices = [];

function getVoices() {
    voices= speechSynthesis.getVoices();
    voices.forEach((voice) => {
        let option = document.createElement("option");
        option.value = `${voice.name}`;
        option.innerText = `${voice.name} ${voice.lang}`;
        option.classList.add("option");

        voiceSelect.appendChild(option);
    })
}

//Initializing the speech synthesis
const message = new SpeechSynthesisUtterance();

//Fetching the voices by triggering the event
speechSynthesis.addEventListener("voiceschanged", getVoices);