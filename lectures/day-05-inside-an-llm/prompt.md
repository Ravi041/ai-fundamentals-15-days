# Day 05: Inside an LLM: Tokens, Embeddings, Transformers

**Part 2: Working with LLMs** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 5 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Inside an LLM: Tokens, Embeddings, Transformers". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Explain an LLM as next-token prediction at massive scale
- Understand tokens, context windows and embeddings
- Know the training pipeline: pre-training, instruction tuning, RLHF

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

- Visuals: A phone keyboard suggests the next word; zoom out until the keyboard becomes a giant model that writes an entire essay word by word.
- On-screen text: "ChatGPT is autocomplete. Sort of."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Map now indigo for Part 2. Mascot at stop 5.
- On-screen text: Day 5 of 15: Inside an LLM
- Voice-over cue (host): Welcome to Part 2.

**Scene 3 · 0:45 to 3:00 · Beat 1: Tokens**

- Visuals: A sentence shatters into colored token blocks with a running counter at the corner. Show a long word splitting into two tokens and a space attached to a word. A context-window 'shelf' fills with token blocks until the oldest fall off the end.
- On-screen text: Text -> Tokens · Context window
- Voice-over cue (host): Why models count tokens; ~4 characters per token in English.

**Scene 4 · 3:00 to 5:15 · Beat 2: Embeddings**

- Visuals: Tokens turn into points in a slowly rotating 3D space. 'king', 'queen', 'man', 'woman' drift into place and an arrow shows king - man + woman ≈ queen. Clusters form for animals, foods, cities.
- On-screen text: Meaning as position
- Voice-over cue (host): Similar meaning = nearby points; this powers search and RAG later.

**Scene 5 · 5:15 to 7:30 · Beat 3: Attention and the transformer**

- Visuals: Sentence 'The animal didn't cross the street because it was tired.' Lines light up from 'it' to every word, thickest to 'animal'. Then a stack of transformer blocks builds up, with the sentence flowing through.
- On-screen text: Attention: every word looks at every other word
- Voice-over cue (host): The 2017 idea that made LLMs possible.

**Scene 6 · 7:30 to 9:30 · Beat 4: Predicting the next token**

- Visuals: A bar chart of next-token probabilities ('mat' 62%, 'floor' 18%...). A temperature slider moves: low temperature makes one bar dominate, high temperature flattens the bars. The chosen token drops into the sentence and the process repeats in a loop.
- On-screen text: Probabilities · Temperature
- Voice-over cue (host): Why answers vary each time.

**Scene 7 · 9:30 to 11:00 · Beat 5: How an LLM is trained**

- Visuals: Three-stage factory conveyor: raw internet text -> Pre-training (a huge model block) -> Instruction tuning (Q&A cards) -> RLHF (thumbs up/down) -> helpful assistant robot.
- On-screen text: Pre-train -> Instruction tune -> RLHF
- Voice-over cue (host): Plus: hallucinations and knowledge cutoffs.

**Scene 8 · 11:00 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockup of a tokenizer page with colored token highlights; callouts on the token count. Second frame: Hugging Face tokenizer docs.
- On-screen text: Count your tokens
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Text becomes tokens  2. Attention links meaning  3. The model predicts one token at a time
- Voice-over cue (host): Recap.

**Scene 10 · 13:45 to 14:00 · Teaser**

- Visuals: Mascot walks to stop 6; logos-free silhouettes of many models appear.
- On-screen text: Tomorrow: The Model Landscape
- Voice-over cue (host): Preview Day 6.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| OpenAI Tokenizer | https://platform.openai.com/tokenizer | Interactive token counter for the demo |
| tiktoken (open source) | https://github.com/openai/tiktoken | Open-source tokenizer library |
| Hugging Face Tokenizers | https://huggingface.co/docs/tokenizers/index | Open-source tokenizer docs |
| Hugging Face LLM Course | https://huggingface.co/learn/llm-course/chapter1/1 | Free deeper dive on transformers |
| Attention Is All You Need | https://arxiv.org/abs/1706.03762 | The transformer paper |

### Hands-on task (end card)

Paste a paragraph into a tokenizer tool and count the tokens; compare English with another language.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 5: Inside an LLM: Tokens, Embeddings, Transformers", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
