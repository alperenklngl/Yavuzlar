let questions = JSON.parse(localStorage.getItem('questions')) || [
    {
        question: "Which one is the G.O.A.T villain in anime universe?",
        difficulty: "Difficulty: Hard",
        answers: [
            { text: "Pain", correct: false },
            { text: "Aizen", correct: true },
            { text: "Chrollo Lucifer", correct: false },
            { text: "Sukuna", correct: false },
        ]
    },
    {
        question: "How do the main characters in Attack on Titan battle against the Titans?",
        difficulty: "Difficulty: Hard",
        answers: [
            { text: "With magic spells", correct: false },
            { text: "With giant robotic suits", correct: false },
            { text: "With swords and grappling hooks", correct: true },
            { text: "They all just die", correct: false },
        ]
    },
    {
        question: "Which character's from the Naruto Universe?",
        difficulty: "Difficulty: Ez",
        answers: [
            { text: "Ichigo", correct: false },
            { text: "Neji", correct: true },
            { text: "Geto", correct: false },
            { text: "Chrollo Lucifer", correct: false },
        ]
    },
    {
        question: "In Death Note, how does Light Yagami first discover the infamous notebook?",
        difficulty: "Difficulty: Medium",
        answers: [
            { text: "It is delivered to him in a mysterious box", correct: false },
            { text: "He sees it fall from the sky", correct: true },
            { text: "He receives it as a gift from a friends", correct: false },
            { text: "In dream", correct: false },
        ]
    },
    {
        question: "Haikyuu!! is an anime about a high school sports team, practising which sport?",
        difficulty: "Difficulty: Ez",
        answers: [
            { text: "Volleyball", correct: true },
            { text: "Baseball", correct: false },
            { text: "Hockey", correct: false },
            { text: "Boxing", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question +
        " <span style='font-size:14px; color:#666;'>(" + currentQuestion.difficulty + ")</span>";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You got ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Solve again.";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

document.getElementById("start-btn").addEventListener("click", function() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-btn").style.display = "none";
    startQuiz();
});


function saveQuestionsToLocalStorage() {
    localStorage.setItem('questions', JSON.stringify(questions));
}


if (!localStorage.getItem('questions')) {
    saveQuestionsToLocalStorage();
}
