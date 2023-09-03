// JavaScript code for Tic Tac Toe game logic

// Function to handle the player's move
function handleMove(element) {
  if (!element.value) {
      const currentPlayer = getCurrentPlayer();
          element.value = currentPlayer;
              element.disabled = true;
                  element.classList.add('disabled');

                      if (checkWin(currentPlayer)) {
                            showResult(`Player ${currentPlayer} wins!`);
                                  disableButtons();
                                      } else if (checkDraw()) {
                                            showResult("It's a draw!");
                                                  disableButtons();
                                                      } else {
                                                            togglePlayer();
                                                                }
                                                                  }
                                                                  }

                                                                  // Function to get the current player
                                                                  function getCurrentPlayer() {
                                                                    return document.getElementById('result').textContent.includes('X') ? 'O' : 'X';
                                                                    }

                                                                    // Function to toggle the current player
                                                                    function togglePlayer() {
                                                                      const resultElement = document.getElementById('result');
                                                                        resultElement.textContent = `Player ${getCurrentPlayer()}'s Turn`;
                                                                        }

                                                                        // Function to check forI apologize, but it seems that the code got cut off before completing the implementation of the game logic. Here's the complete JavaScript code for the Tic Tac Toe game logic:

                                                                        ```javascript
                                                                        // JavaScript code for Tic Tac Toe game logic

                                                                        // Function to handle the player's move
                                                                        function handleMove(element) {
                                                                          if (!element.value) {
                                                                              const currentPlayer = getCurrentPlayer();
                                                                                  element.value = currentPlayer;
                                                                                      element.disabled = true;
                                                                                          element.classList.add('disabled');

                                                                                              if (checkWin(currentPlayer)) {
                                                                                                    showResult(`Player ${currentPlayer} wins!`);
                                                                                                          disableButtons();
                                                                                                              } else if (checkDraw()) {
                                                                                                                    showResult("It's a draw!");
                                                                                                                          disableButtons();
                                                                                                                              } else {
                                                                                                                                    togglePlayer();
                                                                                                                                        }
                                                                                                                                          }
                                                                                                                                          }

                                                                                                                                          // Function to get the current player
                                                                                                                                          function getCurrentPlayer() {
                                                                                                                                            return document.getElementById('result').textContent.includes('X') ? 'O' : 'X';
                                                                                                                                            }

                                                                                                                                            // Function to toggle the current player
                                                                                                                                            function togglePlayer() {
                                                                                                                                              const resultElement = document.getElementById('result');
                                                                                                                                                resultElement.textContent = `Player ${getCurrentPlayer()}'s Turn`;
                                                                                                                                                }

                                                                                                                                                // Function to check for a win
                                                                                                                                                function checkWin(player) {
                                                                                                                                                  const btns = document.getElementsByClassName('btn');

                                                                                                                                                    // Check rows
                                                                                                                                                      for (let i = 0; i < 3; i++) {
                                                                                                                                                          if (
                                                                                                                                                                btns[i * 3].value === player &&
                                                                                                                                                                      btns[i * 3 + 1].value === player &&
                                                                                                                                                                            btns[i * 3 + 2].value === player
                                                                                                                                                                                ) {
                                                                                                                                                                                      return true;
                                                                                                                                                                                          }
                                                                                                                                                                                            }

                                                                                                                                                                                              // Check columns
                                                                                                                                                                                                for (let i = 0; i < 3; i++) {
                                                                                                                                                                                                    if (
                                                                                                                                                                                                          btns[i].value === player &&
                                                                                                                                                                                                                btns[i + 3].value === player &&
                                                                                                                                                                                                                      btns[i + 6].value === player
                                                                                                                                                                                                                          ) {
                                                                                                                                                                                                                                return true;
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                        // Check diagonals
                                                                                                                                                                                                                                          if (
                                                                                                                                                                                                                                              (btns[0].value === player &&
                                                                                                                                                                                                                                                    btns[4].value === player &&
                                                                                                                                                                                                                                                          btns[8].value === player) ||
                                                                                                                                                                                                                                                              (btns[2].value === player &&
                                                                                                                                                                                                                                                                    btns[4].value === player &&
                                                                                                                                                                                                                                                                          btns[6].value === player)
                                                                                                                                                                                                                                                                            ) {
                                                                                                                                                                                                                                                                                return true;
                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                    return false;
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                    // Function to check for a draw
                                                                                                                                                                                                                                                                                    function checkDraw() {
                                                                                                                                                                                                                                                                                      const btns = document.getElementsByClassName('btn');
                                                                                                                                                                                                                                                                                        for (let i = 0; i < btns.length; i++) {
                                                                                                                                                                                                                                                                                            if (!btns[i].value) {
                                                                                                                                                                                                                                                                                                  return false;
                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                          return true;
                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                          // Function to show the result message
                                                                                                                                                                                                                                                                                                          function showResult(message) {
                                                                                                                                                                                                                                                                                                            const resultElement = document.getElementById('result');
                                                                                                                                                                                                                                                                                                              resultElement.textContent = message;
                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                              // Function to disable all buttons
                                                                                                                                                                                                                                                                                                              function disableButtons() {
                                                                                                                                                                                                                                                                                                                const btns = document.getElementsByClassName('btn');
                                                                                                                                                                                                                                                                                                                  for (let i = 0; i < btns.length; i++) {
                                                                                                                                                                                                                                                                                                                      btns[i].disabled = true;
                                                                                                                                                                                                                                                                                                                          btns[i].classList.add('disabled');
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                            // Function to reset the game
                                                                                                                                                                                                                                                                                                                            function resetGame() {
                                                                                                                                                                                                                                                                                                                              const btns = document.getElementsByClassName('btn');
                                                                                                                                                                                                                                                                                                                                for (let i = 0; i < btns.length; i++) {
                                                                                                                                                                                                                                                                                                                                    btns[i].value = '';
                                                                                                                                                                                                                                                                                                                                        btns[i].disabled = false;
                                                                                                                                                                                                                                                                                                                                            btns[i].classList.remove('disabled');
                                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                                                document.getElementById('result').textContent = "Player X's Turn";
                                                                                                                                                                                                                                                                                                                                                  document.getElementById('reset-btn').disabled = true;
                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                  // Add event listeners to buttons
                                                                                                                                                                                                                                                                                                                                                  const btns = document.getElementsByClassName('btn');
                                                                                                                                                                                                                                                                                                                                                  for (let i = 0; i < btns.length; i++) {
                                                                                                                                                                                                                                                                                                                                                    btns[i].addEventListener('click', function () {
                                                                                                                                                                                                                                                                                                                                                        handleMove(this);
                                                                                                                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                          // Add event listener to reset button
                                                                                                                                                                                                                                                                                                                                                          document.getElementById('reset-btn').addEventListener('click', resetGame);