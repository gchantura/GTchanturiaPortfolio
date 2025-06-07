<script>
  import '../app.css';
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Giorgi Tchanturia - Software Engineer Portfolio</title>
  <meta name="description" content="Full-stack software engineer specializing in modern web technologies. Explore my projects, tools, and technical guides." />
  <meta name="keywords" content="software engineer, full-stack developer, web development, SvelteKit, React, Node.js" />
  <meta property="og:title" content="Giorgi Tchanturia - Software Engineer Portfolio" />
  <meta property="og:description" content="Full-stack software engineer specializing in modern web technologies." />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navigation />
  
  <main class="flex-1">
    <slot />
  </main>
  
  <Footer />
</div>