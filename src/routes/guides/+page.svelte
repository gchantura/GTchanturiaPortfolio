<script>
  import { Database, GitBranch, Code, Terminal, Server, Smartphone, Search, Copy, CheckCircle } from 'lucide-svelte';
  
  let activeCategory = 'git';
  let searchQuery = '';
  let copiedItems = new Set();

  const categories = [
    { id: 'git', name: 'Git', icon: GitBranch, color: 'text-orange-600' },
    { id: 'sql', name: 'SQL', icon: Database, color: 'text-blue-600' },
    { id: 'javascript', name: 'JavaScript', icon: Code, color: 'text-yellow-600' },
    { id: 'bash', name: 'Bash', icon: Terminal, color: 'text-green-600' },
    { id: 'node', name: 'Node.js', icon: Server, color: 'text-green-700' },
    { id: 'react', name: 'React', icon: Smartphone, color: 'text-blue-500' }
  ];

  const guides = {
    git: [
      {
        title: 'Repository Setup',
        commands: [
          { command: 'git init', description: 'Initialize a new Git repository' },
          { command: 'git clone <url>', description: 'Clone a remote repository' },
          { command: 'git remote add origin <url>', description: 'Add remote repository' },
          { command: 'git remote -v', description: 'View remote repositories' }
        ]
      },
      {
        title: 'Basic Operations',
        commands: [
          { command: 'git status', description: 'Check repository status' },
          { command: 'git add .', description: 'Stage all changes' },
          { command: 'git add <file>', description: 'Stage specific file' },
          { command: 'git commit -m "message"', description: 'Commit staged changes' },
          { command: 'git push', description: 'Push changes to remote' },
          { command: 'git pull', description: 'Pull changes from remote' }
        ]
      },
      {
        title: 'Branching',
        commands: [
          { command: 'git branch', description: 'List all branches' },
          { command: 'git branch <name>', description: 'Create new branch' },
          { command: 'git checkout <branch>', description: 'Switch to branch' },
          { command: 'git checkout -b <name>', description: 'Create and switch to new branch' },
          { command: 'git merge <branch>', description: 'Merge branch into current' },
          { command: 'git branch -d <name>', description: 'Delete branch' }
        ]
      },
      {
        title: 'History & Logs',
        commands: [
          { command: 'git log', description: 'View commit history' },
          { command: 'git log --oneline', description: 'Compact commit history' },
          { command: 'git log --graph', description: 'Visual commit graph' },
          { command: 'git diff', description: 'Show unstaged changes' },
          { command: 'git diff --staged', description: 'Show staged changes' },
          { command: 'git show <commit>', description: 'Show specific commit details' }
        ]
      }
    ],
    sql: [
      {
        title: 'Database Operations',
        commands: [
          { command: 'CREATE DATABASE dbname;', description: 'Create a new database' },
          { command: 'USE dbname;', description: 'Switch to database' },
          { command: 'DROP DATABASE dbname;', description: 'Delete database' },
          { command: 'SHOW DATABASES;', description: 'List all databases' }
        ]
      },
      {
        title: 'Table Operations',
        commands: [
          { command: 'CREATE TABLE users (id INT, name VARCHAR(50));', description: 'Create table with columns' },
          { command: 'ALTER TABLE users ADD email VARCHAR(100);', description: 'Add column to table' },
          { command: 'DROP TABLE users;', description: 'Delete table' },
          { command: 'DESCRIBE users;', description: 'Show table structure' },
          { command: 'SHOW TABLES;', description: 'List all tables' }
        ]
      },
      {
        title: 'Data Manipulation',
        commands: [
          { command: 'SELECT * FROM users;', description: 'Select all data from table' },
          { command: 'SELECT name, email FROM users WHERE id = 1;', description: 'Select specific columns with condition' },
          { command: 'INSERT INTO users (name, email) VALUES ("John", "john@email.com");', description: 'Insert new record' },
          { command: 'UPDATE users SET email = "new@email.com" WHERE id = 1;', description: 'Update existing record' },
          { command: 'DELETE FROM users WHERE id = 1;', description: 'Delete record' }
        ]
      },
      {
        title: 'Advanced Queries',
        commands: [
          { command: 'SELECT * FROM users ORDER BY name ASC;', description: 'Sort results ascending' },
          { command: 'SELECT * FROM users LIMIT 10;', description: 'Limit number of results' },
          { command: 'SELECT COUNT(*) FROM users;', description: 'Count total records' },
          { command: 'SELECT * FROM users WHERE name LIKE "%john%";', description: 'Search with pattern matching' },
          { command: 'SELECT users.name, orders.total FROM users JOIN orders ON users.id = orders.user_id;', description: 'Join tables' }
        ]
      }
    ],
    javascript: [
      {
        title: 'Variables & Data Types',
        commands: [
          { command: 'let name = "John";', description: 'Declare variable with let' },
          { command: 'const PI = 3.14159;', description: 'Declare constant' },
          { command: 'var age = 25;', description: 'Declare variable with var (avoid in modern JS)' },
          { command: 'typeof variable', description: 'Check variable type' },
          { command: 'Array.isArray(arr)', description: 'Check if variable is array' }
        ]
      },
      {
        title: 'Array Methods',
        commands: [
          { command: 'arr.push(item)', description: 'Add item to end of array' },
          { command: 'arr.pop()', description: 'Remove last item from array' },
          { command: 'arr.map(fn)', description: 'Transform each array element' },
          { command: 'arr.filter(fn)', description: 'Filter array elements' },
          { command: 'arr.reduce(fn, initial)', description: 'Reduce array to single value' },
          { command: 'arr.find(fn)', description: 'Find first matching element' },
          { command: 'arr.includes(item)', description: 'Check if array contains item' }
        ]
      },
      {
        title: 'Objects',
        commands: [
          { command: 'const obj = { key: value };', description: 'Create object literal' },
          { command: 'obj.property', description: 'Access object property (dot notation)' },
          { command: 'obj["property"]', description: 'Access object property (bracket notation)' },
          { command: 'Object.keys(obj)', description: 'Get array of object keys' },
          { command: 'Object.values(obj)', description: 'Get array of object values' },
          { command: 'Object.entries(obj)', description: 'Get array of [key, value] pairs' },
          { command: '{ ...obj, newProp: value }', description: 'Spread operator for objects' }
        ]
      },
      {
        title: 'Functions',
        commands: [
          { command: 'function name() { }', description: 'Function declaration' },
          { command: 'const func = () => { }', description: 'Arrow function' },
          { command: 'const func = async () => { }', description: 'Async arrow function' },
          { command: 'func.call(context, arg1, arg2)', description: 'Call function with specific context' },
          { command: 'func.apply(context, [arg1, arg2])', description: 'Apply function with arguments array' },
          { command: 'func.bind(context)', description: 'Bind function to specific context' }
        ]
      }
    ],
    bash: [
      {
        title: 'File Operations',
        commands: [
          { command: 'ls', description: 'List directory contents' },
          { command: 'ls -la', description: 'List with detailed info and hidden files' },
          { command: 'pwd', description: 'Print current directory' },
          { command: 'cd <directory>', description: 'Change directory' },
          { command: 'mkdir <name>', description: 'Create directory' },
          { command: 'rmdir <name>', description: 'Remove empty directory' },
          { command: 'rm -rf <name>', description: 'Remove directory and contents' }
        ]
      },
      {
        title: 'File Content',
        commands: [
          { command: 'cat <file>', description: 'Display file content' },
          { command: 'less <file>', description: 'View file content page by page' },
          { command: 'head <file>', description: 'Show first 10 lines' },
          { command: 'tail <file>', description: 'Show last 10 lines' },
          { command: 'grep "pattern" <file>', description: 'Search for pattern in file' },
          { command: 'find . -name "*.js"', description: 'Find files by pattern' }
        ]
      },
      {
        title: 'System Info',
        commands: [
          { command: 'ps aux', description: 'List running processes' },
          { command: 'top', description: 'Display running processes (live)' },
          { command: 'df -h', description: 'Show disk usage' },
          { command: 'free -h', description: 'Show memory usage' },
          { command: 'uname -a', description: 'Show system information' },
          { command: 'whoami', description: 'Show current user' }
        ]
      },
      {
        title: 'Permissions',
        commands: [
          { command: 'chmod 755 <file>', description: 'Set file permissions' },
          { command: 'chmod +x <file>', description: 'Make file executable' },
          { command: 'chown user:group <file>', description: 'Change file ownership' },
          { command: 'sudo <command>', description: 'Run command as administrator' }
        ]
      }
    ],
    node: [
      {
        title: 'NPM Commands',
        commands: [
          { command: 'npm init', description: 'Initialize new Node.js project' },
          { command: 'npm install <package>', description: 'Install package locally' },
          { command: 'npm install -g <package>', description: 'Install package globally' },
          { command: 'npm install --save-dev <package>', description: 'Install as dev dependency' },
          { command: 'npm update', description: 'Update all packages' },
          { command: 'npm uninstall <package>', description: 'Remove package' },
          { command: 'npm list', description: 'List installed packages' }
        ]
      },
      {
        title: 'Running Scripts',
        commands: [
          { command: 'npm start', description: 'Run start script' },
          { command: 'npm test', description: 'Run test script' },
          { command: 'npm run build', description: 'Run build script' },
          { command: 'npm run dev', description: 'Run development script' },
          { command: 'node <file.js>', description: 'Run JavaScript file with Node' },
          { command: 'nodemon <file.js>', description: 'Run with auto-restart on changes' }
        ]
      },
      {
        title: 'Common Modules',
        commands: [
          { command: 'const fs = require("fs");', description: 'File system module' },
          { command: 'const path = require("path");', description: 'Path utilities module' },
          { command: 'const http = require("http");', description: 'HTTP server module' },
          { command: 'const express = require("express");', description: 'Express.js framework' },
          { command: 'const { promisify } = require("util");', description: 'Promisify utilities' }
        ]
      },
      {
        title: 'Environment',
        commands: [
          { command: 'process.env.NODE_ENV', description: 'Check environment variable' },
          { command: 'process.argv', description: 'Command line arguments' },
          { command: 'process.cwd()', description: 'Current working directory' },
          { command: 'require("dotenv").config()', description: 'Load environment variables from .env' }
        ]
      }
    ],
    react: [
      {
        title: 'Component Basics',
        commands: [
          { command: 'function Component() { return <div>Hello</div>; }', description: 'Functional component' },
          { command: 'const Component = () => <div>Hello</div>;', description: 'Arrow function component' },
          { command: 'export default Component;', description: 'Export component as default' },
          { command: 'import Component from "./Component";', description: 'Import component' },
          { command: '<Component prop="value" />', description: 'Use component with props' }
        ]
      },
      {
        title: 'Hooks',
        commands: [
          { command: 'const [state, setState] = useState(initial);', description: 'State hook' },
          { command: 'useEffect(() => {}, []);', description: 'Effect hook (componentDidMount)' },
          { command: 'useEffect(() => {}, [dependency]);', description: 'Effect hook with dependency' },
          { command: 'const value = useContext(Context);', description: 'Context hook' },
          { command: 'const ref = useRef(null);', description: 'Ref hook' },
          { command: 'const memoized = useMemo(() => computation, [deps]);', description: 'Memo hook' },
          { command: 'const callback = useCallback(() => {}, [deps]);', description: 'Callback hook' }
        ]
      },
      {
        title: 'Event Handling',
        commands: [
          { command: '<button onClick={handleClick}>Click</button>', description: 'Click event handler' },
          { command: '<input onChange={handleChange} />', description: 'Input change handler' },
          { command: '<form onSubmit={handleSubmit}>', description: 'Form submit handler' },
          { command: 'event.preventDefault()', description: 'Prevent default behavior' },
          { command: 'event.target.value', description: 'Get input value from event' }
        ]
      },
      {
        title: 'Conditional Rendering',
        commands: [
          { command: '{condition && <Component />}', description: 'Conditional rendering with &&' },
          { command: '{condition ? <A /> : <B />}', description: 'Conditional rendering with ternary' },
          { command: '{items.map(item => <Item key={item.id} />)}', description: 'Render list of components' },
          { command: 'style={{color: "red"}}', description: 'Inline styles' },
          { command: 'className={`base ${active ? "active" : ""}`}', description: 'Dynamic class names' }
        ]
      }
    ]
  };

  $: filteredGuides = searchQuery
    ? guides[activeCategory].map(section => ({
        ...section,
        commands: section.commands.filter(cmd =>
          cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.commands.length > 0)
    : guides[activeCategory];

  async function copyToClipboard(text, id) {
    try {
      await navigator.clipboard.writeText(text);
      copiedItems.add(id);
      copiedItems = new Set(copiedItems);
      setTimeout(() => {
        copiedItems.delete(id);
        copiedItems = new Set(copiedItems);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }
</script>

<svelte:head>
  <title>Guides & Cheat Sheets - Giorgi Tchanturia</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- Header -->
  <section class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Guides & Cheat Sheets
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Quick reference guides for common development commands and patterns
        </p>
        
        <!-- Search -->
        <div class="max-w-md mx-auto relative">
          <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="20" />
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search commands..."
            class="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Category Sidebar -->
      <div class="lg:col-span-1">
        <div class="card p-6 sticky top-24">
          <h2 class="text-lg font-semibold mb-4">Categories</h2>
          <div class="space-y-2">
            {#each categories as category}
              <button
                on:click={() => { activeCategory = category.id; searchQuery = ''; }}
                class="w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3
                  {activeCategory === category.id 
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'}"
              >
                <svelte:component this={category.icon} size="18" class={category.color} />
                <span class="font-medium">{category.name}</span>
              </button>
            {/each}
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="lg:col-span-3">
        {#if filteredGuides.length === 0}
          <div class="card p-8 text-center">
            <Search class="mx-auto text-gray-400 mb-4" size="48" />
            <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No commands found
            </h3>
            <p class="text-gray-500 dark:text-gray-500">
              Try a different search term or browse categories
            </p>
          </div>
        {:else}
          <div class="space-y-8">
            {#each filteredGuides as section}
              <div class="card p-6">
                <h3 class="text-xl font-semibold mb-4 flex items-center gap-3">
                  <svelte:component this={categories.find(c => c.id === activeCategory)?.icon} size="20" class={categories.find(c => c.id === activeCategory)?.color} />
                  {section.title}
                </h3>
                
                <div class="space-y-3">
                  {#each section.commands as cmd, index}
                    {@const commandId = `${activeCategory}-${section.title}-${index}`}
                    <div class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                      <div class="flex-1 min-w-0">
                        <div class="font-mono text-sm font-medium text-primary-600 dark:text-primary-400 break-all mb-1">
                          {cmd.command}
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-300">
                          {cmd.description}
                        </div>
                      </div>
                      <button
                        on:click={() => copyToClipboard(cmd.command, commandId)}
                        class="flex-shrink-0 p-2 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                        title="Copy to clipboard"
                      >
                        {#if copiedItems.has(commandId)}
                          <CheckCircle size="18" class="text-green-600" />
                        {:else}
                          <Copy size="18" />
                        {/if}
                      </button>
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>