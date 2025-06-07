<script>
  import { Github, Linkedin, Mail } from 'lucide-svelte';
</script>

<footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Brand & Description -->
      <div class="space-y-4">
        <h3 class="text-2xl font-bold gradient-text">Giorgi Tchanturia</h3>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          Full-stack software engineer passionate about creating innovative solutions and sharing knowledge with the developer community.
        </p>
        <div class="flex space-x-4">
          <a
            href="https://github.com/giorgi"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size="24" />
          </a>
          <a
            href="https://linkedin.com/in/giorgichanturiadev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size="24" />
          </a>
          <a
            href="mailto:gcchanturia@gmail.com"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size="24" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
        <div class="space-y-2">
          <a href="/" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Home</a>
          <a href="/tools" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Developer Tools</a>
          <a href="/games" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Brain Games</a>
          <a href="/contact" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Contact</a>
          <a href="/guides" class="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">Guides</a>
        </div>
      </div>

      <!-- Contact Info -->
      <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
        <div class="space-y-2">
          <p class="text-gray-600 dark:text-gray-400">gcchanturia@gmail.com</p>
          <p class="text-gray-600 dark:text-gray-400">+44 1745 309791</p>
        </div>
      </div>
    </div>

    <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
      <p class="text-center text-gray-600 dark:text-gray-400">
        © 2024 Giorgi Tchanturia. Built with SvelteKit & TailwindCSS.
      </p>
    </div>
  </div>
</footer>