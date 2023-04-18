//Theme button //


const toggleThemeButton = document.getElementById('toggleTheme');

const currentTheme = localStorage.getItem('theme') || 'light-theme';
document.body.classList.add(currentTheme);

function toggleTheme() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

toggleThemeButton.addEventListener('click', toggleTheme);

//Quiz code//

const correctAnswers = ['C', 'B', 'B', 'D', 'A', 'A', 'B', 'C', 'C', 'A'];

function calculateScore() {
  let score = 0;

  for (let i = 1; i <= 10; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === correctAnswers[i - 1]) {
      score++;
    }
  }

  const scorePercentage = (score / 10) * 100;
  alert(`Your score is ${scorePercentage}%`);

  const answerKey = correctAnswers.map((answer, index) => `${index + 1}. ${answer}`).join('\n');
  alert(`Answer Key:\n${answerKey}`);
}
