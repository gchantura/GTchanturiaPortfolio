import { c as create_ssr_component, v as validate_component, e as each, m as missing_component, d as escape, b as add_attribute } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { Z as Zap } from "../../../chunks/zap.js";
import { B as Brain } from "../../../chunks/brain.js";
const Calculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "20",
        "x": "4",
        "y": "2",
        "rx": "2"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "16",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "16",
        "y1": "14",
        "y2": "18"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M12 10h.01" }],
    ["path", { "d": "M8 10h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M8 18h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "calculator" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Calculator$1 = Calculator;
const Lightbulb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
      }
    ],
    ["path", { "d": "M9 18h6" }],
    ["path", { "d": "M10 22h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "lightbulb" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Lightbulb$1 = Lightbulb;
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["polygon", { "points": "5 3 19 12 5 21 5 3" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "play" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Play$1 = Play;
const Puzzle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "puzzle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Puzzle$1 = Puzzle;
const Shuffle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"
      }
    ],
    ["path", { "d": "m18 2 4 4-4 4" }],
    ["path", { "d": "M2 6h1.9c1.5 0 2.9.9 3.6 2.2" }],
    [
      "path",
      {
        "d": "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"
      }
    ],
    ["path", { "d": "m18 14 4 4-4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "shuffle" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Shuffle$1 = Shuffle;
const Target = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "target" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Target$1 = Target;
function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "text-green-600";
    case "Medium":
      return "text-yellow-600";
    case "Hard":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeGame;
  let activeGameId = "memory-match";
  const games = [
    {
      id: "memory-match",
      title: "Memory Match",
      description: "Test your memory by matching pairs of cards",
      icon: Brain,
      category: "Memory",
      difficulty: "Easy"
    },
    {
      id: "quick-math",
      title: "Quick Math",
      description: "Solve math problems as fast as you can",
      icon: Calculator$1,
      category: "Logic",
      difficulty: "Medium"
    },
    {
      id: "word-scramble",
      title: "Word Scramble",
      description: "Unscramble words to test your vocabulary",
      icon: Shuffle$1,
      category: "Language",
      difficulty: "Easy"
    },
    {
      id: "number-sequence",
      title: "Number Sequence",
      description: "Find the next number in mathematical sequences",
      icon: Target$1,
      category: "Logic",
      difficulty: "Hard"
    },
    {
      id: "logic-puzzle",
      title: "Logic Puzzles",
      description: "Solve complex logical reasoning problems",
      icon: Lightbulb$1,
      category: "Logic",
      difficulty: "Hard"
    },
    {
      id: "pattern-recognition",
      title: "Pattern Recognition",
      description: "Identify patterns in visual sequences",
      icon: Puzzle$1,
      category: "Visual",
      difficulty: "Medium"
    },
    {
      id: "code-logic",
      title: "Code Logic",
      description: "Solve programming logic challenges",
      icon: Zap,
      category: "Programming",
      difficulty: "Hard"
    }
  ];
  activeGame = games.find((game) => game.id === activeGameId);
  return `${$$result.head += `<!-- HEAD_svelte-5lsl27_START -->${$$result.title = `<title>Brain Games - Giorgi Tchanturia</title>`, ""}<!-- HEAD_svelte-5lsl27_END -->`, ""} <div class="min-h-screen bg-gray-50 dark:bg-gray-900"> <section class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" data-svelte-h="svelte-1uudl3w"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="text-center"><h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Brain Games</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Challenge yourself with these fun and educational brain training games designed to improve cognitive abilities</p></div></div></section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">${each(games, (game) => {
    return `<button class="${"card p-6 text-left transition-all duration-300 hover:scale-105 " + escape(
      activeGameId === game.id ? "ring-2 ring-primary-500" : "",
      true
    )}"><div class="flex items-center gap-4 mb-4"><div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">${validate_component(game.icon || missing_component, "svelte:component").$$render(
      $$result,
      {
        size: "24",
        class: "text-primary-600 dark:text-primary-400"
      },
      {},
      {}
    )}</div> <div class="flex-1"><h3 class="text-lg font-semibold">${escape(game.title)}</h3> <div class="flex items-center gap-2 text-sm"><span class="text-gray-500 dark:text-gray-400">${escape(game.category)}</span> <span class="text-gray-300 dark:text-gray-600" data-svelte-h="svelte-kt2pca">•</span> <span${add_attribute("class", getDifficultyColor(game.difficulty), 0)}>${escape(game.difficulty)}</span></div> </div></div> <p class="text-gray-600 dark:text-gray-400 text-sm">${escape(game.description)}</p> </button>`;
  })}</div>  <div class="card p-8">${activeGame ? `<div class="mb-6"><h2 class="text-2xl font-bold flex items-center gap-3 mb-2">${validate_component(activeGame.icon || missing_component, "svelte:component").$$render($$result, { size: "24", class: "text-primary-600" }, {}, {})} ${escape(activeGame.title)} <span class="${"text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 " + escape(getDifficultyColor(activeGame.difficulty), true)}">${escape(activeGame.difficulty)}</span></h2> <p class="text-gray-600 dark:text-gray-400">${escape(activeGame.description)}</p></div>  ${`<div class="space-y-6">${`<div class="text-center"><button class="btn-primary inline-flex items-center gap-2">${validate_component(Play$1, "Play").$$render($$result, { size: "18" }, {}, {})}
                  Start Game</button></div>`}</div>`}  ${``}  ${``}  ${``}  ${``}  ${``}  ${``}` : ``}</div></div></div>`;
});
export {
  Page as default
};
