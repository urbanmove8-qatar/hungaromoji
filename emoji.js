/* @license magnet:?xt=urn:btih:8e4f440f4c6a8813a077d2427a15104886637370&amp;dn=apache-2.0.txt Apache-2.0 */
/*
 * Hungaromoji v0.9.6.1
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
        "👩": "https://library.penguinmod.com/files/emojis/woman.png",
        "👨": "https://library.penguinmod.com/files/emojis/man.png",
        "👧": "https://library.penguinmod.com/files/emojis/girl.png",
        "👦": "https://library.penguinmod.com/files/emojis/boy.png",
        "💀": "https://library.penguinmod.com/files/emojis/skull.png",
        "😀": "https://library.penguinmod.com/files/emojis/animatedsmile.png",
        "😭": "https://library.penguinmod.com/files/emojis/sobbing.png",
        "💻": "https://library.penguinmod.com/files/emojis/laptop.png",
        "🎉": "https://library.penguinmod.com/files/emojis/tada.png",
        "🥳": "https://library.penguinmod.com/files/emojis/party.png",
        "🚗": "https://urbanmove8.neocities.org/emojis/suzukiscross.png",
        "🤓": "https://library.penguinmod.com/files/emojis/nerd.png",
        "👉": "https://library.penguinmod.com/files/emojis/pointright.png",
        "👈": "https://library.penguinmod.com/files/emojis/pointleft.png",
        "👇": "https://library.penguinmod.com/files/emojis/pointdown.png",
        "🫵": "https://library.penguinmod.com/files/emojis/pointatyou.png",
        "☝️": "https://library.penguinmod.com/files/emojis/pointup.png",
        "🗿": "https://library.penguinmod.com/files/emojis/moai.png",
        "📱": "https://urbanmove8.neocities.org/emojis/kekfontelefon.png",
        "🪙": "https://urbanmove8.neocities.org/kekhegy/kepek/100-forintos.png",
        "🌉": "https://urbanmove8.neocities.org/kekhegy/kepek/lanchid.png",
        "📗": "https://www.feketeistvan.hu/wp-content/uploads/2024/07/konyborito_mora_tuskevar.png",
        "📙": "https://mora.hu/content/2021/3/Product/fekete_istvan_vuk.png",
        "📕": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Egricsillagok.jpg",
        "🙂": "https://library.penguinmod.com/files/emojis/smile.png",
        "🤡": "https://library.penguinmod.com/files/emojis/clown.png",
        "🤑": "https://library.penguinmod.com/files/emojis/money.png",
        "🙄": "https://library.penguinmod.com/files/emojis/rollingeyes.png",
        "😍": "https://library.penguinmod.com/files/emojis/hearteyes.png",
        "😞": "https://library.penguinmod.com/files/emojis/animatedfrown.png",
        "😫": "https://library.penguinmod.com/files/emojis/annoyed.png",
        "🇱🇺": "https://urbanmove8.neocities.org/images/flags/luxemburg.png",
        "🇭🇺": "https://urbanmove8.neocities.org/images/flags/hungary.png",
        /* "🇭🇺": "https://urbanmove8.neocities.org/images/flags/hungary1956.png", */ //It is important to remember about 1956 October 23...
        "🇵🇱": "https://urbanmove8.neocities.org/images/flags/poland.png",
        "🇨🇿": "https://urbanmove8.neocities.org/images/flags/czech.png",
        "🇦🇹": "https://urbanmove8.neocities.org/images/flags/austria.png",
        "🇪🇺": "https://urbanmove8.neocities.org/images/flags/eu.png",
        "🌃": "https://urbanmove8.neocities.org/kekhegy/kepek/orszaghaz.png",
        "⚕️": "https://upload.wikimedia.org/wikipedia/commons/3/34/Insignia_Hungary_OMSZ_v1.svg",
        "🤷": "https://library.penguinmod.com/files/emojis/idk.png",
        "🍫": "https://urbanmove8.neocities.org/kekhegy/kepek/sportcsoki.png",
        "🔞": "https://urbanmove8.neocities.org/kekhegy/kepek/18plusz.png",
        "🚌": "https://urbanmove8.neocities.org/emojis/credoeconell12%20(1).png",
        "🚂": "https://urbanmove8.neocities.org/kekhegy/kepek/mav43.png",
        // "Ⓜ️": "https://upload.wikimedia.org/wikipedia/commons/f/fb/BKV_metro.svg",
        // "BPIM1": "https://urbanmove8.neocities.org/kekhegy/kepek/metro1.png",
        // "BPIM2": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/BKV_m_2_jms.svg/800px-BKV_m_2_jms.svg.png",
        // "BPIM3": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BKV_m_3_jms.svg/800px-BKV_m_3_jms.svg.png",
        // "BPIM4": "https://urbanmove8.neocities.org/kekhegy/kepek/metro4.png",
        /* Due to issues with BKK, we need to ask their permission to use those :( */
        "🚇": "https://urbanmove8.neocities.org/kekhegy/kepek/budapestim3asmetroszerelveny.png",
        "💶": "https://urbanmove8.neocities.org/emojis/stackedeuros.png",
        "💵": "https://urbanmove8.neocities.org/emojis/stackeddollars.png",
        "💴": "https://urbanmove8.neocities.org/emojis/stackedyens.png",
        "☹️": "https://library.penguinmod.com/files/emojis/bigfrown.png",
        "😧": "https://library.penguinmod.com/files/emojis/scared.png",
        "🧐": "https://library.penguinmod.com/files/emojis/investigate.png",
        "😠": "https://library.penguinmod.com/files/emojis/angry.png",
        "😲": "https://library.penguinmod.com/files/emojis/astonishment.png",
        "😨": "https://library.penguinmod.com/files/emojis/shocked.png",
        "👶": "https://library.penguinmod.com/files/emojis/baby.png",
        "🏳️": "https://library.penguinmod.com/files/emojis/flagwhite.png",
        "🚩": "https://library.penguinmod.com/files/emojis/flagred.png",
        "🏁": "https://library.penguinmod.com/files/emojis/flagcheck.png",
        "🏴": "https://library.penguinmod.com/files/emojis/flagblack.png",
        "😎": "https://library.penguinmod.com/files/emojis/cool.png",
        "🥶": "https://library.penguinmod.com/files/emojis/cold.png",
        "😈": "https://library.penguinmod.com/files/emojis/devil.png",
        "😵": "https://library.penguinmod.com/files/emojis/expressivedead.png",
        "😶‍🌫️": "https://library.penguinmod.com/files/emojis/faceinclouds.png",
        "💪": "https://library.penguinmod.com/files/emojis/flex.png",
        "😡": "https://library.penguinmod.com/files/emojis/furious.png",
        "🎂": "https://library.penguinmod.com/files/emojis/cake.png",
        "🔔": "https://library.penguinmod.com/files/emojis/bell.png",
        "🔕": "https://library.penguinmod.com/files/emojis/bellno.png",
        "🤮": "https://library.penguinmod.com/files/emojis/barf.png",
        "🤢": "https://library.penguinmod.com/files/emojis/badtaste.png",
        "👋": "https://library.penguinmod.com/files/emojis/animatedwave.png",
        "👽": "https://library.penguinmod.com/files/emojis/alien.png",
        "🎆": "https://urbanmove8.neocities.org/kekhegy/kepek/szntistvannapjatuzijatekok.png",
        "📰": "https://urbanmove8.neocities.org/kekhegy/kepek/magyarnemzetujsagutolso.png",
        "😂": "https://library.penguinmod.com/files/emojis/laughing.png",
        "🚓": "https://urbanmove8.neocities.org/emojis/rendorseg.png",
        "😊": "https://library.penguinmod.com/files/emojis/blush.png",
        "🤠": "https://library.penguinmod.com/files/emojis/cowboy.png",
        "🍔": "https://library.penguinmod.com/files/emojis/burger.png",
        "🫧": "https://library.penguinmod.com/files/emojis/bubbles.png",
        "😄": "https://library.penguinmod.com/files/emojis/casualjoy.png",
        "😝": "https://library.penguinmod.com/files/emojis/bleh.png",
        "🫡": "https://library.penguinmod.com/files/emojis/salute.png",
        "😇": "https://library.penguinmod.com/files/emojis/angel.png",
        "😬": "https://library.penguinmod.com/files/emojis/grimacing.png",
        "😟": "https://library.penguinmod.com/files/emojis/worried.png",
        "🫤": "https://library.penguinmod.com/files/emojis/meh.png",
        "🔊": "https://urbanmove8.neocities.org/emojis/volumeloud.png",
        "🔇": "https://urbanmove8.neocities.org/emojis/volumeoff.png",
        "🙍": "https://urbanmove8.neocities.org/emojis/personfrown.png",
        "🙎": "https://urbanmove8.neocities.org/emojis/duzzogoember.png",
        "😾": "https://library.penguinmod.com/files/emojis/catangry.png",
        "😸": "https://library.penguinmod.com/files/emojis/cathappy.png",
        "😻": "https://library.penguinmod.com/files/emojis/cathearteyes.png",
        "🙀": "https://library.penguinmod.com/files/emojis/catscream.png",
        "🐶": "https://library.penguinmod.com/files/emojis/dog.png",
        "🚫": "https://library.penguinmod.com/files/emojis/ocross.png",
        "🪛": "https://library.penguinmod.com/files/emojis/screwdriver.png",
        "👍": "https://library.penguinmod.com/files/emojis/thumbsup.png",
        "👎": "https://library.penguinmod.com/files/emojis/thumbsdown.png",
        "😱": "https://library.penguinmod.com/files/emojis/gladlyshocked.png",
        "🫥": "https://library.penguinmod.com/files/emojis/dotted.png",
        "😕": "https://library.penguinmod.com/files/emojis/confused.png",
        "🥹": "https://library.penguinmod.com/files/emojis/holdingbacktears.png",
        "🤝": "https://library.penguinmod.com/files/emojis/handshake.png",
        "💥": "https://library.penguinmod.com/files/emojis/explode.png",
        "😮": "https://library.penguinmod.com/files/emojis/surprised.png",
        "🔓": "https://library.penguinmod.com/files/emojis/unlocked.png",
        "🔒": "https://library.penguinmod.com/files/emojis/lock.png",
        "😵‍💫": "https://library.penguinmod.com/files/emojis/dizzy.png",
        "🙃": "https://library.penguinmod.com/files/emojis/upsidedownsmile.png",
        "💎": "https://library.penguinmod.com/files/emojis/diamond.png",
        "✅": "https://library.penguinmod.com/files/emojis/check.png",
        "👏": "https://library.penguinmod.com/files/emojis/clap.png",
        "☁️": "https://library.penguinmod.com/files/emojis/cloud.png",
        "📈": "https://library.penguinmod.com/files/emojis/chartrising.png",
        "📉": "https://library.penguinmod.com/files/emojis/chartlowering.png",
        "🐻": "https://library.penguinmod.com/files/emojis/bear.png",
        "🐻‍❄️": "https://library.penguinmod.com/files/emojis/polarbear.png",
        "⬆️": "https://library.penguinmod.com/files/emojis/arrowup.png",
        "⬇️": "https://library.penguinmod.com/files/emojis/arrowdown.png",
        "⬅️": "https://library.penguinmod.com/files/emojis/arrowleft.png",
        "➡️": "https://library.penguinmod.com/files/emojis/arrowright.png",
        "🐝": "https://library.penguinmod.com/files/emojis/bee.png",
        "🦊": "https://library.penguinmod.com/files/emojis/fox.png",
        "🎄": "https://library.penguinmod.com/files/emojis/treechristmas.png",
        "🚦": "https://library.penguinmod.com/files/emojis/trafficlight.png",
        "🤔": "https://library.penguinmod.com/files/emojis/thinking.png",
        "🤧": "https://library.penguinmod.com/files/emojis/tissue.png",
        "😋": "https://library.penguinmod.com/files/emojis/tasty.png",
        "😅": "https://library.penguinmod.com/files/emojis/sweating.png",
        "🤩": "https://library.penguinmod.com/files/emojis/stars.png",
        /* "🌊": "https://library.penguinmod.com/files/emojis/stream.png", */ // No longer exists
        "🙏": "https://library.penguinmod.com/files/emojis/pray.png",
        "🗣️": "https://library.penguinmod.com/files/emojis/speaking.png",
        "😴": "https://library.penguinmod.com/files/emojis/sleeping.png",
        "🏃": "https://library.penguinmod.com/files/emojis/personrunning.png",
        "🚶": "https://library.penguinmod.com/files/emojis/personwalking.png",
        "✌️": "https://library.penguinmod.com/files/emojis/peace.png",
        "🌍": "https://library.penguinmod.com/files/emojis/earth.png",
        "💧": "https://library.penguinmod.com/files/emojis/droplet.png",
        "🎮": "https://library.penguinmod.com/files/emojis/controller.png",
        "🫠": "https://library.penguinmod.com/files/emojis/melting.png",
        "🫨": "https://library.penguinmod.com/files/emojis/shakingface.png",
        "🤫": "https://library.penguinmod.com/files/emojis/shhh.png",
        "🐧": "https://library.penguinmod.com/files/emojis/penguin.png",
        "🐱": "https://library.penguinmod.com/files/emojis/cat.png",
        "📄": "https://urbanmove8.neocities.org/emojis/paper.png",
        "⚠️": "https://urbanmove8.neocities.org/emojis/warning.png",
        "😷": "https://library.penguinmod.com/files/emojis/mask.png",
        "💰": "https://urbanmove8.neocities.org/emojis/moneybag.png",
        "🖐️": "https://library.penguinmod.com/files/emojis/openhand.png",
        "✋": "https://library.penguinmod.com/files/emojis/palm.png",
        "✏️": "https://library.penguinmod.com/files/emojis/pencil.png",
        "👻": "https://library.penguinmod.com/files/emojis/ghost.png",
        "📝": "https://library.penguinmod.com/files/emojis/pencilonpaper.png",
        "🗨️": "https://library.penguinmod.com/files/emojis/speech.png",
        "💭": "https://library.penguinmod.com/files/emojis/thought.png",
        "🖖": "https://library.penguinmod.com/files/emojis/vulcan.png",
        "❌": "https://library.penguinmod.com/files/emojis/xsimple.png",
        "🤐": "https://library.penguinmod.com/files/emojis/zipper.png",
        "🥱": "https://library.penguinmod.com/files/emojis/yawn.png",
        "🐼": "https://library.penguinmod.com/files/emojis/panda.png",
        "🔨": "https://library.penguinmod.com/files/emojis/hammer.png",
        "🛠️": "https://library.penguinmod.com/files/emojis/hammerandwrench.png",
        "🔍": "https://library.penguinmod.com/files/emojis/magnify.png",
        "🤥": "https://library.penguinmod.com/files/emojis/lying.png",
        "📊": "https://urbanmove8.neocities.org/emojis/charthungarianstyle.png",
        "🛑": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Vienna_Convention_road_sign_B2a.svg/1024px-Vienna_Convention_road_sign_B2a.svg.png",
        "🧑‍💼": "https://urbanmove8.neocities.org/emojis/businessman_businesswoman.png",
        "👔": "https://urbanmove8.neocities.org/emojis/necktie.png",
        "⛏️": "https://urbanmove8.neocities.org/emojis/Pickaxe.png",
        "🐀": "https://library.penguinmod.com/files/emojis/rat.png",
        "🌕": "https://library.penguinmod.com/files/emojis/moon.png",
        "🤖": "https://library.penguinmod.com/files/emojis/robot.png",
        "🎁": "https://urbanmove8.neocities.org/emojis/magyarajandek.png",
        "🧩": "https://library.penguinmod.com/files/emojis/puzzle.png",
        "🧑‍🎤": "https://library.penguinmod.com/files/emojis/singing.png",
        "✈️": "https://urbanmove8.neocities.org/emojis/malev.png",
        "💼": "https://urbanmove8.neocities.org/emojis/businessbag.png",
        "🐥": "https://library.penguinmod.com/files/emojis/chick.png",
        "🤯": "https://library.penguinmod.com/files/emojis/mindblown.png",
        "🌈": "https://library.penguinmod.com/files/emojis/rainbow.png",
        "😓": "https://library.penguinmod.com/files/emojis/nervous.png",
        "📖": "https://urbanmove8.neocities.org/emojis/openedbook.png",
        "🛩️": "https://urbanmove8.neocities.org/emojis/smallplane.png",
        "🛫": "https://urbanmove8.neocities.org/emojis/planetakeoff.png",
        "🛬": "https://urbanmove8.neocities.org/emojis/planeland.png",
        "🧏": "https://raw.githubusercontent.com/PenguinMod/PenguinMod-ObjectLibraries/refs/heads/main/assets/deaf.png",
        "💸": "https://urbanmove8.neocities.org/emojis/forintszarnyakkal.png",
        "❤️": "https://library.penguinmod.com/files/emojis/heart.png",
        "🧡": "https://urbanmove8.neocities.org/emojis/heartorange.png",
        "📚": "https://urbanmove8.neocities.org/emojis/stackedbooks.png",
        "🎓": "https://urbanmove8.neocities.org/emojis/studentscap.png",
        "📣": "https://urbanmove8.neocities.org/emojis/megaphone.png",
        "🧑‍🦳": "https://urbanmove8.neocities.org/emojis/oszhajufelnott.png",
        "🧑": "https://urbanmove8.neocities.org/emojis/felnott.png",
        "👱": "https://urbanmove8.neocities.org/emojis/szokefelnott.png",
        "🧑‍🦰": "https://urbanmove8.neocities.org/emojis/voroshajufelnott.png",
        "🧑‍🦲": "https://urbanmove8.neocities.org/emojis/kopaszfelnott.png",
        "🦃": "https://urbanmove8.neocities.org/emojis/pulyka.png",
        "🍉": "https://urbanmove8.neocities.org/emojis/felbevagottdinnye.png",
        "🍈": "https://urbanmove8.neocities.org/emojis/dinnye.png",
        "🐌": "https://library.penguinmod.com/files/emojis/snail.png",
        "👥": "https://urbanmove8.neocities.org/emojis/2persons.png",
        "👤": "https://library.penguinmod.com/files/emojis/person.png",
        "☺": "https://library.penguinmod.com/files/emojis/smile.png",
        "✈": "https://urbanmove8.neocities.org/emojis/malev.png",
        "⛄": "https://urbanmove8.neocities.org/emojis/hoember.png",
        "🍡": "https://library.penguinmod.com/files/emojis/dango.png",
        "penguinmod:jeremygamer13": "https://urbanmove8.neocities.org/emojis/jeremygamer13.png",
        "🛡": "https://urbanmove8.neocities.org/emojis/shield.png",
        "penguinmod:joe": "https://library.penguinmod.com/files/emojis/joe.png",
        "🔋": "https://urbanmove8.neocities.org/emojis/akkumlator.png",
        "🪫": "https://urbanmove8.neocities.org/emojis/gyengeakkumlator.png",
        "🐔": "https://urbanmove8.neocities.org/emojis/tyuk.png",
        "🌧️": "https://urbanmove8.neocities.org/emojis/eso.png",
        "⛈️": "https://urbanmove8.neocities.org/emojis/zaporzivataresokkel.png",
        "🌩️": "https://urbanmove8.neocities.org/emojis/zaporzivatar.png",
        "🌬️": "https://urbanmove8.neocities.org/emojis/szelfujoarc.png",
        "🫙": "https://urbanmove8.neocities.org/emojis/haragospista.png",
        "🗓": "https://urbanmove8.neocities.org/emojis/naptar.png",
        "📅": "https://urbanmove8.neocities.org/emojis/naptar.png",
        "🌶": "https://urbanmove8.neocities.org/emojis/szegedipaprika.png",
        "☕": "https://urbanmove8.neocities.org/emojis/bogre.png",
        "🚥": "https://urbanmove8.neocities.org/emojis/trafficlightvertical.png",
        "🚍": "https://urbanmove8.neocities.org/emojis/indulocredoeconell12.png",
        "🚘": "https://urbanmove8.neocities.org/emojis/indulosuzukiscross.png",
        "⏩": "https://urbanmove8.neocities.org/emojis/fastforward.png",
        "⏪": "https://urbanmove8.neocities.org/emojis/fastrewind.png",
        "↕️": "https://urbanmove8.neocities.org/emojis/updownarrow.png",
        "↔️": "https://urbanmove8.neocities.org/emojis/leftrightarrow.png",
        "↙️": "https://urbanmove8.neocities.org/emojis/arrowdownleft.png",
        "↘️": "https://urbanmove8.neocities.org/emojis/arrowdownright.png",
        "↖️": "https://urbanmove8.neocities.org/emojis/arrowupleft.png",
        "↗️": "https://urbanmove8.neocities.org/emojis/arrowupright.png",
        "▶️": "https://urbanmove8.neocities.org/emojis/play.png",
        "🚔": "https://urbanmove8.neocities.org/emojis/indulorendorauto.png",
        "🚖": "https://urbanmove8.neocities.org/emojis/indulotaxi.png",
        "🚕": "https://urbanmove8.neocities.org/emojis/taxi.png",
        "🚊": "https://urbanmove8.neocities.org/emojis/tatravillamos.png",
        "🚃": "https://urbanmove8.neocities.org/emojis/vasutikocsi.png",
        "🏎️": "https://urbanmove8.neocities.org/emojis/mclarenf1.png",
        "💦": "https://urbanmove8.neocities.org/emojis/cseppek.png",
        "🩸": "https://urbanmove8.neocities.org/emojis/ver.png",
        "💔": "https://urbanmove8.neocities.org/emojis/brokenheart.png",
        "💙": "https://urbanmove8.neocities.org/emojis/heartblue.png",
        "💛": "https://urbanmove8.neocities.org/emojis/heartyellow.png",
        "🖤": "https://urbanmove8.neocities.org/emojis/heartblack.png",
        "🤍": "https://urbanmove8.neocities.org/emojis/heartwhite.png",
        "🤎": "https://urbanmove8.neocities.org/emojis/heartbrown.png",
        "💚": "https://urbanmove8.neocities.org/emojis/heartgreen.png",
        "💜": "https://urbanmove8.neocities.org/emojis/heartpurple.png",
        "🚑": "https://urbanmove8.neocities.org/emojis/mentoauto.png",
        "🚒": "https://urbanmove8.neocities.org/emojis/tuzoltoauto.png",
        "🧑‍🎓": "https://urbanmove8.neocities.org/emojis/student.png",
        "🇶🇦": "https://urbanmove8.neocities.org/images/flags/qatar.png",
        "🇩🇪": "https://urbanmove8.neocities.org/images/flags/germany.png",
        "🧑🏻": "https://urbanmove8.neocities.org/emojis/felnott2.png",
        "🧑🏼": "https://urbanmove8.neocities.org/emojis/felnott3.png",
        "🧑🏽": "https://urbanmove8.neocities.org/emojis/felnott4.png",
        "🧑🏾": "https://urbanmove8.neocities.org/emojis/felnott5.png",
        "🧑🏿": "https://urbanmove8.neocities.org/emojis/felnott6.png",
        "🚽": "https://library.penguinmod.com/files/emojis/toilet.png",
        "🌵": "https://library.penguinmod.com/files/emojis/cactus.png",
        "🧑‍💻": "https://library.penguinmod.com/files/emojis/developer.png",
        "🎃": "https://library.penguinmod.com/files/emojis/pumpkin.png",
        "◀️": "https://urbanmove8.neocities.org/emojis/playback.png",
        "🪼": "https://library.penguinmod.com/files/emojis/jellyfish.png",
        "😁": "https://library.penguinmod.com/files/emojis/allsmile.png",
        "❗": "https://library.penguinmod.com/files/emojis/exclamation.png",
        "❓": "https://library.penguinmod.com/files/emojis/question.png",
        "🌸": "https://library.penguinmod.com/files/emojis/flower.png",
        "urbanmove8:idióta": "https://urbanmove8.neocities.org/emojis/1418694146486702121.webp",
        "😜": "https://urbanmove8.neocities.org/emojis/winkingface.png",
        "🚆": "https://urbanmove8.neocities.org/emojis/bzmot.png",
        "📂": "https://urbanmove8.neocities.org/emojis/mappa.png",
        "🤭": "https://urbanmove8.neocities.org/emojis/handovermouth.png",
        "🙂‍↕️": "https://library.penguinmod.com/files/emojis/nodvertical.png",
        "🤨": "https://library.penguinmod.com/files/emojis/suspicious.png",
        "😢": "https://library.penguinmod.com/files/emojis/tear.png",
        "🚎": "https://urbanmove8.neocities.org/emojis/solaristrollino12trolibusz.png",
        "🪦": "https://urbanmove8.neocities.org/emojis/s%C3%ADrhely.png",
        "🤣": "https://urbanmove8.neocities.org/emojis/rofl.png",
        "🚞": "https://urbanmove8.neocities.org/emojis/budapestifogaskerekuvasut.png",
        "🚄": "https://urbanmove8.neocities.org/emojis/stadlerflirt.png",
        "🍰": "https://urbanmove8.neocities.org/emojis/dobostorta.png",
        "🍪": "https://urbanmove8.neocities.org/emojis/pilotakeksz.png",
        "🍞": "https://urbanmove8.neocities.org/emojis/magyarokkenyere.png",
        "🧛": "https://urbanmove8.neocities.org/emojis/felnottkisvampir.png",
        "🚈": "https://urbanmove8.neocities.org/emojis/hev.png",
        "🚏": "https://urbanmove8.neocities.org/emojis/buszmeg%C3%A1llokresz.png",
        "🛣️": "https://urbanmove8.neocities.org/emojis/m7esautopalya.png",
        "😉": "https://urbanmove8.neocities.org/emojis/kacsintosarc.png",
        "🫩": "https://urbanmove8.neocities.org/emojis/faradtarctaskasszemekkel.png",
        "🛳": "https://urbanmove8.neocities.org/emojis/hajo.png",
        "🦜": "https://urbanmove8.neocities.org/emojis/hullamospapagajok.png",
        "🐟": "https://urbanmove8.neocities.org/emojis/jaszkeszeg.png",
        "🍬": "https://urbanmove8.neocities.org/emojis/negrocukor.png",
        "⛽": "https://urbanmove8.neocities.org/emojis/benzinkut.png",
        "🔌": "https://urbanmove8.neocities.org/emojis/europlug.png",
        "💁": "https://urbanmove8.neocities.org/emojis/nyitotttenyeruember.png",
        "💁‍♀️": "https://urbanmove8.neocities.org/emojis/nyitotttenyeruno.png",
        "🤬": "https://urbanmove8.neocities.org/emojis/furiouswithcensorbar.png",
        "🫢": "https://library.penguinmod.com/files/emojis/handovermouth.png",
        "👩‍💼": "https://urbanmove8.neocities.org/emojis/noiirodista.png",
        "🚣": "https://urbanmove8.neocities.org/emojis/kishajozofelnott.png",
        "🤳": "https://urbanmove8.neocities.org/emojis/selfie.png",
        "🧑‍🎄": "https://urbanmove8.neocities.org/emojis/felnottmikulas.png",
        "🚶‍➡️": "https://urbanmove8.neocities.org/emojis/personwalkingright.png",
        "🏃‍➡️": "https://urbanmove8.neocities.org/emojis/personrunningright.png",
        "🧍": "https://urbanmove8.neocities.org/emojis/allofelnott.png",
        "🧑‍🦯": "https://urbanmove8.neocities.org/emojis/setalofelnottfeherbottal.png",
        "🧑‍🦯‍➡️": "https://urbanmove8.neocities.org/emojis/setalofelnottfeherbottalright.png",
        "🧑‍❤️‍👩": "https://urbanmove8.neocities.org/emojis/felnottesnoszerelmespar.png",
        "👩‍❤️‍🧑": "https://urbanmove8.neocities.org/emojis/noesfelnottszerelmespar.png",
        "🧑‍👩": "https://urbanmove8.neocities.org/emojis/felnottesno.png",
        "🤕": "https://library.penguinmod.com/files/emojis/hurt.png",
        "🍀": "https://library.penguinmod.com/files/emojis/lucky.png",
        "💯": "https://library.penguinmod.com/files/emojis/hundred.png",
        "👿": "https://library.penguinmod.com/files/emojis/imp.png",
        "😑": "https://library.penguinmod.com/files/emojis/sigh.png",
        "🪏": "https://library.penguinmod.com/files/emojis/shovel.png",
        "😮‍💨": "https://library.penguinmod.com/files/emojis/relief.png",
        "😔": "https://library.penguinmod.com/files/emojis/pensive.png",
        "😒": "https://library.penguinmod.com/files/emojis/bummed.png",
        "🤤": "https://library.penguinmod.com/files/emojis/drooling.png",
        "🙂‍↔️": "https://library.penguinmod.com/files/emojis/nodhorizontal.png",
        "�": "https://urbanmove8.neocities.org/emojis/idk-modified.png",
        "🙎🏻": "https://urbanmove8.neocities.org/emojis/duzzogoemberfeherbor.png",
        "👑": "https://urbanmove8.neocities.org/emojis/szentkorona.png",
        "🗑️": "https://urbanmove8.neocities.org/emojis/magyarkuka.png",
        "🦢": "https://urbanmove8.neocities.org/emojis/hattyu.png",
        "🦆": "https://urbanmove8.neocities.org/emojis/vadkacsak.png",
        "⏸️": "https://urbanmove8.neocities.org/emojis/pause.png",
        "👮": "https://urbanmove8.neocities.org/emojis/rendor_rendorno.png",
        "🧑‍✈️": "https://urbanmove8.neocities.org/emojis/pilota_pilotano.png",
        "🕶️": "https://urbanmove8.neocities.org/emojis/napszemuveg.png",
        "🚲": "https://urbanmove8.neocities.org/emojis/bicikli.png",
        "👕": "https://urbanmove8.neocities.org/emojis/ferfipolo.png",
        "🎫": "https://urbanmove8.neocities.org/emojis/mozijegy.png",
        "🖐🏻": "https://urbanmove8.neocities.org/emojis/kez.png",
        "🖐🏼": "https://urbanmove8.neocities.org/emojis/kez2.png",
        "🖐🏽": "https://urbanmove8.neocities.org/emojis/kez3.png",
        "🖐🏾": "https://urbanmove8.neocities.org/emojis/kez4.png",
        "🖐🏿": "https://urbanmove8.neocities.org/emojis/kez5.png",
        "✋🏻": "https://urbanmove8.neocities.org/emojis/tenyer.png",
        "✋🏼": "https://urbanmove8.neocities.org/emojis/tenyer2.png",
        "✋🏽": "https://urbanmove8.neocities.org/emojis/tenyer3.png",
        "✋🏾": "https://urbanmove8.neocities.org/emojis/tenyer4.png",
        "✋🏿": "https://urbanmove8.neocities.org/emojis/tenyer5.png",
        "🌲": "https://library.penguinmod.com/files/emojis/tree.png",
        "🎵": "https://urbanmove8.neocities.org/emojis/ti-ti.png",
        "🎶": "https://urbanmove8.neocities.org/emojis/kottak.png",
        "🎼": "https://urbanmove8.neocities.org/emojis/violinkulcs.png",
        "♀️": "https://urbanmove8.neocities.org/emojis/nonem.png",
        "♂️": "https://urbanmove8.neocities.org/emojis/ferfinem.png",
        "💣": "https://urbanmove8.neocities.org/emojis/bomba.png",
        "🎲": "https://urbanmove8.neocities.org/emojis/dobokocka.png",
        "📥": "https://urbanmove8.neocities.org/emojis/Download.png",
        "📤": "https://urbanmove8.neocities.org/emojis/Load.png",
        "🕴️": "https://urbanmove8.neocities.org/emojis/maninbusinesssuitlevitating.png",
        "🤦": "https://urbanmove8.neocities.org/emojis/archozszoritottkez.png",
        "🕵️": "https://urbanmove8.neocities.org/emojis/persondetective.png",
        "🥔": "https://urbanmove8.neocities.org/emojis/burgonya.png",
        "🍆": "https://urbanmove8.neocities.org/emojis/padlizs%C3%A1n_(NEHASZNALD_NSFWKENT!!).png",
        "🕴": "https://urbanmove8.neocities.org/emojis/maninbusinesssuitlevitating.png",
        "⚽": "https://urbanmove8.neocities.org/emojis/magyarfoci.png",
        "🔥": "https://library.penguinmod.com/files/emojis/fire.png",
        "🥺": "https://urbanmove8.neocities.org/emojis/dogeyes.png",
        "😳": "https://urbanmove8.neocities.org/emojis/elpirultarc.png",

    };

    const SECRET_HUNGARIAN_MESSAGE = "Szabadság és függetlenség! 1956. október 23.";
    const SECRET_HUNGARIAN_EMOJI_SAGA_1956 = " Szabadság és függetlenség! 1956. október 23. A forradalom lángja fellobbant a kommunista zsarnokság ellen... (Truncated for brevity)";
    const EASTER_EGG_DAY = 23;
    const EASTER_EGG_MONTH = 9;

    // --- UEFA BUDAPEST 2026 FINALS EASTER EGG ---
    const UEFA_SIGN_TEXT = "%c  HAJRÁ MAGYAROK! ⚽ UEFA Budapest '26 Finals!  ";
    const UEFA_SIGN_STYLE = `
        color: white;
        background: linear-gradient(to right, #ce2939 33%, #ffffff 33%, #ffffff 66%, #477050 66%);
        font-size: 16px;
        font-family: Arial, sans-serif;
        font-weight: bold;
        padding: 8px 15px;
        border-radius: 4px;
        border: 2px solid #222;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
    `;
    console.log(UEFA_SIGN_TEXT, UEFA_SIGN_STYLE);
    // --------------------------------------------

    // 1. Optimized Config
    const FORBIDDEN = /SCRIPT|STYLE|TEXTAREA|INPUT|NOSCRIPT|CANVAS|VIDEO|CODE|PRE/i;
    const processedNodes = new WeakSet();

    // 2. CSS-Based Styling (Updated for bulletproof TTS/Screen Reader protection)
    function injectStyles() {
        if (document.getElementById('hungaromoji-speed-styles')) return;
        const style = document.createElement('style');
        style.id = 'hungaromoji-speed-styles';
        style.textContent = `
            .h-mojis {
                display: inline-block !important;
                position: relative !important;
                width: 1.1em !important;
                height: 1.1em !important;
                max-width: 1.1em !important;
                vertical-align: -0.15em !important;
                margin: 0 0.05em !important;
                border: none !important;
                background: transparent !important;
                flex-shrink: 0 !important;
            }

            /* Pseudo-element strictly handles the visual image, immune to TTS text highlighting */
            .h-mojis::before {
                content: "" !important;
                position: absolute !important;
                top: 0 !important; left: 0 !important;
                width: 100% !important; height: 100% !important;
                background-image: var(--h-emoji-bg) !important;
                background-size: contain !important;
                background-position: center !important;
                background-repeat: no-repeat !important;
                pointer-events: none !important;
                z-index: 1 !important;
            }

            /* Text node is safely clipped so TTS inline styles cannot flash the native emoji onscreen */
            .h-mojis-text {
                position: absolute !important;
                width: 1px !important;
                height: 1px !important;
                padding: 0 !important;
                margin: -1px !important;
                overflow: hidden !important;
                clip: rect(0, 0, 0, 0) !important;
                white-space: nowrap !important;
                border: 0 !important;
                opacity: 0.01 !important;
            }

            /* Fast CSS selectors for styling */
            i .h-mojis, em .h-mojis, [style*="italic"] .h-mojis { transform: skewX(-12deg); }
            b .h-mojis, strong .h-mojis, [style*="bold"] .h-mojis {
                transform: scale(1.1);
                filter: drop-shadow(0.5px 0 0px currentColor);
            }
            .h-mojis::selection, .h-mojis *::selection { background: rgba(0,120,215,0.2) !important; }
        `;
        document.head.appendChild(style);
    }

    // 3. Pre-compiled Regex
    const sortedKeys = Object.keys(emojiMap).sort((a, b) => b.length - a.length);
    const emojiRegex = new RegExp(`(${sortedKeys.map(k => k.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')).join('|')})`, 'g');

    // Safe walking to prevent DOM iteration bugs
    function walk(node) {
        if (!node || processedNodes.has(node)) return;

        if (node.nodeType === 1) {
            if (FORBIDDEN.test(node.tagName) || node.isContentEditable || node.hasAttribute('data-h')) return;

            const children = Array.from(node.childNodes);
            for (let i = 0; i < children.length; i++) {
                walk(children[i]);
            }
        } else if (node.nodeType === 3) {
            fastReplace(node);
        }
    }

    // VDOM-Safe replacement logic
    function fastReplace(textNode) {
        const text = textNode.nodeValue;

        // Reset regex state
        emojiRegex.lastIndex = 0;

        if (!text || !text.match(emojiRegex)) {
            processedNodes.add(textNode);
            return;
        }

        const parent = textNode.parentNode;
        // Don't inject inside our own wrappers
        if (!parent || parent.hasAttribute('data-h') || parent.closest('[data-h]')) return;

        // CLEANUP: If React re-rendered this exact node, remove our old wrapper
        if (textNode._hWrapper && textNode._hWrapper.parentNode) {
            textNode._hWrapper.remove();
        }

        // Create a protected wrapper
        const wrapper = document.createElement('span');
        wrapper.className = 'h-mojis-wrapper';
        wrapper.setAttribute('data-h', '1');
        wrapper._hOriginalTextNode = textNode;

        let lastIdx = 0;
        emojiRegex.lastIndex = 0;

        text.replace(emojiRegex, (match, p1, offset) => {
            if (offset > lastIdx) {
                wrapper.appendChild(document.createTextNode(text.substring(lastIdx, offset)));
            }

            const url = emojiMap[match];
            if (url) {
                const span = document.createElement('span');
                span.className = 'h-mojis';
                // Pass the image URL securely via CSS variable
                span.style.setProperty('--h-emoji-bg', `url('${url}')`);
                span.setAttribute('role', 'img');
                span.setAttribute('aria-label', match);

                // Create an inner span to hide the text strictly while keeping it accessible for TTS
                const innerText = document.createElement('span');
                innerText.className = 'h-mojis-text';
                innerText.textContent = match;

                span.appendChild(innerText);
                wrapper.appendChild(span);
            } else {
                wrapper.appendChild(document.createTextNode(match));
            }
            lastIdx = offset + match.length;
        });

        if (lastIdx < text.length) {
            wrapper.appendChild(document.createTextNode(text.substring(lastIdx)));
        }

        textNode._hWrapper = wrapper;

        // VDOM TRICK: Don't remove the text node, just empty it.
        textNode.nodeValue = '';
        parent.insertBefore(wrapper, textNode);
    }

    // Garbage collection for wrappers if React completely removes the original text node
    function cleanupOrphans() {
        const wrappers = document.querySelectorAll('.h-mojis-wrapper');
        for (let i = 0; i < wrappers.length; i++) {
            const w = wrappers[i];
            if (w._hOriginalTextNode && !document.body.contains(w._hOriginalTextNode)) {
                w.remove();
            }
        }
    }

    // 4. High-Performance Observer
    const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
            const m = mutations[i];
            if (m.type === 'childList') {
                m.addedNodes.forEach(walk);
            } else if (m.type === 'characterData') {
                processedNodes.delete(m.target);
                if (m.target.parentNode) walk(m.target.parentNode);
            }
        }
    });

    injectStyles();
    walk(document.body);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

    // Background safety check & Orphan Cleanup
    setInterval(() => {
        cleanupOrphans();
        walk(document.body);
    }, 3000);
})();
/* @license-end */
