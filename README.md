# 🎴 Real-Time Multiplayer UNO Game

A real-time multiplayer **UNO** card game built with **Node.js**, **Express**, and **Socket.IO** on the backend, and vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)** on the frontend.

---

## 📖 Overview

This project provides an interactive online UNO experience where users can sign in, join a public chat lobby, create custom game rooms with variable player capacities (2 to 4 players), and play real-time UNO matches against each other with server-validated game logic.

---

## ✨ Key Features

* **Authentication & Lobby:**
  * User login system with password length validation.
  * Main lobby with real-time global chat.
  * Room creation modal supporting custom room names, passwords, and player capacities (2, 3, or 4 players).
  * Room discovery with instant join capabilities.

* **Real-Time Gameplay & Mechanics:**
  * Synchronized hands and real-time state updates powered by Socket.IO.
  * Server-side playable card validation (highlighting playable cards with full opacity while dimming invalid cards).
  * Support for Action Cards:
    * `+2` (Draw Two)
    * `+4` (Wild Draw Four)
    * `change direction` (Reverse)
    * `stop` (Skip)
    * `select color` (Wild Color Choice)
  * Cumulative penalty stack logic for draw cards (`+2` / `+4`).
  * In-game card drawing mechanism (`+1` button).
  * Interactive color selector for wild cards.
  * Automatic win/loss detection and player alerts.

---

## 🛠️ Tech Stack

* **Backend:**
  * [Node.js](https://nodejs.org/) - Runtime environment
  * [Express.js](https://expressjs.com/) - Web framework & static file hosting
  * [Socket.IO](https://socket.io/) - Real-time bidirectional event-based communication

* **Frontend:**
  * HTML5
  * CSS3 (Flexbox & Grid layouts)
  * JavaScript (ES6+ ES Modules)
  * Socket.IO Client API

---

## 📁 Directory Structure

```text
.
├── src/
│   └── files/
│       ├── pageRoom.css         # Styles for login, lobby, chat, and room/cards
│       ├── page1login.js        # User authentication event handling
│       ├── page2chat.js         # Lobby chat & room creation/joining logic
│       └── page3play.js         # In-game rendering, action cards & card interaction
├── functions/
│   ├── createCardFun.js        # Card deck generation & deck shuffling helper
│   └── varabils.js             # Shared state utilities (optional/refactored)
├── index.html                  # Main client-side single-page UI
├── server.js                   # Node.js Express server & Socket.IO game orchestrator
└── README.md                   # Project documentation
```

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/uno-multiplayer-game.git
   cd uno-multiplayer-game
   ```

2. **Install dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the application server:**
   ```bash
   node server.js
   ```

4. **Access the game:**
   Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## 🎮 How to Play

1. **Login:** Enter a username and password (at least 8 characters long).
2. **Lobby & Rooms:** 
   * Chat with other players in the main lobby.
   * Click **Create a Game** to setup a new game room with custom capacity (2–4 players).
   * Or click **JOIN** on any available room listed in the lobby feed.
3. **Gameplay:**
   * Once all required players join, 10 cards are dealt to each player.
   * Playable cards on your turn will be fully visible (100% opacity); unplayable cards will be dimmed (50% opacity).
   * Click on a playable card to play it.
   * If playing a Wild (`select color`) or Wild Draw Four (`+4`), select your desired color from the 4-color palette rendered on the card.
   * If you have no valid cards to play, click the **`+1`** deck button to draw a card.
4. **Winning:** The first player to clear all cards from their hand wins the game!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page or submit a pull request.