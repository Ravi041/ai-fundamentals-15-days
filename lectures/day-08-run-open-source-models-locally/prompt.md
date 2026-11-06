# Day 08: Running Open-Source Models on Your Own Machine

**Part 2: Working with LLMs** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 8 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Running Open-Source Models on Your Own Machine". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,290 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[laptop with Wi-Fi crossed out]** Look at the top of this laptop. Wi-Fi is off. No internet at all.

**[chat window still answers]** And yet the chatbot is still answering questions. No cloud, no API bill, no data leaving the machine. Today, you'll set this up on your own computer.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 8]** Welcome to Day 8, the last stop in Part 2. On Day 6 we met the open-weight models. Today we download one and run it ourselves.

#### Scene 3 · 0:45 to 2:30 · Why local

**[laptop appears]** Why would you run a model on your own machine when ChatGPT and Claude are a click away? Three big reasons.

**[Privacy badge, lock]** One: **privacy**. Your prompts and your documents never leave your computer. For medical notes, legal files, company code or anything personal, that can be the deciding factor.

**[No per-token cost badge]** Two: **cost**. Once the model is downloaded, every question is free. You can run thousands of experiments without watching a bill.

**[Offline badge, plane]** Three: **offline**. It works on a plane, on a train, or anywhere the internet is bad.

**[hold on all three]** The honest trade-offs: the models you can run on a laptop are smaller than the biggest cloud models, so they're not as smart at hard tasks, and they can be slower, depending on your hardware. But for summarizing, drafting, sorting and chatting, small open models are now surprisingly good.

#### Scene 4 · 2:30 to 4:30 · Parameters and hardware

**[1B lunchbox, 7B backpack, 70B truck]** The first thing to check is size, measured in parameters. A one-billion-parameter model is a lunchbox. Seven billion is a backpack. Seventy billion is a truck.

**[RAM gauges fill]** What decides whether it fits is your computer's memory. Here's a rough rule of thumb. With the compressed versions most tools download, which I'll explain in a moment, you need a bit more than half a gigabyte of memory for every billion parameters, plus some room to spare. So a one- to three-billion model runs on almost any modern laptop. A seven- or eight-billion model is comfortable with about sixteen gigabytes of RAM. And seventy billion needs a serious workstation or a big GPU.

**[GPU vs CPU race]** Speed depends on the chip. A model can run on your normal processor, the CPU, but a graphics chip, a GPU, is much faster, because it does thousands of small calculations at once. Apple Silicon Macs are great for this, because the GPU shares the main memory.

**[hold]** If you're not sure what you have, start small. A three-billion model that answers quickly is more fun than a big one that crawls.

#### Scene 5 · 4:30 to 6:15 · Quantization

**[image steps down in resolution]** So how do billions of parameters fit on a laptop? A trick called **quantization**.

**[16-bit label]** Normally, each weight is stored with sixteen bits of precision. That's very exact, and very big.

**[8-bit, then 4-bit, file shrinks]** Quantization rounds each weight to fewer bits: eight, or even four. It's like lowering the resolution of a photo. The file gets much smaller, but you can still clearly see what it is. A four-bit model is roughly a quarter of the size, and usually loses only a little quality.

**[GGUF file icon]** You'll see a file type called **GGUF** a lot. It's a format for these quantized models, made by the llama.cpp project, which is the engine running inside many local AI tools. When you see a model name ending in something like "Q4", that's a four-bit version. Smaller weights, nearly the same smarts.

#### Scene 6 · 6:15 to 9:00 · Ollama walkthrough

**[terminal card]** The easiest way to run local models is a free tool called **Ollama**. You install it once, and then everything happens with a few short commands.

**[ollama pull, model file flies in]** First, `ollama pull`, followed by a model name from the Ollama library. This downloads the model, already quantized, onto your computer. You only do this once per model.

**[ollama run]** Next, `ollama run` with the same name. That opens a chat right in your terminal. Type a question, press Enter, and the answer streams back, all on your own machine. Type slash bye to leave.

**[call to localhost:11434]** Here's the really powerful part. While it's running, Ollama also starts a small local server at localhost, port one one four three four. That means your own code can talk to the model, just like it would talk to ChatGPT or Claude, except the request never leaves your computer.

**[curl / Python call]** You can test it with a curl command, or from Python with the `ollama` package: import it, call `ollama.chat`, pass the model name and a list of messages, and print the reply. Look at those messages. They're the same role and content dictionaries we saw on Day 4 and Day 7. Ollama even offers an OpenAI-compatible endpoint, so a lot of code written for OpenAI can point at your local model with one small change. We'll use that on Day 9.

**[hold]** If you prefer clicking to typing, **LM Studio** does the same job with a friendly desktop app. You search for a model, click download, and chat. It can also run a local server.

#### Scene 7 · 9:00 to 11:00 · Hugging Face in Colab

**[Colab notebook card]** The other way to use open models is with Python and the Hugging Face **transformers** library. This is what researchers and engineers use, and it gives you access to thousands of models on the Hub.

**[free GPU badge]** If your laptop is small, use Google Colab. Go to Runtime, Change runtime type, and pick a GPU. It's free for light use.

**[from transformers import pipeline types in]** Then the code is short. `from transformers import pipeline`. Then create a pipeline: tell it the task, "text-generation", and the name of a small model from the Hub.

**[pipeline machine takes text in, returns text]** A pipeline is like a machine that hides all the complicated steps: it tokenizes your text, runs the model, and turns the tokens back into words. You pass in a prompt, and out comes generated text.

**[hold]** The first run downloads the model, which can take a minute. After that it's quick. And the same pipeline idea works for other tasks too, like summarization, translation and sentiment analysis. Just change the task name.

#### Scene 8 · 11:00 to 13:15 · Run Llama or Qwen on your laptop

**[Ollama site]** Your homework. Go to ollama.com and download Ollama for your system. Install it like any other app.

**[Ollama model library]** Click **Models** to see the library. Search for a small Llama or Qwen model, and pick a size that fits your memory. Around three billion parameters is a safe start. The model page shows the exact command to copy.

**[terminal recording placeholder]** Open your terminal and paste it in. Wait for the download, then ask it something. Try a question you also asked ChatGPT on Day 6, and compare the answers. Watch how fast the words appear, too. That's your hardware at work. If it's painfully slow, try a smaller model. If it's quick, try a bigger one. Finding the biggest model your machine runs comfortably is part of the homework.

**[LM Studio site]** If the terminal feels scary, install LM Studio from lmstudio.ai instead, and do the same thing with buttons.

**[Hugging Face pipeline docs]** Then the final step: call your local model from Python. Install the `ollama` package with pip, and send it one message. When you see a reply printed in your own code, with Wi-Fi off, you've run AI completely on your own terms.

**[hold]** If you want a stretch goal, try the transformers pipeline in Colab with the pipeline docs open beside you.

#### Scene 9 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Local models are private and free to run.

**[check 2]** Pick a model size that fits your RAM.

**[check 3]** And quantize, to fit big models into small machines. That's Part 2 complete.

#### Scene 10 · 13:45 to 14:00 · Teaser

**[map turns coral, Token enters Part 3]** Tomorrow, Part 3 begins, and we start building. Your first API calls to OpenAI and Anthropic. See you on Day 9.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 8: Running Open-Source Models on Your Own Machine", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
