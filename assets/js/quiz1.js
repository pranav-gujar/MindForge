document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Layout", "Hyperlink and Text Management Language", "Home Tool Markup Language"], answer: 0 },
        { question: "Which HTML tag is used to define a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
        { question: "What is the correct way to define an image in HTML?", options: ["<img src='image.jpg'>", "<image>image.jpg</image>", "<img>image.jpg</img>", "<src>image.jpg</src>"], answer: 0 },
        { question: "Which tag is used for the largest heading?", options: ["<h6>", "<h1>", "<h3>", "<heading>"], answer: 1 },
        { question: "Which HTML attribute specifies an alternative text for an image?", options: ["alt", "src", "title", "href"], answer: 0 }
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
