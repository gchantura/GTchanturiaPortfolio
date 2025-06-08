import { c as create_ssr_component, v as validate_component, a as subscribe, e as each, b as add_attribute, d as escape, m as missing_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
import { B as Brain } from "../../chunks/brain.js";
import { M as Mail, L as Linkedin } from "../../chunks/mail.js";
import { G as Github } from "../../chunks/github.js";
const app = "";
function createThemeStore() {
  const { subscribe: subscribe2, set, update } = writable("light");
  return {
    subscribe: subscribe2,
    init: () => {
    },
    toggle: () => {
      update((theme2) => {
        const newTheme = theme2 === "light" ? "dark" : "light";
        return newTheme;
      });
    },
    set: (theme2) => {
      set(theme2);
    }
  };
}
const theme = createThemeStore();
const Book_open = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
      }
    ],
    [
      "path",
      {
        "d": "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "book-open" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const BookOpen = Book_open;
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ],
    ["polyline", { "points": "9 22 9 12 15 12 15 22" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "home" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Home$1 = Home;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu$1 = Menu;
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon$1 = Moon;
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun$1 = Sun;
const Wrench = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "wrench" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Wrench$1 = Wrench;
const Navigation_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-a2np20{backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  const navItems = [
    { href: "/", label: "Home", icon: Home$1 },
    {
      href: "/tools",
      label: "Tools",
      icon: Wrench$1
    },
    {
      href: "/games",
      label: "Games",
      icon: Brain
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail
    },
    {
      href: "/guides",
      label: "Guides",
      icon: BookOpen
    }
  ];
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `<nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 svelte-a2np20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"> <div class="flex-shrink-0" data-svelte-h="svelte-1ftczkg"><a href="/" class="text-2xl font-bold gradient-text">Giorgi</a></div>  <div class="hidden md:block"><div class="ml-10 flex items-baseline space-x-4">${each(navItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${"px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 " + escape(
      $page.url.pathname === item.href ? "bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
      true
    )}">${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, { size: "16" }, {}, {})} ${escape(item.label)} </a>`;
  })}</div></div>  <div class="flex items-center gap-2"><button class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle theme">${$theme === "dark" ? `${validate_component(Sun$1, "Sun").$$render($$result, { size: "20" }, {}, {})}` : `${validate_component(Moon$1, "Moon").$$render($$result, { size: "20" }, {}, {})}`}</button>  <div class="md:hidden"><button class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle menu">${`${validate_component(Menu$1, "Menu").$$render($$result, { size: "20" }, {}, {})}`}</button></div></div></div></div>  ${``} </nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="space-y-4"><h3 class="text-2xl font-bold gradient-text" data-svelte-h="svelte-fithyo">Giorgi Tchanturia</h3> <p class="text-gray-600 dark:text-gray-400 leading-relaxed" data-svelte-h="svelte-21luq0">Full-stack software engineer passionate about creating innovative solutions and sharing knowledge with the developer community.</p> <div class="flex space-x-4"><a href="https://github.com/giorgi" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="GitHub">${validate_component(Github, "Github").$$render($$result, { size: "24" }, {}, {})}</a> <a href="https://linkedin.com/in/giorgichanturiadev" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="LinkedIn">${validate_component(Linkedin, "Linkedin").$$render($$result, { size: "24" }, {}, {})}</a> <a href="mailto:gcchanturia@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200" aria-label="Email">${validate_component(Mail, "Mail").$$render($$result, { size: "24" }, {}, {})}</a></div></div>  <div class="space-y-4" data-svelte-h="svelte-1ymi5b5"><h4 class="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4> <div class="space-y-2"><a href="/" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Home</a> <a href="/tools" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Developer Tools</a> <a href="/games" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Brain Games</a> <a href="/contact" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Contact</a> <a href="/guides" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Guides</a></div></div>  <div class="space-y-4" data-svelte-h="svelte-2t517u"><h4 class="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h4> <div class="space-y-2"><p class="text-gray-600 dark:text-gray-400">gcchanturia@gmail.com</p> <p class="text-gray-600 dark:text-gray-400">+44 1745 309791</p></div></div></div> <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700" data-svelte-h="svelte-rbeor8"><p class="text-center text-gray-600 dark:text-gray-400">© 2024 Giorgi Tchanturia. Built with SvelteKit &amp; TailwindCSS.</p></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-pl1b5j_START -->${$$result.title = `<title>Giorgi Tchanturia - Software Engineer Portfolio</title>`, ""}<meta name="description" content="Full-stack software engineer specializing in modern web technologies. Explore my projects, tools, and technical guides."><meta name="keywords" content="software engineer, full-stack developer, web development, SvelteKit, React, Node.js"><meta property="og:title" content="Giorgi Tchanturia - Software Engineer Portfolio"><meta property="og:description" content="Full-stack software engineer specializing in modern web technologies."><meta property="og:type" content="website"><!-- HEAD_svelte-pl1b5j_END -->`, ""} <div class="min-h-screen flex flex-col">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main class="flex-1">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
