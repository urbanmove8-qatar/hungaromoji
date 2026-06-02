# Hungaromoji

![Hungaromoji Screenshot](https://github.com/user-attachments/assets/986f3416-fd22-4e2c-bf50-2bd04fa001d3)

**The Definitive Open-Source Hungarian Emoji Engine**

Hungaromoji is a high-performance, non-intrusive JavaScript engine developed by the **Urbanmove 8** team.  
It is designed to modernize the visual experience of **PyQt/PySide, Qt, Electron, and web-based platforms** by replacing standard text emojis with custom, high-fidelity **Hungarian-themed assets**.

---

## 🛡️ Security & Transparency

Unlike “black box” closed-source software that demands personal data or ID verification, Hungaromoji is built on the core principles of **digital freedom**:

- **Fully Auditable:** Our code is 100% open-source and hosted on GitHub for public review.  
- **Privacy-Centric:** The script operates purely in the browser’s DOM. It does not collect personal data, track user behavior, or require government-issued identification.  
- **No System Interference:** Hungaromoji is a safe, front-end script. It does not touch system registries, kernel files, or external hardware.  

---

## ✨ Features

- **Cultural Authenticity:** Supports unique Hungarian emojis, including the 100 HUF coin, MÁV transport icons (Bzmot, V43), Haragos Pista, Negro cukor, and traditional book covers (*Tüskevár*, *Vuk*, *Egri csillagok*).  
- **Bulletproof Accessibility:** Features advanced CSS-based styling (`::before` pseudo-elements and strict text clipping) to ensure seamless Text-To-Speech (TTS) and screen reader support without visual highlight glitches.
- **VDOM-Safe & React-Ready:** Intelligent DOM manipulation with safe wrapper replacement and active garbage collection for orphaned nodes ensures it plays nicely with modern UI frameworks (like React) without causing crashes.
- **Dynamic Real-Time Updates:** Utilizes a high-performance `MutationObserver`, `WeakSet` node tracking, and regex pre-compilation to automatically process new content with zero lag.  
- **Historical Tributes & Easter Eggs:** Features an integrated tribute to the heroes of the 1956 Revolution, alongside a special developer console celebration for the UEFA Budapest 2026 Finals!  
- **Fluid Layouts:** Inline images are CSS-optimized to scale perfectly with text typography (`1.1em`).  

---

## 📂 Repositories

- **Main Engine:** [github.com/urbanmove8-qatar/hungaromoji](https://github.com/urbanmove8-qatar/hungaromoji)
  The current standard representing modern Hungarian life.
- **Hungaromoji Retró:** [github.com/urbanmove8-qatar/hungaromojiretro](https://github.com/urbanmove8-qatar/hungaromojiretro)
  The "1998 Edition" — A specialized version that brings back the nostalgic vibe of the late 90s.

---

## 📜 Licensing

This project is licensed under the **Apache License 2.0**.  

- [View Credits](https://github.com/urbanmove8-qatar/hungaromoji/blob/main/CREDITS.md)  
- [View License](https://github.com/urbanmove8-qatar/hungaromoji/blob/main/LICENSE)  

---

## 🛠️ Installation

### 1. Direct CDN Integration (Recommended)

Add this to your HTML `<head>` or before the closing `</body>` tag for automatic updates:

```html
<!-- Hungaromoji Engine - Transparent & Open Source -->
<script src="https://cdn.jsdelivr.net/gh/urbanmove8-qatar/hungaromoji/emoji.js"></script>
```
### 2. Local Deployment
If you prefer to host the script within your own infrastructure (Updated for v0.9.6.1):
```html
<script src="js/hungaromoji.v0.9.6.1.js"></script>
```
“Szabadság és függetlenség!” — The Urbanmove 8 Team
