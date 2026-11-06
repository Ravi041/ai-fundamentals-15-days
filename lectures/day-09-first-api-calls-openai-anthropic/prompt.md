# Day 09: Your First API Calls: OpenAI and Anthropic

**Part 3: Building AI Apps** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 9 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Your First API Calls: OpenAI and Anthropic". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Call the OpenAI and Anthropic APIs from Python
- Understand messages, roles, parameters and the response
- Handle chat history, streaming, errors and cost

### Visual style (apply to every scene)

- **Resolution and format:** 3840 x 2160 (4K UHD), 16:9, 30 fps, H.264 or ProRes master. Title-safe margins of 5% on all sides.
- **Background:** warm cream paper, solid `#F7F1E3`, with a very subtle paper grain and a soft vignette. Never pure white, never dark mode.
- **Ink and text:** charcoal `#2B2B2B` for text and outlines; secondary text `#6B6458`; soft shadows `#E6DCC6`.
- **Part accent color:** Coral `#E76F51` for highlights, active elements and the progress bar. Supporting accents: mustard `#E9C46A`, muted red `#C8553D` (only for errors, myths and warnings).
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

- Visuals: Eight lines of code type in; a terminal chatbot comes to life and replies.
- On-screen text: "Your own chatbot in 8 lines."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Coral map, mascot at stop 9.
- On-screen text: Day 9 of 15: First API Calls
- Voice-over cue (host): Welcome to Part 3.

**Scene 3 · 0:45 to 2:45 · Beat 1: What an API is**

- Visuals: An envelope (request) with a key stamp flies from a laptop to a cloud labeled 'Model'; a reply envelope flies back. The envelope opens to show model, messages, max tokens.
- On-screen text: Request -> Model -> Response
- Voice-over cue (host): APIs in plain English; keys and billing.

**Scene 4 · 2:45 to 5:30 · Beat 2: OpenAI vs Anthropic side by side**

- Visuals: Split-screen code cards: OpenAI Python SDK on the left, Anthropic Python SDK on the right. Matching lines highlight together (client, model, messages, response text).
- On-screen text: Same idea, two SDKs
- Voice-over cue (host): Walk through both.

**Scene 5 · 5:30 to 7:30 · Beat 3: Messages and memory**

- Visuals: Chat history as a stack of cards that grows each turn and is sent in full with every request. A token counter grows with the stack.
- On-screen text: The model has no memory; you send the history
- Voice-over cue (host): Multi-turn chat.

**Scene 6 · 7:30 to 9:00 · Beat 4: Streaming**

- Visuals: Two replies: one appears all at once after a wait, the other streams in word by word. A stopwatch compares perceived speed.
- On-screen text: Stream for a snappy UX
- Voice-over cue (host): How streaming works.

**Scene 7 · 9:00 to 10:30 · Beat 5: Cost, limits and errors**

- Visuals: A live cost meter ticks up as tokens stream (input and output priced separately). Then a rate-limit wall bounces a request; a retry arrow with a clock waits and succeeds.
- On-screen text: Tokens = money · Retry on rate limits
- Voice-over cue (host): Read usage from the response.

**Scene 8 · 10:30 to 11:15 · Beat 6: Swap in a local model**

- Visuals: The cloud target swaps to a laptop running Ollama; the code changes only the base URL and model name.
- On-screen text: Same pattern, local model
- Voice-over cue (host): Callback to Day 8.

**Scene 9 · 11:15 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups of the OpenAI and Anthropic quickstart pages and the SDK GitHub pages. Placeholder for VS Code screen recording.
- On-screen text: Build a CLI chatbot
- Voice-over cue (host): Walk through the homework.

**Scene 10 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Send messages, get text  2. You manage history  3. Watch tokens and cost
- Voice-over cue (host): Recap.

**Scene 11 · 13:45 to 14:00 · Teaser**

- Visuals: Mascot walks to stop 10 holding a PDF.
- On-screen text: Tomorrow: Chat With Your Documents (RAG)
- Voice-over cue (host): Preview Day 10.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| OpenAI developer quickstart | https://platform.openai.com/docs/quickstart | First API call |
| OpenAI Python SDK | https://github.com/openai/openai-python | Open-source SDK |
| Anthropic: Get started | https://platform.claude.com/docs/en/get-started | First Claude API call |
| Anthropic Python SDK | https://github.com/anthropics/anthropic-sdk-python | Open-source SDK |
| Ollama: OpenAI compatibility | https://github.com/ollama/ollama/blob/main/docs/openai.md | Use the same code with a local model |

### Hands-on task (end card)

Build a command-line chatbot that remembers the conversation; switch it between OpenAI, Claude and a local Ollama model.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 9: Your First API Calls: OpenAI and Anthropic", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
