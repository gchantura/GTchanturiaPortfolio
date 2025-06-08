import { c as create_ssr_component, v as validate_component, b as add_attribute, e as each, d as escape } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { M as Mail, L as Linkedin } from "../../../chunks/mail.js";
import { G as Github } from "../../../chunks/github.js";
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const MapPin = Map_pin;
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "phone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Phone$1 = Phone;
const Send = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m22 2-7 20-4-9-9-4Z" }], ["path", { "d": "M22 2 11 13" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "send" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Send$1 = Send;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "web-development"
  };
  const projectTypes = [
    {
      value: "web-development",
      label: "Web Development"
    },
    { value: "mobile-app", label: "Mobile App" },
    {
      value: "api-development",
      label: "API Development"
    },
    {
      value: "consulting",
      label: "Technical Consulting"
    },
    {
      value: "maintenance",
      label: "Website Maintenance"
    },
    { value: "other", label: "Other" }
  ];
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Complete web applications from concept to deployment",
      technologies: ["SvelteKit", "React", "Node.js", "PostgreSQL"]
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations",
      technologies: ["Express.js", "FastAPI", "GraphQL", "REST"]
    },
    {
      title: "Database Design & Optimization",
      description: "Efficient database schemas and performance tuning",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase"]
    },
    {
      title: "Technical Consulting",
      description: "Architecture advice and code reviews",
      technologies: ["System Design", "Code Review", "Performance"]
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1e4fxxp_START -->${$$result.title = `<title>Contact &amp; Offers - Giorgi Tchanturia</title>`, ""}<!-- HEAD_svelte-1e4fxxp_END -->`, ""} <div class="min-h-screen bg-gray-50 dark:bg-gray-900"> <section class="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20" data-svelte-h="svelte-1kwfvok"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center"><h1 class="text-4xl lg:text-5xl font-bold mb-6">Let&#39;s Work Together</h1> <p class="text-xl text-primary-100 max-w-2xl mx-auto">Ready to bring your ideas to life? I&#39;m here to help you build amazing
          digital experiences.</p></div></div></section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> ${``} <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <div class="lg:col-span-2"><div class="card p-8"><h2 class="text-2xl font-bold mb-6" data-svelte-h="svelte-37ns5a">Start Your Project</h2> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label for="name" class="block text-sm font-medium mb-2" data-svelte-h="svelte-1dzdfh3">Name *</label> <input type="text" id="name" required class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" placeholder="Your full name"${add_attribute("value", formData.name, 0)}></div> <div><label for="email" class="block text-sm font-medium mb-2" data-svelte-h="svelte-o4n3v5">Email *</label> <input type="email" id="email" required class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" placeholder="your.email@example.com"${add_attribute("value", formData.email, 0)}></div></div>  <div><label for="projectType" class="block text-sm font-medium mb-2" data-svelte-h="svelte-7dfb51">Project Type</label> <select id="projectType" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200">${each(projectTypes, (type) => {
    return `<option${add_attribute("value", type.value, 0)}>${escape(type.label)}</option>`;
  })}</select></div>  <div><label for="subject" class="block text-sm font-medium mb-2" data-svelte-h="svelte-3ydie1">Subject *</label> <input type="text" id="subject" required class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200" placeholder="Brief description of your project"${add_attribute("value", formData.subject, 0)}></div>  <div><label for="message" class="block text-sm font-medium mb-2" data-svelte-h="svelte-aw23er">Project Details *</label> <textarea id="message" required rows="6" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell me about your project, goals, timeline, and any specific requirements...">${escape("")}</textarea></div>  <button type="submit" ${""} class="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">${`${validate_component(Send$1, "Send").$$render($$result, { size: "18" }, {}, {})}
                Send Message`}</button></form></div></div>  <div class="space-y-8"> <div class="card p-6"><h3 class="text-xl font-semibold mb-6" data-svelte-h="svelte-1kp2iqm">Get In Touch</h3> <div class="space-y-4"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">${validate_component(Mail, "Mail").$$render(
    $$result,
    {
      size: "18",
      class: "text-primary-600 dark:text-primary-400"
    },
    {},
    {}
  )}</div> <div data-svelte-h="svelte-1uro9x1"><div class="font-medium">Email</div> <a href="mailto:gcchanturia@gmail.com" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors">gcchanturia@gmail.com</a></div></div> <div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">${validate_component(Phone$1, "Phone").$$render(
    $$result,
    {
      size: "18",
      class: "text-primary-600 dark:text-primary-400"
    },
    {},
    {}
  )}</div> <div data-svelte-h="svelte-iijjd8"><div class="font-medium">Phone</div> <a href="tel:+441745309791" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors">+44 1745 309791</a></div></div> <div class="flex items-center gap-3"><div class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">${validate_component(MapPin, "MapPin").$$render(
    $$result,
    {
      size: "18",
      class: "text-primary-600 dark:text-primary-400"
    },
    {},
    {}
  )}</div> <div data-svelte-h="svelte-1x8r7jg"><div class="font-medium">Location</div> <div class="text-gray-600 dark:text-gray-400">United Kingdom</div></div></div></div> <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"><div class="flex gap-4"><a href="https://github.com/giorgi" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors" aria-label="GitHub">${validate_component(Github, "Github").$$render(
    $$result,
    {
      size: "18",
      class: "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
    },
    {},
    {}
  )}</a> <a href="https://linkedin.com/in/giorgichanturiadev" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors" aria-label="LinkedIn">${validate_component(Linkedin, "Linkedin").$$render(
    $$result,
    {
      size: "18",
      class: "text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
    },
    {},
    {}
  )}</a></div></div></div>  <div class="card p-6"><h3 class="text-xl font-semibold mb-6" data-svelte-h="svelte-byiwz7">Services Offered</h3> <div class="space-y-6">${each(services, (service) => {
    return `<div class="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"><h4 class="font-semibold mb-2">${escape(service.title)}</h4> <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">${escape(service.description)}</p> <div class="flex flex-wrap gap-2">${each(service.technologies, (tech) => {
      return `<span class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded">${escape(tech)} </span>`;
    })}</div> </div>`;
  })}</div></div>  <div class="card p-6 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-800 dark:to-gray-700" data-svelte-h="svelte-5mh4zm"><h3 class="text-lg font-semibold mb-3">Quick Response Guarantee</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">I typically respond to all inquiries within 24 hours during business
            days.</p> <div class="text-2xl font-bold text-primary-600 dark:text-primary-400"><span class="animate-pulse">24</span> hours</div> <div class="text-sm text-gray-500 dark:text-gray-400">Average Response Time</div></div></div></div></div></div>`;
});
export {
  Page as default
};
