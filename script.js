const questions = [
    {
        question: "Какое число жизни?",
        answers: [
            {
                text: "11",
                correct: false
            },
            {
                text: "42",
                correct: true
            },
            {
                text: "1337",
                correct: false
            },
            {
                text: "1996",
                correct: false
            },
    ]
    },
    {
        question: "Как называется камень из майнкрафта, который сломали и подобрали?",
        answers: [
            {
                text: "Мрамор Итальянский",
                correct: true
            },
            {
                text: "Булыжник",
                correct: false
            },
            {
                text: "Кабблстоун",
                correct: false
            },
            {
                text: "Стоун",
                correct: false
            },
    ]
    },
    {
        question: "Фамилия Пушкина?",
        answers: [
            {
                text: "Да",
                correct: false
            },
            {
                text: "Правильный ответ",
                correct: false
            },
            {
                text: "Молотов",
                correct: false
            },
            {
                text: "Пушкин",
                correct: true
            },
    ]
    },
    {
        question: "Какой ответ?",
        answers: [
            {
                text: "Неверный",
                correct: false
            },
            {
                text: "Я бы его не выбрал",
                correct: false
            },
            {
                text: "Точно этот",
                correct: false
            },
            {
                text: "Капибара",
                correct: true
            },
    ]
    },
    {
        question: "АААААААА?",
        answers: [
            {
                text: "Ты кто?",
                correct: false
            },
            {
                text: "Ты какую группу уважаешь?",
                correct: false
            },
            {
                text: "Ты розговариваешь?!",
                correct: true
            },
            {
                text: "Ты говоришь пустые слова",
                correct: false
            },
    ]
    },
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Да";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNu = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNu + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnsw);
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
};

function selectAnsw(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerBtns.children).forEach(button =>{
        if (button.dataset.correct === " true"){
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextBtn.style.display = "block";
};


function showScore(){
    resetState();
    questionElement.innerHTML = `Вы набрали ${score} правильных ответов из ${questions.length}!`;
    nextBtn.innerHTML = "Играть снова!";
    nextBtn.style.display = "block";
};

function handleNExtButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click",() => {
    if (currentQuestionIndex < questions.length) {
        handleNExtButton();
    }else {
        startQuiz();
    }
});


startQuiz();
