# Day 1 video source

The video is built from code: `scene.html` holds all 9 scenes as HTML/SVG animations on one timeline, and `render.js` steps through it frame by frame and encodes a 4K MP4.

## Re-render

Needs Node.js, Playwright (`npm i playwright && npx playwright install chromium`) and ffmpeg.

```bash
node render.js scene.html ../output/day-01-what-ai-really-is-4k.mp4 30 2
```

- `30` is the frame rate, `2` renders 1920x1080 layouts at 2x (3840x2160).
- To preview a moment, open `scene.html` in a browser and run `seek(120)` in the console (time in seconds).
- Scene start and end times live in the `SCENES` list near the top of the script. Each animation's start time is the third argument of its `A(...)`, `pop(...)`, `rise(...)` or `fade(...)` call, so you can retime to match your voice-over.
