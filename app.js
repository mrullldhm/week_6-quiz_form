/*
    The JavaScript script defines the functionality for the Financial Knowledge Quiz application.
    It includes arrays of quiz questions and answers, functions to start the quiz, display questions, 
    process answers, and show the final score. Event listeners are also attached to the buttons.
*/

// Array of quiz questions, options, and correct answers
const quiz = [
    {
        question: "What is the primary purpose of an Emergency Fund?",
        options: ["To make big purchases like a car", "To pay off debts quickly", "To cover unexpected expenses"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is considered a good investment for long-term financial growth?",
        options: ["Lottery tickets", "Fixed deposits", "Credit cards"],
        correctAnswer: 1
    },
    {
        question: "What does the acronym EPF stand for?",
        options: ["Emergency Protection Fund", "Employer Provident Fund", "Education Payment Fund"],
        correctAnswer: 1
    },
    {
        question: "How is compound interest different from simple interest?",
        options: ["It adds interest to the principal only once", "It adds interest to the original principal plus any interest earned", "It doesn't earn any interest"],
        correctAnswer: 1
    },
    {
        question: "What should your debt-to-income ratio ideally be?",
        options: ["50% or higher", "20% or lower", "70% or lower"],
        correctAnswer: 1
    },
    {
        question: "Which of the following financial products is risk-free?",
        options: ["Unit trust funds", "Stocks", "Government bonds"],
        correctAnswer: 2
    },
    {
        question: "What is the main difference between a debit card and a credit card?",
        options: ["Debit cards can only be used at ATMs", "Debit cards allow you to spend money you already have", "Credit cards provide free cash forever"],
        correctAnswer: 1
    },
    {
        question: "What is the best strategy for paying off high-interest credit card debt?",
        options: ["Paying only the minimum monthly payment", "Transferring the balance to another credit card with a lower interest rate", "Paying off the highest interest debt first"],
        correctAnswer: 2
    },
    {
        question: "How often should you review your credit report?",
        options: ["Every month", "Every 6 months", "Annually"],
        correctAnswer: 2
    },
    {
        question: "What is a key benefit of having a financial advisor?",
        options: ["They help you win the lottery", "They manage your expenses", "They provide personalized advice based on your financial goals"],
        correctAnswer: 2
    }
];
let currentIndex = 0;
let score = 0;

// Function for START button
const startQuiz = () => {
    document.getElementById("quiz-instruction").style.display = "none";
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-flex";
    document.getElementById("restart-btn").style.display = "inline-flex";
    displayQuiz(currentIndex);
}

// Display the current question and its options
const displayQuiz = (index) => {
    const quizArrayData = quiz[index];
    document.getElementById("question-text").innerText = quizArrayData.question;

    const answerId = document.getElementById("answer-text");
    answerId.innerHTML = "";

    quizArrayData.options.forEach((answer, idx) => {
        const optionBtn = document.createElement("button");
        optionBtn.className = "option-btn btn btn-light";
        optionBtn.innerText = answer;
        answerId.appendChild(optionBtn);
        optionBtn.addEventListener("click", () => selectAnswer(idx));
    });
}

// Handle the answer button click
const selectAnswer = (index) => {
    const quizArrayData = quiz[currentIndex];
    if (index === quizArrayData.correctAnswer) {
        score++; // Increment score for correct answer
    }

    // Disable all option buttons after selection
    document.querySelectorAll(".option-btn").forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === index) {
            btn.className = "option-btn btn btn-primary selected";
        }
    });

    document.getElementById("next-btn").disabled = false; // Enable the "Next" button
}

// Function for NEXT button
const nextQuiz = () => {
    currentIndex++;
    currentIndex < quiz.length - 1 ? displayQuiz(currentIndex) : showFinalScore();
}

// Function to display the final score
const showFinalScore = () => {
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("restart-btn").style.display = "inline-flex";
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("quiz-congrat").innerHTML = "<h3><strong>Csongratulations<br>You've completed the quiz!</strong></h3>";
    const percentage = (score / quiz.length) * 100;
    document.getElementById("score-text").innerHTML = `<strong>SCORE: ${score} out of ${quiz.length} (${percentage.toFixed(2)}%)</strong>`;
    document.getElementById("score-text").style.display = "inline-flex";
}

// Function for RESTART button
const restartQuiz = () => {
    location.reload();
}

// START, NEXT, RESTART button event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", nextQuiz);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);