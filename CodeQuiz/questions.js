var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "An array is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "square brackets"
    },
    {
        title: "What kind of loop goes through each element in an array?",
        choices: ["for-loop", "while-loop", "loop-de-loop", "reverse-loop"],
        answer: "for-loop"
    },
    {
        title: "what does 'attr' stand for?",
        choices: ["adder", "attorney", "attraction", "attribute"],
        answer: "parentheses"
    },

];

var start = document.getElementById("start");

var timerCount = setInterval(countdown, 1000);

var btn = querySelector(".btn");

var timer = getElementsByClassName(".timer");



var questionNumber = document.querySelector(".question-number");

var questionOne = document.querySelector(".question-one");
var questionOne = questions[0].title

var questionTwo = document.querySelector(".question-two");

var questionThree = document.querySelector(".question-three");

var questionFour = document.querySelector(".question-four");

var questionFive = document.querySelector(".question-five");


var answerOne = document.getElementsByClassName(".answer1");

var answerTwo = document.getElementsByClassName(".answer2");

var answerThree = document.getElementsByClassName(".answer3");

var answerFour = document.getElementsByClassName(".answer4");

start.addEventListener("click", quiz);

questionOne.innerHTML = questions[0].title.toString;

function quiz() {
    questionOne.innerHTML = questions[0].title;
    questionTwo.innerHTML = questions[1].title;
    questionThree.innerHTML = questions[2].title;
    questionFour.innerHTML = questions[3].title;
    questionFive.innerHTML = questions[4].title;

}

var _answer1 = document.getElementById(_answer1, "hi");
console.log(_answer1)

function answer(_answer1) {
    if (answerOne === questions[0, 1, 2, 3, 4].answer) {
        return "CORRECT!";
    } else {
        return "False.";
    }


}
function answer(_answer2) {
    if (answerTwo === questions[0, 1, 2, 3, 4].answer) {
        return "CORRECT!";
    } else {
        return "False.";
    }


}
function answer() {
    if (answerThree === questions[0, 1, 2, 3, 4].answer) {
        return "CORRECT!";
    } else {
        return "False.";
    }


}
function answer() {
    if (answerFour === questions[0, 1, 2, 3, 4].answer) {
        return "CORRECT!";
    } else {
        return "False.";
    }


}


if (count === 0) {
    alert("Out of time!");
    clearTimeout;
}

function wrongChoice() {
    var timer = 60;
    var deductTime = setInterval(function () {
        document.getElementById(timer, "sad").innerHTML = timer + " seconds remaining";
        timer -= 15;
    }, 1000);
    if (answer === true) {
        return null;
    }
    else {
        deductTime();
    }
    wrongChoice();
};