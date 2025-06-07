<script>
  import {
    Send,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    CheckCircle,
  } from "lucide-svelte";

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "web-development",
  };

  let showSuccess = false;
  let isSubmitting = false;

  const projectTypes = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "api-development", label: "API Development" },
    { value: "consulting", label: "Technical Consulting" },
    { value: "maintenance", label: "Website Maintenance" },
    { value: "other", label: "Other" },
  ];

  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Complete web applications from concept to deployment",
      technologies: ["SvelteKit", "React", "Node.js", "PostgreSQL"],
    },
    {
      title: "API Development & Integration",
      description: "RESTful APIs and third-party service integrations",
      technologies: ["Express.js", "FastAPI", "GraphQL", "REST"],
    },
    {
      title: "Database Design & Optimization",
      description: "Efficient database schemas and performance tuning",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    },
    {
      title: "Technical Consulting",
      description: "Architecture advice and code reviews",
      technologies: ["System Design", "Code Review", "Performance"],
    },
  ];

  async function handleSubmit() {
    isSubmitting = true;

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    showSuccess = true;
    isSubmitting = false;

    // Reset form
    formData = {
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "web-development",
    };

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess = false;
    }, 5000);
  }
</script>

<svelte:head>
  <title>Contact & Offers - Giorgi Tchanturia</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- Header -->
  <section
    class="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">Let's Work Together</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm here to help you build amazing
          digital experiences.
        </p>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Success Message -->
    {#if showSuccess}
      <div
        class="mb-8 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-3 animate-slide-up"
      >
        <CheckCircle class="text-green-600 dark:text-green-400" size="24" />
        <div>
          <h3 class="font-semibold text-green-800 dark:text-green-200">
            Message Sent Successfully!
          </h3>
          <p class="text-green-700 dark:text-green-300">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    {/if}

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Contact Form -->
      <div class="lg:col-span-2">
        <div class="card p-8">
          <h2 class="text-2xl font-bold mb-6">Start Your Project</h2>

          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <!-- Name and Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <!-- Project Type -->
            <div>
              <label for="projectType" class="block text-sm font-medium mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                bind:value={formData.projectType}
                class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              >
                {#each projectTypes as type}
                  <option value={type.value}>{type.label}</option>
                {/each}
              </select>
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                required
                class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                placeholder="Brief description of your project"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {#if isSubmitting}
                <div
                  class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                ></div>
                Sending...
              {:else}
                <Send size="18" />
                Send Message
              {/if}
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Info & Services -->
      <div class="space-y-8">
        <!-- Contact Information -->
        <div class="card p-6">
          <h3 class="text-xl font-semibold mb-6">Get In Touch</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"
              >
                <Mail
                  size="18"
                  class="text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <div class="font-medium">Email</div>
                <a
                  href="mailto:gcchanturia@gmail.com"
                  class="text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors"
                >
                  gcchanturia@gmail.com
                </a>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"
              >
                <Phone
                  size="18"
                  class="text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <div class="font-medium">Phone</div>
                <a
                  href="tel:+441745309791"
                  class="text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors"
                >
                  +44 1745 309791
                </a>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center"
              >
                <MapPin
                  size="18"
                  class="text-primary-600 dark:text-primary-400"
                />
              </div>
              <div>
                <div class="font-medium">Location</div>
                <div class="text-gray-600 dark:text-gray-400">
                  United Kingdom
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div class="flex gap-4">
              <a
                href="https://github.com/giorgi"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="GitHub"
              >
                <Github
                  size="18"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                />
              </a>
              <a
                href="https://linkedin.com/in/giorgichanturiadev"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin
                  size="18"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="card p-6">
          <h3 class="text-xl font-semibold mb-6">Services Offered</h3>
          <div class="space-y-6">
            {#each services as service}
              <div
                class="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
              >
                <h4 class="font-semibold mb-2">{service.title}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {service.description}
                </p>
                <div class="flex flex-wrap gap-2">
                  {#each service.technologies as tech}
                    <span
                      class="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded"
                    >
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Response Time -->
        <div
          class="card p-6 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-800 dark:to-gray-700"
        >
          <h3 class="text-lg font-semibold mb-3">Quick Response Guarantee</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
            I typically respond to all inquiries within 24 hours during business
            days.
          </p>
          <div
            class="text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
            <span class="animate-pulse">24</span> hours
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            Average Response Time
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
