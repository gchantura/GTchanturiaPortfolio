<script>
  import { onMount } from 'svelte';
  import { Brain, Zap, Target, Shuffle, Play, RotateCcw } from 'lucide-svelte';

  let activeGameId = 'memory-match';
  let memoryCards = [];
  let flippedCards = [];
  let matchedPairs = 0;
  let gameStarted = false;
  let gameCompleted = false;
  let moves = 0;
  let timer = 0;
  let timerInterval;

  // Math Game
  let mathProblem = '';
  let mathAnswer = '';
  let userAnswer = '';
  let mathScore = 0;
  let mathTimer = 30;
  let mathGameActive = false;
  let mathInterval;

  // Word Game
  let currentWord = '';
  let scrambledWord = '';
  let wordAnswer = '';
  let wordScore = 0;
  let wordTimer = 60;
  let wordGameActive = false;
  let wordInterval;

  const games = [
    {
      id: 'memory-match',
      title: 'Memory Match',
      description: 'Test your memory by matching pairs of cards',
      icon: Brain,
      category: 'Memory'
    },
    {
      id: 'quick-math',
      title: 'Quick Math',
      description: 'Solve math problems as fast as you can',
      icon: Zap,
      category: 'Logic'
    },
    {
      id: 'word-scramble',
      title: 'Word Scramble',
      description: 'Unscramble words to test your vocabulary',
      icon: Shuffle,
      category: 'Language'
    }
  ];

  const words = [
    'JAVASCRIPT', 'PYTHON', 'REACT', 'SVELTE', 'NODE', 'EXPRESS',
    'DATABASE', 'FRONTEND', 'BACKEND', 'DEVELOPER', 'CODING', 'PROGRAM'
  ];

  const emojis = ['🚀', '⭐', '🎯', '🔥', '💎', '🌟', '🎪', '🎨'];

  $: activeGame = games.find(game => game.id === activeGameId);

  function initMemoryGame() {
    const shuffledEmojis = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    memoryCards = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false
    }));
    flippedCards = [];
    matchedPairs = 0;
    gameStarted = true;
    gameCompleted = false;
    moves = 0;
    timer = 0;
    startTimer();
  }

  function flipCard(cardId) {
    if (flippedCards.length >= 2 || memoryCards[cardId].flipped || memoryCards[cardId].matched) return;

    memoryCards[cardId].flipped = true;
    flippedCards = [...flippedCards, cardId];

    if (flippedCards.length === 2) {
      moves++;
      checkForMatch();
    }
  }

  function checkForMatch() {
    const [first, second] = flippedCards;
    
    if (memoryCards[first].emoji === memoryCards[second].emoji) {
      memoryCards[first].matched = true;
      memoryCards[second].matched = true;
      matchedPairs++;
      flippedCards = [];

      if (matchedPairs === emojis.length) {
        gameCompleted = true;
        stopTimer();
      }
    } else {
      setTimeout(() => {
        memoryCards[first].flipped = false;
        memoryCards[second].flipped = false;
        flippedCards = [];
      }, 1000);
    }
  }

  function resetMemoryGame() {
    gameStarted = false;
    gameCompleted = false;
    stopTimer();
    memoryCards = [];
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timer++;
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  function generateMathProblem() {
    const operations = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    if (operation === '-' && num2 > num1) {
      [num1, num2] = [num2, num1];
    }

    mathProblem = `${num1} ${operation} ${num2}`;
    
    switch (operation) {
      case '+':
        mathAnswer = (num1 + num2).toString();
        break;
      case '-':
        mathAnswer = (num1 - num2).toString();
        break;
      case '×':
        mathAnswer = (num1 * num2).toString();
        break;
    }
  }

  function startMathGame() {
    mathGameActive = true;
    mathScore = 0;
    mathTimer = 30;
    userAnswer = '';
    generateMathProblem();
    
    mathInterval = setInterval(() => {
      mathTimer--;
      if (mathTimer <= 0) {
        endMathGame();
      }
    }, 1000);
  }

  function endMathGame() {
    mathGameActive = false;
    if (mathInterval) {
      clearInterval(mathInterval);
    }
  }

  function checkMathAnswer() {
    if (userAnswer === mathAnswer) {
      mathScore++;
      userAnswer = '';
      generateMathProblem();
    }
  }

  function generateWordScramble() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = currentWord.split('').sort(() => Math.random() - 0.5).join('');
    wordAnswer = '';
  }

  function startWordGame() {
    wordGameActive = true;
    wordScore = 0;
    wordTimer = 60;
    generateWordScramble();
    
    wordInterval = setInterval(() => {
      wordTimer--;
      if (wordTimer <= 0) {
        endWordGame();
      }
    }, 1000);
  }

  function endWordGame() {
    wordGameActive = false;
    if (wordInterval) {
      clearInterval(wordInterval);
    }
  }

  function checkWordAnswer() {
    if (wordAnswer.toUpperCase() === currentWord) {
      wordScore++;
      generateWordScramble();
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  onMount(() => {
    return () => {
      stopTimer();
      if (mathInterval) clearInterval(mathInterval);
      if (wordInterval) clearInterval(wordInterval);
    };
  });
</script>

<svelte:head>
  <title>Brain Games - Giorgi Tchanturia</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- Header -->
  <section class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Brain Games
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Challenge yourself with these fun and educational brain training games
        </p>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Game Selection -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {#each games as game}
        <button
          on:click={() => activeGameId = game.id}
          class="card p-6 text-left transition-all duration-300 hover:scale-105
            {activeGameId === game.id ? 'ring-2 ring-primary-500' : ''}"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
              <svelte:component this={game.icon} size="24" class="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h3 class="text-lg font-semibold">{game.title}</h3>
              <span class="text-sm text-gray-500 dark:text-gray-400">{game.category}</span>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400">{game.description}</p>
        </button>
      {/each}
    </div>

    <!-- Game Content -->
    <div class="card p-8">
      {#if activeGame}
        <div class="mb-6">
          <h2 class="text-2xl font-bold flex items-center gap-3 mb-2">
            <svelte:component this={activeGame.icon} size="24" class="text-primary-600" />
            {activeGame.title}
          </h2>
          <p class="text-gray-600 dark:text-gray-400">{activeGame.description}</p>
        </div>

        <!-- Memory Match Game -->
        {#if activeGameId === 'memory-match'}
          <div class="space-y-6">
            {#if !gameStarted}
              <div class="text-center">
                <button on:click={initMemoryGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="flex justify-between items-center">
                <div class="flex gap-6">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600">{moves}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Moves</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600">{formatTime(timer)}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600">{matchedPairs}/{emojis.length}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Pairs</div>
                  </div>
                </div>
                <button on:click={resetMemoryGame} class="btn-secondary inline-flex items-center gap-2">
                  <RotateCcw size="18" />
                  Reset
                </button>
              </div>

              <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {#each memoryCards as card}
                  <button
                    on:click={() => flipCard(card.id)}
                    class="aspect-square bg-primary-100 dark:bg-primary-900 rounded-lg text-2xl transition-all duration-300 hover:scale-105
                      {card.flipped || card.matched ? 'bg-white dark:bg-gray-700 shadow-lg' : ''}"
                    disabled={card.matched || flippedCards.length >= 2}
                  >
                    {card.flipped || card.matched ? card.emoji : '?'}
                  </button>
                {/each}
              </div>

              {#if gameCompleted}
                <div class="text-center p-6 bg-green-50 dark:bg-green-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Congratulations! 🎉</h3>
                  <p class="text-green-700 dark:text-green-300">
                    You completed the game in {moves} moves and {formatTime(timer)}!
                  </p>
                </div>
              {/if}
            {/if}
          </div>
        {/if}

        <!-- Quick Math Game -->
        {#if activeGameId === 'quick-math'}
          <div class="space-y-6">
            {#if !mathGameActive}
              <div class="text-center">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                  Solve as many math problems as you can in 30 seconds!
                </p>
                <button on:click={startMathGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="text-center space-y-6">
                <div class="flex justify-center gap-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600">{mathScore}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Score</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-600">{mathTimer}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time Left</div>
                  </div>
                </div>

                <div class="max-w-md mx-auto space-y-4">
                  <div class="text-4xl font-bold text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {mathProblem} = ?
                  </div>
                  <input
                    type="number"
                    bind:value={userAnswer}
                    on:input={checkMathAnswer}
                    placeholder="Enter answer"
                    class="w-full p-4 text-2xl text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                    autofocus
                  />
                </div>
              </div>

              {#if mathTimer <= 0}
                <div class="text-center p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Time's Up! ⏰</h3>
                  <p class="text-blue-700 dark:text-blue-300">
                    You scored {mathScore} points!
                  </p>
                </div>
              {/if}
            {/if}
          </div>
        {/if}

        <!-- Word Scramble Game -->
        {#if activeGameId === 'word-scramble'}
          <div class="space-y-6">
            {#if !wordGameActive}
              <div class="text-center">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                  Unscramble as many programming-related words as you can in 60 seconds!
                </p>
                <button on:click={startWordGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="text-center space-y-6">
                <div class="flex justify-center gap-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600">{wordScore}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Score</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-600">{wordTimer}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time Left</div>
                  </div>
                </div>

                <div class="max-w-md mx-auto space-y-4">
                  <div class="text-3xl font-bold text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg tracking-wider">
                    {scrambledWord}
                  </div>
                  <input
                    type="text"
                    bind:value={wordAnswer}
                    on:input={checkWordAnswer}
                    placeholder="Enter the unscrambled word"
                    class="w-full p-4 text-xl text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 uppercase"
                    autofocus
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Hint: It's a programming-related term
                  </p>
                </div>
              </div>

              {#if wordTimer <= 0}
                <div class="text-center p-6 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">Game Over! 🎯</h3>
                  <p class="text-purple-700 dark:text-purple-300">
                    You unscrambled {wordScore} words!
                  </p>
                </div>
              {/if}
            {/if}
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>