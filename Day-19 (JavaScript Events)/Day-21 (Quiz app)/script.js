const quizData = [
  {
      question: "What does DOM stand for?",
      options: [
          "Document Order Model",
          "Document Object Model",
          "Data Object Method",
          "Direct Object Management"
      ],
      correct: 1
  },
  {
      question: "Which method selects by ID?",
      options: [
        "getElementById()",
        "querySelectorAll()",
        "getElement()",
        "getElementsByClassName()"
      ],
      correct: 0
    },
    {
      question: "Which event fires on input change?",
      options: ["click", "submit", "change", "keydown"],
      correct: 2
    }
];

const questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = `Q${currentQuestionIndex + 1}: ${q.question}`;
  optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        optionsEl.appendChild(btn);

        btn.addEventListener('click', () => selectAnswer(index));   
    })

    nextBtn.style.display = 'none';

}

function selectAnswer(index) {
    const q = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);


    if(index === q.correct) {
        score++;
        buttons[index].classList.add('correct');
        buttons[index].classList.add('correct');
      
    } else{
        buttons[index].classList.add('wrong');
        buttons[q.correct].classList.add('correct');
        
    }
    
    nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    nextBtn.style.display = 'none';

    const highScore = localStorage.getItem('quizHighScore') || 0;
    const isNewHighScore = score > highScore;

    if (isNewHighScore) {
        localStorage.setItem('quizHighScore', score);
    }
    resultEl.innerHTML = `
      <h2>Hurray!!! Quiz Completed</h2>
      <p>You have scored ${score} out of ${questions.length} questions</p>
      <p>Highest Score: ${Math.max(score, highScore)}</P>
      ${isNewHighScore ? "<p>Hey, New High Score!</p>": ""}
      <button onclick="location.reload()">Restart Quiz</button>
    `;

}

loadQuestion();