# Day 03: Neural Networks and Deep Learning, Visually

**Part 1: Foundations** · Target runtime: 13 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 13 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 3 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Neural Networks and Deep Learning, Visually". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

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

- **Silent video.** Generate no audio of any kind: no AI narration or voice, no background music, no sound effects. Leave the audio track silent.
- The host records the voice-over separately from the narration voice-over script at the end of this storyboard.
- Do not add music or sound effects unless the host explicitly asks for them.
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

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,260 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 13 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[cat picture into the black box]** You show a computer a picture of a cat. A moment later, it says: "cat." Easy, right? But how?

**[box turns transparent]** For years this was a black box, even to a lot of people who use it. Today, let's open the box and look at what's inside.

**[glowing nodes]** Spoiler: it's millions of tiny, very simple pieces, all working together.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 3]** Welcome to Day 3. Yesterday we saw that machine learning finds rules from data. Today we meet the most powerful kind of model, the neural network, and see it visually, with no heavy math.

#### Scene 3 · 0:45 to 3:00 · One neuron

**[single neuron circle]** Everything starts with one tiny unit called a **neuron**. It's loosely inspired by brain cells, but it's really just a little calculator.

**[three input arrows]** It takes in a few numbers. Let's say we're deciding whether to go to the beach. Input one: is it sunny? Input two: is it the weekend? Input three: is the water cold?

**[weight dials]** Each input has a **weight**, which says how much that input matters. Sunshine might matter a lot, so it gets a big weight. Cold water counts against going, so it gets a negative weight.

**[sum in the circle]** The neuron multiplies each input by its weight and adds them all up. Then it adds one more number called the **bias**, which is like the neuron's starting mood, how keen it is before it even looks at the inputs.

**[activation curve]** Finally, the total goes through an **activation function**. Think of it as a squish. It turns the total into a clean output, like "how much yes" on a scale from zero to one.

**[dials turn, output changes]** Watch what happens when I turn the dials. Make sunshine matter more, and the output goes up. Make cold water matter more, and it drops. So a neuron is really just a tiny weighted vote. Inputs, times weights, plus a bias, through a squish, out comes a decision.

**[hold]** On its own, one neuron is pretty dumb. The magic happens when you connect lots of them.

#### Scene 4 · 3:00 to 5:00 · Layers

**[neurons multiply into layers]** So let's add more neurons and stack them into **layers**.

**[input layer]** The first layer is the **input layer**. For a picture, each input could be the brightness of one pixel, so a small photo might have tens of thousands of inputs.

**[hidden layers]** In the middle are the **hidden layers**. Each neuron here takes a weighted vote of everything in the layer before it, and passes its answer forward.

**[output layer]** At the end is the **output layer**, which gives the final answer, like one neuron for "cat" and one for "dog".

**[signals pulse left to right]** When you feed in a picture, signals flow from left to right, layer by layer, until an answer comes out.

**[hold]** And here's the term you've been waiting for. When a network has many hidden layers, we call it a **deep** neural network. That's where the name **deep learning** comes from. Not deep as in profound. Deep as in lots of layers. Modern language models have dozens of layers and billions of weights. But each weight is still just one of these little dials.

#### Scene 5 · 5:00 to 7:30 · Learning = reducing error

**[output says dog, label says cat]** So how does a network learn? At the start, all the dials are set randomly, and the network is terrible. We show it a cat, and it says "dog".

**[error meter turns red]** We measure how wrong it was. That measure of wrongness is called the **loss**. Big mistake, big loss.

**[red pulses flow backward]** Now the clever part. The network works backwards from the mistake and asks every dial: how much did *you* contribute to this error? This step is called **backpropagation**. It's like a team reviewing a lost match and working out who should change what.

**[dials nudge]** Each dial then gets nudged a tiny bit in the direction that would have made the answer less wrong.

**[loss landscape, ball rolls downhill]** Here's a picture that helps. Imagine all the possible dial settings as a hilly landscape, where height is the loss. High ground means lots of mistakes. We want to get to the bottom of a valley. So at each step, the network feels which way is downhill and takes a small step. This is called **gradient descent**. Gradient just means slope.

**[ball reaches the valley, meter turns green]** Show it one picture, measure the loss, push the blame backwards, nudge the dials, step downhill. Then repeat that millions of times, with millions of pictures. Slowly, the loss falls and the network gets good.

**[hold]** That's it. That's how every neural network learns, from a cat detector to ChatGPT. No magic, just a lot of tiny nudges.

#### Scene 6 · 7:30 to 9:00 · What layers see

**[cat passes through layer panels]** So what are all those layers actually doing? Researchers looked inside image networks and found something beautiful.

**[edges panel]** The early layers learn to spot simple things like edges and lines.

**[shapes panel]** The middle layers combine edges into shapes: curves, circles, the outline of an ear or an eye.

**[cat panel]** And the later layers combine those shapes into whole objects: a face, a wheel, a cat.

**[hold]** Nobody programmed this. The network discovered on its own that building from simple to complex is a good way to see. This kind of network for images is called a **convolutional neural network**, or CNN, and it's what powered the 2012 breakthrough we saw on Day 1. And it isn't only pictures. Networks for sound and text build up in layers too: from sounds to syllables to words, or from letters to words to meaning.

#### Scene 7 · 9:00 to 10:00 · From RNNs to transformers

**[sentence read word by word through a chain]** Language was harder. Early networks for text, called RNNs, read one word at a time, like reading through a keyhole. By the end of a long sentence, they'd half forgotten the start.

**[sentence all at once, attention lines]** Then in 2017 came the **transformer**. It looks at every word at once, and draws connections between the words that matter to each other. That idea is called **attention**, and it's behind every modern chatbot. On Day 5, we'll open it up properly.

#### Scene 8 · 10:00 to 12:15 · Train a network in your browser

**[TensorFlow Playground]** Time to play. Open TensorFlow Playground at playground.tensorflow.org. It's a free, real neural network running in your browser.

**[callout: dataset picker]** On the left, pick a dataset. Choose the **spiral**, the one with two swirling arms of orange and blue dots. The network's job is to separate them.

**[callout: hidden layers]** In the middle, you'll see the hidden layers. Use the plus and minus buttons to add or remove layers.

**[callout: neuron count]** Above each layer, you can change how many neurons it has.

**[callout: play button]** Now press **play** at the top. Watch the background colors shift as the network learns, and watch the lines between neurons get thicker or thinner. Those lines are the weights, the dials, changing live.

**[callout: test loss]** Keep an eye on the **test loss** at the top right. That's the error on data it hasn't trained on. Lower is better.

**[hold on demo]** Here's your homework. Start with one layer and two neurons, and see how it struggles with the spiral. Then add layers and neurons until it can solve it. Write down the smallest network that works. And try changing the activation to ReLU to see if it learns faster.

#### Scene 9 · 12:15 to 12:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Neurons are tiny weighted votes.

**[check 2]** Training nudges the weights, over and over, to cut the error.

**[check 3]** And depth lets networks learn features, from simple edges up to whole objects.

#### Scene 10 · 12:45 to 13:00 · Teaser

**[Token walks to stop 4, toolbox appears]** Tomorrow, we set up your AI toolkit and write your first lines of Python. See you on Day 4.

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

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 3: Neural Networks and Deep Learning, Visually", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
