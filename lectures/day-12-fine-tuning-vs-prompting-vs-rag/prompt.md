# Day 12: Customizing Models: Fine-Tuning vs Prompting vs RAG

**Part 3: Building AI Apps** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 12 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Customizing Models: Fine-Tuning vs Prompting vs RAG". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

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

- **No AI narration.** The host records the voice-over separately. Leave the voice-over track empty.
- Light, warm background music bed at about -28 LUFS, ducking under voice. Soft UI sound effects (pops, whooshes, clicks) at low volume.
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

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 12: Customizing Models: Fine-Tuning vs Prompting vs RAG", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
