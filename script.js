var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')

var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerElement = document.getElementById('answer')
var answerButtonElement = document.getElementById('answer-btn')

var shuffledQuestions,correctQuestionIndex;
var quizScore = 0;


var questions = [
    {
        question: 'which one of these is a Javascript framework?',
        answers :[
            { text: 'Python', correct: false},
            { text: 'Django', correct: false},
            { text: 'React', correct: true},
            { text: 'Eclipse', correct: false},
        ]
    }
]