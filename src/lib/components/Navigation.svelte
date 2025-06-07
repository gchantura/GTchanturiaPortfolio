<script>
  import { page } from '$app/stores';
  import { theme } from '$lib/stores/theme.js';
  import { onMount } from 'svelte';
  import { Moon, Sun, Menu, X, Home, Wrench, Brain, Mail, BookOpen } from 'lucide-svelte';

  let mobileMenuOpen = false;

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/tools', label: 'Tools', icon: Wrench },
    { href: '/games', label: 'Games', icon: Brain },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/guides', label: 'Guides', icon: BookOpen }
  ];

  onMount(() => {
    theme.init();
  });

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<nav class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-2xl font-bold gradient-text">
          Giorgi
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          {#each navItems as item}
            <a
              href={item.href}
              class="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2
                {$page.url.pathname === item.href
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}"
            >
              <svelte:component this={item.icon} size="16" />
              {item.label}
            </a>
          {/each}
        </div>
      </div>

      <!-- Theme Toggle & Mobile Menu Button -->
      <div class="flex items-center gap-2">
        <button
          on:click={theme.toggle}
          class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {#if $theme === 'dark'}
            <Sun size="20" />
          {:else}
            <Moon size="20" />
          {/if}
        </button>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            on:click={toggleMobileMenu}
            class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {#if mobileMenuOpen}
              <X size="20" />
            {:else}
              <Menu size="20" />
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        {#each navItems as item}
          <a
            href={item.href}
            on:click={closeMobileMenu}
            class="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-3
              {$page.url.pathname === item.href
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}"
          >
            <svelte:component this={item.icon} size="18" />
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<style>
  nav {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
</style>