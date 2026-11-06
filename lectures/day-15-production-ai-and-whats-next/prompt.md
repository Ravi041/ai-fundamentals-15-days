# Day 15: Production AI: Cost, Safety, Evaluation and What's Next

**Part 4: Shipping** · Target runtime: 15 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 15 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 15 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Production AI: Cost, Safety, Evaluation and What's Next". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Estimate and control the running cost of an AI app
- Evaluate output quality with simple tests
- Apply safety basics: prompt injection, privacy, moderation
- Plan next steps, including the 5 projects

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

- Visuals: An app goes viral; a bill counter spins up fast and a user screenshot shows a wrong answer. Freeze.
- On-screen text: "Shipping is day one."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at the final stop 15.
- On-screen text: Day 15 of 15: Production AI
- Voice-over cue (host): Last lecture.

**Scene 3 · 0:45 to 3:30 · Beat 1: Cost levers**

- Visuals: Cost dashboard with dials. Each optimization drops a dial: smaller model, prompt caching, shorter prompts, batching, routing easy questions to a small model.
- On-screen text: Model choice · Caching · Shorter prompts · Batching · Routing
- Voice-over cue (host): Where the money goes.

**Scene 4 · 3:30 to 6:15 · Beat 2: Evals**

- Visuals: A scorecard of test questions; each row turns green or red. An 'LLM-as-judge' robot grades answers. A regression check blocks a prompt change that turns rows red.
- On-screen text: Test sets · LLM-as-judge · Regression checks
- Voice-over cue (host): Never change prompts blind.

**Scene 5 · 6:15 to 8:45 · Beat 3: Security**

- Visuals: A document with hidden instructions approaches; a shield blocks it. Then a data-leak pipe gets a valve; a rate-limit gate slows a flood of requests.
- On-screen text: Prompt injection · Data leaks · Rate limits
- Voice-over cue (host): OWASP LLM Top 10 as the checklist.

**Scene 6 · 8:45 to 10:15 · Beat 4: Responsible AI**

- Visuals: Four tiles flip: Bias, Transparency, Consent, Privacy laws, each with a one-line practice.
- On-screen text: Build AI people can trust
- Voice-over cue (host): Practical habits.

**Scene 7 · 10:15 to 11:30 · Beat 5: Observability**

- Visuals: A trace view: prompt -> retrieval -> model -> response, each with latency and token counts. A slow step highlights.
- On-screen text: Log prompts, responses, latency, errors
- Voice-over cue (host): Open-source tools to do it.

**Scene 8 · 11:30 to 13:45 · Hands-on demo**

- Visuals: Browser-frame mockups: promptfoo docs, Langfuse docs, OWASP LLM Top 10, OpenAI moderation guide. Placeholder for screen recording.
- On-screen text: Add cost tracking and evals
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:45 to 14:30 · Course recap**

- Visuals: The full journey map lights up stop by stop from 1 to 15 in each part color, with a one-word label per stop.
- On-screen text: 15 days: from zero to deployed
- Voice-over cue (host): Celebrate what viewers can now do.

**Scene 10 · 14:30 to 15:00 · Project teaser**

- Visuals: Five doors open one by one with 'Project 1' to 'Project 5' labels and light spilling out.
- On-screen text: Next: 5 real-world AI projects
- Voice-over cue (host): Invite viewers to subscribe for the projects.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| OWASP Top 10 for LLM Applications | https://genai.owasp.org/llm-top-10/ | Security checklist |
| promptfoo | https://www.promptfoo.dev/docs/intro/ | Open-source evals |
| Langfuse | https://langfuse.com/docs | Open-source LLM observability |
| Ragas | https://docs.ragas.io/ | Open-source RAG evaluation |
| OpenAI: Moderation | https://platform.openai.com/docs/guides/moderation | Content moderation |
| Anthropic: Prompt caching | https://platform.claude.com/docs/en/build-with-claude/prompt-caching | Cost lever |
| OpenAI: Prompt caching | https://platform.openai.com/docs/guides/prompt-caching | Cost lever |

### Hands-on task (end card)

Add a token-cost tracker and a 10-question eval set to your deployed app.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 15: Production AI: Cost, Safety, Evaluation and What's Next", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
