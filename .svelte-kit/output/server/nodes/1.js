

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dce4ab70.js","_app/immutable/chunks/scheduler.7a09abd0.js","_app/immutable/chunks/index.fb4ff46b.js","_app/immutable/chunks/stores.46e3f1f8.js","_app/immutable/chunks/singletons.aec3b6a4.js"];
export const stylesheets = [];
export const fonts = [];
