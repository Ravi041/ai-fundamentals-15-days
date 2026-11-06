# Day 03: Neural Networks and Deep Learning, Visually

**Part 1: Foundations** · Target runtime: 13 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 13 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 3 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Neural Networks and Deep Learning, Visually". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

### Learning goals

- Describe neurons, layers, weights and activations in plain terms
- Build intuition for loss, backpropagation and gradient descent
- Know where deep learning shines and why transformers took over

### Visual style (apply to every scene)

- **Resolution and format:** 3840 x 2160 (4K UHD), 16:9, 30 fps, H.264 or ProRes master. Title-safe margins of 5% on all sides.
- **Background:** warm cream paper, solid `#F7F1E3`, with a very subtle paper grain and a soft vignette. Never pure white, never dark mode.
- **Ink and text:** charcoal `#2B2B2B` for text and outlines; secondary text `#6B6458`; soft shadows `#E6DCC6`.
- **Part accent color:** Teal `#2A9D8F` for highlights, active elements and the progress bar. Supporting accents: mustard `#E9C46A`, muted red `#C8553D` (only for errors, myths and warnings).
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

- Visuals: A photo of a cat (flat illustration) is fed into a black box; the word 'cat' comes out. The box becomes transparent, revealing layers of glowing nodes.
- On-screen text: "What's inside the box?"
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 3.
- On-screen text: Day 3 of 15: Neural Networks
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 3:00 · Beat 1: One neuron**

- Visuals: A single neuron drawn as a circle. Three input arrows with numbers multiply by weight dials, sum in the circle, pass through an activation curve, and output a value. Dials turn and the output changes live.
- On-screen text: inputs x weights + bias -> activation -> output
- Voice-over cue (host): A neuron is a tiny weighted vote.

**Scene 4 · 3:00 to 5:00 · Beat 2: Layers**

- Visuals: Neurons multiply into an input layer, two hidden layers and an output layer. Signals pulse left to right as colored dots along the connections.
- On-screen text: Input layer · Hidden layers · Output layer
- Voice-over cue (host): Stacking neurons = deep learning.

**Scene 5 · 5:00 to 7:30 · Beat 3: Learning = reducing error**

- Visuals: Output shows 'dog' but the label says 'cat'; an error meter turns red. Red 'blame' pulses flow backward through the network and weight dials nudge. Cut to a 3D loss landscape drawn in soft shading; a ball rolls downhill in steps into a valley while the error meter turns green.
- On-screen text: Loss · Backpropagation · Gradient descent
- Voice-over cue (host): Intuition only, no math.

**Scene 6 · 7:30 to 9:00 · Beat 4: What layers see**

- Visuals: The cat image passes through layers; each layer panel shows what it detects: edges, then shapes (ears, eyes), then 'cat'.
- On-screen text: Edges -> Shapes -> Objects
- Voice-over cue (host): Hierarchical features; CNNs for images.

**Scene 7 · 9:00 to 10:00 · Beat 5: From RNNs to transformers**

- Visuals: A sentence read word by word through a chain (RNN), with early words fading. Then the same sentence appears all at once with attention lines connecting every word (transformer).
- On-screen text: RNN reads one word at a time · Transformer sees all at once
- Voice-over cue (host): Bridge to Day 5.

**Scene 8 · 10:00 to 12:15 · Hands-on demo**

- Visuals: Browser-frame mockup of TensorFlow Playground. Callouts on: dataset picker (spiral), hidden layers +/-, neuron count, play button, test loss readout.
- On-screen text: Train a network in your browser
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 12:15 to 12:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Neurons are weighted votes  2. Training nudges weights to cut error  3. Depth learns features
- Voice-over cue (host): Recap.

**Scene 10 · 12:45 to 13:00 · Teaser**

- Visuals: Mascot walks to stop 4; a toolbox appears.
- On-screen text: Tomorrow: Your AI Toolkit
- Voice-over cue (host): Preview Day 4.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| TensorFlow Playground | https://playground.tensorflow.org/ | The hands-on demo |
| PyTorch: Learn the Basics | https://pytorch.org/tutorials/beginner/basics/intro.html | Open-source deep learning framework |
| TensorFlow tutorials | https://www.tensorflow.org/tutorials | Open-source deep learning framework |
| Keras: Getting started | https://keras.io/getting_started/ | High-level open-source API |

### Hands-on task (end card)

Use TensorFlow Playground to train a network on the spiral dataset; change layers and neurons and watch the result.

### Deliverables

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 3: Neural Networks and Deep Learning, Visually", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
