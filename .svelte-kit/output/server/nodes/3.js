

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.5c514173.js","_app/immutable/chunks/scheduler.7a09abd0.js","_app/immutable/chunks/index.fb4ff46b.js","_app/immutable/chunks/Icon.38b46dc3.js","_app/immutable/chunks/check-circle.98c0b05a.js","_app/immutable/chunks/mail.dc0feb09.js","_app/immutable/chunks/github.96a09326.js"];
export const stylesheets = [];
export const fonts = [];
