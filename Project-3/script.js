// Quiz Logic
const quizData = [
  {
    q: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperTool Markup Language",
    ],
    answer: 0,
  },
  {
    q: "What is the correct CSS syntax to change background color?",
    options: ["bg-color: red;", "background-color: red;", "color-bg: red;"],
    answer: 1,
  },
  {
    q: "Which language runs in a web browser?",
    options: ["Java", "C", "JavaScript"],
    answer: 2,
  },
];
let current = 0;
let score = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

function loadQuestion() {
  const qData = quizData[current];
  questionEl.textContent = qData.q;
  optionsEl.innerHTML = "";
  qData.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(btn, idx === qData.answer);
    optionsEl.appendChild(btn);
  });
  nextBtn.disabled = true;
}

function handleAnswer(btn, isCorrect) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((b) => (b.disabled = true));
  btn.classList.add(isCorrect ? "correct" : "incorrect");
  if (isCorrect) score++;
  nextBtn.disabled = false;
}

nextBtn.onclick = () => {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.textContent = `Your score: ${score}/${quizData.length}`;
    nextBtn.style.display = "none";
    document.getElementById("restart").style.display = "block";
  }
};

document.getElementById("restart").onclick = () => {
  current = 0;
  score = 0;
  loadQuestion();
  nextBtn.style.display = "block";
  document.getElementById("restart").style.display = "none";
  scoreEl.textContent = "";
};

loadQuestion();

// Weather API Logic
document.getElementById("getWeather").onclick = async () => {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");
  if (!city) {
    resultDiv.textContent = "Please enter a city name.";
    return;
  }
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  resultDiv.innerHTML = "Loading...";

  try {
    resultDiv.innerHTML = '<div class="loading">Loading weather data...</div>';
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found or API error");
    const data = await response.json();
    resultDiv.innerHTML = `
          <div class="weather-card">
            <p><strong>${data.name}</strong> (${data.sys.country})</p>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].main} (${data.weather[0].description})</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          </div>
        `;
  } catch (err) {
    resultDiv.innerHTML = `<div class="error">Error: ${err.message}</div>`;
  }
};
