# סָיימוֹן (Saimon)

A classic Simon Says memory game implementation in Hebrew. Test your memory by repeating increasingly longer sequences of colored buttons with sound!

## Live Demo

🎮 Play now: [https://vyaron.github.io/saimon/](https://vyaron.github.io/saimon/)

## About

Saimon is a browser-based memory game where players must repeat a sequence of colored buttons. Each round adds one more step to the sequence, making it progressively more challenging. The game features:

- 4 colorful buttons with unique sounds
- Progressive difficulty - each round adds one more step
- Score tracking with local storage for high scores
- Hebrew interface (right-to-left)
- Sound effects and visual feedback
- Responsive design

## How to Play

1. Click the "קָדִימָה!" (Go!) button to start
2. Watch and listen as the computer plays a sequence
3. Repeat the sequence by clicking the buttons in the correct order
4. Each successful round adds one more step to the sequence
5. Try to beat your high score!

## Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling with radial gradients and animations
- **Vanilla JavaScript** - Game logic and interactivity
- **Web Audio API** - Sound effects and musical notes
- **Local Storage** - Persistent high score tracking

## Project Structure

```
saimon/
├── index.html          # Main HTML file
├── css/
│   └── main.css       # Styles and animations
├── js/
│   ├── main.js        # Game logic
│   └── util.service.js # Utility functions
├── img/               # Game images and GIFs
└── sound/
    └── note/          # Button sound effects
```

## Features

- **Visual Feedback**: Buttons light up when pressed
- **Audio Cues**: Each button has a distinct musical note
- **Score System**: Track your current score and all-time high score
- **Randomized Start**: Random motivational GIF on each game start
- **Error Handling**: Visual and audio feedback for mistakes
- **Mobile Friendly**: Responsive design works on various screen sizes

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/vyaron/saimon.git
   ```

2. Navigate to the project directory:
   ```bash
   cd saimon
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## License

This project is open source and available for educational purposes.

---

Made with ❤️ by [vyaron](https://github.com/vyaron)
