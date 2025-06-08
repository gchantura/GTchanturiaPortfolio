

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/games/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.b584076b.js","_app/immutable/chunks/scheduler.7a09abd0.js","_app/immutable/chunks/index.fb4ff46b.js","_app/immutable/chunks/Icon.38b46dc3.js","_app/immutable/chunks/zap.820d79b5.js","_app/immutable/chunks/brain.943e3291.js"];
export const stylesheets = [];
export const fonts = [];
