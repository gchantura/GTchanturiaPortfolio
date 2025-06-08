

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f2951026.js","_app/immutable/chunks/scheduler.7a09abd0.js","_app/immutable/chunks/index.fb4ff46b.js","_app/immutable/chunks/Icon.38b46dc3.js","_app/immutable/chunks/stores.46e3f1f8.js","_app/immutable/chunks/singletons.aec3b6a4.js","_app/immutable/chunks/brain.943e3291.js","_app/immutable/chunks/mail.dc0feb09.js","_app/immutable/chunks/github.96a09326.js"];
export const stylesheets = ["_app/immutable/assets/0.6c2b5fb9.css"];
export const fonts = [];
