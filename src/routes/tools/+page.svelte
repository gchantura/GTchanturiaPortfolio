<script>
  import { 
    Palette, FileText, Clock, CheckSquare, Code, Type, Calculator, Search, 
    Hash, Link, Zap, Database, Globe, Lock, Unlock, Eye, EyeOff, Copy, CheckCircle 
  } from 'lucide-svelte';
  
  let jsonInput = '';
  let jsonOutput = '';
  let selectedColor = '#3b82f6';
  let timestamp = '';
  let convertedDate = '';
  let regex = '';
  let testString = '';
  let regexMatches = [];
  let text1 = '';
  let text2 = '';
  let textDiff = '';
  let base64Input = '';
  let base64Output = '';
  let base64Mode = 'encode';
  let urlInput = '';
  let urlOutput = '';
  let urlMode = 'encode';
  let hashInput = '';
  let hashOutput = '';
  let hashAlgorithm = 'md5';
  let passwordLength = 16;
  let passwordOptions = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  };
  let generatedPassword = '';
  let showPassword = false;
  let copiedItems = new Set();

  const tools = [
    {
      id: 'json-formatter',
      title: 'JSON Formatter',
      description: 'Format and validate JSON data',
      icon: FileText,
      category: 'Data'
    },
    {
      id: 'color-picker',
      title: 'Color Picker',
      description: 'Pick colors and get hex, RGB, HSL values',
      icon: Palette,
      category: 'Design'
    },
    {
      id: 'timestamp-converter',
      title: 'Timestamp Converter',
      description: 'Convert between timestamps and readable dates',
      icon: Clock,
      category: 'Utility'
    },
    {
      id: 'regex-tester',
      title: 'Regex Tester',
      description: 'Test regular expressions against text',
      icon: Search,
      category: 'Development'
    },
    {
      id: 'text-diff',
      title: 'Text Diff Tool',
      description: 'Compare two texts and highlight differences',
      icon: CheckSquare,
      category: 'Utility'
    },
    {
      id: 'base64-encoder',
      title: 'Base64 Encoder/Decoder',
      description: 'Encode and decode Base64 strings',
      icon: Code,
      category: 'Data'
    },
    {
      id: 'url-encoder',
      title: 'URL Encoder/Decoder',
      description: 'Encode and decode URL strings',
      icon: Link,
      category: 'Web'
    },
    {
      id: 'hash-generator',
      title: 'Hash Generator',
      description: 'Generate MD5, SHA-1, SHA-256 hashes',
      icon: Hash,
      category: 'Security'
    },
    {
      id: 'password-generator',
      title: 'Password Generator',
      description: 'Generate secure random passwords',
      icon: Lock,
      category: 'Security'
    },
    {
      id: 'lorem-generator',
      title: 'Lorem Ipsum Generator',
      description: 'Generate placeholder text for designs',
      icon: Type,
      category: 'Content'
    },
    {
      id: 'qr-generator',
      title: 'QR Code Generator',
      description: 'Generate QR codes from text',
      icon: Zap,
      category: 'Utility'
    },
    {
      id: 'sql-formatter',
      title: 'SQL Formatter',
      description: 'Format and beautify SQL queries',
      icon: Database,
      category: 'Development'
    }
  ];

  let activeToolId = 'json-formatter';
  $: activeTool = tools.find(tool => tool.id === activeToolId);

  function formatJSON() {
    try {
      const parsed = JSON.parse(jsonInput);
      jsonOutput = JSON.stringify(parsed, null, 2);
    } catch (error) {
      jsonOutput = `Error: ${error.message}`;
    }
  }

  function convertTimestamp() {
    try {
      const ts = parseInt(timestamp);
      if (isNaN(ts)) {
        convertedDate = 'Invalid timestamp';
        return;
      }
      
      const date = new Date(ts * 1000);
      convertedDate = date.toLocaleString();
    } catch (error) {
      convertedDate = `Error: ${error.message}`;
    }
  }

  function testRegex() {
    try {
      const regexObj = new RegExp(regex, 'g');
      regexMatches = [...testString.matchAll(regexObj)].map(match => ({
        match: match[0],
        index: match.index
      }));
    } catch (error) {
      regexMatches = [{ match: `Error: ${error.message}`, index: -1 }];
    }
  }

  function compareTexts() {
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');
    const maxLines = Math.max(lines1.length, lines2.length);
    
    let result = '';
    for (let i = 0; i < maxLines; i++) {
      const line1 = lines1[i] || '';
      const line2 = lines2[i] || '';
      
      if (line1 !== line2) {
        result += `Line ${i + 1}:\n`;
        result += `- ${line1}\n`;
        result += `+ ${line2}\n\n`;
      }
    }
    
    textDiff = result || 'No differences found';
  }

  function processBase64() {
    try {
      if (base64Mode === 'encode') {
        base64Output = btoa(base64Input);
      } else {
        base64Output = atob(base64Input);
      }
    } catch (error) {
      base64Output = `Error: ${error.message}`;
    }
  }

  function processURL() {
    try {
      if (urlMode === 'encode') {
        urlOutput = encodeURIComponent(urlInput);
      } else {
        urlOutput = decodeURIComponent(urlInput);
      }
    } catch (error) {
      urlOutput = `Error: ${error.message}`;
    }
  }

  async function generateHash() {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(hashInput);
      
      let hashBuffer;
      switch (hashAlgorithm) {
        case 'md5':
          // Simple MD5 implementation for demo
          hashOutput = 'MD5 not available in browser - use SHA-256 instead';
          return;
        case 'sha1':
          hashBuffer = await crypto.subtle.digest('SHA-1', data);
          break;
        case 'sha256':
          hashBuffer = await crypto.subtle.digest('SHA-256', data);
          break;
        default:
          hashOutput = 'Unsupported algorithm';
          return;
      }
      
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      hashOutput = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (error) {
      hashOutput = `Error: ${error.message}`;
    }
  }

  function generatePassword() {
    const chars = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };
    
    let charset = '';
    Object.keys(passwordOptions).forEach(key => {
      if (passwordOptions[key]) {
        charset += chars[key];
      }
    });
    
    if (!charset) {
      generatedPassword = 'Please select at least one character type';
      return;
    }
    
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    generatedPassword = password;
  }

  function getColorValues(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    const hsl = rgbToHsl(r, g, b);
    
    return {
      hex,
      rgb: `rgb(${r}, ${g}, ${b})`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    };
  }

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

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

  function getCategoryColor(category) {
    const colors = {
      'Data': 'text-blue-600',
      'Design': 'text-purple-600',
      'Utility': 'text-green-600',
      'Development': 'text-orange-600',
      'Web': 'text-teal-600',
      'Security': 'text-red-600',
      'Content': 'text-indigo-600'
    };
    return colors[category] || 'text-gray-600';
  }
</script>

<svelte:head>
  <title>Developer Tools - Giorgi Tchanturia</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- Header -->
  <section class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Developer Tools
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive collection of useful tools to make your development workflow more efficient and productive
        </p>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Tool Selection Sidebar -->
      <div class="lg:col-span-1">
        <div class="card p-6 sticky top-24">
          <h2 class="text-lg font-semibold mb-4">Available Tools</h2>
          <div class="space-y-2">
            {#each tools as tool}
              <button
                on:click={() => activeToolId = tool.id}
                class="w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3
                  {activeToolId === tool.id 
                    ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'}"
              >
                <svelte:component this={tool.icon} size="18" />
                <div class="flex-1">
                  <div class="font-medium">{tool.title}</div>
                  <div class="text-xs {getCategoryColor(tool.category)}">{tool.category}</div>
                </div>
              </button>
            {/each}
          </div>
        </div>
      </div>

      <!-- Tool Content -->
      <div class="lg:col-span-3">
        <div class="card p-8">
          {#if activeTool}
            <div class="mb-6">
              <h2 class="text-2xl font-bold flex items-center gap-3 mb-2">
                <svelte:component this={activeTool.icon} size="24" class="text-primary-600" />
                {activeTool.title}
                <span class="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 {getCategoryColor(activeTool.category)}">
                  {activeTool.category}
                </span>
              </h2>
              <p class="text-gray-600 dark:text-gray-400">{activeTool.description}</p>
            </div>

            <!-- JSON Formatter -->
            {#if activeToolId === 'json-formatter'}
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Input JSON:</label>
                  <textarea
                    bind:value={jsonInput}
                    placeholder="Paste your JSON here..."
                    class="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 font-mono text-sm"
                  ></textarea>
                </div>
                <button on:click={formatJSON} class="btn-primary">Format JSON</button>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium">Formatted Output:</label>
                    <button
                      on:click={() => copyToClipboard(jsonOutput, 'json-output')}
                      class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      {#if copiedItems.has('json-output')}
                        <CheckCircle size="16" class="text-green-600" />
                        Copied!
                      {:else}
                        <Copy size="16" />
                        Copy
                      {/if}
                    </button>
                  </div>
                  <pre class="w-full h-40 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 overflow-auto text-sm">{jsonOutput}</pre>
                </div>
              </div>
            {/if}

            <!-- Color Picker -->
            {#if activeToolId === 'color-picker'}
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Pick a Color:</label>
                  <input
                    type="color"
                    bind:value={selectedColor}
                    class="w-20 h-20 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer"
                  />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {#each Object.entries(getColorValues(selectedColor)) as [format, value]}
                    <div class="p-4 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <div class="flex items-center justify-between mb-2">
                        <label class="block text-sm font-medium uppercase">{format}:</label>
                        <button
                          on:click={() => copyToClipboard(value, `color-${format}`)}
                          class="text-sm text-primary-600 hover:text-primary-700"
                        >
                          {#if copiedItems.has(`color-${format}`)}
                            <CheckCircle size="16" class="text-green-600" />
                          {:else}
                            <Copy size="16" />
                          {/if}
                        </button>
                      </div>
                      <input
                        type="text"
                        {value}
                        readonly
                        class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 font-mono text-sm"
                      />
                    </div>
                  {/each}
                </div>
                <div class="h-20 rounded-lg border border-gray-300 dark:border-gray-600" style="background-color: {selectedColor}"></div>
              </div>
            {/if}

            <!-- Timestamp Converter -->
            {#if activeToolId === 'timestamp-converter'}
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Unix Timestamp:</label>
                  <input
                    type="text"
                    bind:value={timestamp}
                    placeholder="Enter Unix timestamp (seconds)"
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                  />
                </div>
                <button on:click={convertTimestamp} class="btn-primary">Convert</button>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium">Human Readable Date:</label>
                    <button
                      on:click={() => copyToClipboard(convertedDate, 'converted-date')}
                      class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      {#if copiedItems.has('converted-date')}
                        <CheckCircle size="16" class="text-green-600" />
                        Copied!
                      {:else}
                        <Copy size="16" />
                        Copy
                      {/if}
                    </button>
                  </div>
                  <input
                    type="text"
                    value={convertedDate}
                    readonly
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                  />
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Current timestamp: {Math.floor(Date.now() / 1000)}
                </div>
              </div>
            {/if}

            <!-- Regex Tester -->
            {#if activeToolId === 'regex-tester'}
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Regular Expression:</label>
                  <input
                    type="text"
                    bind:value={regex}
                    placeholder="Enter your regex pattern"
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 font-mono"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Test String:</label>
                  <textarea
                    bind:value={testString}
                    placeholder="Enter text to test against the regex"
                    class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                  ></textarea>
                </div>
                <button on:click={testRegex} class="btn-primary">Test Regex</button>
                <div>
                  <label class="block text-sm font-medium mb-2">Matches ({regexMatches.length}):</label>
                  <div class="space-y-2 max-h-40 overflow-auto">
                    {#each regexMatches as match, index}
                      <div class="p-3 bg-gray-50 dark:bg-gray-700 rounded border">
                        <span class="font-mono text-sm">{match.match}</span>
                        {#if match.index >= 0}
                          <span class="text-xs text-gray-500 ml-2">at position {match.index}</span>
                        {/if}
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/if}

            <!-- Text Diff Tool -->
            {#if activeToolId === 'text-diff'}
              <div class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-2">Text 1:</label>
                    <textarea
                      bind:value={text1}
                      placeholder="Enter first text"
                      class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                    ></textarea>
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">Text 2:</label>
                    <textarea
                      bind:value={text2}
                      placeholder="Enter second text"
                      class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                    ></textarea>
                  </div>
                </div>
                <button on:click={compareTexts} class="btn-primary">Compare Texts</button>
                <div>
                  <label class="block text-sm font-medium mb-2">Differences:</label>
                  <pre class="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 overflow-auto text-sm whitespace-pre-wrap">{textDiff}</pre>
                </div>
              </div>
            {/if}

            <!-- Base64 Encoder -->
            {#if activeToolId === 'base64-encoder'}
              <div class="space-y-6">
                <div class="flex gap-4 mb-4">
                  <label class="flex items-center">
                    <input type="radio" bind:group={base64Mode} value="encode" class="mr-2" />
                    Encode
                  </label>
                  <label class="flex items-center">
                    <input type="radio" bind:group={base64Mode} value="decode" class="mr-2" />
                    Decode
                  </label>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Input:</label>
                  <textarea
                    bind:value={base64Input}
                    placeholder={base64Mode === 'encode' ? 'Enter text to encode' : 'Enter Base64 to decode'}
                    class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                  ></textarea>
                </div>
                <button on:click={processBase64} class="btn-primary">
                  {base64Mode === 'encode' ? 'Encode' : 'Decode'}
                </button>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium">Output:</label>
                    <button
                      on:click={() => copyToClipboard(base64Output, 'base64-output')}
                      class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      {#if copiedItems.has('base64-output')}
                        <CheckCircle size="16" class="text-green-600" />
                        Copied!
                      {:else}
                        <Copy size="16" />
                        Copy
                      {/if}
                    </button>
                  </div>
                  <textarea
                    value={base64Output}
                    readonly
                    class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                  ></textarea>
                </div>
              </div>
            {/if}

            <!-- URL Encoder -->
            {#if activeToolId === 'url-encoder'}
              <div class="space-y-6">
                <div class="flex gap-4 mb-4">
                  <label class="flex items-center">
                    <input type="radio" bind:group={urlMode} value="encode" class="mr-2" />
                    Encode
                  </label>
                  <label class="flex items-center">
                    <input type="radio" bind:group={urlMode} value="decode" class="mr-2" />
                    Decode
                  </label>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Input:</label>
                  <textarea
                    bind:value={urlInput}
                    placeholder={urlMode === 'encode' ? 'Enter URL to encode' : 'Enter encoded URL to decode'}
                    class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                  ></textarea>
                </div>
                <button on:click={processURL} class="btn-primary">
                  {urlMode === 'encode' ? 'Encode' : 'Decode'}
                </button>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium">Output:</label>
                    <button
                      on:click={() => copyToClipboard(urlOutput, 'url-output')}
                      class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      {#if copiedItems.has('url-output')}
                        <CheckCircle size="16" class="text-green-600" />
                        Copied!
                      {:else}
                        <Copy size="16" />
                        Copy
                      {/if}
                    </button>
                  </div>
                  <textarea
                    value={urlOutput}
                    readonly
                    class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                  ></textarea>
                </div>
              </div>
            {/if}

            <!-- Hash Generator -->
            {#if activeToolId === 'hash-generator'}
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Algorithm:</label>
                  <select
                    bind:value={hashAlgorithm}
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                  >
                    <option value="md5">MD5 (Not available in browser)</option>
                    <option value="sha1">SHA-1</option>
                    <option value="sha256">SHA-256</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Input Text:</label>
                  <textarea
                    bind:value={hashInput}
                    placeholder="Enter text to hash"
                    class="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                  ></textarea>
                </div>
                <button on:click={generateHash} class="btn-primary">Generate Hash</button>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium">Hash Output:</label>
                    <button
                      on:click={() => copyToClipboard(hashOutput, 'hash-output')}
                      class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      {#if copiedItems.has('hash-output')}
                        <CheckCircle size="16" class="text-green-600" />
                        Copied!
                      {:else}
                        <Copy size="16" />
                        Copy
                      {/if}
                    </button>
                  </div>
                  <input
                    type="text"
                    value={hashOutput}
                    readonly
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 font-mono text-sm"
                  />
                </div>
              </div>
            {/if}

            <!-- Password Generator -->
            {#if activeToolId === 'password-generator'}
              <div class="space-y-6">
                <div>
                  <label class="block text-sm font-medium mb-2">Password Length: {passwordLength}</label>
                  <input
                    type="range"
                    bind:value={passwordLength}
                    min="4"
                    max="50"
                    class="w-full"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-2">Character Types:</label>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input type="checkbox" bind:checked={passwordOptions.uppercase} class="mr-2" />
                      Uppercase Letters (A-Z)
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" bind:checked={passwordOptions.lowercase} class="mr-2" />
                      Lowercase Letters (a-z)
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" bind:checked={passwordOptions.numbers} class="mr-2" />
                      Numbers (0-9)
                    </label>
                    <label class="flex items-center">
                      <input type="checkbox" bind:checked={passwordOptions.symbols} class="mr-2" />
                      Symbols (!@#$%^&*)
                    </label>
                  </div>
                </div>
                <button on:click={generatePassword} class="btn-primary">Generate Password</button>
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <label class="block text-sm font-medium">Generated Password:</label>
                    <div class="flex gap-2">
                      <button
                        on:click={() => showPassword = !showPassword}
                        class="text-sm text-gray-600 hover:text-gray-700"
                      >
                        {#if showPassword}
                          <EyeOff size="16" />
                        {:else}
                          <Eye size="16" />
                        {/if}
                      </button>
                      <button
                        on:click={() => copyToClipboard(generatedPassword, 'password-output')}
                        class="text-sm text-primary-600 hover:text-primary-700 flex items-center gap-1"
                      >
                        {#if copiedItems.has('password-output')}
                          <CheckCircle size="16" class="text-green-600" />
                          Copied!
                        {:else}
                          <Copy size="16" />
                          Copy
                        {/if}
                      </button>
                    </div>
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={generatedPassword}
                    readonly
                    class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 font-mono"
                  />
                </div>
              </div>
            {/if}

            <!-- Placeholder tools -->
            {#if ['lorem-generator', 'qr-generator', 'sql-formatter'].includes(activeToolId)}
              <div class="space-y-6">
                <div class="text-center text-gray-600 dark:text-gray-400 py-12">
                  <svelte:component this={activeTool.icon} size="48" class="mx-auto mb-4 text-gray-400" />
                  <h3 class="text-xl font-semibold mb-2">{activeTool.title}</h3>
                  <p class="mb-4">{activeTool.description}</p>
                  <p class="text-sm">This tool is coming soon! Check back later for more functionality.</p>
                </div>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>