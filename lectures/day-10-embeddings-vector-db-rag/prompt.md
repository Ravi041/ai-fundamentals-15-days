# Day 10: Embeddings, Vector Databases and RAG

**Part 3: Building AI Apps** · Target runtime: 15 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 15 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 10 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Embeddings, Vector Databases and RAG". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,380 words: roughly 11 minutes of speaking at a relaxed 130 words per minute, with the rest of the 15 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[user asks about leave policy, bot makes something up]** An employee asks the company chatbot: "How many days of parental leave do I get?" It answers instantly, and confidently: "Twelve weeks." Totally made up.

**[rewind, bot opens a document, answers with source tag]** Now rewind. This time, before answering, the bot looks up the real policy document, finds the right page, and answers with the correct number, plus a link to the source. That's the difference we'll build today. Give the model an open book.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 10]** Welcome to Day 10. Yesterday you made your first API calls. Today you'll connect a model to your own documents, using a technique called RAG. It's one of the most useful things you can build with AI.

#### Scene 3 · 0:45 to 2:30 · Why LLMs don't know your data

**[library with "closed on" date sign]** Think of a model's knowledge as a huge library. It's read an enormous amount. But the doors closed on a certain date, its **training cutoff**. Anything that happened after that, it simply hasn't read.

**[private files in a locked box outside]** And there's a bigger problem. Your company handbook, your contracts, your notes, your product manuals. None of that was ever in the library. It's private. The model has never seen it.

**[hold]** So when you ask about it, the model does what we learned on Day 5: it predicts what sounds likely. That's how you get a confident, wrong answer.

**[hold]** The fix isn't to retrain the model. It's much simpler. Before the model answers, we find the relevant pieces of your documents and paste them into the prompt. Remember grounding from Day 7? This is grounding, done automatically. It's called **RAG**, short for **Retrieval-Augmented Generation**. First retrieve, then generate.

#### Scene 4 · 2:30 to 5:30 · The RAG pipeline

**[pipeline outline]** A RAG system has six stages. Let's build it one piece at a time.

**[Load: PDF]** Stage one: **Load**. We read the document into plain text. A PDF, a web page, a Word file, it all becomes text.

**[Chunk: PDF slices into cards with overlaps]** Stage two: **Chunk**. A whole handbook is too big to paste into every prompt. So we slice it into small pieces called chunks, maybe a few paragraphs each. And notice the small overlaps between cards. Each chunk shares a sentence or two with the next, so an idea that falls on the edge isn't cut in half.

**[Embed: cards become glowing dots]** Stage three: **Embed**. Each chunk goes through an embedding model, and becomes a list of numbers, a point in meaning-space. Exactly like the words we saw on Day 5, but now for whole paragraphs.

**[Store: dots fly into the database cylinder]** Stage four: **Store**. We save all those points, along with the original text, in a special kind of database built for this, called a **vector database**.

**[hold]** Those first four stages happen once, ahead of time. Think of it as building the index of a book. The next two happen every time someone asks a question.

**[Retrieve]** Stage five: **Retrieve**. We embed the user's question, and ask the database: which chunks are closest in meaning?

**[Generate]** And stage six: **Generate**. We put those chunks into the prompt with an instruction like: "Answer using only the context below. If the answer isn't there, say you don't know." Then we send it to the model, just like on Day 9.

**[full pipeline]** Load, chunk, embed, store. Then retrieve and generate. That's all of RAG.

#### Scene 5 · 5:30 to 7:45 · Similarity search

**[3D vector space of dots]** Let's zoom in on the retrieve step, because this is where the magic happens. Here's our vector space. Every dot is one chunk of the handbook.

**[question becomes a new dot]** The user asks: "How much time off do I get when I have a baby?" That question is embedded too, so it becomes a dot in the same space.

**[nearest three dots light up]** Now we find its nearest neighbors. These three chunks light up. They're about parental leave, even though the question never used the words "parental" or "leave". That's the power of embeddings. They match meaning, not just keywords. An old keyword search would have missed this completely. To measure closeness, most systems use something called cosine similarity. It checks whether two arrows point in the same direction. You don't need the maths, just the idea: same direction, similar meaning.

**[lines connect: top-k]** How many chunks we grab is called **top-k**. Here, k is three. Too few, and you might miss the answer. Too many, and you fill the prompt with noise and cost.

**[chunks slide into the prompt card]** Those three chunks slide into the prompt, right next to the question. Now the model has an open book, and the answer is right there in front of it.

#### Scene 6 · 7:45 to 9:30 · Vector databases

**[row of database cylinders]** So where do the vectors live? You've got lots of choices. Here are four you'll hear about.

**[Chroma: local]** **Chroma** is open source and runs right inside your Python program, saving to a local folder. Nothing to set up. It's perfect for learning and prototypes, so it's what we'll use today.

**[FAISS: library]** **FAISS**, from Meta, is a super-fast open-source library for searching through millions of vectors. It's more of an engine than a full database.

**[pgvector: Postgres]** **pgvector** adds vector search to Postgres, a hugely popular regular database. If your app already uses Postgres, this keeps everything in one place.

**[Pinecone: cloud]** And **Pinecone** is a fully managed cloud service. You pay, and they handle the scaling.

**[hold]** My advice: start simple. Use Chroma until you have a real reason to change. The RAG idea stays exactly the same whichever one you pick.

#### Scene 7 · 9:30 to 11:00 · Tuning and citations

**[chunk size slider]** When your RAG answers are off, here's what to tweak. First, **chunk size**. Chunks that are too small lose context. Too big, and the important sentence gets buried. A few hundred words is a good place to start.

**[overlap slider]** Second, **overlap**. A little overlap, maybe ten to twenty percent, stops ideas from being split in half.

**[top-k]** Third, **top-k**. If the answer is often missing, retrieve a few more chunks.

**[source chips: page 4, page 12]** And finally, always **cite your sources**. Store the page number with each chunk, and show it next to the answer. Now users can click and check for themselves. It builds trust, and it makes wrong answers easy to spot.

**[hold]** When debugging, always look at which chunks were retrieved first. If the right chunk wasn't retrieved, no prompt in the world will fix the answer.

#### Scene 8 · 11:00 to 14:15 · Chat with your PDF

**[notebook recording placeholder]** Let's build it. Open a new Colab notebook, and pick any PDF you know well. A user manual, a policy document, or a research paper.

**[hold]** First, install the tools: `pip install chromadb sentence-transformers pypdf`. Pypdf reads the PDF, sentence-transformers makes the embeddings, and Chroma stores them.

**[sentence-transformers docs]** Step one, load. Use pypdf to read the text from each page, and keep track of the page number.

**[hold]** Step two, chunk. Split each page into pieces of a few hundred words, with a little overlap.

**[hold]** Step three, embed. Load a small embedding model from Sentence Transformers. A popular starting point is all-MiniLM-L6-v2. It's free, small, and runs fine in Colab. Turn every chunk into an embedding.

**[Chroma docs]** Step four, store. Create a Chroma collection, and add your chunks with their embeddings, and the page number as metadata.

**[hold]** Step five, retrieve. Write a question, embed it with the same model, and query the collection for the top three results. Print them out and check: are these the right chunks?

**[hold]** Step six, generate. Build a prompt with the chunks and the question, add "answer only from the context, and cite the page numbers", and send it to OpenAI, Claude, or your local Ollama model, with the code from Day 9.

**[LangChain or LlamaIndex tutorial]** Once you've built it by hand, have a look at frameworks like LangChain and LlamaIndex. They wrap all six steps into a few lines. But doing it yourself first means you'll actually understand what's going on inside.

**[hold]** Then test it. Ask five questions you know the answers to, and one that isn't in the document. Does it say "I don't know"? If it does, you've built a real RAG app.

#### Scene 9 · 14:15 to 14:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Retrieve first, then generate.

**[check 2]** Embeddings find chunks by meaning, not just keywords.

**[check 3]** And always cite your sources.

#### Scene 10 · 14:45 to 15:00 · Teaser

**[Token walks to stop 11 wearing a toolbelt]** So far our models can only talk. Tomorrow, we give them tools, and they start doing things. See you on Day 11.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 10: Embeddings, Vector Databases and RAG", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
