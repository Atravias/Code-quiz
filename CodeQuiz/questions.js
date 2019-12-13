// window.onload = function () {

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
        answer: "attribute"
    },

];

var score = 0;

var start = document.getElementsByClassName(".start");



var btn = document.getElementsByClassName(".btn");

var count = document.getElementsByClassName("#timer");



var questionNumber = document.getElementsByClassName(".question-number");

var questionOne = document.getElementsByClassName(".question-one");
var questionOne = questions[0].title;

var questionTwo = document.getElementsByClassName(".question-two");
var questionTwo = questions[1].title;

var questionThree = document.getElementsByClassName(".question-three");
var questionThree = questions[2].title;

var questionFour = document.getElementsByClassName(".question-four");
var questionFour = questions[3].title;

var questionFive = document.getElementsByClassName(".question-five");
var questionFive = questions[4].title;


var answerOne = document.getElementsByClassName(".answer1");

var answerTwo = document.getElementsByClassName(".answer2");

var answerThree = document.getElementsByClassName(".answer3");

var answerFour = document.getElementsByClassName(".answer4");




// function quiz() {
//     questionOne.innerHTML = questions[0].title;
//     questionTwo.innerHTML = questions[1].title;
//     questionThree.innerHTML = questions[2].title;
//     questionFour.innerHTML = questions[3].title;
//     questionFive.innerHTML = questions[4].title;

// }

// var _answer1 = document.getElementById("#_answer1").textContent;
// var _answer2 = document.getElementById("_answer2").textContent;
// var _answer3 = document.getElementById("_answer3").textContent;
// var _answer4 = document.getElementById("_answer4").textContent;



function go() {
    count = 60;
    if (count === 0) {
        return score;
    } else if (count > 0) {
        count--;
    }
    return count;
}




document.getElementById("#question-one, #question-two, #question-three, #question-four, #question-five") = function () {
    var newDiv = document.getElementById("doctor");
    check = 0;
    if (check == false) {
        this = questions[0].title
    };


};



var check = document.getElementById('answer1').addEventListener("click", function () {

    function ans() {
        if (answerOne === false) {
            alert("false")
        } else {
            alert("correct")
        }
        if (answerTwo === false) {
            alert("false")
        } else {
            alert("correct")
        }
        if (answerThree === false) {
            alert("false")
        } else {
            alert("correct")
        }
        if (answerFour === false) {
            alert("false")
        } else {
            alert("correct")
        }

        alert(ans);
    }
    ans();
})

if (count === 0) {
    alert("Out of time!");
    clearTimeout;
}

function wrong() {
    timer = 60;
    var answers = {
        answerOne,
        answerTwo,
        answerThree,
        answerFour
    }
    var deduceTime = setInterval(function () {
        document.getElementById("#timer").innerHTML = timer + " seconds remaining";
        timer -= 15;
    }, 1000);
    if (answers === true) {
        return null;
    }
    else {
        deduceTime();
    }
    wrong();
}
;