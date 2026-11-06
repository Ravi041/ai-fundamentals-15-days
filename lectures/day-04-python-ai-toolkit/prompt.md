# Day 04: Python and Your AI Toolkit in 15 Minutes

**Part 1: Foundations** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 4 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Python and Your AI Toolkit in 15 Minutes". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

### Learning goals

- Set up Google Colab and VS Code
- Read and run basic Python: variables, lists, dicts, functions, loops
- Install packages with pip and keep API keys safe in a .env file

### Visual style (apply to every scene)

- **Resolution and format:** 3840 x 2160 (4K UHD), 16:9, 30 fps, H.264 or ProRes master. Title-safe margins of 5% on all sides.
- **Background:** warm cream paper, solid `#F7F1E3`, with a very subtle paper grain and a soft vignette. Never pure white, never dark mode.
- **Ink and text:** charcoal `#2B2B2B` for text and outlines; secondary text `#6B6458`; soft shadows `#E6DCC6`.
- **Part accent color:** Teal `#2A9D8F` for highlights, active elements and the progress bar. Supporting accents: mustard `#E9C46A`, muted red `#C8553D` (only for errors, myths and warnings).
- **Typography:** rounded geometric sans (e.g. Poppins or Inter) for headings, 96 to 140 px; body labels 48 to 64 px. Code in a monospace font (e.g. JetBrains Mono) at 44 px or larger on a rounded off-white code card `#FFFBF2` with a thin charcoal border.
- **Illustration style:** flat 2D explainer graphics, thick rounded outlines (6 to 8 px at 4K), soft drop shadows, simple icons, no photorealism, no stock footage.
- **Motion:** smooth ease-in-out, 0.4 to 0.8 s per element, gentle overshoot on pop-ins, elements build in one idea at a time. Camera moves are slow pushes and pans only. No flashing, no fast cuts.
- **Mascot:** "Token", a small round friendly robot drawn in the same flat style, appears on the journey map and occasionally reacts in scenes.
- **Web page references:** show each public doc page inside a clean rounded browser-window frame (no real browser chrome, just three dots and the URL in a pill), floating on the cream background with a soft shadow. Zoom and highlight the relevant section with an accent-colored rounded rectangle and an arrow callout. Show the URL clearly at the bottom of the frame for 3 seconds or more.
- **Logos:** use plain text labels for company and model names instead of official logos unless brand assets are licensed.

### Audio

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
- Keep each scene's visuals readable without audio, and hold the final state of each beat 1 to 2 seconds so it can be stretched to match the voice-over.

### Scene-by-scene storyboard

Timings are targets; stretch or trim each scene to fit the recorded voice-over.

**Scene 1 · 0:00 to 0:30 · Cold open hook**

- Visuals: A toolbox on the cream canvas bursts open and tool icons fly out and land in a row: Python, Colab, VS Code, pip, Git, a key.
- On-screen text: "Six tools. Fifteen minutes."
- Voice-over cue (host): Hook: you don't need a CS degree.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 4 (end of Part 1).
- On-screen text: Day 4 of 15: Your AI Toolkit
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 2:30 · Beat 1: Notebooks vs scripts**

- Visuals: Two panels: a notebook made of stacked cells that run one by one with outputs appearing below each, versus a single .py file that runs top to bottom. Labels: 'Explore' and 'Ship'.
- On-screen text: Notebook = explore · Script = ship
- Voice-over cue (host): When to use Colab, when to use VS Code.

**Scene 4 · 2:30 to 7:30 · Beat 2: Just-enough Python**

- Visuals: Code-card animation: each concept types itself on a large rounded code card with syntax colors matched to the palette, then an output bubble pops out. Order: variables, lists, dictionaries (shown as a labeled locker), functions (a machine with input/output), for loops (a conveyor belt), f-strings. Keep code at 48px+ so it reads at 4K and on phones.
- On-screen text: variables · lists · dicts · functions · loops
- Voice-over cue (host): Explain each snippet as it types.

**Scene 5 · 7:30 to 9:00 · Beat 3: pip and virtual environments**

- Visuals: A terminal card shows 'pip install openai anthropic'. Package boxes drop into a glass container labeled 'venv' so they don't spill onto the system. A requirements.txt scroll unrolls listing the packages.
- On-screen text: pip · venv · requirements.txt
- Voice-over cue (host): Why isolate projects.

**Scene 6 · 9:00 to 10:30 · Beat 4: Keep keys secret**

- Visuals: A key icon slides into a vault labeled '.env'. Then show the wrong way: the key pasted into code; a red warning flashes and a cartoon bot on GitHub grabs it. Then the right way: os.getenv reads from the vault.
- On-screen text: Never put API keys in code
- Voice-over cue (host): .env + python-dotenv; .gitignore.

**Scene 7 · 10:30 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups in sequence: Colab new notebook, VS Code download page, OpenAI platform sign-up, Anthropic console sign-up, Hugging Face sign-up. Callouts on each button. Placeholder area for screen recording.
- On-screen text: Set up your workspace
- Voice-over cue (host): Walk through the homework.

**Scene 8 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Colab to explore, VS Code to build  2. pip + venv per project  3. Keys live in .env
- Voice-over cue (host): Recap; Part 1 complete.

**Scene 9 · 13:45 to 14:00 · Teaser**

- Visuals: Journey map changes color from teal to indigo as the mascot enters Part 2.
- On-screen text: Tomorrow: Inside an LLM
- Voice-over cue (host): Preview Day 5 and Part 2.

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,250 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[toolbox bursts open]** A lot of people think you need a computer science degree to build with AI. You don't.

**[tools land in a row]** You need six tools: Python, Colab, VS Code, pip, Git, and a safe place to keep your keys. In the next fifteen minutes, you'll set up every one of them.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 4]** Welcome to Day 4, the last stop of Part 1. So far it's been ideas. From here on, we start building, so today is all about getting your workspace ready.

#### Scene 3 · 0:45 to 2:30 · Notebooks vs scripts

**[two panels]** You'll write Python in two different ways, and it helps to know which is which.

**[notebook cells run one by one]** On the left is a **notebook**. It's made of small boxes called cells. You run one cell, see the result right underneath, then run the next. It's perfect for exploring, trying ideas and seeing results straight away. We'll use **Google Colab**, which gives you free notebooks in your browser, nothing to install, and even free access to a GPU.

**[single .py file]** On the right is a **script**, a single file ending in dot p y that runs from top to bottom in one go. Scripts are what you ship: apps, servers, tools that other people use. For scripts, we'll use **VS Code**, a free code editor.

**[labels: Explore and Ship]** So the rule of thumb is simple. Notebook to explore. Script to ship. You'll use Colab for the first half of the course, and VS Code more and more as we build real apps.

#### Scene 4 · 2:30 to 7:30 · Just-enough Python

**[code card: variables]** Now, just enough Python to follow every lecture. Let's start with **variables**. A variable is a name for a value. Here, `name` equals "Ravi" and `age` equals thirty. The equals sign means "store this". Text goes in quotes, and numbers don't.

**[output bubble]** Ask Python to print `name`, and out comes the value.

**[code card: lists]** Next, **lists**. A list holds several values in order, inside square brackets. Here's a list of models: "gpt", "claude", "llama". To get the first one, write `models[0]`. Python starts counting at zero, which trips everyone up at first, so don't worry if it does. You can add to a list with `models.append("gemma")`, and count what's in it with `len(models)`.

**[code card: dictionaries, locker]** Then **dictionaries**. Picture a row of labeled lockers. Each locker has a label, called a key, and something inside, called a value. Here the key "role" holds "user", and the key "content" holds "Hello!". Look closely at this one. When we send messages to ChatGPT and Claude on Day 9, every message is a dictionary exactly like this. To read a value, use its key in square brackets: `message["content"]` hands you back "Hello!".

**[code card: functions, machine]** Next, **functions**. A function is a little machine. You put something in, it does some work, and it hands something back. We write `def`, a name, and the inputs in brackets. This one, called `greet`, takes a name and returns "Hello" plus that name. Notice the indent. In Python, the indented lines are the inside of the function. To use it, write its name with brackets: `greet("Ravi")` hands back "Hello, Ravi". Write it once, use it a thousand times.

**[code card: for loop, conveyor belt]** Now **loops**. A for loop is a conveyor belt. It takes each item from a list, one at a time, and runs the same code on it. "For each model in models, print the model." Three items, three prints.

**[code card: f-strings]** And last, **f-strings**. Put the letter f before the quotes, and you can drop variables straight into text with curly braces. So this prints: "Ravi is learning AI". You'll use these all the time to build prompts.

**[all six concepts]** That's it. Variables, lists, dictionaries, functions, loops and f-strings. With just these six, you can read almost every code example in this course. You don't need to memorize them. Pause the video, type them into a Colab cell and run them. Typing it yourself is how it sticks.

#### Scene 5 · 7:30 to 9:00 · pip and virtual environments

**[terminal: pip install openai anthropic]** Python can do a lot on its own, but most AI work uses packages other people have written. To install them, we use **pip**. Typing `pip install openai anthropic` downloads the official libraries for talking to ChatGPT and Claude.

**[packages drop into the venv container]** But if you install everything onto your computer directly, different projects start to fight over versions. So we give each project its own clean box, called a **virtual environment**, or venv. Packages go into the box, not onto your whole system. You create one with `python -m venv .venv`.

**[requirements.txt unrolls]** And to remember what's in the box, we list the packages in a file called `requirements.txt`. Anyone can rebuild your setup with one command: `pip install -r requirements.txt`.

#### Scene 6 · 9:00 to 10:30 · Keep keys secret

**[key slides into the .env vault]** To use paid models, you'll get an **API key**. It's like a password plus a credit card in one. Anyone who has it can spend your money.

**[key pasted in code, red warning, bot grabs it]** So here's the mistake to never make: pasting the key straight into your code. If that code lands on GitHub, automated bots scan for keys within minutes and start using them.

**[os.getenv reads from the vault]** The right way: put the key in a file called dot env. Load it with a small package called **python-dotenv**, and read it in your code with `os.getenv`. Then add dot env to your `.gitignore` file, so Git never uploads it. Key in the vault, never in the code. And if you ever do leak a key by accident, don't panic. Go to the provider's dashboard, delete that key straight away, and create a new one. A deleted key is useless to anyone who finds it.

#### Scene 7 · 10:30 to 13:15 · Set up your workspace

**[Colab new notebook]** Let's set everything up. First, go to colab.research.google.com, sign in with a Google account, and click **New notebook**. Type `print("Hello, AI")` into the first cell, and press Shift and Enter to run it. Congratulations, you've run Python.

**[Colab pip install]** In a new cell, type `!pip install openai`. The exclamation mark runs it as a terminal command. Watch it install.

**[VS Code download page]** Next, download VS Code from code.visualstudio.com and install it. Open the Extensions panel and add the official **Python** extension. That's all you need for now.

**[OpenAI platform sign-up]** Now the accounts. Go to platform.openai.com and create an account. This is the developer platform, which is separate from the ChatGPT app. You'll need a small amount of credit to use the API later. Don't make a key yet, we'll do that together on Day 9.

**[Anthropic console sign-up]** Do the same at console.anthropic.com for Claude. While you're in each console, find the billing or usage page and set a small monthly spending limit now, before you ever create a key. It's a two-minute job that protects you from surprises later.

**[Hugging Face sign-up]** And finally, create a free account at huggingface.co. That's the home of open-source models, and we'll use it a lot in Part 2.

**[hold]** That's your homework: one notebook run, one package installed, and three accounts ready. It takes about twenty minutes, and then you're set up for the rest of the course.

#### Scene 8 · 13:15 to 13:45 · Recap

**[card slides up]** Quick recap.

**[check 1]** Colab to explore, VS Code to build.

**[check 2]** Use pip and a fresh venv for every project.

**[check 3]** And your keys live in dot env, never in your code. That's Part 1 complete. Well done.

#### Scene 9 · 13:45 to 14:00 · Teaser

**[map turns from teal to indigo]** Tomorrow we start Part 2 and look inside a large language model: tokens, embeddings and transformers. See you on Day 5.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| Python tutorial | https://docs.python.org/3/tutorial/ | Official beginner tutorial |
| Google Colab | https://colab.research.google.com/ | Free notebooks with GPUs |
| VS Code: Python tutorial | https://code.visualstudio.com/docs/python/python-tutorial | Editor setup |
| pip documentation | https://pip.pypa.io/en/stable/ | Package installer |
| venv (Python docs) | https://docs.python.org/3/library/venv.html | Virtual environments |
| python-dotenv | https://pypi.org/project/python-dotenv/ | Load keys from .env |
| Hugging Face: Join | https://huggingface.co/join | Account for open models |

### Hands-on task (end card)

Open Google Colab, run a first notebook, pip install a package, and create OpenAI, Anthropic and Hugging Face accounts.

### Deliverables

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 4: Python and Your AI Toolkit in 15 Minutes", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
