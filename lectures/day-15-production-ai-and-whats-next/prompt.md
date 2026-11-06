# Day 15: Production AI: Cost, Safety, Evaluation and What's Next

**Part 4: Shipping** · Target runtime: 15 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 15 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 15 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Production AI: Cost, Safety, Evaluation and What's Next". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,430 words: roughly 11 minutes of speaking at a relaxed 130 words per minute, with the rest of the 15 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[app goes viral, bill counter spins]** Imagine this. You share your app, and it takes off. Thousands of people are using it. Amazing!

**[bill counter speeds up, screenshot of a wrong answer]** Then two things happen. Your API bill starts spinning faster than you expected. And someone posts a screenshot of your app confidently giving a completely wrong answer.

**[freeze]** Getting your app live isn't the finish line. Shipping is day one.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at the final stop 15]** Welcome to Day 15, the final lecture. Today is about running AI for real: keeping it affordable, accurate and safe. And then, what comes next for you.

#### Scene 3 · 0:45 to 3:30 · Cost levers

**[cost dashboard with dials]** Let's start with money. Every AI bill comes down to one thing: tokens, times the price per token. So there are five dials you can turn.

**[dial 1: smaller model]** Dial one: **model choice**. This is the biggest one. Smaller models can be ten times cheaper or more. Test whether a small model is good enough before you default to the biggest one.

**[dial 2: prompt caching]** Dial two: **prompt caching**. If every request starts with the same long system prompt or the same document, providers like OpenAI and Anthropic can cache that part, and charge you much less for it on repeat requests. A simple trick: put the parts that never change at the start of your prompt, and the parts that change at the end.

**[dial 3: shorter prompts]** Dial three: **shorter prompts**. Trim long instructions, send only the top few RAG chunks instead of twenty, and trim old chat history. Also set max tokens, so answers can't run on forever.

**[dial 4: batching]** Dial four: **batching**. If a job doesn't need an instant answer, like summarizing a thousand documents overnight, use the providers' batch APIs. You get the results later, at a big discount.

**[dial 5: routing]** And dial five: **routing**. Send easy questions to a small, cheap model, and only the hard ones to the big model. Most questions are easy.

**[all dials lower]** Turn these five dials together, and it's common to cut costs dramatically without users noticing any difference. But first, you have to measure. Remember the usage numbers in every API response from Day 9? Log them, and you'll know exactly where the money goes.

#### Scene 4 · 3:30 to 6:15 · Evals

**[scorecard of test questions]** Now, that wrong-answer screenshot. How do you know if your app is any good? And how do you know you haven't broken it when you change a prompt? With **evals**, short for evaluations.

**[rows turn green or red]** An eval starts with a **test set**: a list of real questions, with what a good answer looks like. Start with ten or twenty. Include the easy ones, the tricky ones, and the ones you know users will ask. Then run your app on all of them, and score each answer. Green for pass, red for fail.

**[LLM-as-judge robot grades answers]** Some checks are simple code. Does the answer contain the right number? Is it valid JSON? For fuzzier things, like "is this answer helpful and accurate?", you can use another model as a grader. This is called **LLM-as-judge**. Give the judge clear criteria, and spot-check its grades yourself, because judges can be wrong too.

**[regression check blocks a prompt change]** And here's the habit that separates amateurs from professionals. Every time you change a prompt, a model or your RAG settings, rerun the evals. If rows that used to be green turn red, that's a **regression**, and you don't ship the change. Never change prompts blind.

**[hold]** Open-source tools like **promptfoo** let you write test cases in a simple file and run them with one command, and **Ragas** is built for scoring RAG apps specifically.

#### Scene 5 · 6:15 to 8:45 · Security

**[document with hidden instructions, shield blocks it]** Next, security. Remember **prompt injection** from Day 7 and Day 11? It's the number one risk for AI apps. Any text your app reads, like a web page, an email or an uploaded document, can contain hidden instructions trying to take over your model. There's no perfect fix, so you defend in layers. Clearly separate instructions from data in your prompts. Give tools the least privilege. And require a human approval for anything risky.

**[data-leak pipe gets a valve]** Second, **data leaks**. Never put secrets or other users' private data where the model can see them unless it truly needs to. Assume anything in the prompt could end up in the answer. Check what the model sends back before showing it, especially if it can reach a database.

**[rate-limit gate slows a flood of requests]** Third, **rate limits** on your own app. Without them, one person with a script can send ten thousand requests and run up your bill overnight. Limit how many messages each user can send per minute and per day.

**[hold]** Also, check user input and model output with a **moderation** filter, like OpenAI's free moderation endpoint, to catch harmful content.

**[OWASP checklist]** And for the full list, use the **OWASP Top 10 for LLM Applications**. It's a free, community-written checklist of the biggest risks for AI apps, and it's the best security checklist you can have next to your keyboard.

#### Scene 6 · 8:45 to 10:15 · Responsible AI

**[four tiles flip]** Beyond security, there's a bigger question: can people trust what you've built? Four practical habits.

**[Bias]** **Bias**. Remember garbage in, garbage out from Day 2. Test your app with different names, languages and backgrounds, and check that it treats everyone fairly.

**[Transparency]** **Transparency**. Tell users they're talking to an AI, and that it can make mistakes. Show sources when you can, like we did with RAG.

**[Consent]** **Consent**. Be clear about what data you collect, and ask before you use people's conversations to improve your app.

**[Privacy laws]** And **privacy laws**. Rules like GDPR in Europe, and India's data protection law, set out how personal data must be handled. If you're building for a business, check which rules apply to you. Build AI people can trust.

#### Scene 7 · 10:15 to 11:30 · Observability

**[trace view: prompt -> retrieval -> model -> response]** Finally, **observability**, a fancy word for being able to see what your app is doing. For every request, log a trace: the prompt, which chunks were retrieved, which model was called, the response, and any errors.

**[latency and token counts on each step]** Each step gets a time and a token count. Now, when a user says "it gave me a weird answer", you can look up exactly what happened.

**[slow step highlights]** And when the app feels slow, the trace shows you which step to fix. Here, the retrieval step is the slow one. Open-source tools like **Langfuse** collect these traces and show cost, speed and quality on one dashboard.

#### Scene 8 · 11:30 to 13:45 · Add cost tracking and evals

**[screen recording placeholder]** Your final homework: make your deployed app production-ready. Two things.

**[hold]** One: a **cost tracker**. After every model call, read the input and output tokens from the usage section, multiply by the prices from the provider's pricing page, and log the cost of each message. Add a running total, so you can see the cost per day.

**[promptfoo docs]** Two: an **eval set**. Write ten questions with what a good answer must include. Follow the promptfoo getting-started guide to turn them into test cases, and run them against your app. Then change your prompt, run them again, and see whether anything turned red.

**[Langfuse docs]** If you want to go further, add Langfuse to trace every request.

**[OWASP LLM Top 10]** And read through the OWASP LLM Top 10. For each item, ask: could this happen to my app?

**[OpenAI moderation guide]** Bonus: add the moderation check to user messages before they reach your model. Keep both of these running as your app grows. The cost tracker tells you what your app costs, and the evals tell you whether it's any good. With those two numbers, every future change is a decision based on evidence, not guesses.

#### Scene 9 · 13:45 to 14:30 · Course recap

**[journey map lights up stop by stop]** And that's it. Look at the journey you've just finished.

**[Part 1 stops light teal]** In Part 1, you learned what AI really is, how machines learn, how neural networks work, and you set up your toolkit.

**[Part 2 stops light indigo]** In Part 2, you went inside LLMs, explored the model landscape, learned to prompt, and ran models on your own laptop.

**[Part 3 stops light coral]** In Part 3, you called APIs, built RAG, gave models tools, and fine-tuned your own model.

**[Part 4 stops light green]** And in Part 4, you built an app, deployed it to the cloud, and made it production-ready. Fifteen days ago, you were starting from zero. Now you've built and shipped a real AI app. Be proud of that.

#### Scene 10 · 14:30 to 15:00 · Project teaser

**[five doors open one by one]** But this isn't the end. Next, we'll build five real-world AI projects together, step by step, using everything you've learned.

**[light spills out of the doors]** Subscribe and turn on notifications so you don't miss the first one. Thank you so much for learning with me. I'll see you in the projects.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 15: Production AI: Cost, Safety, Evaluation and What's Next", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
