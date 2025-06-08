

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ffdb11b8.js","_app/immutable/chunks/scheduler.7a09abd0.js","_app/immutable/chunks/index.fb4ff46b.js","_app/immutable/chunks/Icon.38b46dc3.js","_app/immutable/chunks/database.7c2fbdc6.js","_app/immutable/chunks/smartphone.58086393.js","_app/immutable/chunks/github.96a09326.js"];
export const stylesheets = [];
export const fonts = [];
