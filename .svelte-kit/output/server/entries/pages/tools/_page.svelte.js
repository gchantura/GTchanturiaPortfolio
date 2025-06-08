import { c as create_ssr_component, v as validate_component, e as each, m as missing_component, d as escape } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { S as Search, C as CheckCircle, a as Copy } from "../../../chunks/search.js";
import { C as Code, D as Database } from "../../../chunks/database.js";
import { Z as Zap } from "../../../chunks/zap.js";
const Check_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "m9 11 3 3L22 4" }],
    [
      "path",
      {
        "d": "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "check-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CheckSquare = Check_square;
const Clock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 16 14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Clock$1 = Clock;
const File_text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "file-text" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const FileText = File_text;
const Hash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "9",
        "y2": "9"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "15",
        "y2": "15"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "8",
        "y1": "3",
        "y2": "21"
      }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "14",
        "y1": "3",
        "y2": "21"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hash" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hash$1 = Hash;
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "link" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Link$1 = Link;
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "lock" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Lock$1 = Lock;
const Palette = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "circle",
      {
        "cx": "13.5",
        "cy": "6.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      {
        "cx": "17.5",
        "cy": "10.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      {
        "cx": "8.5",
        "cy": "7.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      {
        "cx": "6.5",
        "cy": "12.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "path",
      {
        "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "palette" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Palette$1 = Palette;
const Type = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "4 7 4 4 20 4 20 7" }],
    [
      "line",
      {
        "x1": "9",
        "x2": "15",
        "y1": "20",
        "y2": "20"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "4",
        "y2": "20"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "type" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Type$1 = Type;
function getCategoryColor(category) {
  const colors = {
    "Data": "text-blue-600",
    "Design": "text-purple-600",
    "Utility": "text-green-600",
    "Development": "text-orange-600",
    "Web": "text-teal-600",
    "Security": "text-red-600",
    "Content": "text-indigo-600"
  };
  return colors[category] || "text-gray-600";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeTool;
  let jsonOutput = "";
  let copiedItems = /* @__PURE__ */ new Set();
  const tools = [
    {
      id: "json-formatter",
      title: "JSON Formatter",
      description: "Format and validate JSON data",
      icon: FileText,
      category: "Data"
    },
    {
      id: "color-picker",
      title: "Color Picker",
      description: "Pick colors and get hex, RGB, HSL values",
      icon: Palette$1,
      category: "Design"
    },
    {
      id: "timestamp-converter",
      title: "Timestamp Converter",
      description: "Convert between timestamps and readable dates",
      icon: Clock$1,
      category: "Utility"
    },
    {
      id: "regex-tester",
      title: "Regex Tester",
      description: "Test regular expressions against text",
      icon: Search,
      category: "Development"
    },
    {
      id: "text-diff",
      title: "Text Diff Tool",
      description: "Compare two texts and highlight differences",
      icon: CheckSquare,
      category: "Utility"
    },
    {
      id: "base64-encoder",
      title: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 strings",
      icon: Code,
      category: "Data"
    },
    {
      id: "url-encoder",
      title: "URL Encoder/Decoder",
      description: "Encode and decode URL strings",
      icon: Link$1,
      category: "Web"
    },
    {
      id: "hash-generator",
      title: "Hash Generator",
      description: "Generate MD5, SHA-1, SHA-256 hashes",
      icon: Hash$1,
      category: "Security"
    },
    {
      id: "password-generator",
      title: "Password Generator",
      description: "Generate secure random passwords",
      icon: Lock$1,
      category: "Security"
    },
    {
      id: "lorem-generator",
      title: "Lorem Ipsum Generator",
      description: "Generate placeholder text for designs",
      icon: Type$1,
      category: "Content"
    },
    {
      id: "qr-generator",
      title: "QR Code Generator",
      description: "Generate QR codes from text",
      icon: Zap,
      category: "Utility"
    },
    {
      id: "sql-formatter",
      title: "SQL Formatter",
      description: "Format and beautify SQL queries",
      icon: Database,
      category: "Development"
    }
  ];
  let activeToolId = "json-formatter";
  activeTool = tools.find((tool) => tool.id === activeToolId);
  return `${$$result.head += `<!-- HEAD_svelte-l69elt_START -->${$$result.title = `<title>Developer Tools - Giorgi Tchanturia</title>`, ""}<!-- HEAD_svelte-l69elt_END -->`, ""} <div class="min-h-screen bg-gray-50 dark:bg-gray-900"> <section class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" data-svelte-h="svelte-1n761d4"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"><div class="text-center"><h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Developer Tools</h1> <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A comprehensive collection of useful tools to make your development workflow more efficient and productive</p></div></div></section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <div class="lg:col-span-1"><div class="card p-6 sticky top-24"><h2 class="text-lg font-semibold mb-4" data-svelte-h="svelte-1soy91p">Available Tools</h2> <div class="space-y-2">${each(tools, (tool) => {
    return `<button class="${"w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 " + escape(
      activeToolId === tool.id ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" : "hover:bg-gray-100 dark:hover:bg-gray-700",
      true
    )}">${validate_component(tool.icon || missing_component, "svelte:component").$$render($$result, { size: "18" }, {}, {})} <div class="flex-1"><div class="font-medium">${escape(tool.title)}</div> <div class="${"text-xs " + escape(getCategoryColor(tool.category), true)}">${escape(tool.category)}</div></div> </button>`;
  })}</div></div></div>  <div class="lg:col-span-3"><div class="card p-8">${activeTool ? `<div class="mb-6"><h2 class="text-2xl font-bold flex items-center gap-3 mb-2">${validate_component(activeTool.icon || missing_component, "svelte:component").$$render($$result, { size: "24", class: "text-primary-600" }, {}, {})} ${escape(activeTool.title)} <span class="${"text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 " + escape(getCategoryColor(activeTool.category), true)}">${escape(activeTool.category)}</span></h2> <p class="text-gray-600 dark:text-gray-400">${escape(activeTool.description)}</p></div>  ${`<div class="space-y-6"><div><label class="block text-sm font-medium mb-2" data-svelte-h="svelte-f7ept9">Input JSON:</label> <textarea placeholder="Paste your JSON here..." class="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 font-mono text-sm">${escape("")}</textarea></div> <button class="btn-primary" data-svelte-h="svelte-9rprtk">Format JSON</button> <div><div class="flex items-center justify-between mb-2"><label class="block text-sm font-medium" data-svelte-h="svelte-qlrd1s">Formatted Output:</label> <button class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1">${copiedItems.has("json-output") ? `${validate_component(CheckCircle, "CheckCircle").$$render($$result, { size: "16", class: "text-green-600" }, {}, {})}
                        Copied!` : `${validate_component(Copy, "Copy").$$render($$result, { size: "16" }, {}, {})}
                        Copy`}</button></div> <pre class="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 overflow-auto text-sm">${escape(jsonOutput)}</pre></div></div>`}  ${``}  ${``}  ${``}  ${``}  ${``}  ${``}  ${``}  ${``}  ${["lorem-generator", "qr-generator", "sql-formatter"].includes(activeToolId) ? `<div class="space-y-6"><div class="text-center text-gray-600 dark:text-gray-400 py-12">${validate_component(activeTool.icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      size: "48",
      class: "mx-auto mb-4 text-gray-400"
    },
    {},
    {}
  )} <h3 class="text-xl font-semibold mb-2">${escape(activeTool.title)}</h3> <p class="mb-4">${escape(activeTool.description)}</p> <p class="text-sm" data-svelte-h="svelte-18m6kpm">This tool is coming soon! Check back later for more functionality.</p></div></div>` : ``}` : ``}</div></div></div></div></div>`;
});
export {
  Page as default
};
