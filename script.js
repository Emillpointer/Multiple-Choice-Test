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
        question: 'Which one of these is a Javascript framework?',
        choices:["Python", 'Django', 'React', 'Eclipse'],
        answer: "React"
    },
    {
        question: "Who is the creator of Javascript?",
        choices: ["Jeff Bezos", "Brendan Eich", "Alan MacMasters", "John Stafford Smith"],
        answer: "Brendan Eich"
    },
    {
        question: "What does HTML stand for?",
        choices: [""],
        answer: ""
    },
    {
        question: "",
        choices: [""],
        answer: ""
    },
]

function displayQuestions(index){
    var h1 = document.createElement('h1')
    h1.textContent = questions[index].question;

    questionsArea.append('h1');
    
    questions[0].choices.forEach(choice => {
        var button = document.createElement('button');
        button.textContent = choice;
        questionsArea.append(button);
        if(button.textContent === "React"){
            button.addEventListener('click', displayQuestions)
        }
    }),
    index++;
}

function displayQuestions2(index){
    var h1 = document.createElement('h1')
    h1.textContent = questions[index].question;

    questionsArea.append('h1');
    
    questions[0].choices.forEach(choice => {
        var button = document.createElement('button');
        button.textContent = choice;
        questionsArea.append(button);
        if(button.textContent === ""){
            button.addEventListener('click', displayQuestions2)
        }
    }),
    index++;
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