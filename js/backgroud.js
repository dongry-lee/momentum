const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const back = document.querySelector("body");

back.style.backgroundImage = `url('./img/${chosenImage}')`;
