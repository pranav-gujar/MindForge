document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Styling Sheets", "Colorful Style Structure"], answer: 0 },
        { question: "Which property is used to change text color in CSS?", options: ["text-color", "color", "font-color", "text-style"], answer: 1 },
        { question: "Which CSS property controls the space between elements?", options: ["margin", "padding", "spacing", "border-spacing"], answer: 0 },
        { question: "How do you make text bold in CSS?", options: ["font-style: bold;", "text-weight: bold;", "font-weight: bold;", "bold: true;"], answer: 2 },
        { question: "Which unit is NOT relative in CSS?", options: ["em", "px", "rem", "%"], answer: 1 }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 30;
    let timer;

    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const timerDisplay = document.getElementById("time");
    const nextBtn = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const retryBtn = document.getElementById("retry-btn");

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 30;
        resultContainer.style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        loadQuestion();
        startTimer();
    }

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showResults();
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        questionContainer.innerHTML = `<h3>${currentQuestion.question}</h3>`;
        optionsContainer.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement("li");
            optionElement.textContent = option;
            optionElement.addEventListener("click", () => checkAnswer(index));
            optionsContainer.appendChild(optionElement);
        });
    }

    function checkAnswer(selectedIndex) {
        if (selectedIndex === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timerDisplay.textContent = timeLeft;
            } else {
                clearInterval(timer);
                showResults();
            }
        }, 1000);
    }

    function showResults() {
        clearInterval(timer);
        document.getElementById("quiz-container").style.display = "none";
        resultContainer.style.display = "block";
        scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
    }

    retryBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    startQuiz();
});
