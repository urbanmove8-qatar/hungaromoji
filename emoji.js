/*
 * Hungaromoji v0.9.6.0
 * Copyright © 2025-2026 Urbanmove 8 Qatar Sole Prop. and Urbanmove 8 Kft.
 * * This project is licensed under the Apache License, Version 2.0 (the "License").
 * You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
 *
 * ──────────────────────────────────────────────────────────────────────────
 * ASSET CREDITS & LICENSING:
 * * CODE & LOGIC:
 * • Licensed under the Apache License, Version 2.0.
 *
 * EMOJI BASE ASSETS:
 * • Original emoji artwork and base assets © Penguinmod.com.
 * • These specific assets are distributed under the Creative Commons Zero (CC0) 
 * license (Public Domain).
 *
 * THIRD-PARTY MEDIA (Fair Use / Educational / Reference):
 * • Note: The following assets are the property of their respective owners. 
 * Usage in this project is for identification/cultural reference:
 * - MÁV Zrt. (Trains), MNB (Currency), Univer (Haragos Pista), 
 * BAHART (Hévíz boat), Móra Könyvkiadó (Book excerpts).
 * • Creative Commons Assets:
 * - Jászkeszeg (CC BY 3.0), OMSZ Logo (CC BY 4.0), Negro (CC BY-SA 4.0), 
 * Budgerigar (CC BY-SA 2.0).
 * ──────────────────────────────────────────────────────────────────────────
 */

(function() {
    const emojiMap = {
        "👩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/woman.png",
        "👨": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/man.png",
        "👧": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/girl.png",
        "👦": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/boy.png",
        "💀": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/skull.png",
        "😀": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/animatedsmile.png",
        "😭": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/sobbing.png",
        "💻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/laptop.png",
        "🎉": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tada.png",
        "🥳": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/party.png",
        "🚗": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/suzukiscross.png",
        "🤓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nerd.png",
        "👉": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pointright.png",
        "👈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pointleft.png",
        "👇": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pointdown.png",
        "🫵": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pointatyou.png",
        "☝️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pointup.png",
        "🗿": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/moai.png",
        "📱": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kekfontelefon.png",
        "🪙": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/100-forintos.png",
        "🌉": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/lanchid.png",
        "📗": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/konyborito_mora_tuskevar.png",
        "📙": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/fekete_istvan_vuk.png",
        "📕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/Egricsillagok.jpg",
        "🙂": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/smile.png",
        "🤡": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/clown.png",
        "🤑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/money.png",
        "🙄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/rollingeyes.png",
        "😍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hearteyes.png",
        "😞": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/animatedfrown.png",
        "😫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/annoyed.png",
        "🇱🇺": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/luxemburg.png",
        "🇭🇺": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hungary.png",
        /* "🇭🇺": "https://urbanmove8.neocities.org/images/flags/hungary1956.png", */ //It is important to remember about 1956 October 23...
        "🇵🇱": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/poland.png",
        "🇨🇿": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/czech.png",
        "🇦🇹": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/austria.png",
        "🇪🇺": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/eu.png",
        "🌃": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/orszaghaz.png",
        "⚕️": "https://upload.wikimedia.org/wikipedia/commons/3/34/Insignia_Hungary_OMSZ_v1.svg",
        "🤷": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/idk.png",
        "🍫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/sportcsoki.png",
        "🔞": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/18plusz.png",
        "🚌": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/credoeconell12.png",
        "🚂": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mav43.png",
        // "Ⓜ️": "https://upload.wikimedia.org/wikipedia/commons/f/fb/BKV_metro.svg",
        // "BPIM1": "https://urbanmove8.neocities.org/kekhegy/kepek/metro1.png",
        // "BPIM2": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/BKV_m_2_jms.svg/800px-BKV_m_2_jms.svg.png",
        // "BPIM3": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BKV_m_3_jms.svg/800px-BKV_m_3_jms.svg.png",
        // "BPIM4": "https://urbanmove8.neocities.org/kekhegy/kepek/metro4.png",
        /* Due to issues with BKK, we need to ask their permission to use those :( */
        "🚇": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/budapestim3asmetroszerelveny.png",
        "💶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stackedeuros.png",
        "💵": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stackeddollars.png",
        "💴": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stackedyens.png",
        "☹️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bigfrown.png",
        "😧": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/scared.png",
        "🧐": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/investigate.png",
        "😠": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/angry.png",
        "😲": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/astonishment.png",
        "😨": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/shocked.png",
        "👶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/baby.png",
        "🏳️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/flagwhite.png",
        "🚩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/flagred.png",
        "🏁": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/flagcheck.png",
        "🏴": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/flagblack.png",
        "😎": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cool.png",
        "🥶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cold.png",
        "😈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/devil.png",
        "😵": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/expressionless.png",
        "😶‍🌫️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/faceinclouds.png",
        "💪": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/flex.png",
        "😡": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/furious.png",
        "🎂": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cake.png",
        "🔔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bell.png",
        "🔕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bellno.png",
        "🤮": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/barf.png",
        "🤢": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/badtaste.png",
        "👋": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/animatedwave.png",
        "👽": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/alien.png",
        "🎆": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/szntistvannapjatuzijatekok.png",
        "📰": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/magyarnemzetujsagutolso.png",
        "😂": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/laughing.png",
        "🚓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/rendorseg.png",
        "😊": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/blush.png",
        "🤠": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cowboy.png",
        "🍔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/burger.png",
        "🫧": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bubbles.png",
        "😄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/casualjoy.png",
        "😝": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bleh.png",
        "🫡": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/salute.png",
        "😇": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/angel.png",
        "😬": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/grimacing.png",
        "😟": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/worried.png",
        "🫤": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/meh.png",
        "🔊": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/volumeloud.png",
        "🔇": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/volumeoff.png",
        "🙍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/personfrown.png",
        "🙎": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/duzzogoember.png",
        "😾": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/catangry.png",
        "😸": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cathappy.png",
        "😻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cathearteyes.png",
        "🙀": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/catscream.png",
        "🐶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dog.png",
        "🚫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/ocross.png",
        "🪛": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/screwdriver.png",
        "👍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/thumbsup.png",
        "👎": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/thumbsdown.png",
        "😱": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/gladlyshocked.png",
        "🫥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dotted.png",
        "😕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/confused.png",
        "🥹": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/holdingbacktears.png",
        "🤝": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/handshake.png",
        "💥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/explode.png",
        "😮": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/surprised.png",
        "🔓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/unlocked.png",
        "🔒": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/lock.png",
        "😵‍💫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dizzy.png",
        "🙃": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/upsidedownsmile.png",
        "💎": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/diamond.png",
        "✅": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/check.png",
        "👏": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/clap.png",
        "☁️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cloud.png",
        "📈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/chartrising.png",
        "📉": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/chartlowering.png",
        "🐻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bear.png",
        "🐻‍❄️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/polarbear.png",
        "⬆️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowup.png",
        "⬇️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowdown.png",
        "⬅️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowleft.png",
        "➡️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowright.png",
        "🐝": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bee.png",
        "🦊": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/fox.png",
        "🎄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/treechristmas.png",
        "🚦": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/trafficlight.png",
        "🤔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/thinking.png",
        "🤧": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tissue.png",
        "😋": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tasty.png",
        "😅": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/sweating.png",
        "🤩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stars.png",
        /* "🌊": "https://library.penguinmod.com/files/emojis/stream.png", */ // No longer exists
        "🙏": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pray.png",
        "🗣️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/speaking.png",
        "😴": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/sleeping.png",
        "🏃": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/personrunning.png",
        "🚶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/personwalking.png",
        "✌️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/peace.png",
        "🌍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/earth.png",
        "💧": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/droplet.png",
        "🎮": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/controller.png",
        "🫠": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/melting.png",
        "🫨": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/shakingface.png",
        "🤫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/shhh.png",
        "🐧": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/penguin.png",
        "🐱": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cat.png",
        "📄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/paper.png",
        "⚠️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/warning.png",
        "😷": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mask.png",
        "💰": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/moneybag.png",
        "🖐️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/openhand.png",
        "✋": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/palm.png",
        "✏️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pencil.png",
        "👻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/ghost.png",
        "📝": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pencilonpaper.png",
        "🗨️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/speech.png",
        "💭": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/thought.png",
        "🖖": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/vulcan.png",
        "❌": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/xsimple.png",
        "🤐": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/zipper.png",
        "🥱": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/yawn.png",
        "🐼": "https://library.penguinmod.com/files/emojis/panda.png",
        "🔨": "https://library.penguinmod.com/files/emojis/hammer.png",
        "🛠️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hammerandwrench.png",
        "🔍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/magnify.png",
        "🤥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/lying.png",
        "📊": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/charthungarianstyle.png",
        "🛑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stopsign.png",
        "🧑‍💼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/businessman_businesswoman.png",
        "👔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/necktie.png",
        "⛏️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/Pickaxe.png",
        "🐀": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/rat.png",
        "🌕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/moon.png",
        "🤖": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/robot.png",
        "🎁": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/magyarajandek.png",
        "🧩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/puzzle.png",
        "🧑‍🎤": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/singing.png",
        "✈️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/malev.png",
        "💼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/businessbag.png",
        "🐥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/chick.png",
        "🤯": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mindblown.png",
        "🌈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/rainbow.png",
        "😓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nervous.png",
        "📖": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/openedbook.png",
        "🛩️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/smallplane.png",
        "🛫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/planetakeoff.png",
        "🛬": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/planeland.png",
        "🧏": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/deaf.png",
        "💸": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/forintszarnyakkal.png",
        "❤️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heart.png",
        "🧡": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartorange.png",
        "📚": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stackedbooks.png",
        "🎓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/studentscap.png",
        "📣": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/megaphone.png",
        "🧑‍🦳": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/oszhajufelnott.png",
        "🧑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnott.png",
        "👱": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/szokefelnott.png",
        "🧑‍🦰": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/voroshajufelnott.png",
        "🧑‍🦲": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kopaszfelnott.png",
        "🦃": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pulyka.png",
        "🍉": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felbevagottdinnye.png",
        "🍈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dinnye.png",
        "🐌": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/snail.png",
        "👥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/2persons.png",
        "👤": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/person.png",
        "☺": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/smile.png",
        "✈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/malev.png",
        "⛄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hoember.png",
        "🍡": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dango.png",
        "penguinmod:jeremygamer13": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/jeremygamer13.png",
        "🛡": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/shield.png",
        "penguinmod:joe": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/joe.png",
        "🔋": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/akkumlator.png",
        "🪫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/gyengeakkumlator.png",
        "🐔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tyuk.png",
        "🌧️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/eso.png",
        "⛈️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/zaporzivataresokkel.png",
        "🌩️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/zaporzivatar.png",
        "🌬️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/szelfujoarc.png",
        "🫙": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/haragospista.png",
        "🗓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/naptar.png",
        "📅": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/naptar.png",
        "🌶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/szegedipaprika.png",
        "☕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bogre.png",
        "🚥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/trafficlightvertical.png",
        "🚍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/indulocredoeconell12.png",
        "🚘": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/indulosuzukiscross.png",
        "⏩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/fastforward.png",
        "⏪": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/fastrewind.png",
        "↕️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/updownarrow.png",
        "↔️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/leftrightarrow.png",
        "↙️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowdownleft.png",
        "↘️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowdownright.png",
        "↖️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowupleft.png",
        "↗️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/arrowupright.png",
        "▶️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/play.png",
        "🚔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/indulorendorauto.png",
        "🚖": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/indulotaxi.png",
        "🚕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/taxi.png",
        "🚊": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tatravillamos.png",
        "🚃": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/vasutikocsi.png",
        "🏎️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mclarenf1.png",
        "💦": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cseppek.png",
        "🩸": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/ver.png",
        "💔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/brokenheart.png",
        "💙": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartblue.png",
        "💛": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartyellow.png",
        "🖤": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartblack.png",
        "🤍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartwhite.png",
        "🤎": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartbrown.png",
        "💚": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartgreen.png",
        "💜": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/heartpurple.png",
        "🚑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mentoauto.png",
        "🚒": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tuzoltoauto.png",
        "🧑‍🎓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/student.png",
        "🇶🇦": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/qatar.png",
        "🇩🇪": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/germany.png",
        "🧑🏻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnott2.png",
        "🧑🏼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnott3.png",
        "🧑🏽": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnott4.png",
        "🧑🏾": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnott5.png",
        "🧑🏿": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnott6.png",
        "🚽": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/toilet.png",
        "🌵": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/cactus.png",
        "🧑‍💻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/developer.png",
        "🎃": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pumpkin.png",
        "◀️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/playback.png",
        "🪼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/jellyfish.png",
        "😁": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/allsmile.png",
        "❗": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/exclamation.png",
        "❓": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/question.png",
        "🌸": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/flower.png",
        "urbanmove8:idióta": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/1418694146486702121.webp",
        "😜": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/winkingface.png",
        "🚆": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bzmot.png",
        "📂": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mappa.png",
        "🤭": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/handovermouth.png",
        "🙂‍↕️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nodvertical.png",
        "🤨": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/suspicious.png",
        "😢": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tear.png",
        "🚎": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/solaristrollino12trolibusz.png",
        "🪦": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/s%C3%ADrhely.png",
        "🤣": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/rofl.png",
        "🚞": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/budapestifogaskerekuvasut.png",
        "🚄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/stadlerflirt.png",
        "🍰": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dobostorta.png",
        "🍪": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pilotakeksz.png",
        "🍞": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/magyarokkenyere.png",
        "🧛": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnottkisvampir.png",
        "🚈": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hev.png",
        "🚏": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/buszmeg%C3%A1llokresz.png",
        "🛣️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/m7esautopalya.png",
        "😉": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kacsintosarc.png",
        "🫩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/faradtarctaskasszemekkel.png",
        "🛳": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hajo.png",
        "🦜": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hullamospapagajok.png",
        "🐟": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/jaszkeszeg.png",
        "🍬": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/negrocukor.png",
        "⛽": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/benzinkut.png",
        "🔌": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/europlug.png",
        "💁": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nyitotttenyeruember.png",
        "💁‍♀️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nyitotttenyeruno.png",
        "🤬": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/furiouswithcensorbar.png",
        "🫢": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/handovermouth.png",
        "👩‍💼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/noiirodista.png",
        "🚣": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kishajozofelnott.png",
        "🤳": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/selfie.png",
        "🧑‍🎄": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnottmikulas.png",
        "🚶‍➡️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/personwalkingright.png",
        "🏃‍➡️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/personrunningright.png",
        "🧍": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/allofelnott.png",
        "🧑‍🦯": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/setalofelnottfeherbottal.png",
        "🧑‍🦯‍➡️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/setalofelnottfeherbottalright.png",
        "🧑‍❤️‍👩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnottesnoszerelmespar.png",
        "👩‍❤️‍🧑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/noesfelnottszerelmespar.png",
        "🧑‍👩": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/felnottesno.png",
        "🤕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hurt.png",
        "🍀": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/lucky.png",
        "💯": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hundred.png",
        "👿": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/imp.png",
        "😑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/sigh.png",
        "🪏": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/shovel.png",
        "😮‍💨": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/relief.png",
        "😔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pensive.png",
        "😒": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bummed.png",
        "🤤": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/drooling.png",
        "🙂‍↔️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nodhorizontal.png",
        "🙎🏻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/duzzogoemberfeherbor.png",
        "👑": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/szentkorona.png",
        "🗑️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/magyarkuka.png",
        "🦢": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/hattyu.png",
        "🦆": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/vadkacsak.png",
        "⏸️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pause.png",
        "👮": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/rendor_rendorno.png",
        "🧑‍✈️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/pilota_pilotano.png",
        "🕶️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/napszemuveg.png",
        "🚲": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bicikli.png",
        "👕": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/ferfipolo.png",
        "🎫": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/mozijegy.png",
        "🖐🏻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kez.png",
        "🖐🏼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kez2.png",
        "🖐🏽": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kez3.png",
        "🖐🏾": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kez4.png",
        "🖐🏿": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kez5.png",
        "✋🏻": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tenyer.png",
        "✋🏼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tenyer2.png",
        "✋🏽": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tenyer3.png",
        "✋🏾": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tenyer4.png",
        "✋🏿": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tenyer5.png",
        "🌲": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/tree.png",
        "🎵": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/ti-ti.png",
        "🎶": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/kottak.png",
        "🎼": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/violinkulcs.png",
        "♀️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/nonem.png",
        "♂️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/ferfinem.png",
        "💣": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/bomba.png",
        "🎲": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/dobokocka.png",
        "📥": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/Download.png",
        "📤": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/Load.png",
        "🕴️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/maninbusinesssuitlevitating.png",
        "🤦": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/archozszoritottkez.png",
        "🕵️": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/persondetective.png",
        "🥔": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/burgonya.png",
        "🍆": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/padlizs%C3%A1n_(NEHASZNALD_NSFWKENT!!).png",
        "🕴": "https://raw.githubusercontent.com/urbanmove8-qatar/hungaromoji/refs/heads/main/hungaromoji_assets/maninbusinesssuitlevitating.png",

    };

   const SECRET_HUNGARIAN_MESSAGE = "Szabadság és függetlenség! 1956. október 23.";
    // The long message for the modal.
    const SECRET_HUNGARIAN_EMOJI_SAGA_1956 = "🇭🇺 Szabadság és függetlenség! 1956. október 23. A forradalom lángja fellobbant a kommunista zsarnokság ellen. Budapest és a nemzet felkiáltott.️ A szovjet tankok eltiporták az ellenállást, de a lélek nem tört meg.️ Több mint 2500 magyar áldozat halt meg.😞💔 Emlékezzünk a hősökre, akiket a megtorlás kivégzett: Nagy Imre (miniszterelnök) 👨‍⚖️, Maléter Pál (honvédelmi miniszter) 🎖️, Gimes Miklós (újságíró) ✍️, Losonczy Géza (államminiszter) 🏛️, Mansfeld Péter (a legfiatalabb mártír) 🧑‍🍼, Tóth Ilona (orvostanhallgató) 👩‍⚕️, Bánátiné 👵, Lukács Pál 👨‍🌾, Gyöngyösi Miklós 🧑‍🎓, és a Corvin köz 'pesti srácai' 🧑. Tisztelet a Mártíroknak! 🙏 Az '56-os szellem örökké él.";

    const EASTER_EGG_DAY = 23;
    const EASTER_EGG_MONTH = 9; // October (0-indexed)

    // 1. Optimized Config
    const FORBIDDEN = /SCRIPT|STYLE|TEXTAREA|INPUT|NOSCRIPT|CANVAS|VIDEO|CODE|PRE/i;
    const processedNodes = new WeakSet();

    // 2. CSS-Based Styling (Zero JS overhead for bold/italic)
    function injectStyles() {
        if (document.getElementById('hungaromoji-speed-styles')) return;
        const style = document.createElement('style');
        style.id = 'hungaromoji-speed-styles';
        style.textContent = `
            .h-mojis {
                display: inline-block !important;
                width: 1.1em !important;
                height: 1.1em !important;
                background-size: contain !important;
                background-repeat: no-repeat !important;
                background-position: center !important;
                vertical-align: middle !important;
                color: transparent !important;
                letter-spacing: -1em !important;
                overflow: hidden !important;
                margin: 0 0.05em !important;
                pointer-events: none;
            }
            /* Fast CSS selectors for styling instead of getComputedStyle */
            i .h-mojis, em .h-mojis, [style*="italic"] .h-mojis { transform: skewX(-12deg); }
            b .h-mojis, strong .h-mojis, [style*="bold"] .h-mojis {
                transform: scale(1.1);
                filter: drop-shadow(0.5px 0 0px currentColor);
            }
            .h-mojis::selection { color: transparent !important; background: rgba(0,120,215,0.2) !important; }
        `;
        document.head.appendChild(style);
    }

    // 3. Pre-compiled Regex
    const sortedKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
    const emojiRegex = new RegExp(`(${sortedKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');

    function walk(node) {
        if (!node || processedNodes.has(node)) return;

        if (node.nodeType === 1) {
            if (FORBIDDEN.test(node.tagName) || node.isContentEditable || node.hasAttribute('data-h')) return;
            for (let child = node.firstChild; child; child = child.nextSibling) walk(child);
        } else if (node.nodeType === 3) {
            fastReplace(node);
        }
    }

    function fastReplace(textNode) {
        const text = textNode.nodeValue;
        if (!text || !text.match(emojiRegex)) {
            processedNodes.add(textNode);
            return;
        }

        const parent = textNode.parentNode;
        if (!parent || parent.hasAttribute('data-h')) return;

        const fragment = document.createDocumentFragment();
        let lastIdx = 0;

        text.replace(emojiRegex, (match, p1, offset) => {
            if (offset > lastIdx) {
                fragment.appendChild(document.createTextNode(text.substring(lastIdx, offset)));
            }

            const url = emojiMap[match];
            if (url) {
                const span = document.createElement('span');
                span.className = 'h-mojis';
                span.setAttribute('data-h', '1');
                span.textContent = match;
                span.style.backgroundImage = `url("${url}")`;
                fragment.appendChild(span);
            } else {
                fragment.appendChild(document.createTextNode(match));
            }
            lastIdx = offset + match.length;
        });

        if (lastIdx < text.length) fragment.appendChild(document.createTextNode(text.substring(lastIdx)));

        // Final swap
        parent.replaceChild(fragment, textNode);
    }

    // 4. High-Performance Observer
    const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
            const m = mutations[i];
            if (m.type === 'childList') {
                m.addedNodes.forEach(walk);
            } else if (m.type === 'characterData') {
                walk(m.target.parentNode);
            }
        }
    });

    injectStyles();
    walk(document.body);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Background safety check
    setInterval(() => walk(document.body), 3000);
})();
