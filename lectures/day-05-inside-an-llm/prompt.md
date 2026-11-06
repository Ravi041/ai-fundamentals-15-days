# Day 05: Inside an LLM: Tokens, Embeddings, Transformers

**Part 2: Working with LLMs** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 5 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Inside an LLM: Tokens, Embeddings, Transformers". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,430 words: roughly 11 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[phone keyboard suggests a word]** You've used this a thousand times. You type "see you", and your phone suggests the next word: "tomorrow".

**[zoom out, giant model writes an essay]** Now imagine that same idea, but trained on a huge chunk of the internet, with billions of dials instead of a handful. Suddenly it's not suggesting one word. It's writing whole essays, code and emails, one word at a time. That's ChatGPT. Well, sort of.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[map turns indigo, Token at stop 5]** Welcome to Part 2: Working with LLMs. LLM stands for **large language model**, and today we open one up and see the three ideas that make it work: tokens, embeddings and transformers.

#### Scene 3 · 0:45 to 3:00 · Tokens

**[sentence shatters into token blocks]** First surprise: language models don't read words. They read **tokens**. A token is a chunk of text. Often it's a whole word, sometimes part of a word, sometimes just a punctuation mark.

**[long word splits into two tokens]** Common words like "the" or "cat" are usually a single token. Longer or rarer words get split into pieces. A word like "unbelievable" might become "un" and "believable".

**[space attached to a word]** And look at this. The space before a word is usually glued onto the token. So " cat" with a space and "cat" without one can be different tokens. Weird, but it works.

**[counter in the corner]** Why should you care? Because tokens are what everything is counted in. As a rough rule, one token is about four characters of English, or about three quarters of a word. So a hundred words is roughly a hundred and thirty tokens. And when you pay for an AI model, you pay per token, for what goes in and what comes out.

**[context shelf fills]** Tokens also set the model's memory limit. Every model has a **context window**: the maximum number of tokens it can look at in one go, including your question, any documents you paste in, the conversation so far, and its own answer.

**[oldest tokens fall off]** Think of it as a shelf. When the shelf is full, something has to go. In a long chat, the oldest messages get dropped or summarized, which is why a chatbot can "forget" what you said an hour ago. Modern context windows are huge, but they're never infinite.

#### Scene 4 · 3:00 to 5:15 · Embeddings

**[tokens become points in 3D space]** So the model sees tokens. But a computer can only do maths with numbers. So each token is turned into a long list of numbers called an **embedding**.

**[space slowly rotates]** You can picture an embedding as a position in space. We're showing three dimensions here, but real models use hundreds or thousands. The key idea is that words with similar meanings end up close together.

**[clusters: animals, foods, cities]** Look at the clusters. Animals sit near other animals. Foods group with foods. Cities with cities. Nobody placed them there by hand. The model learned these positions just by reading how words are used.

**[king, queen, man, woman arrow]** And here's the famous example. Take the position of "king", subtract "man", add "woman", and you land very close to "queen". Directions in this space carry meaning, like male to female, or country to capital.

**[hold on the arrow]** This is the idea of meaning as position, and it's one of the most useful ideas in this whole course. On Day 10, we'll use embeddings to build search that understands meaning, not just matching words. That's the heart of something called RAG.

#### Scene 5 · 5:15 to 7:30 · Attention and the transformer

**[sentence appears]** Here's a sentence: "The animal didn't cross the street because it was tired."

**[lines from "it" to every word]** Quick question: what does "it" refer to? You know instantly. The animal. But how would a computer know? It can't be the street, because streets don't get tired.

**[thickest line to "animal"]** This is what **attention** does. For every token, the model looks at every other token in the text, and decides how much each one matters to it right now. Here, "it" pays the most attention to "animal". Change the sentence to "because it was too wide", and suddenly "it" pays attention to "street".

**[transformer blocks stack up]** A **transformer** is built from many blocks stacked on top of each other. Each block does attention, then a bit of processing, and passes the result up. Lower blocks pick up simple things like grammar. Higher blocks pick up meaning, tone and facts.

**[sentence flows through the stack]** The big advantage over older designs is that attention looks at every word at the same time, instead of one by one. That means it trains incredibly fast on modern chips, which made it possible to train on enormous amounts of text. That's the 2017 idea from "Attention Is All You Need". It's the T in GPT, and it's inside Claude, Llama and almost every model you'll use.

#### Scene 6 · 7:30 to 9:30 · Predicting the next token

**[bar chart of probabilities]** So, after all those layers, what does the model actually output? Just one thing: a list of probabilities for what the next token should be.

**["mat" 62%, "floor" 18%]** For "The cat sat on the", it might say "mat" sixty-two percent, "floor" eighteen percent, and so on down a long list.

**[chosen token drops in, loop repeats]** It picks one, adds it to the text, and then does the whole thing again for the next token. And again. Every answer you've ever had from a chatbot was written like this, one token at a time. That's why answers appear word by word on the screen.

**[temperature slider low]** How it picks is controlled by a setting called **temperature**. At low temperature, the model almost always picks the top choice. Answers are focused and repeatable. Great for facts, maths or code.

**[temperature slider high]** At high temperature, the bars flatten out and less likely words get picked more often. Answers become more varied and creative, but also more likely to wander off.

**[hold]** This also explains two things you'll run into. First, why you can get a different answer each time you ask. And second, **hallucinations**. The model predicts what *sounds* likely, not what is *true*. If it doesn't know, it can still produce something that sounds perfectly confident. Also remember the **knowledge cutoff**: a model only knows what was in its training data, up to a certain date.

#### Scene 7 · 9:30 to 11:00 · How an LLM is trained

**[raw text enters the factory]** Finally, how do you build one of these? It happens in three stages.

**[Pre-training]** Stage one is **pre-training**. The model reads a massive amount of text, from books, websites and code, and plays the guess-the-next-token game trillions of times. This is the expensive part, using thousands of GPUs for weeks or months. At the end, it knows a lot about language and the world, but it's just a very good autocomplete.

**[Instruction tuning, Q&A cards]** Stage two is **instruction tuning**. It's trained on many examples of questions and good answers, so it learns to actually follow instructions and act like an assistant.

**[RLHF thumbs up and down]** Stage three is **RLHF**, reinforcement learning from human feedback. People compare answers and pick the better one. The model is rewarded for answers people prefer: more helpful, more honest, safer.

**[helpful robot]** Out comes a helpful assistant. Remember door number three from Day 2? This is reinforcement learning in action.

#### Scene 8 · 11:00 to 13:15 · Count your tokens

**[tokenizer page]** Let's see tokens with your own eyes. Open the OpenAI tokenizer at platform.openai.com/tokenizer. It's free, and you don't need an API key.

**[colored token highlights]** Paste in a paragraph of English, maybe the first paragraph of an article. Each colored block you see is one token.

**[callout: token count]** Below it, look at the counts: how many characters, and how many tokens. Divide the characters by the tokens. You'll probably get something close to four.

**[hold]** Now try a few things. Paste in a long, unusual word, and watch it split. Paste in some code, and see how spaces and symbols become tokens. Then paste the same paragraph in another language, like Hindi, Spanish or Japanese. Many languages use more tokens for the same meaning, which means they cost more and use up the context window faster.

**[Hugging Face tokenizer docs]** If you want to go deeper, open-source models have their own tokenizers. The Hugging Face Tokenizers docs show how they work, and you'll see these again on Day 8.

**[hold]** Your homework: count the tokens in one paragraph of English and the same paragraph in another language. Write down both numbers.

#### Scene 9 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Text becomes tokens, and tokens are what everything is counted and paid in.

**[check 2]** Embeddings turn meaning into position, and attention links each word to the ones that matter.

**[check 3]** And the model writes by predicting one token at a time.

#### Scene 10 · 13:45 to 14:00 · Teaser

**[Token walks to stop 6, model silhouettes]** Tomorrow, we meet the models themselves: ChatGPT, Claude and the world of open source. See you on Day 6.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 5: Inside an LLM: Tokens, Embeddings, Transformers", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
