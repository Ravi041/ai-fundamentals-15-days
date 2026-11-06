# Day 13: Turning Your AI Into an App: APIs and UIs

**Part 4: Shipping** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 13 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Turning Your AI Into an App: APIs and UIs". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,260 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[notebook cell unfolds like origami]** Right now, your chatbot lives in a terminal or a notebook cell. It works, but you can't exactly send it to your friends.

**[polished chat app on laptop and phone]** Today, we fold it into a real app: a clean chat window that works on a laptop and a phone, backed by a proper API. From notebook to app.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[green map, Token at stop 13]** Welcome to Part 4: Shipping. You can already build AI features. These last three days are about turning them into something real people can use.

#### Scene 3 · 0:45 to 2:45 · Frontend vs backend

**[UI layer]** Almost every AI app is built in three layers. At the top is the **UI**, the frontend: the chat window in the browser that people see and type into.

**[API layer]** In the middle is the **API**, the backend. It's your Python code running on a server. It receives messages from the UI, adds your system prompt, maybe runs RAG or tools, and talks to the model.

**[Model layer]** And at the bottom is the **model** itself: OpenAI, Claude, or a local model with Ollama.

**[request dots flow down, responses flow up]** Messages flow down from the user to the model, and answers flow back up.

**[hold]** Why split it up like this? Three reasons. First, **security**. Your API key lives only in the backend. If you put it in the UI, anyone could open their browser tools and steal it. Second, **flexibility**. One API can serve a website, a phone app and a Slack bot all at once. And third, you can **swap** any layer without touching the others. Change the model, and the UI never knows.

#### Scene 4 · 2:45 to 5:30 · Streamlit and Gradio

**[Streamlit code card types in]** For the UI, you don't need to learn web design. **Streamlit** lets you build an app in pure Python. Here's a complete chat app in about fifteen lines.

**[hold on code]** `st.title` adds a heading. `st.chat_input` gives you the message box at the bottom. And `st.chat_message` draws each chat bubble, one for the user, one for the assistant.

**[rendered app appears, bubbles fill]** Run it with `streamlit run app.py`, and your browser opens with a real chat app.

**[hold]** There's one thing to understand about Streamlit. Every time you send a message, it reruns your whole script from top to bottom. So how does it remember the conversation? With **session state**. `st.session_state` is a little memory box that survives each rerun. We keep our list of messages in there, the same list from Day 9, and redraw every bubble each time. Remember: the model has no memory, so your app is the memory.

**[Gradio version in a second frame]** The other popular choice is **Gradio**. With its `ChatInterface`, you write one function that takes a message and the history and returns a reply, and Gradio builds the whole chat window for you. It's what most Hugging Face demos use, which will be handy tomorrow.

**[both frames]** Both are open source and both are great. Streamlit gives you more layout control, and Gradio is the fastest way to a demo. Pick one and go.

#### Scene 5 · 5:30 to 8:15 · FastAPI

**[code card for /chat endpoint]** Now the backend. **FastAPI** is a modern Python framework for building APIs. It's fast, and it's very beginner-friendly.

**[hold on endpoint]** An **endpoint** is an address your API answers at. Here, we create one: `@app.post("/chat")`. POST means the caller is sending us data, in this case the messages.

**[request card flies in]** We describe what the request should look like with a small class called a **request model**, using a library called Pydantic. It says: a chat request has a list of messages. FastAPI checks every incoming request against it. If something's missing or the wrong type, the caller gets a clear error, automatically. In code, that's just a small class with one line inside it: messages, a list of dictionaries.

**[response card flies out]** Inside the function, we call the model exactly like we did on Day 9, and return the reply as JSON.

**[auto-generated /docs page]** And here's my favorite part. Run the server with `uvicorn`, or with `fastapi dev`, then open slash docs in your browser. FastAPI has written interactive documentation for your API, all by itself. You can click "Try it out", send a test message, and see the reply, without writing any extra code.

**[hold]** For a snappy feel, you can also stream from FastAPI, using a **streaming response** that sends tokens to the UI as they arrive. Same idea as Day 9, just passed through your API.

#### Scene 6 · 8:15 to 9:45 · Project structure

**[folder tree assembles]** As your app grows, a clean layout saves you a lot of pain. Here's a simple one.

**[app/]** An `app` folder for your code: the API, the UI, and a small file that talks to the model.

**[prompts/]** A `prompts` folder. Keep your system prompts in their own files, not buried in code. They change often, and it's easy to compare versions.

**[config.py]** A `config.py` that reads settings, like which model to use, from environment variables.

**[.env and .gitignore]** Your dot env file for secrets, and a dot gitignore that makes sure it never gets committed.

**[requirements.txt and README.md]** A `requirements.txt` listing your packages, and a `README` that explains how to run it. Future you will be grateful. This layout also makes teamwork easier. Someone can improve the prompts without touching the code, and you can switch models by changing one setting.

#### Scene 7 · 9:45 to 10:45 · Serving open models

**[model layer swaps between cloud and local]** Because we split the layers, swapping the model is easy. Point your API at OpenAI or Claude, or at a local Ollama server, and the UI doesn't change at all.

**[vLLM label]** Ollama is perfect for one person on a laptop. But if you want to serve an open model to lots of users at once, look at **vLLM**. It's an open-source server built for high traffic on GPUs, and it also speaks the OpenAI API format. Swap the model, keep the app.

#### Scene 8 · 10:45 to 13:15 · Ship a chat UI + API locally

**[Streamlit chat tutorial]** Your homework: wrap your Day 9 chatbot in a real app. Start with the Streamlit tutorial on building a chat app. It walks you through session state step by step.

**[VS Code recording placeholder]** Set up the folder structure we just saw. In a fresh venv, pip install streamlit, fastapi, uvicorn and your model SDK.

**[FastAPI tutorial]** Step one: build the API. Make a `/chat` endpoint that takes a list of messages and returns the model's reply. Run it, open slash docs, and test it there first.

**[hold]** Step two: build the UI. In your Streamlit app, keep the messages in session state. When the user sends a message, post the whole list to your API using the `requests` library or `httpx`, and show the reply in a bubble.

**[hold]** Now run both: the API in one terminal, Streamlit in another. Chat with your own app in the browser. Then check: is your API key only in the backend's dot env? It should be nowhere near the UI code. If the UI can't reach the API, check that both are running, and that the address in your Streamlit code matches the port uvicorn printed, usually eight thousand.

**[Gradio docs]** Prefer Gradio? Try the same thing with `ChatInterface` from the Gradio docs. Keep this project safe. Tomorrow, we put it online.

#### Scene 9 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** The UI talks to your API.

**[check 2]** The API talks to the model.

**[check 3]** And secrets stay in dot env, on the backend only.

#### Scene 10 · 13:45 to 14:00 · Teaser

**[Token walks to stop 14, a cloud rises]** Your app works on your laptop. Tomorrow, we deploy it to the cloud, so anyone in the world can use it. See you on Day 14.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 13: Turning Your AI Into an App: APIs and UIs", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
