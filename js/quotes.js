const qoutes = [
  { qoute: "1", autor: "1" },
  { qoute: "2", autor: "2" },
  { qoute: "3", autor: "3" },
  { qoute: "4", autor: "4" },
  { qoute: "5", autor: "5" },
  { qoute: "6", autor: "6" },
  { qoute: "7", autor: "7" },
  { qoute: "8", autor: "8" },
  { qoute: "9", autor: "9" },
  { qoute: "10", autor: "10" },
];

const qoute = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const todayQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

qoute.innerText = todayQoute.qoute;
author.innerText = todayQoute.autor;
