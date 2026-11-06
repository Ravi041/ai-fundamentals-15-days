# Day 09: Your First API Calls: OpenAI and Anthropic

**Part 3: Building AI Apps** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 9 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Your First API Calls: OpenAI and Anthropic". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,330 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[eight lines of code type in]** Eight lines of Python. That's all it takes.

**[terminal chatbot replies]** Run them, and you've got your own chatbot, talking to the same models behind ChatGPT and Claude, inside your own program. By the end of today, you'll have built it yourself.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[coral map, Token at stop 9]** Welcome to Part 3: Building AI Apps. Up to now we've used AI through chat windows. From today, our code does the talking.

#### Scene 3 · 0:45 to 2:45 · What an API is

**[envelope flies from laptop to the cloud]** An **API** is just a way for one program to talk to another. Think of it like sending a letter. Your code writes a request, puts it in an envelope and sends it to the model, which lives on the provider's servers.

**[key stamp on the envelope]** Every envelope has a stamp: your **API key**. It proves who you are, and it's how the provider knows who to bill. That's why we stored it safely in a dot env file on Day 4. Create one now in the OpenAI platform and in the Anthropic console, under API keys, and paste each into your dot env file.

**[envelope opens: model, messages, max tokens]** Inside the envelope are three main things. The **model**: which model you want to use. The **messages**: the conversation so far, using the same roles we met on Day 7, system, user and assistant. And **max tokens**: the most tokens you'll allow in the reply, which also caps how much one answer can cost you.

**[reply envelope flies back]** The model reads it, writes an answer, and sends a reply envelope back. Inside the reply is the text, plus some useful extras, like how many tokens were used.

**[hold]** That's it. Every AI app you'll ever build is this: send a request, get a response. Everything else is details.

#### Scene 4 · 2:45 to 5:30 · OpenAI vs Anthropic side by side

**[split-screen code cards]** Let's look at real code. OpenAI on the left, Anthropic on the right. Both companies publish an official Python package, called an SDK, that handles the envelopes for you. You installed both on Day 4.

**[highlight: client]** Line one: create a **client**. On the left, `client = OpenAI()`. On the right, `client = anthropic.Anthropic()`. Notice there's no key in the code. Each SDK automatically looks for your key in the environment, which is exactly where dot env puts it.

**[highlight: model]** Next, we make the call, and pick a model by name. Use any current model name from the providers' model pages. The exact names change often, so copy them from the docs rather than from an old tutorial.

**[highlight: messages]** Then the messages: a list of dictionaries, each with a role and some content. "Role user, content: explain APIs in one sentence." It's almost identical on both sides. Two small differences: with Anthropic, `max_tokens` is required, and the system prompt goes in its own `system` setting instead of inside the list.

**[highlight: response text]** Finally, we read the answer. On the OpenAI side, the text is at `response.choices[0].message.content`. On the Anthropic side, it's `response.content[0].text`. Different paths, same idea. Print it, and there's your reply.

**[both cards glow]** So: same idea, two SDKs. Once you can call one provider, you can call almost any of them.

#### Scene 5 · 5:30 to 7:30 · Messages and memory

**[stack of chat cards]** Here's something that surprises everyone. The model has no memory. None. Every request starts completely fresh.

**[stack grows each turn]** So how does a chatbot remember what you said? Your code remembers for it. You keep a list of every message. When the user types something, you add it to the list. You send the whole list. When the reply comes back, you add that to the list too.

**[full stack sent with every request]** Next turn, you send the whole history again, now one message longer. The model reads the entire conversation every time, which is how it knows what "it" or "that" refers to.

**[token counter grows]** And watch the token counter. Because you resend everything, every turn costs a bit more than the last. Very long chats get expensive, and eventually hit the context window we met on Day 5. Real apps deal with this by trimming old messages or summarizing them. For our chatbot, a simple list is perfect.

#### Scene 6 · 7:30 to 9:00 · Streaming

**[reply appears after a wait]** Look at these two replies. On the left, you wait, and wait, and then the whole answer appears at once.

**[reply streams word by word]** On the right, words start appearing almost instantly. Both took the same total time. But the right one *feels* much faster.

**[stopwatch]** That's **streaming**. Instead of waiting for the full answer, you ask the API to send tokens as soon as they're generated. Remember, the model writes one token at a time anyway. Streaming just lets you see them as they come.

**[hold]** In code, you turn streaming on in the request, then loop over the pieces as they arrive and print each one without a new line. Both SDKs support it, and both quickstart pages show exactly how. For any app with a human waiting, stream.

#### Scene 7 · 9:00 to 10:30 · Cost, limits and errors

**[cost meter ticks up]** Every call costs money, and you pay for two things separately: **input tokens**, what you send, and **output tokens**, what comes back. Output tokens usually cost more.

**[hold on meter]** You don't have to guess. Every response includes a **usage** section with the exact token counts. Print it while you're learning. Multiply by the prices on the provider's pricing page, and you'll know exactly what each message cost. For a small chatbot, it's usually a fraction of a cent. And set a monthly spending limit in your account settings, just in case.

**[rate-limit wall bounces a request]** Sometimes a request bounces back with an error. The most common one is a **rate limit**: you sent too many requests too quickly. It's not a bug, it's a speed limit.

**[retry arrow with clock succeeds]** The fix is to wait a moment and try again, waiting a little longer each time. Both SDKs already retry a couple of times for you. Just wrap your call in a try and except, so your program shows a friendly message instead of crashing.

#### Scene 8 · 10:30 to 11:15 · Swap in a local model

**[cloud target swaps to laptop running Ollama]** Now remember Day 8, when we ran a model on our own laptop with Ollama? Here's the payoff.

**[base URL and model name change]** Ollama speaks the same language as the OpenAI API. So we keep the exact same code, and change just two things: the base URL, pointing at localhost port one one four three four, and the model name. Same pattern, local model, zero cost.

#### Scene 9 · 11:15 to 13:15 · Build a CLI chatbot

**[OpenAI quickstart page]** Your homework is to build a chatbot that runs in your terminal and remembers the conversation. Start with the OpenAI developer quickstart, which shows the first call step by step.

**[Anthropic get started page]** The Anthropic "Get started" page does the same for Claude.

**[VS Code recording placeholder]** In VS Code, make a new folder, create a venv, and pip install openai, anthropic and python-dotenv. Put both keys in a dot env file, and add it to dot gitignore.

**[hold]** Then write the loop. Make an empty list called messages. Then, forever: ask the user for input. If they type "quit", stop. Otherwise, add their message to the list, send the list to the model, print the reply, and add the reply to the list too. That's the whole chatbot, and it's about fifteen lines.

**[SDK GitHub pages]** If you get stuck, the official SDK pages on GitHub have plenty of examples.

**[hold]** Then the stretch goal. Add a setting at the top that switches between OpenAI, Claude and your local Ollama model. Ask all three the same question and compare. Congratulations, you're now an AI developer.

#### Scene 10 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** You send messages, and you get text back.

**[check 2]** The model has no memory, so you manage the history.

**[check 3]** And watch your tokens, because tokens are money.

#### Scene 11 · 13:45 to 14:00 · Teaser

**[Token walks to stop 10 holding a PDF]** Tomorrow, we teach your chatbot to answer questions about your own documents, with RAG. See you on Day 10.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 9: Your First API Calls: OpenAI and Anthropic", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
