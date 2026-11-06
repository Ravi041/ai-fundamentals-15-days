# Day 04: Python and Your AI Toolkit in 15 Minutes

**Part 1: Foundations** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 4 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Python and Your AI Toolkit in 15 Minutes". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

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

- **No AI narration.** The host records the voice-over separately. Leave the voice-over track empty.
- Light, warm background music bed at about -28 LUFS, ducking under voice. Soft UI sound effects (pops, whooshes, clicks) at low volume.
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

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 4: Python and Your AI Toolkit in 15 Minutes", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
