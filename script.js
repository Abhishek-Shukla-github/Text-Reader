const toggle = document.querySelector("#toggle");
const main = document.querySelector("main");
const textBox = document.querySelector("#text-box");
const close = document.querySelector("#close");
const textArea = document.querySelector("#text");
const readBtn = document.querySelector("#read");

const data = [
    {
        img: "./img/angry.jpg",
        text:"I'm Angry"
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
    console.log(item);
}

data.forEach(createBox);