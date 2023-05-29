document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.querySelector(".user-input");
    const guessButton = document.querySelector(".guess-button");
    const resultDiv = document.querySelector(".result");
    const playAgainButton = document.querySelector(".play-again-button");

    let secretNumber;
    let attempts = 0;

    generateSecretNumber();

    guessButton.addEventListener("click", function() {
        const userNumber = parseInt(userInput.value);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
        alert("Пожалуйста, введите число от 1 до 100");
        } else {
        attempts++;
        checkNumber(userNumber);
        }
    });

    playAgainButton.addEventListener("click", function() {
        resetGame();
    });

    function generateSecretNumber() {
      secretNumber = Math.floor(Math.random() * 100) + 1;
    }

    function checkNumber(userNumber) {
    if (userNumber === secretNumber) {
        resultDiv.textContent = `Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток.`;
        resultDiv.style.color = "red";
        userInput.disabled = true;
        guessButton.disabled = true;
        playAgainButton.style.display = "inline-block";
    } else if (userNumber < secretNumber) {
        resultDiv.textContent = "Загаданное число больше. Попробуйте еще раз.";
        resultDiv.style.color = "black";
      } else {
        resultDiv.textContent = "Загаданное число меньше. Попробуйте еще раз.";
        resultDiv.style.color = "black";
      }

        userInput.value = "";
        userInput.focus();
    }

    function resetGame() {
        userInput.disabled = false;
        guessButton.disabled = false;
        playAgainButton.style.display = "none";
        resultDiv.textContent = "";
        resultDiv.style.color = "black";
        attempts = 0;
        generateSecretNumber();
    }
});
