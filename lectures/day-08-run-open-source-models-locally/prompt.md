# Day 08: Running Open-Source Models on Your Own Machine

**Part 2: Working with LLMs** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 8 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Running Open-Source Models on Your Own Machine". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Run an open model locally with Ollama or LM Studio
- Understand parameters, quantization and hardware needs
- Use a Hugging Face model in Colab with transformers

### Visual style (apply to every scene)

- **Resolution and format:** 3840 x 2160 (4K UHD), 16:9, 30 fps, H.264 or ProRes master. Title-safe margins of 5% on all sides.
- **Background:** warm cream paper, solid `#F7F1E3`, with a very subtle paper grain and a soft vignette. Never pure white, never dark mode.
- **Ink and text:** charcoal `#2B2B2B` for text and outlines; secondary text `#6B6458`; soft shadows `#E6DCC6`.
- **Part accent color:** Indigo `#4C5FD5` for highlights, active elements and the progress bar. Supporting accents: mustard `#E9C46A`, muted red `#C8553D` (only for errors, myths and warnings).
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

- Visuals: A laptop with Wi-Fi turned off (crossed-out Wi-Fi icon) still answers questions in a chat window.
- On-screen text: "No internet. No API bill. Still AI."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 8 (end of Part 2).
- On-screen text: Day 8 of 15: Run Models Locally
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 2:30 · Beat 1: Why local**

- Visuals: Three badges pop in around a laptop: Privacy (lock), No per-token cost (crossed-out coin), Offline (plane).
- On-screen text: Privacy · Cost · Offline
- Voice-over cue (host): And the trade-offs vs ChatGPT and Claude.

**Scene 4 · 2:30 to 4:30 · Beat 2: Parameters and hardware**

- Visuals: Size comparison: 1B as a lunchbox, 7B as a backpack, 70B as a truck. A RAM gauge next to each fills to show memory needed. GPU vs CPU speed race.
- On-screen text: 1B · 7B · 70B
- Voice-over cue (host): Rule of thumb for what your laptop can run.

**Scene 5 · 4:30 to 6:15 · Beat 3: Quantization**

- Visuals: A high-resolution image steps down to lower resolution while staying recognizable; labels 16-bit -> 8-bit -> 4-bit and the file size shrinks. A GGUF file icon appears.
- On-screen text: Smaller weights, nearly the same smarts
- Voice-over cue (host): Why 4-bit models fit on laptops.

**Scene 6 · 6:15 to 9:00 · Beat 4: Ollama walkthrough**

- Visuals: Large terminal card with animated arrows: 'ollama pull', 'ollama run', then a curl / Python call to localhost:11434. A model file flies into the laptop as it downloads.
- On-screen text: pull · run · call the local API
- Voice-over cue (host): Explain each command.

**Scene 7 · 9:00 to 11:00 · Beat 5: Hugging Face in Colab**

- Visuals: Colab notebook card: 'from transformers import pipeline' types in; a pipeline machine takes text in and returns generated text. A free GPU badge glows.
- On-screen text: transformers pipeline
- Voice-over cue (host): The other way to use open models.

**Scene 8 · 11:00 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups: Ollama site and model library, LM Studio site, Hugging Face pipeline docs. Placeholder for terminal screen recording.
- On-screen text: Run Llama or Qwen on your laptop
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Local = private and free to run  2. Pick size for your RAM  3. Quantize to fit
- Voice-over cue (host): Recap; Part 2 complete.

**Scene 10 · 13:45 to 14:00 · Teaser**

- Visuals: Map turns coral as the mascot enters Part 3.
- On-screen text: Tomorrow: Your First API Calls
- Voice-over cue (host): Preview Day 9 and Part 3.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| Ollama | https://ollama.com/ | Run models locally |
| Ollama on GitHub | https://github.com/ollama/ollama | Docs and API reference |
| LM Studio | https://lmstudio.ai/ | Desktop app for local models |
| llama.cpp | https://github.com/ggml-org/llama.cpp | Engine behind GGUF and quantization |
| Transformers: Pipelines | https://huggingface.co/docs/transformers/main_classes/pipelines | Hugging Face pipeline docs |
| Google Colab | https://colab.research.google.com/ | Free GPU notebooks |

### Hands-on task (end card)

Install Ollama, run a small Llama or Qwen model, and call it from Python.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 8: Running Open-Source Models on Your Own Machine", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
