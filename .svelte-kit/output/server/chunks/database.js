import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["polyline", { "points": "16 18 22 12 16 6" }],
    ["polyline", { "points": "8 6 2 12 8 18" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "code" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Code$1 = Code;
const Database = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "ellipse",
      {
        "cx": "12",
        "cy": "5",
        "rx": "9",
        "ry": "3"
      }
    ],
    ["path", { "d": "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { "d": "M3 12A9 3 0 0 0 21 12" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "database" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Database$1 = Database;
export {
  Code$1 as C,
  Database$1 as D
};
