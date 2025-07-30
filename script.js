  // Game state
        let playerScore = 0;
        let computerScore = 0;
        
        // Get elements
        const rockBtn = document.getElementById("rock");
        const paperBtn = document.getElementById("paper");
        const scissorsBtn = document.getElementById("scissors");
        const resultText = document.getElementById("result-text");
        const battleArea = document.getElementById("battle-area");
        const playerDisplay = document.getElementById("player-display");
        const computerDisplay = document.getElementById("computer-display");
        const playerScoreEl = document.getElementById("player-score");
        const computerScoreEl = document.getElementById("computer-score");
        const resetBtn = document.getElementById("reset-btn");
        
        // Choice mappings
        const choices = ["🪨", "📄", "✂️"];
        const choiceNames = ["Rock", "Paper", "Scissors"];
        
        // Add event listeners
        rockBtn.addEventListener("click", () => playGame(0));
        paperBtn.addEventListener("click", () => playGame(1));
        scissorsBtn.addEventListener("click", () => playGame(2));
        resetBtn.addEventListener("click", resetGame);
        
        // Main game function
        function playGame(playerChoice) {
            const computerChoice = Math.floor(Math.random() * 3);
            
            // Show battle area
            battleArea.classList.add('show');
            
            // Display choices
            playerDisplay.textContent = choices[playerChoice];
            computerDisplay.textContent = choices[computerChoice];
            
            // Determine winner
            let result = "";
            let resultClass = "";
            
            if (playerChoice === computerChoice) {
                result = `It's a draw! Both chose ${choiceNames[playerChoice]}`;
                resultClass = "draw";
            } else if (
                (playerChoice === 0 && computerChoice === 2) || // Rock beats Scissors
                (playerChoice === 1 && computerChoice === 0) || // Paper beats Rock
                (playerChoice === 2 && computerChoice === 1)    // Scissors beats Paper
            ) {
                result = `You win! ${choiceNames[playerChoice]} beats ${choiceNames[computerChoice]}`;
                resultClass = "win";
                playerScore++;
                playerScoreEl.textContent = playerScore;
            } else {
                result = `Computer wins! ${choiceNames[computerChoice]} beats ${choiceNames[playerChoice]}`;
                resultClass = "lose";
                computerScore++;
                computerScoreEl.textContent = computerScore;
            }
            
            // Display result
            resultText.className = `result-text ${resultClass}`;
            resultText.textContent = result;
        }
        
        // Reset game function
        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            playerScoreEl.textContent = "0";
            computerScoreEl.textContent = "0";
            battleArea.classList.remove('show');
        }