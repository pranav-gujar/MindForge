document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { 
            question: "Which keyword is used to declare a variable in JavaScript?", 
            options: ["var", "int", "string", "declare"], 
            answer: 0 
        },
        { 
            question: "How do you write a comment in JavaScript?", 
            options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "** This is a comment"], 
            answer: 0 
        },
        { 
            question: "Which method is used to add an element to an array?", 
            options: ["push()", "add()", "insert()", "append()"], 
            answer: 0 
        },
        { 
            question: "Which function is used to print to the console?", 
            options: ["print()", "console.log()", "log.console()", "write()"], 
            answer: 1 
        },
        { 
            question: "What does 'DOM' stand for?", 
            options: ["Document Object Model", "Data Object Model", "Document Oriented Module", "Digital Object Mapping"], 
            answer: 0 
        }
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
