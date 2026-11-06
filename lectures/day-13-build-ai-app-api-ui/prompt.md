# Day 13: Turning Your AI Into an App: APIs and UIs

**Part 4: Shipping** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 13 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Turning Your AI Into an App: APIs and UIs". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Build a chat UI in Streamlit or Gradio
- Expose a model as a REST API with FastAPI
- Structure a small AI project properly

### Visual style (apply to every scene)

- **Resolution and format:** 3840 x 2160 (4K UHD), 16:9, 30 fps, H.264 or ProRes master. Title-safe margins of 5% on all sides.
- **Background:** warm cream paper, solid `#F7F1E3`, with a very subtle paper grain and a soft vignette. Never pure white, never dark mode.
- **Ink and text:** charcoal `#2B2B2B` for text and outlines; secondary text `#6B6458`; soft shadows `#E6DCC6`.
- **Part accent color:** Forest green `#3A7D44` for highlights, active elements and the progress bar. Supporting accents: mustard `#E9C46A`, muted red `#C8553D` (only for errors, myths and warnings).
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

- Visuals: A notebook cell unfolds like origami into a polished web chat app on a laptop and a phone.
- On-screen text: "From notebook to app."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Green map, mascot at stop 13.
- On-screen text: Day 13 of 15: Build the App
- Voice-over cue (host): Welcome to Part 4.

**Scene 3 · 0:45 to 2:45 · Beat 1: Frontend vs backend**

- Visuals: Layered architecture builds top to bottom: UI (browser) -> API (FastAPI) -> Model (OpenAI / Claude / Ollama). Request dots flow down and responses flow back up.
- On-screen text: UI · API · Model
- Voice-over cue (host): Why split them.

**Scene 4 · 2:45 to 5:30 · Beat 2: Streamlit and Gradio**

- Visuals: Code card of a 15-line Streamlit chat app types in; beside it the rendered app appears and chat bubbles fill. Then a Gradio version appears in a second frame for comparison.
- On-screen text: Streamlit · Gradio
- Voice-over cue (host): Session state keeps chat history.

**Scene 5 · 5:30 to 8:15 · Beat 3: FastAPI**

- Visuals: Code card for a /chat endpoint; a request card (JSON) flies in and a response card flies out. The auto-generated /docs page appears in a browser frame.
- On-screen text: POST /chat
- Voice-over cue (host): Endpoints, request models, streaming.

**Scene 6 · 8:15 to 9:45 · Beat 4: Project structure**

- Visuals: Folder tree assembles file by file: app/, prompts/, config.py, .env, requirements.txt, README.md, .gitignore.
- On-screen text: A clean AI project layout
- Voice-over cue (host): Where things go and why.

**Scene 7 · 9:45 to 10:45 · Beat 5: Serving open models**

- Visuals: The Model layer swaps between a cloud API and a local server (Ollama or vLLM) without changing the UI layer.
- On-screen text: Swap the model, keep the app
- Voice-over cue (host): vLLM for higher traffic.

**Scene 8 · 10:45 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups: Streamlit chat tutorial, Gradio docs, FastAPI tutorial. Placeholder for VS Code screen recording.
- On-screen text: Ship a chat UI + API locally
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. UI talks to API  2. API talks to model  3. Keep secrets in .env
- Voice-over cue (host): Recap.

**Scene 10 · 13:45 to 14:00 · Teaser**

- Visuals: Mascot walks to stop 14; a cloud rises.
- On-screen text: Tomorrow: Deploy to the Cloud
- Voice-over cue (host): Preview Day 14.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| Streamlit: Build a chat app | https://docs.streamlit.io/develop/tutorials/chat-and-llm-apps/build-conversational-apps | Chat UI tutorial |
| Gradio docs | https://www.gradio.app/docs | Open-source UI library |
| FastAPI tutorial | https://fastapi.tiangolo.com/tutorial/ | Open-source API framework |
| vLLM docs | https://docs.vllm.ai/ | Open-source model serving |
| Ollama API | https://github.com/ollama/ollama/blob/main/docs/api.md | Local model API |

### Hands-on task (end card)

Wrap the Day 9 chatbot in a Streamlit UI and a FastAPI endpoint.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 13: Turning Your AI Into an App: APIs and UIs", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
