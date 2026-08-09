<div align="center">

# 🎲 Roll Again

### A simple dice game rebuilt as a modern React experience.

<p>
  <strong>React</strong> •
  <strong>Vite</strong> •
  <strong>JavaScript</strong> •
  <strong>CSS3</strong>
</p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
</p>

</div>

---

## 🎯 About

**Roll Again** is a two-player dice game created as a personal project.

The project originally started as a simple **HTML, CSS, and JavaScript** application. It was later rebuilt from the ground up using **React**, with a cleaner component architecture, reusable UI, game state management, animations, sound effects, round history, keyboard controls, and responsive styling.

> **Roll the dice. Take your chance. Roll Again. 🎲**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎲 **Two Players** | Both players roll a six-sided die |
| 🏆 **Winner Detection** | Automatically determines the round winner |
| 📊 **Live Scoreboard** | Tracks Player 1 and Player 2 wins |
| 🔢 **Round Counter** | Keeps track of completed rounds |
| 📜 **Round History** | Stores previous dice results |
| 🎬 **Dice Animation** | Animated rolling state |
| 🔊 **Sound Effects** | Dice rolling audio feedback |
| ⌨️ **Keyboard Controls** | Roll using `Space` or `Enter` |
| 🔄 **Reset Game** | Clears scores, rounds, and history |
| ✨ **Winner Highlight** | Visually highlights the winning player |
| 📱 **Responsive UI** | Works across desktop and smaller screens |
| 🎨 **Custom UI** | Dark interface with teal game accents |
| 🌌 **Ambient Effects** | Subtle background glow |
| 🎯 **Custom Favicon** | Dice-themed browser icon |

---

## 🎮 How to Play

### 1. Roll the Dice

Click the **Roll Dice** button:

```text
┌───────────────┐
│   🎲 Roll Dice │
└───────────────┘
```

You can also use your keyboard:

```text
SPACE
```

or:

```text
ENTER
```

---

### 2. Compare the Dice

Each player receives a random value between **1 and 6**.

```text
Player 1       VS       Player 2

   🎲                     🎲
   6                      3
```

---

### 3. Determine the Winner

The player with the higher dice value wins the round.

```text
🏆 Player 1 Wins
```

If both players roll the same number:

```text
🤝 Draw
```

---

### 4. Continue Playing

Every completed round updates:

```text
Player 1 Score
      │
      ▼
 Round Counter
      │
      ▼
Player 2 Score
      │
      ▼
 Round History
```

---

## 🖥️ Interface

The interface follows a dark, minimal game aesthetic.

```text
                     🎲 Roll Again

              ┌─────────────────────────┐
              │  PLAYER 1  ROUND  PLAYER 2
              │      2        5       3   │
              └─────────────────────────┘


                   Player 2 Wins 🏆

             ┌─────────┐       ┌─────────┐
             │ Player 1│  VS   │ Player 2│
             │         │       │         │
             │   🎲    │       │   🎲    │
             │         │       │         │
             └─────────┘       └─────────┘

                    ┌──────────┐
                    │ Roll Dice│
                    └──────────┘

                Press SPACE or ENTER


                 ┌── Round History ──┐
                 │ Round 5   2 - 6 P2 │
                 │ Round 4   4 - 3 P1 │
                 │ Round 3   5 - 5 Draw│
                 └───────────────────┘
```

---

## 🎨 Design

The project uses a dark background with a teal accent system.

```text
Background   #393e46
Primary      #4ecca3
Text         #eeeeee
Secondary    #858b92
---

## 🧩 Component Architecture

```text
                         ┌─────────┐
                         │   App   │
                         └────┬────┘
                              │
                              ▼
                         ┌─────────┐
                         │  Home   │
                         └────┬────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
        ┌──────────┐     ┌──────────┐    ┌──────────┐
        │ Scoreboard│     │   Game   │    │ History  │
        └──────────┘     └────┬─────┘    └──────────┘
                              │
                              ▼
                         ┌──────────┐
                         │   Dice   │
                         └──────────┘
```

---

## 🧠 State Management

### `Home.jsx`

`Home` owns the overall game-session state:

```text
player1Score
player2Score
round
history
```

It is responsible for:

- Updating scores
- Updating the round counter
- Storing round history
- Resetting the game

---

### `Game.jsx`

`Game` manages temporary gameplay state:

```text
player1
player2
result
isRolling
winner
```

It is responsible for:

- Rolling the dice
- Starting the animation
- Playing the sound
- Determining the winner
- Sending completed round information back to `Home`

---

### `Dice.jsx`

`Dice` displays an individual player's dice.

It receives:

```text
player
value
isRolling
```

and renders the appropriate dice image and animation.

---

### `History.jsx`

`History` displays completed rounds.

Each entry contains:

```text
Round Number
Player 1 Dice
Player 2 Dice
Winner / Draw
```

The newest round is displayed first.

---

## ⚙️ Game Flow

```text
                 User clicks Roll Dice
                          │
                          ▼
                    Check rolling
                          │
                    ┌─────┴─────┐
                    │           │
                   YES          NO
                    │           │
                    ▼           ▼
                 Ignore      Start Roll
                                │
                                ▼
                         Rolling Animation
                                │
                                ▼
                           Play Sound
                                │
                                ▼
                        Wait ~800ms
                                │
                                ▼
                       Generate Dice 1-6
                                │
                                ▼
                         Compare Values
                                │
                ┌───────────────┼───────────────┐
                ▼               ▼               ▼
             Player 1         Draw          Player 2
                │               │               │
                └───────────────┼───────────────┘
                                ▼
                         Update Score
                                │
                                ▼
                         Update Round
                                │
                                ▼
                         Add to History
                                │
                                ▼
                         Enable Roll Again
```

---

## ⏱️ Rolling Sequence

When the user clicks **Roll Dice**:

1. The rolling state starts.
2. The Roll Dice button becomes disabled.
3. The result changes to `Rolling...`.
4. The dice animation starts.
5. The dice sound is played.
6. Two random values between `1` and `6` are generated.
7. The values are compared.
8. The winner is determined.
9. The score is updated.
10. The round counter increases.
11. The round is added to history.
12. Rolling state ends.
13. The Roll Dice button becomes available again.

The current rolling delay is approximately **800ms**.

---

## ⌨️ Keyboard Controls

| Key | Action |
|---|---|
| `Space` | Roll dice |
| `Enter` | Roll dice |

Keyboard controls allow the game to be played without constantly clicking the button.

---

## 🔊 Sound

The dice rolling sound is stored inside:

```text
public/sounds/dice-roll.mp3
```

It is loaded using:

```javascript
const audio = new Audio("/sounds/dice-roll.mp3");
```

The game continues to work even if the browser blocks audio playback.

---

## 🔄 Reset Game

The **Reset Game** button resets the complete game session.

```text
Player 1 Score → 0
Player 2 Score → 0
Round          → 0
Round History  → Empty
---

## 📁 Project Structure

```text
roll-again/
│
├── 📁 public/
│   │
│   ├── 🖼️ favicon.png
│   │
│   ├── 📁 images/
│   │   ├── 🎲 dice1.png
│   │   ├── 🎲 dice2.png
│   │   ├── 🎲 dice3.png
│   │   ├── 🎲 dice4.png
│   │   ├── 🎲 dice5.png
│   │   └── 🎲 dice6.png
│   │
│   └── 📁 sounds/
│       └── 🔊 dice-roll.mp3
│
├── 📁 src/
│   │
│   ├── 📁 components/
│   │   │
│   │   ├── 📁 Dice/
│   │   │   ├── Dice.jsx
│   │   │   └── Dice.css
│   │   │
│   │   ├── 📁 Game/
│   │   │   ├── Game.jsx
│   │   │   └── Game.css
│   │   │
│   │   └── 📁 History/
│   │       ├── History.jsx
│   │       └── History.css
│   │
│   ├── 📁 pages/
│   │   │
│   │   └── 📁 Home/
│   │       ├── Home.jsx
│   │       └── Home.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript
- 🎨 CSS3
- 🌐 HTML5

---

### Dice Images

```text
public/images/dice1.png
public/images/dice2.png
public/images/dice3.png
public/images/dice4.png
public/images/dice5.png
public/images/dice6.png
```

They are referenced from React as:

```text
/images/dice1.png
```

---

### Dice Sound

```text
public/sounds/dice-roll.mp3
```

Referenced as:

```text
/sounds/dice-roll.mp3
```

---

### Favicon

```text
public/favicon.png
```

The favicon is registered in:

```text
index.html
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/iambadal/roll-again.git
```

---

### 2. Open the Project

```bash
cd roll-again
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Start the Development Server

```bash
npm run dev
```

Vite will display a local development URL in the terminal.

Usually:

```text
http://localhost:5173/
```

Open that URL in your browser.

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
---

## 🔮 Future Improvements

Possible future features include:

```text
🎵 Sound On / Off Toggle
🎚️ Volume Control
🧑 Custom Player Names
🏆 Best of 3 / Best of 5
⏱️ Countdown Mode
💾 Persistent Game Statistics
📈 Detailed Analytics
🏅 Achievements
🌐 Online Multiplayer
🎨 Theme Selector
📱 PWA Support
```

---

## 👨‍💻 Author

<div align="center">

### Built with ❤️ and a lot of 🎲

**Badal Pujhari**

[Portfolio](https://badal-os-portfolio-5qde.vercel.app/) • [GitHub](https://github.com/iambadal)

</div>

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

<div align="center">

### 🎲 Roll Again — Roll. Compete. Repeat. 🎲

</div>
