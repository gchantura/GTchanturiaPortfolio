<script>
  import { onMount } from 'svelte';
  import { Github, ExternalLink, Download, Code, Database, Globe, Smartphone } from 'lucide-svelte';

  let githubRepos = [];
  let loading = true;

  const techStack = [
    { name: 'SvelteKit', category: 'Frontend', color: 'text-orange-600' },
    { name: 'React', category: 'Frontend', color: 'text-blue-600' },
    { name: 'TypeScript', category: 'Language', color: 'text-blue-700' },
    { name: 'Node.js', category: 'Backend', color: 'text-green-600' },
    { name: 'PostgreSQL', category: 'Database', color: 'text-blue-800' },
    { name: 'Firebase', category: 'Backend', color: 'text-yellow-600' },
    { name: 'Supabase', category: 'Backend', color: 'text-green-700' },
    { name: 'TailwindCSS', category: 'Styling', color: 'text-teal-600' },
    { name: 'Docker', category: 'DevOps', color: 'text-blue-500' },
    { name: 'AWS', category: 'Cloud', color: 'text-orange-500' },
  ];

  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern technologies and best practices.'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing query performance.'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Expert in modern web frameworks, APIs, and cloud infrastructure.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Creating beautiful, accessible interfaces that work on all devices.'
    }
  ];

  onMount(async () => {
    try {
      // Mock GitHub repos for demo - replace with actual API call
      githubRepos = [
        {
          name: 'portfolio-website',
          description: 'Personal portfolio built with SvelteKit and TailwindCSS',
          language: 'Svelte',
          stars: 42,
          html_url: 'https://github.com/giorgi/portfolio-website'
        },
        {
          name: 'task-manager-app',
          description: 'Full-stack task management application with real-time updates',
          language: 'TypeScript',
          stars: 28,
          html_url: 'https://github.com/giorgi/task-manager-app'
        },
        {
          name: 'weather-dashboard',
          description: 'Weather dashboard with data visualization and forecasting',
          language: 'React',
          stars: 35,
          html_url: 'https://github.com/giorgi/weather-dashboard'
        }
      ];
    } catch (error) {
      console.error('Error fetching repos:', error);
    } finally {
      loading = false;
    }
  });
</script>

<svelte:head>
  <title>Home - Giorgi Tchanturia</title>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8 animate-slide-up">
        <div class="space-y-4">
          <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span class="gradient-text">Giorgi</span>
          </h1>
          <h2 class="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
            Full-Stack Software Engineer
          </h2>
        </div>
        
        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Passionate about creating innovative web applications with modern technologies. 
          I specialize in building scalable, user-friendly solutions that make a difference.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/contact" class="btn-primary inline-flex items-center gap-2">
            Get In Touch
            <ExternalLink size="18" />
          </a>
          <a href="#projects" class="btn-secondary inline-flex items-center gap-2">
            View Projects
            <Github size="18" />
          </a>
        </div>
      </div>
      
      <div class="lg:flex lg:justify-center animate-fade-in">
        <div class="relative">
          <div class="w-80 h-80 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-20 absolute -inset-4"></div>
          <img
            src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Giorgi Tchanturia"
            class="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        I focus on creating comprehensive solutions that solve real-world problems
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each features as feature, index}
        <div class="card p-6 text-center hover:scale-105 transition-transform duration-300" style="animation-delay: {index * 0.1}s">
          <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svelte:component this={feature.icon} size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h3 class="text-xl font-semibold mb-3">{feature.title}</h3>
          <p class="text-gray-600 dark:text-gray-400">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Tech Stack Section -->
<section class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
      <p class="text-xl text-gray-600 dark:text-gray-400">Technologies I work with daily</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {#each techStack as tech, index}
        <div class="card p-4 text-center group hover:scale-105 transition-all duration-300" style="animation-delay: {index * 0.05}s">
          <div class="font-semibold {tech.color} group-hover:scale-110 transition-transform duration-300">
            {tech.name}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {tech.category}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
      <p class="text-xl text-gray-600 dark:text-gray-400">Some of my recent work</p>
    </div>
    
    {#if loading}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each [1, 2, 3] as _}
          <div class="card p-6 animate-pulse">
            <div class="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
            <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div class="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each githubRepos as repo, index}
          <div class="card p-6 group hover:scale-105 transition-all duration-300" style="animation-delay: {index * 0.1}s">
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {repo.name}
              </h3>
              <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Github size="16" />
                <span class="text-sm">{repo.stars}</span>
              </div>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {repo.description}
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                {repo.language}
              </span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <ExternalLink size="18" />
              </a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
    
    <div class="text-center mt-12">
      <a
        href="https://github.com/giorgi"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary inline-flex items-center gap-2"
      >
        View All Projects
        <Github size="18" />
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl font-bold text-white mb-6">
      Let's Build Something Amazing Together
    </h2>
    <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
      I'm always excited to work on new projects and collaborate with talented people. 
      Let's discuss how we can bring your ideas to life.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" class="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
        Start a Project
      </a>
      <a
        href="mailto:gcchanturia@gmail.com"
        class="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
      >
        Send Email
      </a>
    </div>
  </div>
</section>