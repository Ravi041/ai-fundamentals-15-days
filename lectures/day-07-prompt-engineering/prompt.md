# Day 07: Prompt Engineering That Actually Works

**Part 2: Working with LLMs** · Target runtime: 13 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 13 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 7 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Prompt Engineering That Actually Works". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Write prompts with role, context, task, format and constraints
- Use few-shot examples, step-by-step reasoning and structured output
- Use system prompts and iterate on prompts

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

- Visuals: A vague prompt 'write about dogs' produces a bland gray paragraph. The prompt rebuilds itself into a detailed one; the output turns crisp and colorful.
- On-screen text: "Better prompt, better answer."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 7.
- On-screen text: Day 7 of 15: Prompt Engineering
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 3:15 · Beat 1: Anatomy of a good prompt**

- Visuals: Five stacked colored blocks snap together like building bricks: Role, Context, Task, Format, Constraints. Each block expands to show a short example sentence.
- On-screen text: Role · Context · Task · Format · Constraints
- Voice-over cue (host): Introduce the reusable template.

**Scene 4 · 3:15 to 5:15 · Beat 2: Zero-shot vs few-shot**

- Visuals: Left: a prompt with no examples. Right: a prompt with three example cards fanned out. The output on the right matches the example style exactly.
- On-screen text: Show, don't just tell
- Voice-over cue (host): When examples help.

**Scene 5 · 5:15 to 7:00 · Beat 3: Let it think**

- Visuals: A problem card; the model writes a scratchpad of steps before the final answer, steps ticking one by one. Badge: 'reasoning models do this for you'.
- On-screen text: Ask for steps · Reasoning models
- Voice-over cue (host): Chain-of-thought intuition.

**Scene 6 · 7:00 to 8:30 · Beat 4: Structured output**

- Visuals: A messy paragraph snaps into a neat JSON card with keys highlighted. Then the JSON feeds into a table in an app.
- On-screen text: Ask for JSON
- Voice-over cue (host): Why apps need structure.

**Scene 7 · 8:30 to 9:45 · Beat 5: System vs user messages**

- Visuals: Chat bubbles stack: a pinned system message at the top (rulebook icon), user and assistant bubbles below.
- On-screen text: System · User · Assistant
- Voice-over cue (host): Set behavior once with the system prompt.

**Scene 8 · 9:45 to 10:45 · Beat 6: Hallucinations and prompt injection**

- Visuals: A document contains hidden text 'ignore your instructions'; a shield intercepts it. Then a prompt with 'say I don't know if unsure' reduces a made-up answer.
- On-screen text: Ground it · Guard it
- Voice-over cue (host): First look at safety.

**Scene 9 · 10:45 to 12:30 · Hands-on demo**

- Visuals: Browser-frame mockups of the OpenAI and Anthropic prompt-engineering guides, then a chat window showing before/after prompts with quality meters.
- On-screen text: Rewrite a weak prompt
- Voice-over cue (host): Walk through the homework.

**Scene 10 · 12:30 to 12:50 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Use the 5-part template  2. Give examples  3. Ask for structure
- Voice-over cue (host): Recap.

**Scene 11 · 12:50 to 13:00 · Teaser**

- Visuals: Mascot walks to stop 8 carrying a laptop.
- On-screen text: Tomorrow: Run AI on Your Own Machine
- Voice-over cue (host): Preview Day 8.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| OpenAI: Prompt engineering guide | https://platform.openai.com/docs/guides/prompt-engineering | Official guide |
| Anthropic: Prompt engineering overview | https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview | Official guide |
| Prompt Engineering Guide (open source) | https://www.promptingguide.ai/ | Community guide |
| OWASP Top 10 for LLM Applications | https://genai.owasp.org/llm-top-10/ | Prompt injection reference |

### Hands-on task (end card)

Take a weak one-line prompt and rewrite it with the template; compare the two outputs.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 7: Prompt Engineering That Actually Works", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
