<script>
  import { Palette, FileText, Clock, CheckSquare, Code, Type, Calculator, Search } from 'lucide-svelte';
  
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
          A collection of useful tools to make your development workflow more efficient
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
                <div>
                  <div class="font-medium">{tool.title}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">{tool.category}</div>
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
                  <label class="block text-sm font-medium mb-2">Formatted Output:</label>
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
                      <label class="block text-sm font-medium mb-2 uppercase">{format}:</label>
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
                  <label class="block text-sm font-medium mb-2">Human Readable Date:</label>
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
                <div class="text-center text-gray-600 dark:text-gray-400">
                  <p>Base64 Encoder/Decoder tool coming soon!</p>
                  <p class="text-sm mt-2">This tool will allow you to encode and decode Base64 strings.</p>
                </div>
              </div>
            {/if}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>