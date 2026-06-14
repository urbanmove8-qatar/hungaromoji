# Hungaromoji

![Hungaromoji Screenshot](https://github.com/user-attachments/assets/986f3416-fd22-4e2c-bf50-2bd04fa001d3)

**The Definitive Open-Source Hungarian Emoji Engine**

Hungaromoji is a high-performance, non-intrusive JavaScript engine developed by the **Urbanmove 8** team.  
Its purpose is to modernize the visual experience of **PyQt/PySide, Qt, Electron, and web-based platforms** by replacing standard text emojis with meticulously crafted, Hungarian-themed assets.

---

## 🛡️ Security & Transparency

Unlike proprietary solutions that may function as black boxes or demand personal data and identification, Hungaromoji is built upon the core principles of **digital freedom**:

- **Fully Auditable:** The complete source code is available on GitHub for public review and verification.
- **Privacy-Centric:** The script operates exclusively within the browser’s DOM. It does not collect personal data, track user behavior, or require any form of identification.
- **No System Interference:** Hungaromoji is a safe, front-end script. It does not interact with system registries, kernel files, or external hardware.

---

## ✨ Features

- **Cultural Authenticity:** Includes unique Hungarian emojis such as the 100 HUF coin, MÁV transport icons (Bzmot, V43), Haragos Pista, Negro cukor, and traditional book covers (*Tüskevár*, *Vuk*, *Egri csillagok*).
- **Bulletproof Accessibility:** Utilizes advanced CSS styling (`::before` pseudo-elements and strict text clipping) to ensure seamless Text-To-Speech (TTS) and screen reader support, with no visual highlighting glitches.
- **VDOM-Safe & React-Ready:** Employs intelligent DOM manipulation with safe wrapper replacement and active garbage collection for orphaned nodes, ensuring compatibility with modern UI frameworks such as React.
- **Dynamic Real-Time Updates:** Powered by a high-performance `MutationObserver`, `WeakSet` node tracking, and regex pre-compilation, allowing new content to be processed instantly with zero perceptible lag.
- **Historical Tributes & Easter Eggs:** Contains an integrated tribute to the heroes of the 1956 Hungarian Revolution, as well as a developer console celebration honoring the UEFA Budapest 2026 Finals.
- **Fluid Layouts:** Inline images are CSS-optimized to scale harmoniously with the surrounding typography (`1.1em`).

---

## 📂 Repositories

- **Main Engine:** [github.com/urbanmove8-qatar/hungaromoji](https://github.com/urbanmove8-qatar/hungaromoji)  
  The current standard, representing modern Hungarian life.
- **Hungaromoji Retró:** [github.com/urbanmove8-qatar/hungaromojiretro](https://github.com/urbanmove8-qatar/hungaromojiretro)  
  The “1998 Edition” — a specialized version that revives the nostalgic aesthetic of the late 1990s.

---

## 📜 Licensing

This project is licensed under the **Apache License 2.0**.  

- [View Credits](https://github.com/urbanmove8-qatar/hungaromoji/blob/main/CREDITS.md)  
- [View License](https://github.com/urbanmove8-qatar/hungaromoji/blob/main/LICENSE)  

---

## 🛠️ Installation

### 1. Direct CDN Integration (Recommended)

Add the following line to your HTML `<head>` or just before the closing `</body>` tag for automatic updates:

```html
<!-- Hungaromoji Engine - Transparent & Open Source -->
<script src="https://urbanmove8.neocities.org/emoji.js"></script>
```

### 2. Local Deployment
If you prefer to host the script within your own infrastructure (updated for v0.9.6.1):

```html
<script src="js/hungaromoji.v0.9.6.1.js"></script>
```
“Szabadság és függetlenség!” — The Urbanmove 8 Team
