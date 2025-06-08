<script>
  import { onMount } from 'svelte';
  import { Brain, Zap, Target, Shuffle, Play, RotateCcw, Calculator, Lightbulb, Puzzle, Timer } from 'lucide-svelte';

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

  // Number Sequence Game
  let sequence = [];
  let userSequence = '';
  let sequenceScore = 0;
  let sequenceTimer = 45;
  let sequenceGameActive = false;
  let sequenceInterval;
  let currentSequenceIndex = 0;

  // Logic Puzzle Game
  let logicPuzzle = {};
  let logicAnswer = '';
  let logicScore = 0;
  let logicTimer = 120;
  let logicGameActive = false;
  let logicInterval;

  // Pattern Recognition Game
  let pattern = [];
  let patternOptions = [];
  let patternAnswer = '';
  let patternScore = 0;
  let patternTimer = 90;
  let patternGameActive = false;
  let patternInterval;

  // Code Logic Game
  let codeChallenge = {};
  let codeAnswer = '';
  let codeScore = 0;
  let codeTimer = 180;
  let codeGameActive = false;
  let codeInterval;

  const games = [
    {
      id: 'memory-match',
      title: 'Memory Match',
      description: 'Test your memory by matching pairs of cards',
      icon: Brain,
      category: 'Memory',
      difficulty: 'Easy'
    },
    {
      id: 'quick-math',
      title: 'Quick Math',
      description: 'Solve math problems as fast as you can',
      icon: Calculator,
      category: 'Logic',
      difficulty: 'Medium'
    },
    {
      id: 'word-scramble',
      title: 'Word Scramble',
      description: 'Unscramble words to test your vocabulary',
      icon: Shuffle,
      category: 'Language',
      difficulty: 'Easy'
    },
    {
      id: 'number-sequence',
      title: 'Number Sequence',
      description: 'Find the next number in mathematical sequences',
      icon: Target,
      category: 'Logic',
      difficulty: 'Hard'
    },
    {
      id: 'logic-puzzle',
      title: 'Logic Puzzles',
      description: 'Solve complex logical reasoning problems',
      icon: Lightbulb,
      category: 'Logic',
      difficulty: 'Hard'
    },
    {
      id: 'pattern-recognition',
      title: 'Pattern Recognition',
      description: 'Identify patterns in visual sequences',
      icon: Puzzle,
      category: 'Visual',
      difficulty: 'Medium'
    },
    {
      id: 'code-logic',
      title: 'Code Logic',
      description: 'Solve programming logic challenges',
      icon: Zap,
      category: 'Programming',
      difficulty: 'Hard'
    }
  ];

  const words = [
    'JAVASCRIPT', 'PYTHON', 'REACT', 'SVELTE', 'NODE', 'EXPRESS',
    'DATABASE', 'FRONTEND', 'BACKEND', 'DEVELOPER', 'CODING', 'PROGRAM',
    'ALGORITHM', 'FUNCTION', 'VARIABLE', 'COMPONENT', 'FRAMEWORK', 'LIBRARY'
  ];

  const emojis = ['🚀', '⭐', '🎯', '🔥', '💎', '🌟', '🎪', '🎨'];

  const numberSequences = [
    { sequence: [2, 4, 6, 8], answer: 10, rule: 'Add 2' },
    { sequence: [1, 4, 9, 16], answer: 25, rule: 'Perfect squares' },
    { sequence: [1, 1, 2, 3, 5], answer: 8, rule: 'Fibonacci' },
    { sequence: [2, 6, 18, 54], answer: 162, rule: 'Multiply by 3' },
    { sequence: [1, 4, 7, 10], answer: 13, rule: 'Add 3' },
    { sequence: [100, 50, 25, 12.5], answer: 6.25, rule: 'Divide by 2' },
    { sequence: [3, 6, 12, 24], answer: 48, rule: 'Multiply by 2' },
    { sequence: [1, 8, 27, 64], answer: 125, rule: 'Perfect cubes' }
  ];

  const logicPuzzles = [
    {
      question: "If all roses are flowers and some flowers fade quickly, which statement must be true?",
      options: ["All roses fade quickly", "Some roses fade quickly", "No roses fade quickly", "All flowers are roses"],
      answer: 1,
      explanation: "We can't determine if roses specifically fade quickly, but it's possible some do."
    },
    {
      question: "In a race, you overtake the person in 2nd place. What position are you in now?",
      options: ["1st place", "2nd place", "3rd place", "Can't determine"],
      answer: 1,
      explanation: "If you overtake the person in 2nd place, you take their position."
    },
    {
      question: "A farmer has 17 sheep. All but 9 die. How many sheep are left?",
      options: ["8", "9", "17", "0"],
      answer: 1,
      explanation: "'All but 9' means 9 sheep remain alive."
    }
  ];

  const patterns = [
    {
      sequence: ['🔴', '🔵', '🔴', '🔵', '🔴'],
      options: ['🔴', '🔵', '🟡', '🟢'],
      answer: 1,
      rule: 'Alternating colors'
    },
    {
      sequence: ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐'],
      options: ['⭐⭐⭐⭐⭐', '⭐⭐⭐', '⭐', '⭐⭐'],
      answer: 0,
      rule: 'Increasing count'
    },
    {
      sequence: ['🔺', '🔻', '🔺', '🔻'],
      options: ['🔺', '🔻', '🔶', '🔷'],
      answer: 0,
      rule: 'Alternating triangles'
    }
  ];

  const codeChallenges = [
    {
      question: "What will this code output?\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
      options: ["0 1 2", "3 3 3", "0 0 0", "1 2 3"],
      answer: 1,
      explanation: "Due to closure, all timeouts reference the final value of i (3)."
    },
    {
      question: "What is the result of: [1, 2, 3].map(x => x * 2).filter(x => x > 3)",
      options: ["[2, 4, 6]", "[4, 6]", "[2, 4]", "[6]"],
      answer: 1,
      explanation: "Map creates [2, 4, 6], filter keeps values > 3: [4, 6]."
    },
    {
      question: "What does this return?\n\nfunction mystery(arr) {\n  return arr.reduce((a, b) => a + b, 0) / arr.length;\n}",
      options: ["Sum of array", "Average of array", "Length of array", "Maximum value"],
      answer: 1,
      explanation: "It calculates the sum and divides by length = average."
    }
  ];

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
    const operations = ['+', '-', '×', '÷'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;

    if (operation === '-' && num2 > num1) {
      [num1, num2] = [num2, num1];
    }
    
    if (operation === '÷') {
      num1 = num1 * num2; // Ensure clean division
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
      case '÷':
        mathAnswer = (num1 / num2).toString();
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

  function generateNumberSequence() {
    const sequenceData = numberSequences[Math.floor(Math.random() * numberSequences.length)];
    sequence = [...sequenceData.sequence];
    userSequence = '';
    currentSequenceIndex = sequenceData.answer;
  }

  function startSequenceGame() {
    sequenceGameActive = true;
    sequenceScore = 0;
    sequenceTimer = 45;
    generateNumberSequence();
    
    sequenceInterval = setInterval(() => {
      sequenceTimer--;
      if (sequenceTimer <= 0) {
        endSequenceGame();
      }
    }, 1000);
  }

  function endSequenceGame() {
    sequenceGameActive = false;
    if (sequenceInterval) {
      clearInterval(sequenceInterval);
    }
  }

  function checkSequenceAnswer() {
    if (parseFloat(userSequence) === currentSequenceIndex) {
      sequenceScore++;
      generateNumberSequence();
    }
  }

  function generateLogicPuzzle() {
    logicPuzzle = logicPuzzles[Math.floor(Math.random() * logicPuzzles.length)];
    logicAnswer = '';
  }

  function startLogicGame() {
    logicGameActive = true;
    logicScore = 0;
    logicTimer = 120;
    generateLogicPuzzle();
    
    logicInterval = setInterval(() => {
      logicTimer--;
      if (logicTimer <= 0) {
        endLogicGame();
      }
    }, 1000);
  }

  function endLogicGame() {
    logicGameActive = false;
    if (logicInterval) {
      clearInterval(logicInterval);
    }
  }

  function checkLogicAnswer(selectedIndex) {
    if (selectedIndex === logicPuzzle.answer) {
      logicScore++;
      setTimeout(() => generateLogicPuzzle(), 1500);
    }
  }

  function generatePattern() {
    const patternData = patterns[Math.floor(Math.random() * patterns.length)];
    pattern = [...patternData.sequence];
    patternOptions = [...patternData.options];
    patternAnswer = '';
  }

  function startPatternGame() {
    patternGameActive = true;
    patternScore = 0;
    patternTimer = 90;
    generatePattern();
    
    patternInterval = setInterval(() => {
      patternTimer--;
      if (patternTimer <= 0) {
        endPatternGame();
      }
    }, 1000);
  }

  function endPatternGame() {
    patternGameActive = false;
    if (patternInterval) {
      clearInterval(patternInterval);
    }
  }

  function checkPatternAnswer(selectedIndex) {
    const currentPattern = patterns.find(p => JSON.stringify(p.sequence) === JSON.stringify(pattern));
    if (selectedIndex === currentPattern.answer) {
      patternScore++;
      setTimeout(() => generatePattern(), 1000);
    }
  }

  function generateCodeChallenge() {
    codeChallenge = codeChallenges[Math.floor(Math.random() * codeChallenges.length)];
    codeAnswer = '';
  }

  function startCodeGame() {
    codeGameActive = true;
    codeScore = 0;
    codeTimer = 180;
    generateCodeChallenge();
    
    codeInterval = setInterval(() => {
      codeTimer--;
      if (codeTimer <= 0) {
        endCodeGame();
      }
    }, 1000);
  }

  function endCodeGame() {
    codeGameActive = false;
    if (codeInterval) {
      clearInterval(codeInterval);
    }
  }

  function checkCodeAnswer(selectedIndex) {
    if (selectedIndex === codeChallenge.answer) {
      codeScore++;
      setTimeout(() => generateCodeChallenge(), 2000);
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case 'Easy': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  }

  onMount(() => {
    return () => {
      stopTimer();
      if (mathInterval) clearInterval(mathInterval);
      if (wordInterval) clearInterval(wordInterval);
      if (sequenceInterval) clearInterval(sequenceInterval);
      if (logicInterval) clearInterval(logicInterval);
      if (patternInterval) clearInterval(patternInterval);
      if (codeInterval) clearInterval(codeInterval);
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
          Challenge yourself with these fun and educational brain training games designed to improve cognitive abilities
        </p>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Game Selection -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
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
            <div class="flex-1">
              <h3 class="text-lg font-semibold">{game.title}</h3>
              <div class="flex items-center gap-2 text-sm">
                <span class="text-gray-500 dark:text-gray-400">{game.category}</span>
                <span class="text-gray-300 dark:text-gray-600">•</span>
                <span class="{getDifficultyColor(game.difficulty)}">{game.difficulty}</span>
              </div>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm">{game.description}</p>
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
            <span class="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 {getDifficultyColor(activeGame.difficulty)}">
              {activeGame.difficulty}
            </span>
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

        <!-- Number Sequence Game -->
        {#if activeGameId === 'number-sequence'}
          <div class="space-y-6">
            {#if !sequenceGameActive}
              <div class="text-center">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                  Find the next number in mathematical sequences. Test your pattern recognition skills!
                </p>
                <button on:click={startSequenceGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="text-center space-y-6">
                <div class="flex justify-center gap-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600">{sequenceScore}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Score</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-600">{sequenceTimer}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time Left</div>
                  </div>
                </div>

                <div class="max-w-lg mx-auto space-y-4">
                  <div class="text-2xl font-bold text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    {sequence.join(', ')}, ?
                  </div>
                  <input
                    type="number"
                    step="any"
                    bind:value={userSequence}
                    on:input={checkSequenceAnswer}
                    placeholder="What's the next number?"
                    class="w-full p-4 text-xl text-center border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                    autofocus
                  />
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Look for patterns: arithmetic, geometric, squares, cubes, Fibonacci...
                  </p>
                </div>
              </div>

              {#if sequenceTimer <= 0}
                <div class="text-center p-6 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-2">Time's Up! 🧮</h3>
                  <p class="text-indigo-700 dark:text-indigo-300">
                    You solved {sequenceScore} sequences!
                  </p>
                </div>
              {/if}
            {/if}
          </div>
        {/if}

        <!-- Logic Puzzle Game -->
        {#if activeGameId === 'logic-puzzle'}
          <div class="space-y-6">
            {#if !logicGameActive}
              <div class="text-center">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                  Solve logical reasoning problems. Think carefully about each question!
                </p>
                <button on:click={startLogicGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="space-y-6">
                <div class="flex justify-center gap-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600">{logicScore}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Score</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-600">{logicTimer}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time Left</div>
                  </div>
                </div>

                <div class="max-w-2xl mx-auto">
                  <div class="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg mb-6">
                    <h3 class="text-lg font-semibold mb-4">{logicPuzzle.question}</h3>
                    <div class="space-y-3">
                      {#each logicPuzzle.options as option, index}
                        <button
                          on:click={() => checkLogicAnswer(index)}
                          class="w-full p-3 text-left border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        >
                          {String.fromCharCode(65 + index)}. {option}
                        </button>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>

              {#if logicTimer <= 0}
                <div class="text-center p-6 bg-green-50 dark:bg-green-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Time's Up! 🧠</h3>
                  <p class="text-green-700 dark:text-green-300">
                    You solved {logicScore} logic puzzles!
                  </p>
                </div>
              {/if}
            {/if}
          </div>
        {/if}

        <!-- Pattern Recognition Game -->
        {#if activeGameId === 'pattern-recognition'}
          <div class="space-y-6">
            {#if !patternGameActive}
              <div class="text-center">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                  Identify the next element in visual patterns. Train your pattern recognition skills!
                </p>
                <button on:click={startPatternGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="space-y-6">
                <div class="flex justify-center gap-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600">{patternScore}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Score</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-600">{patternTimer}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time Left</div>
                  </div>
                </div>

                <div class="max-w-lg mx-auto text-center">
                  <div class="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg mb-6">
                    <div class="text-4xl mb-4 space-x-2">
                      {#each pattern as item}
                        <span>{item}</span>
                      {/each}
                      <span class="text-gray-400">?</span>
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">What comes next?</p>
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {#each patternOptions as option, index}
                      <button
                        on:click={() => checkPatternAnswer(index)}
                        class="p-4 text-3xl border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
                      >
                        {option}
                      </button>
                    {/each}
                  </div>
                </div>
              </div>

              {#if patternTimer <= 0}
                <div class="text-center p-6 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">Time's Up! 🎨</h3>
                  <p class="text-yellow-700 dark:text-yellow-300">
                    You identified {patternScore} patterns!
                  </p>
                </div>
              {/if}
            {/if}
          </div>
        {/if}

        <!-- Code Logic Game -->
        {#if activeGameId === 'code-logic'}
          <div class="space-y-6">
            {#if !codeGameActive}
              <div class="text-center">
                <p class="mb-4 text-gray-600 dark:text-gray-400">
                  Test your programming knowledge with code logic challenges!
                </p>
                <button on:click={startCodeGame} class="btn-primary inline-flex items-center gap-2">
                  <Play size="18" />
                  Start Game
                </button>
              </div>
            {:else}
              <div class="space-y-6">
                <div class="flex justify-center gap-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-primary-600">{codeScore}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Score</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold text-red-600">{codeTimer}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Time Left</div>
                  </div>
                </div>

                <div class="max-w-3xl mx-auto">
                  <div class="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg mb-6">
                    <pre class="text-sm font-mono mb-4 whitespace-pre-wrap">{codeChallenge.question}</pre>
                    <div class="space-y-3">
                      {#each codeChallenge.options as option, index}
                        <button
                          on:click={() => checkCodeAnswer(index)}
                          class="w-full p-3 text-left font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-600 transition-colors"
                        >
                          {String.fromCharCode(65 + index)}. {option}
                        </button>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>

              {#if codeTimer <= 0}
                <div class="text-center p-6 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h3 class="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-2">Time's Up! 💻</h3>
                  <p class="text-blue-700 dark:text-blue-300">
                    You solved {codeScore} code challenges!
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