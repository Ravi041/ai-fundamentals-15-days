# Day 11: Tool Use and AI Agents

**Part 3: Building AI Apps** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 11 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Tool Use and AI Agents". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Understand function calling / tool use
- Build a model that calls a calculator and a weather API
- Know what an agent is, when to use one, and the risks

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

- Visuals: A user asks 'What's 18% tip on the bill, and will it rain in Delhi?'. The mascot brain reaches for a calculator and an umbrella-weather tool from a toolbelt and answers correctly.
- On-screen text: "Models that can do things."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 11.
- On-screen text: Day 11 of 15: Tools and Agents
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 3:00 · Beat 1: What tool use is**

- Visuals: Brain-with-toolbelt illustration. Tools as labeled cards with a JSON schema 'instruction label' on each (name, description, parameters).
- On-screen text: Describe tools · Model picks · Your code runs
- Voice-over cue (host): The model never runs code itself.

**Scene 4 · 3:00 to 5:30 · Beat 2: The tool-use loop**

- Visuals: Sequence diagram animates: User -> Model; Model -> 'call get_weather(city=Delhi)'; Your code -> Weather API; result -> Model; Model -> final answer. Each arrow draws in turn.
- On-screen text: Ask -> Call -> Run -> Return -> Answer
- Voice-over cue (host): Walk the loop slowly.

**Scene 5 · 5:30 to 7:30 · Beat 3: From tools to agents**

- Visuals: Circular loop: Think -> Act -> Observe, spinning several times while a task checklist ticks off. A trace scrolls beside it like a story.
- On-screen text: Agent = a loop of tool calls toward a goal
- Voice-over cue (host): When agents are worth it.

**Scene 6 · 7:30 to 9:30 · Beat 4: Frameworks and MCP**

- Visuals: Plain-text tiles: OpenAI Agents SDK, Claude Agent SDK, LangGraph. Then MCP drawn as a universal plug connecting a model to many tools (files, GitHub, databases).
- On-screen text: Agent SDKs · Model Context Protocol
- Voice-over cue (host): Overview only.

**Scene 7 · 9:30 to 10:45 · Beat 5: Guardrails**

- Visuals: An agent reaches for a 'delete all' button; a red stop sign and a human approval checkbox appear. Badges: step limits, least privilege, human approval.
- On-screen text: Limit steps · Least privilege · Human in the loop
- Voice-over cue (host): Safety basics.

**Scene 8 · 10:45 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups: OpenAI function-calling guide, Anthropic tool-use docs, MCP site. Placeholder for code screen recording.
- On-screen text: Calculator + weather tools
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Tools extend the model  2. Agents loop toward goals  3. Always add guardrails
- Voice-over cue (host): Recap.

**Scene 10 · 13:45 to 14:00 · Teaser**

- Visuals: Mascot walks to stop 12 with a wrench.
- On-screen text: Tomorrow: Fine-Tuning vs Prompting vs RAG
- Voice-over cue (host): Preview Day 12.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| OpenAI: Function calling | https://platform.openai.com/docs/guides/function-calling | Tool-use guide |
| Anthropic: Tool use | https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview | Tool-use guide |
| Model Context Protocol | https://modelcontextprotocol.io/ | Open standard for tools and data |
| OpenAI Agents SDK | https://openai.github.io/openai-agents-python/ | Open-source agent framework |
| Claude Agent SDK | https://code.claude.com/docs/en/agent-sdk/overview | Agent framework |
| LangGraph | https://langchain-ai.github.io/langgraph/ | Open-source agent framework |
| Open-Meteo API | https://open-meteo.com/en/docs | Free weather API for the demo |

### Hands-on task (end card)

Give a model two tools (calculator and weather) and watch it decide when to call each.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 11: Tool Use and AI Agents", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
