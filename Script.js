let secretNumber;
        let attempts = 0;
        let wins = 0;
        let bestScore = null;
        let gameOver = false;

        const guessInput = document.getElementById('guessInput');
        const guessBtn = document.getElementById('guessBtn');
        const message = document.getElementById('message');
        const attemptsEl = document.getElementById('attempts');
        const bestScoreEl = document.getElementById('bestScore');
        const winsEl = document.getElementById('wins');
        
        // Start game 
        resetGame();
        
        // Allow Enter key to submit
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') 
                checkGuess();
        });
        
        function resetGame() {
            secretNumber = Math.floor(Math.random() * 11); // From 0-10 
            attempts = 0;
            gameOver = false;
            guessInput.value = '';
            guessInput.disabled = false;
            guessBtn.disabled = false;
            message.textContent = 'Enter your first guess!';
            message.className = '';
            attemptsEl.textContent = '0';
            guessInput.focus();
            
            console.log('Secret number:', secretNumber); // Remove this line in production
        }
        
        function checkGuess() {
            if (gameOver) return;
            
            const userGuess = parseInt(guessInput.value);
            
            // Wrong input between 0 and 10
            if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
                message.textContent = 'Please enter a number between 0 and 10!';
                message.className = 'high';
                return;
            }
            
            attempts++;
            attemptsEl.textContent = attempts;
            if (userGuess === secretNumber) {
                message.textContent = `Correct the number is ${secretNumber}`;
                message.className = 'win';
                wins++;
                winsEl.textContent = wins;
                
                if (bestScore === null || attempts < bestScore) {
                    bestScore = attempts;
                    bestScoreEl.textContent = bestScore;
                }
                
                endGame();
            } else if (userGuess < secretNumber) {
                message.textContent = 'Too low';
                message.className = 'low';
            } else {
                message.textContent = ' Too high';
                message.className = 'high';
        
            
            guessInput.value = '';
            guessInput.focus();
        }
        
        function endGame() {
            gameOver = true;
            guessInput.disabled = true;
            guessBtn.disabled = true;
        }}