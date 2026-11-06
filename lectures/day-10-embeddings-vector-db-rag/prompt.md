# Day 10: Embeddings, Vector Databases and RAG

**Part 3: Building AI Apps** · Target runtime: 15 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 15 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 10 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Embeddings, Vector Databases and RAG". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Explain Retrieval-Augmented Generation and why it reduces hallucinations
- Create embeddings and store them in a vector database
- Build a chat-with-your-PDF app

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

- Visuals: A user asks a chatbot about their company's leave policy; the bot confidently makes something up (red stamp 'Hallucination'). Rewind; this time the bot opens a document first and answers correctly with a source tag.
- On-screen text: "Give the model an open book."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 10.
- On-screen text: Day 10 of 15: RAG
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 2:30 · Beat 1: Why LLMs don't know your data**

- Visuals: The model's knowledge drawn as a library with a 'closed on' date sign. Your private files sit outside in a locked box.
- On-screen text: Training cutoff · Private data
- Voice-over cue (host): The problem RAG solves.

**Scene 4 · 2:30 to 5:30 · Beat 2: The RAG pipeline**

- Visuals: Pipeline builds left to right, one stage per beat: Load (PDF) -> Chunk (PDF slices into cards with small overlaps) -> Embed (cards become glowing dots) -> Store (dots fly into a vector database cylinder) -> Retrieve -> Generate.
- On-screen text: Load · Chunk · Embed · Store · Retrieve · Generate
- Voice-over cue (host): Name each stage.

**Scene 5 · 5:30 to 7:45 · Beat 3: Similarity search**

- Visuals: 3D vector space of dots. A question becomes a new dot; the nearest 3 dots light up and lines connect them (top-k). Those chunks slide into the prompt card next to the question.
- On-screen text: Nearest neighbors = relevant chunks
- Voice-over cue (host): Callback to Day 5 embeddings.

**Scene 6 · 7:45 to 9:30 · Beat 4: Vector databases**

- Visuals: A row of database cylinders with plain-text labels: Chroma, FAISS, pgvector, Pinecone (managed). Tags: local / library / Postgres / cloud.
- On-screen text: Chroma · FAISS · pgvector · Pinecone
- Voice-over cue (host): Pick simple first: Chroma.

**Scene 7 · 9:30 to 11:00 · Beat 5: Tuning and citations**

- Visuals: Sliders for chunk size and overlap change how the PDF slices. The final answer shows small source chips (page 4, page 12) that expand on hover.
- On-screen text: Chunk size · Overlap · Top-k · Cite sources
- Voice-over cue (host): What to tweak when answers are off.

**Scene 8 · 11:00 to 14:15 · Hands-on demo**

- Visuals: Browser-frame mockups: Chroma docs, sentence-transformers docs, LangChain or LlamaIndex RAG tutorial. Placeholder for notebook screen recording.
- On-screen text: Chat with your PDF
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 14:15 to 14:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Retrieve, then generate  2. Embeddings find meaning  3. Cite your sources
- Voice-over cue (host): Recap.

**Scene 10 · 14:45 to 15:00 · Teaser**

- Visuals: Mascot walks to stop 11 wearing a toolbelt.
- On-screen text: Tomorrow: Tools and Agents
- Voice-over cue (host): Preview Day 11.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| Chroma docs | https://docs.trychroma.com/ | Open-source vector database |
| FAISS | https://github.com/facebookresearch/faiss | Open-source similarity search |
| pgvector | https://github.com/pgvector/pgvector | Vectors in Postgres |
| Sentence Transformers | https://sbert.net/ | Open-source embedding models |
| OpenAI: Embeddings guide | https://platform.openai.com/docs/guides/embeddings | Hosted embeddings |
| LangChain docs | https://python.langchain.com/docs/introduction/ | RAG framework |
| LlamaIndex docs | https://docs.llamaindex.ai/ | RAG framework |

### Hands-on task (end card)

Load a PDF, chunk it, embed it into Chroma, and answer questions with sources.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 10: Embeddings, Vector Databases and RAG", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
