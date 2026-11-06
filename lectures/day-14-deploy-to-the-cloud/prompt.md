# Day 14: Deploying to the Cloud

**Part 4: Shipping** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 14 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Deploying to the Cloud". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any audio: no narration or voice, no background music and no sound effects. Deliver a silent video. The host will read the narration voice-over script below and record it separately, so leave room for it and keep on-screen text short. The script is for the host to read only: do not speak, sing or caption it, and do not show its sentences as on-screen text. Use it only to time each beat and to match the code and examples shown on screen to what the host will say. Follow the visual style, scene list and references below exactly.

### Learning goals

- Package an app with Docker
- Deploy to Hugging Face Spaces and to Render or Railway
- Manage secrets, logs and environment variables in production

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

- Visuals: The app on a laptop; the laptop lid closes and the app dies. Then the app lifts off into a cloud and a world map lights up with users.
- On-screen text: "Make it live for everyone."
- Voice-over cue (host): Hook.

**Scene 2 · 0:30 to 0:45 · Journey map**

- Visuals: Mascot at stop 14.
- On-screen text: Day 14 of 15: Deploy
- Voice-over cue (host): Where we are.

**Scene 3 · 0:45 to 2:30 · Beat 1: What deployment means**

- Visuals: Your laptop vs a server that is always on, with a public URL badge.
- On-screen text: Always on · Public URL
- Voice-over cue (host): Plain-English deployment.

**Scene 4 · 2:30 to 5:00 · Beat 2: Docker in 5 minutes**

- Visuals: 'Works on my machine' scene: the app breaks on a friend's computer. Then the app is packed into a shipping container (Dockerfile -> image -> container) and runs the same everywhere.
- On-screen text: Dockerfile · Image · Container
- Voice-over cue (host): Explain a minimal Dockerfile.

**Scene 5 · 5:00 to 7:30 · Beat 3: Hosting options**

- Visuals: Three launch pads: Hugging Face Spaces (free demos), Render / Railway (APIs), AWS / Azure / GCP (full control). Tags for difficulty and cost.
- On-screen text: Spaces · Render/Railway · Big cloud
- Voice-over cue (host): Which to pick when.

**Scene 6 · 7:30 to 9:15 · Beat 4: API apps vs self-hosted models**

- Visuals: Split comparison: small box server calling a paid API vs a big GPU rack running an open model. Monthly cost range tags shown as 'low' vs 'high' (no exact numbers).
- On-screen text: Light server vs GPU server
- Voice-over cue (host): Cost and complexity trade-off.

**Scene 7 · 9:15 to 10:30 · Beat 5: Secrets, logs, monitoring**

- Visuals: The .env vault moves into a cloud 'Secrets' panel. A log stream scrolls; an error line flashes red and an alert bell rings.
- On-screen text: Secrets · Logs · Alerts
- Voice-over cue (host): Production hygiene.

**Scene 8 · 10:30 to 13:15 · Hands-on demo**

- Visuals: Browser-frame mockups: Hugging Face Spaces docs, Docker get-started, Render docs. Placeholder for deploy screen recording.
- On-screen text: Deploy to Hugging Face Spaces
- Voice-over cue (host): Walk through the homework.

**Scene 9 · 13:15 to 13:45 · Recap**

- Visuals: Three-bullet card.
- On-screen text: 1. Docker packages it  2. Pick hosting by need  3. Secrets never in code
- Voice-over cue (host): Recap.

**Scene 10 · 13:45 to 14:00 · Teaser**

- Visuals: Mascot walks to the final stop 15; a trophy glints.
- On-screen text: Tomorrow: Production AI and What's Next
- Voice-over cue (host): Preview Day 15.

### Narration voice-over script (host only, do not generate audio)

> For the host to read while recording. The video tool must not voice, sing, caption or display these sentences. About 1,290 words: roughly 10 minutes of speaking at a relaxed 130 words per minute, with the rest of the 14 min runtime left for pauses on visuals and demo steps. Each section starts where its scene begins; a **[bracketed cue]** marks the on-screen moment to start that line on. If you run short, pause on the visual; if you run long, stretch the scene.

#### Scene 1 · 0:00 to 0:30 · Cold open hook

**[app on a laptop]** Here's the app you built yesterday, running beautifully on your laptop.

**[lid closes, app dies]** And here's what happens when you close the lid. Gone. Nobody else could ever reach it anyway.

**[app lifts into a cloud, world map lights up]** Today, we put it in the cloud: always on, with a link you can send to anyone in the world.

#### Scene 2 · 0:30 to 0:45 · Journey map

**[Token at stop 14]** Welcome to Day 14, the second-to-last stop. Today is the day your work goes live.

#### Scene 3 · 0:45 to 2:30 · What deployment means

**[your laptop vs always-on server]** **Deployment** just means running your app on a computer that's always on, always connected, and reachable by anyone. That computer is called a **server**, and it lives in a data center.

**[public URL badge]** Your laptop app had an address like localhost, which only works on your own machine. A deployed app gets a **public URL**, a real web address you can share.

**[hold]** You don't buy or manage the server yourself. Hosting platforms rent you a small slice of one, often for free to start, and they handle the hardware, the networking and the security patches. Your job is to give them your app in a form they can run, and the cleanest way to do that is Docker. Think of it like going from cooking in your own kitchen to opening a small restaurant. Same recipes, but now the doors are open to the public, it has to stay open all day, and you need to know when something goes wrong.

#### Scene 4 · 2:30 to 5:00 · Docker in 5 minutes

**["works on my machine", app breaks on a friend's computer]** You've probably heard this one: "But it works on my machine!" Your friend downloads your app, and it crashes. A different Python version, a missing package, a different operating system.

**[app packed into a shipping container]** **Docker** fixes this by packing your app into a box with everything it needs: the right Python, the right packages, your code, all of it. Just like a shipping container, it runs the same on any ship, in any port.

**[Dockerfile]** It works in three steps. First, a **Dockerfile**: a short recipe for building the box. A minimal one is about six lines. `FROM python:3.12-slim` starts from a small, clean Python. `WORKDIR /app` sets the folder. `COPY requirements.txt` and `RUN pip install -r requirements.txt` install your packages. `COPY . .` copies in your code. And `CMD` says how to start the app, for example with uvicorn.

**[image]** Second, you build the recipe into an **image**, with `docker build`. An image is the packed, frozen box.

**[container runs everywhere]** Third, you run the image as a **container**, with `docker run`. A container is the box, running. The same image runs on your laptop, your friend's laptop and a cloud server, all identically.

**[hold]** One important rule: never copy your dot env file into the image. Add a `.dockerignore` file, like dot gitignore, to keep secrets out. We'll give the secrets to the server a different way in a moment.

#### Scene 5 · 5:00 to 7:30 · Hosting options

**[three launch pads]** So where do you deploy? There are three main launch pads.

**[Hugging Face Spaces]** Pad one: **Hugging Face Spaces**. Free hosting for AI demos. It runs Gradio apps directly, and anything else with Docker, including Streamlit and FastAPI. It's the easiest place to share your work, and it's where we'll deploy today.

**[Render / Railway]** Pad two: **Render** or **Railway**. These are great for APIs and small production apps. You connect your GitHub repo, and every time you push code, they rebuild and redeploy automatically. They have free or low-cost starter tiers, and paid plans when you need more.

**[AWS / Azure / GCP]** Pad three: the big clouds, **AWS**, **Azure** and **Google Cloud**. Full control and almost unlimited scale, but many more settings to learn. Most companies end up here eventually, but you don't need to start here.

**[difficulty and cost tags]** My advice: start on Spaces for demos, move to Render or Railway when you need a real API, and graduate to the big clouds when your project, or your job, needs it. One thing to know about free tiers: apps on them often go to sleep when nobody's using them, and take a little while to wake up on the next visit. That's fine for a demo, but pay for always-on hosting when real users depend on your app.

#### Scene 6 · 7:30 to 9:15 · API apps vs self-hosted models

**[small server calling a paid API]** There's one big decision that changes your hosting bill completely. On the left, your app calls a paid API like OpenAI or Claude. Your server only shuffles text back and forth, so a tiny, cheap server is plenty. You pay the model provider per token instead.

**[big GPU rack running an open model]** On the right, you host an open model yourself. Now your server has to run the model, and that usually means a GPU. GPU servers cost far more per month, and you pay for them even when nobody is using your app.

**[low vs high cost tags]** So for most beginners and small apps, the light server plus a paid API is cheaper and simpler. Self-hosting starts to make sense when you have lots of traffic, or strict privacy needs, or you've fine-tuned your own model, like on Day 12. And remember: on a laptop, Ollama costs nothing extra, but in the cloud, someone always pays for the GPU.

#### Scene 7 · 9:15 to 10:30 · Secrets, logs, monitoring

**[.env vault moves into a cloud Secrets panel]** In production, your dot env file stays on your laptop. Instead, every hosting platform has a **Secrets** or **environment variables** panel. You paste your API key there, and your app reads it with `os.getenv`, exactly like before. Your code doesn't change at all.

**[log stream scrolls]** Next, **logs**. Your app's print statements and errors now show up in the platform's log viewer. When something breaks, this is the first place to look.

**[error line flashes red, alert bell rings]** And finally, **alerts**. Set up a notification for when your app crashes or errors spike, so you find out before your users do. And set a spending limit on your model provider account, so a sudden traffic spike can't surprise you with a huge bill.

#### Scene 8 · 10:30 to 13:15 · Deploy to Hugging Face Spaces

**[Hugging Face Spaces docs]** Let's put your Day 13 app online. Go to huggingface.co, sign in, and click **New Space**.

**[deploy recording placeholder]** Give it a name, and pick an SDK. If you built your UI with Gradio, choose **Gradio**. If you used Streamlit or FastAPI, choose **Docker**. Free CPU hardware is fine, because the model runs at OpenAI or Anthropic.

**[Docker get-started]** For Docker, add your Dockerfile. Spaces expects the app to listen on port seven eight six zero by default, so start Streamlit or uvicorn on that port. If this is your first Dockerfile, the Docker get-started guide walks you through it.

**[hold]** Before you push, open the Space's **Settings**, find **Variables and secrets**, and add your API key as a secret, with the same name your code uses.

**[hold]** Now upload your files, or push them with Git, just like a GitHub repo. Spaces builds your app automatically. Watch the build logs. If it fails, the error is usually a missing package in requirements.txt, or the wrong port.

**[hold]** When it says **Running**, open your app and send a message. That's your app, live on the internet. Copy the link and send it to a friend. Your homework is to share that public link.

**[Render docs]** Bonus: deploy just the FastAPI backend to Render, using the same Dockerfile, and see how auto-deploy from GitHub works.

#### Scene 9 · 13:15 to 13:45 · Recap

**[card slides up]** Today in three lines.

**[check 1]** Docker packages your app so it runs the same everywhere.

**[check 2]** Pick your hosting by what you need.

**[check 3]** And secrets never go in your code or your image.

#### Scene 10 · 13:45 to 14:00 · Teaser

**[Token walks to the final stop 15, trophy glints]** One stop left. Tomorrow: running AI in production, keeping it safe and affordable, and what comes next. See you on Day 15.

### Web page references to show on screen

Show each page in the browser-window frame described above, with the URL visible. Open each link and capture a fresh screenshot before rendering, since docs pages move and change (links written November 2026).

| Reference | URL | What to show |
| --- | --- | --- |
| Docker: Get started | https://docs.docker.com/get-started/ | Containers |
| Hugging Face Spaces | https://huggingface.co/docs/hub/spaces | Free app hosting |
| Spaces: Docker SDK | https://huggingface.co/docs/hub/spaces-sdks-docker | Deploy a Docker app |
| Render docs | https://render.com/docs | Host APIs |
| Railway docs | https://docs.railway.com/ | Host APIs |
| FastAPI: Deployment | https://fastapi.tiangolo.com/deployment/ | Deployment concepts |

### Hands-on task (end card)

Deploy the Day 13 app to Hugging Face Spaces (free) and share the public link.

### Deliverables

- Master video: 3840 x 2160, 30 fps, silent (no narration, music or sound effects)
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 14: Deploying to the Cloud", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
