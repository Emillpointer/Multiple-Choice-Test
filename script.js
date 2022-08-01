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
        question : 'Which one of these is a Javascript framework?',
        choices :[
            { text: 'Python', correct: false},
            { text: 'Django', correct: false},
            { text: 'React', correct: true},
            { text: 'Eclipse', correct: false},
        ]
    }
]

function displayQuestions(){
    var h1 = document.createElement('h1')
    h1.textContent = questions[0].question;

    questionsArea.append('h1');
    
    questions[0].choices.forEach(choice)
}

var timeLeft = document.getElementById('timer-sec')

var time = 60;

function startTime() {
    time--
    timeLeft.textContent = time;
}

function subtractTime() {
    setInterval(startTime, 1000)
}; 
// This calls the function when start button is clicked
startButton.addEventListener('click', subtractTime)