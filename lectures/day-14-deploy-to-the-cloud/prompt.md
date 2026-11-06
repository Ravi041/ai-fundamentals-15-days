# Day 14: Deploying to the Cloud

**Part 4: Shipping** · Target runtime: 14 min (range 10 to 15 min) · 4K UHD · Cream background · Voice-over by host

## Prompt

Create a complete 14 min educational YouTube explainer video in 4K (3840 x 2160, 16:9, 30 fps) for Day 14 of a 15-day beginner course called "AI Fundamentals in 15 Days". The lecture title is "Deploying to the Cloud". Use a warm cream paper background throughout, flat 2D explainer motion graphics, and clean browser-window frames for references to public documentation web pages. Do not generate any narration or voice; the host will record the voice-over separately, so leave room for it and keep on-screen text short. Follow the visual style, scene list and references below exactly.

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

- **No AI narration.** The host records the voice-over separately. Leave the voice-over track empty.
- Light, warm background music bed at about -28 LUFS, ducking under voice. Soft UI sound effects (pops, whooshes, clicks) at low volume.
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

- Master video: 3840 x 2160, 30 fps, no narration, music and SFX on separate stems
- Separate stems: music bed, sound effects
- Thumbnail: 3840 x 2160 on the cream background, large title text "Day 14: Deploying to the Cloud", mascot and the part accent color
- Chapter markers matching the scene list, for the YouTube description
