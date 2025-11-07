const questions = [
  { q: "Who is the CEO of this Quiz Game..?", a: "Patel Sab" },
  { q: "What is my Full Name..?", a: "Mohammed Mustaqeem Patel" },
  { q: "What is my Phone No..?", a: "9515105424" },
  { q: "What is my Email..?", a: "mustaqeem.works@gmail.com" },
  { q: "How many Siblings do I have..?", a: "2" },
  { q: "Who is my Bestestest Friend..?", a: "Ashritha" },
  { q: "What is DOB _/_/__..?", a: "12/12/2006" },
  { q: "Am I in a relationship..? Yes or No..?", a: "No" },
  { q: "What is my Snapchat user ID..?", a: "mustaqeem5424" },
  { q: "Which acc is my pvtt one on insta ?", a: "patel_5424_" },
];

// Shuffle questions randomly
const shuffled = questions.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submit");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

function showQuestion() {
  if (current < shuffled.length) {
    questionEl.textContent = `Q. ${shuffled[current].q}`;
    answerEl.value = "";
    messageEl.textContent = "";
  } else {
    questionEl.textContent = "🎉 Quiz Completed!";
    answerEl.style.display = "none";
    submitBtn.textContent = "Restart";
    messageEl.style.color = "#ffeb3b";
    messageEl.textContent = `🏆 Final Score: ${score}`;
    submitBtn.onclick = restartQuiz;
  }
}

function restartQuiz() {
  score = 0;
  current = 0;
  scoreEl.textContent = score;
  answerEl.style.display = "block";
  submitBtn.textContent = "Submit";
  submitBtn.onclick = checkAnswer;
  showQuestion();
}

function checkAnswer() {
  const userAns = answerEl.value.trim();
  if (!userAns) return;

  if (userAns === shuffled[current].a) {
    score++;
    scoreEl.textContent = score;
    messageEl.style.color = "lime";
    messageEl.textContent = "✅ Correct!";
  } else {
    messageEl.style.color = "red";
    messageEl.textContent = "❌ Wrong!";
  }

  current++;
  setTimeout(showQuestion, 900);
}

submitBtn.onclick = checkAnswer;
showQuestion();
