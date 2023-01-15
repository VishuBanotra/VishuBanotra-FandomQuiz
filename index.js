var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your name? ")
console.log(`Hey ${userName}, Welcome to the SUPERHERO quiz game. `);

var score = 0;


var highScore = [
  {
    name: "Akash",
    score: 0
  },
  {
    name: "Rahul",
    score: 3
  }
]

// function
function quiz(question, answer) {
  var question = readLineSync.question(question);
  if (question === answer) {
    console.log("You are right !");
    score++
  }
  else {
    console.log("You are wrong !!");
  }
  console.log("---------");
}


// Array of questions(objects)
var questions = [
  {
    question: "What is the real name of Batman? ",
    answer: "Bruce Wayne"
  },
  {
    question: "What is the name of Nine-Tails Beast in Naruto? ",
    answer: "Kurama"
  },
  {
    question: "Who is more powerful Superman or Batman ?",
    answer: "Superman"
  },
  {
    question: "What is real the name of SSuperman ? ",
    answer: "Clark Kent"
  },
  {
    question: "Who is thr father of THOR ? ",
    answer: "Odin"
  }
]

// using for loop for iteration
for (var i = 0; i < questions.length; i++) {
  var userQuestion = questions[i].question;
  var userAnswer = questions[i].answer;

  quiz(userQuestion, userAnswer);
}


function showScore() {
  console.log("You final score is: ", score);
  console.log("If you want to show your score, Ping me on the whastapp number")

  highScore.map(score => console.log(score.name, ":", score.score));
}

showScore();

