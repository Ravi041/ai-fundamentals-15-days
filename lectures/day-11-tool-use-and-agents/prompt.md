# Day 11: Tool Use and AI Agents

**Part 3: Building AI Apps** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 11 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Tool Use and AI Agents". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,320 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[user asks the two-part question]** "What's an eighteen percent tip on my bill, and will it rain in Delhi tomorrow?"

**[Token reaches for calculator and weather tool]** A plain language model would guess both. It's not great at exact maths, and it has no idea what tomorrow's weather is. But this one reaches for a calculator, checks a live weather service, and gets both right. Today, we give models tools.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 11]** Welcome to Day 11. Yesterday we gave the model knowledge with RAG. Today we give it abilities, and then we'll see how that turns a chatbot into an agent.

#### Scene 3 · 0:45 to 3:00 · What tool use is

**[brain with a toolbelt]** **Tool use**, also called **function calling**, means letting the model ask your code to do something for it.

**[tool cards with schema labels]** You describe each tool to the model, like a label on a tool in a toolbox. Every label has three parts. A **name**, like `get_weather`. A **description** in plain English: "Gets the weather forecast for a city." And the **parameters** it needs, like a city name, written in a format called JSON Schema.

**[hold on labels]** Write those descriptions carefully. The model decides which tool to use based almost entirely on them. A vague description means the wrong tool gets picked.

**[model picks a tool]** When you send a message, you send the tool list along with it. Then the model decides. If it can answer on its own, it just answers. If it needs a tool, it replies with a request instead: "Please call `get_weather` with the city Delhi."

**[your code runs]** Here's the most important point of the whole lecture. The model never runs anything itself. It only *asks*. Your code reads the request, runs the real function, and decides whether to allow it at all. You're always in control. Describe the tools, the model picks, your code runs.

#### Scene 4 · 3:00 to 5:30 · The tool-use loop

**[User -> Model]** Let's walk the loop slowly, step by step.

**[arrow 1]** Step one: **Ask**. The user asks, "Will it rain in Delhi tomorrow?" Your code sends that message to the model, along with the descriptions of your tools.

**[arrow 2: call get_weather(city=Delhi)]** Step two: **Call**. The model doesn't answer yet. It replies with a tool call: the name, `get_weather`, and the arguments, city equals Delhi, as neat JSON.

**[arrow 3: your code -> weather API]** Step three: **Run**. Your code sees the tool call, runs your real `get_weather` function, and that function calls a real weather API on the internet.

**[arrow 4: result -> model]** Step four: **Return**. You send the result back to the model, as a new message in the conversation: "Rain chance seventy percent, twenty-six degrees."

**[arrow 5: final answer]** Step five: **Answer**. Now the model has real data, and writes a friendly reply: "Yes, there's a good chance of rain in Delhi tomorrow, so take an umbrella."

**[full diagram]** Ask, call, run, return, answer. Notice that the model was called twice: once to choose the tool, and once to write the final answer. And if the question needs two tools, like our tip and weather example, the model can ask for both, and you run them both before sending the results back.

#### Scene 5 · 5:30 to 7:30 · From tools to agents

**[Think -> Act -> Observe loop]** Now, what if we keep that loop going? The model thinks about what to do, acts by calling a tool, observes the result, and then thinks again. Again and again, until the job is done.

**[checklist ticks off]** That's an **agent**: a model calling tools in a loop, working towards a goal. Instead of answering one question, you give it a task. "Find three cheap flights to Goa next month, check the weather for those dates, and draft a plan."

**[trace scrolls like a story]** You can watch an agent work by reading its trace, like a story. "I'll search for flights. I found five. Now I'll check the weather. Rain on the fourteenth, so I'll pick the other dates."

**[hold]** Agents are powerful, but they're slower, they cost more, because every step is another model call, and they can go off track. So here's my rule. If you know the steps in advance, write them in normal code and call the model where you need it. Use an agent only when the steps really depend on what it discovers along the way, like research, debugging or multi-step tasks across several tools.

#### Scene 6 · 7:30 to 9:30 · Frameworks and MCP

**[framework tiles]** You can build the agent loop yourself in about thirty lines. But there are frameworks that handle the plumbing for you. The **OpenAI Agents SDK**, the **Claude Agent SDK**, and **LangGraph** are three popular ones. They handle the loop, the tools, the memory, and tracing, so you can see each step. We're only taking a quick look today. Start with plain code, and reach for a framework when your agent gets bigger.

**[MCP universal plug]** Then there's **MCP**, the **Model Context Protocol**. It's an open standard for connecting models to tools and data. Think of it like USB-C for AI.

**[plug connects to files, GitHub, databases]** Before MCP, every app had to write its own connection for every tool. Now, someone builds an MCP server once, for your files, or GitHub, or a database, and any app that supports MCP can plug straight into it. There are already thousands of these servers, and lots of AI apps support MCP.

#### Scene 7 · 9:30 to 10:45 · Guardrails

**[agent reaches for "delete all"]** Now the serious part. An agent with tools can do real things, and that includes real damage. Imagine an agent with access to your email deciding that the best way to clear your inbox is to delete everything.

**[red stop sign, approval checkbox]** So, three guardrails. One: **limit steps**. Cap how many loops an agent can run, so it can't spin forever and burn money.

**[least privilege badge]** Two: **least privilege**. Give the agent only the tools and permissions it truly needs. If it only needs to read files, don't give it a delete tool.

**[human approval badge]** Three: **human in the loop**. For anything risky, like sending money, sending emails or deleting data, make your code stop and ask a person to approve it first. And remember prompt injection from Day 7. If your agent reads web pages or emails, hidden instructions in them could try to hijack it. Guardrails are what keep that from becoming a disaster.

#### Scene 8 · 10:45 to 13:15 · Calculator + weather tools

**[OpenAI function-calling guide]** Your homework is to build the cold open yourself: a model with two tools. Start with the OpenAI function-calling guide.

**[Anthropic tool-use docs]** Or the Anthropic tool-use docs, if you're using Claude. Both have complete examples.

**[code recording placeholder]** First, write two plain Python functions. A `calculator` that takes two numbers and an operation, like multiply, and returns the result. And a `get_weather` function that takes a city.

**[hold]** For the weather, use **Open-Meteo**. It's free, and it doesn't need an API key. It works with latitude and longitude, so to keep it simple, start with a small dictionary of a few cities and their coordinates.

**[hold]** Next, describe both tools for the model: name, description and parameters. Then write the loop. Send the user's message with the tools. If the reply contains a tool call, run the matching function, send the result back, and call the model again. If there's no tool call, print the answer.

**[hold]** Now test it. Ask a maths question. Ask a weather question. Ask both at once. And ask something that needs neither, like "tell me a joke". Print every tool call, so you can watch the model decide. Seeing it choose the right tool, or none at all, is the moment tool use really clicks.

**[MCP site]** And if you want to go further, visit modelcontextprotocol.io and try connecting an existing MCP server to an app.

#### Scene 9 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Tools extend what a model can do, but your code runs them.

**[check 2]** Agents loop through tools towards a goal.

**[check 3]** And always add guardrails.

#### Scene 10 · 13:45 to 14:00 · Teaser

**[Token walks to stop 12 with a wrench]** Tomorrow: when should you fine-tune a model, and when is prompting or RAG enough? See you on Day 12.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 11: Tool Use and AI Agents", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
