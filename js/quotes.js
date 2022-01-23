const qoutes = [
  {
    qoute:
      "The road to success and the road to failure are almost exactly the same.",
    autor: "Colin R. Davis",
  },
  {
    qoute: "It is better to fail in originality than to succeed in imitation.",
    autor: "Herman Melville",
  },
  {
    qoute:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    autor: "Winston Churchill",
  },
  {
    qoute: "All progress takes place outside the comfort zone.",
    autor: "Michael John Bobak",
  },
  {
    qoute:
      "Success usually comes to those who are too busy to be looking for it.",
    autor: "Henry David Thoreau",
  },
  {
    qoute: "The way to get started is to quit talking and begin doing.",
    autor: "Walt Disney",
  },
  {
    qoute:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    autor: "Albert Schweitzer",
  },
  {
    qoute:
      "Success seems to be connected with action. Successful people keep moving.",
    autor: "Conrad Hilton",
  },
  {
    qoute: "In order to succeed, we must first believe that we can.",
    autor: "Nikos Kazantzakis",
  },
  {
    qoute:
      "The only place where success comes before work is in the dictionary.",
    autor: "Vidal Sassoon",
  },
];

const qoute = document.querySelector("#qoute span:first-child");
const author = document.querySelector("#qoute span:last-child");

const todayQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

qoute.innerText = todayQoute.qoute;
author.innerText = todayQoute.autor;
