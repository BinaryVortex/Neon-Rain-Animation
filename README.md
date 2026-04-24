# Neon Rain Animation

![Screenshot](./Screenshot%202024-07-09%20063732.png)

Neon Rain Animation built using HTML, CSS and JavaScript.

## Overview

A lightweight, visually striking neon rain animation that runs in the browser. The effect is created with CSS animations and JavaScript generates raindrops, trails and splashes. The project include[...] 

## Features

- Neon-style falling raindrops with glow and blur.
- Trail and splash effects when drops finish their animation or when you click the screen.
- Randomized properties for natural-looking rain (size, color, blur, wind, timing).
- Optional rain and thunder audio (index.html references `rain-sound.mp3` and `thunder-sound.mp3`).
- Responsive: drops reposition on window resize.

## Files

- `index.html` — HTML entry point.
- `style.css` — All visual styles and keyframe animations.
- `script.js` — JavaScript that generates and controls the raindrops and audio.
- `Screenshot 2024-07-09 063732.png` — Project screenshot (shown above).

## How to run

1. Clone the repository:

```bash
git clone https://github.com/BinaryVortex/Neon-Rain-Animation.git
cd Neon-Rain-Animation
```

2. Open `index.html` in your browser. You can open it directly from the file system or serve it with a simple HTTP server (recommended for reliable audio playback):

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

3. (Optional) Add audio files

The HTML references `rain-sound.mp3` and `thunder-sound.mp3`. If those files are not present in the repository, either add your own audio files with those names to the repo root or remove the audi[...]

## Customization

- Number of drops: edit `numberOfDrops` in `script.js` (default: 300).
- Drop colors: modify the `colors` array in `script.js`.
- Wind and blur ranges: tweak the randomization code in `script.js` and the CSS variables/filters in `style.css`.

## Notes

- Sounds autoplaying may be blocked by some browsers until the page receives user interaction. If you don't hear audio automatically, click anywhere on the page to allow playback.
- If you want to reduce CPU usage, reduce `numberOfDrops` or simplify CSS shadow/blur values.

## Contributing

Contributions, improvements and bug fixes are welcome — feel free to open issues or PRs.

## License

No license file is included in this repository. If you want to allow others to reuse this project, consider adding an open-source license (for example, MIT).
