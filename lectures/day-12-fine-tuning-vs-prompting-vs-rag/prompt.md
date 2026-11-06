# Day 12: Customizing Models: Fine-Tuning vs Prompting vs RAG

**Part 3: Building AI Apps** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 12 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Customizing Models: Fine-Tuning vs Prompting vs RAG". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

### Learning goals

- Choose between prompting, RAG and fine-tuning for a problem
- Understand LoRA / QLoRA as cheap fine-tuning
- Fine-tune a small open model on Colab

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

- Visuals: A generic chatbot reply morphs into the same reply in a brand's exact voice and format.
- On-screen text: "Teach the model your style."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 12 (end of Part 3).
- On-screen text: Day 12 of 15: Customizing Models
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 3:30 · Beat 1: Three paths**

- Visuals: Flowchart with three roads: Prompt (cheap, fast), RAG (adds knowledge), Fine-tune (changes behavior). A problem card travels and a signpost asks: 'Missing knowledge?' -> RAG; 'Wrong style or format?' -> Fine-tune; 'Not sure?' -> Prompt first.
- On-screen text: Prompt first · RAG for knowledge · Fine-tune for behavior
- Voice-over cue (host): The decision guide.

**Scene 4 · 3:30 to 5:30 · Beat 2: Datasets**

- Visuals: JSONL lines stack like index cards: input/output pairs. A quality filter funnel removes duplicates and bad examples. Badge: 'Quality > quantity'.
- On-screen text: JSONL · 50-1000 good examples
- Voice-over cue (host): How to prepare data.

**Scene 5 · 5:30 to 7:45 · Beat 3: LoRA explained**

- Visuals: A large frozen model block (ice texture, padlock). Small colored adapter 'stickers' attach to a few layers; only the stickers glow during training. File-size comparison: full model vs adapter.
- On-screen text: Freeze the model · Train small adapters
- Voice-over cue (host): Why LoRA is cheap; QLoRA adds 4-bit.

**Scene 6 · 7:45 to 9:30 · Beat 4: Hosted vs open-source fine-tuning**

- Visuals: Two lanes: Hosted (upload JSONL to OpenAI, get a model ID) vs Open source (Hugging Face PEFT/TRL or Unsloth on a Colab GPU). Cost and control tags on each lane.
- On-screen text: Hosted · Open source
- Voice-over cue (host): Trade-offs.

**Scene 7 · 9:30 to 10:45 · Beat 5: Did it help?**

- Visuals: A loss curve draws itself as training runs. Then a before/after scorecard on a test set.
- On-screen text: Measure before and after
- Voice-over cue (host): Avoid fine-tuning for nothing.

**Scene 8 · 10:45 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups: PEFT docs, TRL docs, Unsloth repo, OpenAI fine-tuning guide. Placeholder for Colab screen recording.
- On-screen text: Fine-tune with LoRA on Colab
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Prompt first  2. RAG adds knowledge  3. Fine-tune changes behavior
- Voice-over cue (host): Recap; Part 3 complete.

**Scene 10 · 13:45 to 14:00 · Teaser**

- Visuals: Map turns green as mascot enters Part 4.
- On-screen text: Tomorrow: Turn Your AI Into an App
- Voice-over cue (host): Preview Day 13 and Part 4.

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,280 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[generic chatbot reply]** Here's a standard chatbot answering a customer: polite, correct, and completely generic.

**[reply morphs into brand voice]** Now here's the same answer, in one company's exact voice: their greeting, their tone, their format, every single time. You can't always get that consistency with a prompt. Sometimes, you teach the model your style. That's fine-tuning.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 12]** Welcome to Day 12, the last stop of Part 3. You've learned three ways to customize a model: prompting, RAG and now fine-tuning. Today, you'll learn when to use each one.

#### Scene 3 · 0:45 to 3:30 · Three paths

**[three roads]** When a model isn't doing what you want, you have three roads to choose from.

**[Prompt road]** Road one: **prompting**. Change the instructions. It's cheap, it's instant, and you can try ten versions in ten minutes. Everything from Day 7.

**[RAG road]** Road two: **RAG**. Give the model knowledge it doesn't have, by retrieving your documents at question time. Everything from Day 10.

**[Fine-tune road]** Road three: **fine-tuning**. Train the model further on your own examples, so its behavior actually changes. The new style becomes part of the model itself.

**[problem card at the signpost]** So how do you choose? Bring your problem to the signpost and ask two questions.

**["Missing knowledge?" -> RAG]** First: is the model missing *knowledge*? Facts about your products, your policies, last week's news? Then use RAG. A common mistake is fine-tuning to teach facts. It's expensive, the facts go out of date, and the model can still mix them up. RAG lets you update knowledge by just changing a document.

**["Wrong style or format?" -> Fine-tune]** Second: is the problem *behavior*? A tone it can't hold, a strict format it keeps breaking, or a narrow task you need done thousands of times, fast and cheap? That's where fine-tuning shines. It can even let a small, cheap model do one job as well as a big one.

**["Not sure?" -> Prompt first]** And if you're not sure? Always prompt first. Most problems are solved with a better prompt and a few examples. And in real systems, you'll often combine them: a fine-tuned model, using RAG, with a good prompt.

#### Scene 4 · 3:30 to 5:30 · Datasets

**[JSONL lines stack like index cards]** Fine-tuning starts with data. You need examples of exactly what you want: an input, and the perfect output.

**[hold on one card]** These are usually saved in a file format called **JSONL**, which means one JSON example per line. Each line is a little conversation, with the user's message and the ideal assistant reply. It's the same messages format we've used since Day 9.

**[quality filter funnel]** Then comes the most important step: cleaning. Remove duplicates. Remove examples with mistakes. Fix anything inconsistent. The model will copy whatever you show it, including the bad habits.

**[badge: Quality > quantity]** How many examples? For style or format, fifty to a thousand really good ones often beat ten thousand messy ones. Quality beats quantity. A good trick: write your first twenty examples by hand, really carefully. They become your gold standard. You can then ask a big model to help draft more in the same style, but always read and fix them before they go into training. And keep around ten to twenty percent aside as a test set, so you can check the result fairly. Train and test, just like Day 2.

#### Scene 5 · 5:30 to 7:45 · LoRA explained

**[large frozen model with padlock]** Now, the clever trick that makes fine-tuning affordable. A seven-billion-parameter model has seven billion dials. Training all of them needs huge GPUs and lots of money. That's called **full fine-tuning**.

**[adapter stickers attach to a few layers]** **LoRA**, short for **Low-Rank Adaptation**, takes a different approach. We freeze the original model. All seven billion dials are locked. Then we attach small extra pieces, called **adapters**, to some of its layers.

**[only the stickers glow during training]** During training, only these small adapters learn. They're usually well under one percent of the size of the model. So training is far faster, and needs far less memory.

**[file-size comparison]** And look at the file sizes. The full model is many gigabytes. The adapter is often just tens of megabytes. You can keep one base model and swap in different adapters for different jobs, like changing lenses on a camera.

**[hold]** And **QLoRA** goes one step further. Remember quantization from Day 8? QLoRA loads the frozen base model in four-bit, to save even more memory, and trains the LoRA adapters on top. That's how you can fine-tune a decent model on a single free Colab GPU.

#### Scene 6 · 7:45 to 9:30 · Hosted vs open-source fine-tuning

**[two lanes]** There are two ways to actually run a fine-tune.

**[Hosted lane: upload JSONL, get a model ID]** Lane one: **hosted**. Providers like OpenAI let you upload your JSONL file, click start, and they handle all the training. When it's done, you get a new model ID, and you call it with the same code from Day 9. You pay for the training tokens and for using the model. It's easy, but you don't get the weights, and your model only lives on their platform.

**[Open-source lane: PEFT, TRL, Unsloth on Colab]** Lane two: **open source**. You fine-tune an open model like Llama, Qwen or Gemma yourself. Hugging Face's **PEFT** library provides LoRA. **TRL** provides ready-made trainers. And **Unsloth** makes it faster and lighter on memory. You can run it all on a Colab GPU.

**[cost and control tags]** The trade-off: hosted is simpler, open source gives you full control. You own the result, can run it locally with Ollama, and your data never leaves your hands.

#### Scene 7 · 9:30 to 10:45 · Did it help?

**[loss curve draws itself]** While training runs, you'll watch the **loss curve**, the error from Day 3. It should drop and then level off. If the training loss keeps falling but the test loss starts rising, that's overfitting from Day 2. The model is memorizing your examples.

**[before/after scorecard]** But a falling curve doesn't prove it helped. So always measure. Run the same test set through the base model and the fine-tuned model, and score them side by side. And here's the uncomfortable test: compare it with the base model plus a really good prompt. If the prompt does just as well, you didn't need to fine-tune.

#### Scene 8 · 10:45 to 13:15 · Fine-tune with LoRA on Colab

**[PEFT docs]** Your homework: fine-tune a small open model with LoRA. Start by skimming the PEFT docs to see how adapters are set up.

**[Unsloth repo]** The easiest path is the Unsloth repo. It links to free, ready-made Colab notebooks for popular small models. Open one, and switch the runtime to a GPU.

**[Colab recording placeholder]** First, make your dataset: about a hundred examples in a style you can easily judge. For example, a support bot that always replies in three short bullet points and ends with a friendly sign-off. Save it as JSONL.

**[TRL docs]** Then, in the notebook, load a small model in four-bit, add the LoRA adapters, point the trainer at your file, and start training. The TRL docs explain each setting. With a hundred examples on a small model, it usually takes just a few minutes.

**[hold]** Before you train, save the base model's answers to five test questions. After training, ask the same five questions. Put them side by side. Is the style there? Has anything got worse? If the style isn't there yet, the fix is usually in the data, not the settings. Add more varied examples, clean up the inconsistent ones, and train again.

**[OpenAI fine-tuning guide]** And if you'd rather try the hosted way, the OpenAI fine-tuning guide walks you through uploading the same file.

#### Scene 9 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Prompt first.

**[check 2]** RAG adds knowledge.

**[check 3]** And fine-tuning changes behavior. That's Part 3 complete. You can now build real AI features.

#### Scene 10 · 13:45 to 14:00 · Teaser

**[map turns green, Token enters Part 4]** Now let's ship them. Part 4 starts tomorrow: turning your AI into a real app. See you on Day 13.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| Hugging Face PEFT | https://huggingface.co/docs/peft/index | LoRA and adapters |
| Hugging Face TRL | https://huggingface.co/docs/trl/index | Fine-tuning trainers |
| Unsloth | https://github.com/unslothai/unsloth | Fast open-source fine-tuning |
| OpenAI: Fine-tuning guide | https://platform.openai.com/docs/guides/fine-tuning | Hosted fine-tuning |
| LoRA paper (arXiv) | https://arxiv.org/abs/2106.09685 | Original LoRA paper |
| QLoRA paper (arXiv) | https://arxiv.org/abs/2305.14314 | 4-bit fine-tuning |

### Hands-on task (end card)

Fine-tune a small open model with LoRA on a 100-example dataset in Colab and compare before/after replies.

### Deliverables

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 12: Customizing Models: Fine-Tuning vs Prompting vs RAG", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
