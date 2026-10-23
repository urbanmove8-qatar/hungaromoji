/* @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0 */
/*
 * HungaromojiJS v0.9.6.2 (Magyar Péter era)
 * Copyright © 2025-2026 Urbanmove 8 Qatar Sole Prop. and Urbanmove 8 Kft.
 * 
 * SPDX-License-Identifier: Apache-2.0
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at:
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * ──────────────────────────────────────────────────────────────────────────
 * ASSET CREDITS & LICENSING:
 * • CODE & LOGIC:
 *   Licensed under the Apache License, Version 2.0.
 *
 * • EMOJI BASE ASSETS:
 *   Original emoji artwork and base assets © PenguinMod (Penguinmod.com).
 *   Distributed under the Creative Commons Zero 1.0 (CC0 / Public Domain) license.
 *
 * • THIRD-PARTY MEDIA (Fair Use / Cultural Reference):
 *   The following trademarks and media remain property of their respective owners:
 *   - MÁV Zrt. (Trains), MNB (Currency), Univer Zrt. (Haragos Pista),
 *     BAHART (Hévíz boat), Móra Könyvkiadó (Book covers).
 *
 * • CREATIVE COMMONS MEDIA:
 *   - Jászkeszeg (CC BY 3.0), OMSZ Logo (CC BY 4.0), Negro (CC BY-SA 4.0),
 *     Budgerigar (CC BY-SA 2.0).
 * ──────────────────────────────────────────────────────────────────────────
 * VERSION HISTORY & ARCHIVES:
 * • Current releases (v0.9.6.1+, Magyar Péter era):
 *   https://github.com/urbanmove8-qatar/hungaromoji
 * • Legacy archives (v0.6.0 – v0.9.6.0, Orbán era):
 *   https://github.com/urbanmove8-qatar/hungaromoji-archives
 * ──────────────────────────────────────────────────────────────────────────
 */
(function() {
    'use strict';

    const baseEmojiMap = {
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
        "☃️": "https://urbanmove8.neocities.org/emojis/hoember.png",
        "🍡": "https://library.penguinmod.com/files/emojis/dango.png",
        "penguinmod:jeremygamer13": "https://urbanmove8.neocities.org/emojis/jeremygamer13.png",
        "🛡️": "https://urbanmove8.neocities.org/emojis/shield.png",
        "penguinmod:joe": "https://library.penguinmod.com/files/emojis/joe.png",
        "🔋": "https://urbanmove8.neocities.org/emojis/akkumlator.png",
        "🪫": "https://urbanmove8.neocities.org/emojis/gyengeakkumlator.png",
        "🐔": "https://urbanmove8.neocities.org/emojis/tyuk.png",
        "🌧️": "https://urbanmove8.neocities.org/emojis/eso.png",
        "⛈️": "https://urbanmove8.neocities.org/emojis/zaporzivataresokkel.png",
        "🌩️": "https://urbanmove8.neocities.org/emojis/zaporzivatar.png",
        "🌬️": "https://urbanmove8.neocities.org/emojis/szelfujoarc.png",
        "🫙": "https://urbanmove8.neocities.org/emojis/haragospista.png",
        "🗓️": "https://urbanmove8.neocities.org/emojis/naptar.png",
        "📅": "https://urbanmove8.neocities.org/emojis/naptar.png",
        "🌶️": "https://urbanmove8.neocities.org/emojis/szegedipaprika.png",
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
        "🛳️": "https://urbanmove8.neocities.org/emojis/hajo.png",
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
        "\uFFFD": "https://urbanmove8.neocities.org/emojis/idk-modified.png",
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
        "⚽": "https://urbanmove8.neocities.org/emojis/magyarfoci.png",
        "🔥": "https://library.penguinmod.com/files/emojis/fire.png",
        "🥺": "https://urbanmove8.neocities.org/emojis/dogeyes.png",
        "😳": "https://urbanmove8.neocities.org/emojis/elpirultarc.png",
        "🐷": "https://urbanmove8.neocities.org/emojis/diszno.png",
        "🎱": "https://urbanmove8.neocities.org/emojis/eightball.png",
        "🐭": "https://urbanmove8.neocities.org/emojis/mouse.png",
        "🍕": "https://urbanmove8.neocities.org/emojis/pizza.png",
        "🎾": "https://urbanmove8.neocities.org/emojis/tennisball.png",
        "🪚": "https://urbanmove8.neocities.org/emojis/saw.png",
        "🍟": "https://urbanmove8.neocities.org/emojis/mekisburgonya.png",
        "🍙": "https://urbanmove8.neocities.org/emojis/rizs.png",
        "😆": "https://urbanmove8.neocities.org/emojis/orultmosoly.png",
    };

    // Normalize map: support both with and without Variation Selector-16 (\uFE0F)
    const emojiMap = {};
    for (const [key, val] of Object.entries(baseEmojiMap)) {
        emojiMap[key] = val;
        if (key.includes('\uFE0F')) {
            const stripped = key.replace(/\uFE0F/g, '');
            if (!emojiMap[stripped]) emojiMap[stripped] = val;
        } else if (!key.includes(':') && key !== '\uFFFD') {
            const withVS = key + '\uFE0F';
            if (!emojiMap[withVS]) emojiMap[withVS] = val;
        }
    }

    // --- 1956 October 23 Memorial Date Check ---
    const now = new Date();
    const isOctober23 = (now.getMonth() === 9 && now.getDate() === 23);

    if (isOctober23) {
        const flag1956 = "https://urbanmove8.neocities.org/images/flags/hungary1956.png";
        emojiMap["🇭🇺"] = flag1956;
        emojiMap["🇭🇺\uFE0F"] = flag1956;
    }

    // Prohibited containers: prevents DOM disruption in non-renderable or code tags
    const FORBIDDEN_TAGS = new Set([
        'HEAD', 'TITLE', 'SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT',
        'CANVAS', 'VIDEO', 'AUDIO', 'CODE', 'PRE', 'SELECT',
        'OPTION', 'SVG', 'MATH', 'TEMPLATE', 'IFRAME', 'OBJECT', 'EMBED'
    ]);

    const processedNodes = new WeakSet();

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function safeCssUrl(url) {
        return `url('${url.replace(/['\\\r\n]/g, "\\$&")}')`;
    }

    const sortedKeys = Object.keys(emojiMap)
        .filter(k => k && k.length > 0)
        .sort((a, b) => b.length - a.length);

    const emojiRegex = new RegExp(`(${sortedKeys.map(escapeRegExp).join('|')})`, 'g');

    function injectStyles() {
        if (document.getElementById('hungaromoji-speed-styles')) return;
        const style = document.createElement('style');
        style.id = 'hungaromoji-speed-styles';
        style.textContent = `
            .h-mojis-wrapper {
                display: inline !important;
                white-space: inherit !important;
            }

            .h-mojis {
                display: inline-block !important;
                position: relative !important;
                width: 1.15em !important;
                height: 1.15em !important;
                max-width: 1.15em !important;
                vertical-align: -0.18em !important;
                margin: 0 0.05em !important;
                border: none !important;
                background: transparent !important;
                flex-shrink: 0 !important;
            }

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
                user-select: all !important;
            }

            :is(i, em, [style*="italic"]) .h-mojis { transform: skewX(-12deg); }
            :is(b, strong, [style*="bold"]) .h-mojis {
                transform: scale(1.08);
                filter: drop-shadow(0.5px 0 0px currentColor);
            }
            :is(i, em, [style*="italic"]):is(b, strong, [style*="bold"]) .h-mojis {
                transform: skewX(-12deg) scale(1.08);
            }

            .h-mojis::selection, .h-mojis *::selection { background: rgba(0,120,215,0.2) !important; }

            .h-mojis-1956 {
                cursor: pointer !important;
            }

            /* ─────────────────────────────────────────────────────────────
               1956 SOLEMN MEMORIAL ARCHITECTURE (TRADITIONAL & REVERENT)
            ───────────────────────────────────────────────────────────── */
            #hungaromoji-1956-modal {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                z-index: 2147483647 !important;
                font-family: "Georgia", "Cambria", "Times New Roman", Times, serif !important;
                font-size: 14.5px !important;
                color: #e4e2dd !important;
                box-sizing: border-box !important;
            }

            .h-1956-backdrop {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: rgba(8, 9, 11, 0.88) !important;
            }

            .h-1956-card {
                position: relative !important;
                background: #151619 !important;
                border: 1px solid #3a3b40 !important;
                border-top: 4px solid #8f232b !important;
                border-bottom: 4px solid #2d5538 !important;
                border-radius: 2px !important;
                max-width: 680px !important;
                width: 93% !important;
                max-height: 88vh !important;
                overflow-y: auto !important;
                padding: 24px 26px !important;
                box-shadow: 0 16px 40px rgba(0,0,0,0.85), 0 0 0 1px #0a0b0d !important;
                z-index: 2 !important;
                box-sizing: border-box !important;
            }

            .h-1956-header {
                display: flex !important;
                align-items: flex-start !important;
                justify-content: space-between !important;
                border-bottom: 1px solid #33363d !important;
                padding-bottom: 12px !important;
                margin-bottom: 16px !important;
            }

            .h-1956-title-wrap {
                display: flex !important;
                flex-direction: column !important;
                gap: 4px !important;
            }

            .h-1956-flag-strip {
                display: inline-flex !important;
                height: 3px !important;
                width: 80px !important;
                background: linear-gradient(to right, #ce2939 33%, #ffffff 33%, #ffffff 66%, #477050 66%) !important;
                margin-bottom: 4px !important;
            }

            .h-1956-header h2 {
                margin: 0 !important;
                font-size: 20px !important;
                font-weight: 600 !important;
                letter-spacing: 0.5px !important;
                color: #f7f5f0 !important;
                font-family: inherit !important;
            }

            .h-1956-sub {
                font-size: 12px !important;
                color: #b0aba0 !important;
                font-style: italic !important;
                letter-spacing: 0.3px !important;
            }

            .h-1956-close {
                background: transparent !important;
                border: 1px solid #444850 !important;
                color: #c9c5bc !important;
                font-size: 16px !important;
                cursor: pointer !important;
                padding: 4px 10px !important;
                border-radius: 2px !important;
                transition: all 0.2s ease !important;
                line-height: 1 !important;
            }

            .h-1956-close:hover {
                background: #2a1114 !important;
                color: #f7dede !important;
                border-color: #8f232b !important;
            }

            .h-1956-body {
                line-height: 1.6 !important;
            }

            .h-1956-intro {
                margin: 0 0 16px 0 !important;
                background: #1a1c20 !important;
                border-left: 3px solid #b89758 !important;
                padding: 10px 14px !important;
                font-size: 13.5px !important;
                color: #dcd8cf !important;
            }

            .h-1956-motto {
                margin: 0 0 8px 0 !important;
                font-style: italic !important;
                color: #ebdcb9 !important;
            }

            .h-1956-wiki-link {
                display: inline-block !important;
                margin-top: 8px !important;
                color: #c7a76d !important;
                text-decoration: none !important;
                font-size: 12.5px !important;
                border-bottom: 1px dotted #c7a76d !important;
            }

            .h-1956-wiki-link:hover {
                color: #f3dfb7 !important;
                border-bottom-style: solid !important;
            }

            .h-1956-section-title {
                font-size: 15px !important;
                font-weight: 600 !important;
                letter-spacing: 0.5px !important;
                text-transform: uppercase !important;
                margin: 18px 0 10px 0 !important;
                border-bottom: 1px solid #2f3238 !important;
                padding-bottom: 5px !important;
                color: #dcd7cc !important;
            }

            /* ── Sándor Márai Poem Container ── */
            .h-1956-poem-box {
                background: #101114 !important;
                border: 1px solid #2b2d35 !important;
                border-left: 3px solid #8f232b !important;
                border-radius: 2px !important;
                padding: 14px 18px !important;
                margin: 12px 0 18px 0 !important;
                font-style: italic !important;
                color: #ddd8ce !important;
                line-height: 1.7 !important;
                font-size: 13.5px !important;
                box-sizing: border-box !important;
            }

            .h-1956-poem-stanza {
                margin-bottom: 12px !important;
            }

            .h-1956-poem-stanza:last-child {
                margin-bottom: 0 !important;
            }

            .h-1956-poem-footer {
                text-align: right !important;
                font-size: 12px !important;
                color: #9c978b !important;
                margin-top: 8px !important;
                font-style: normal !important;
            }

            .h-1956-victims-list {
                list-style: none !important;
                padding: 0 !important;
                margin: 0 0 18px 0 !important;
            }

            .h-1956-victim-item {
                display: flex !important;
                align-items: flex-start !important;
                gap: 12px !important;
                padding: 8px 6px !important;
                border-bottom: 1px solid #23252a !important;
            }

            .h-1956-victim-item:hover {
                background: rgba(255, 255, 255, 0.02) !important;
            }

            .h-1956-victim-emoji {
                font-size: 21px !important;
                line-height: 1 !important;
                flex-shrink: 0 !important;
                cursor: grab !important;
                filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6)) !important;
            }

            .h-1956-victim-text {
                font-size: 13.5px !important;
                color: #cac5ba !important;
            }

            .h-1956-victim-name {
                font-weight: bold !important;
                color: #f5f3ee !important;
                letter-spacing: 0.2px !important;
            }

            .h-1956-tag-young {
                font-size: 11px !important;
                background: #2b1f15 !important;
                color: #e4aa68 !important;
                border: 1px solid #5a3d24 !important;
                padding: 1px 5px !important;
                border-radius: 2px !important;
                margin-left: 5px !important;
                font-style: normal !important;
            }

            /* ── Altar / Memorial Stone ── */
            .h-1956-tribute-panel {
                background: #111215 !important;
                border: 1px solid #2c2e35 !important;
                border-radius: 3px !important;
                padding: 14px 16px !important;
                margin-top: 14px !important;
                box-sizing: border-box !important;
            }

            .h-1956-palette-label {
                font-size: 12.5px !important;
                font-style: italic !important;
                color: #b5afa4 !important;
                width: 100% !important;
                margin-bottom: 8px !important;
            }

            .h-1956-palette {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 8px !important;
                margin-bottom: 12px !important;
                align-items: center !important;
            }

            .h-1956-drag-item {
                font-size: 20px !important;
                cursor: grab !important;
                background: #1a1c21 !important;
                border: 1px solid #383b44 !important;
                border-radius: 2px !important;
                padding: 4px 8px !important;
                user-select: none !important;
                transition: transform 0.15s, border-color 0.15s, background 0.15s !important;
            }

            .h-1956-drag-item:hover {
                transform: translateY(-2px) !important;
                background: #24272f !important;
                border-color: #b89758 !important;
            }

            .h-1956-dropzone {
                border: 1px solid #4a4539 !important;
                background: #0d0e11 !important;
                border-radius: 2px !important;
                min-height: 75px !important;
                padding: 12px !important;
                text-align: center !important;
                position: relative !important;
                box-shadow: inset 0 2px 8px rgba(0,0,0,0.8) !important;
                box-sizing: border-box !important;
            }

            .h-1956-dropzone-active {
                border-color: #b89758 !important;
                background: #17181c !important;
                box-shadow: inset 0 0 12px rgba(184, 151, 88, 0.25) !important;
            }

            .h-1956-dropzone-prompt {
                color: #8c867a !important;
                font-size: 12.5px !important;
                font-style: italic !important;
                margin: 14px 0 0 0 !important;
                pointer-events: none !important;
                letter-spacing: 0.3px !important;
            }

            .h-1956-placed-items {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 6px !important;
                justify-content: center !important;
                margin-top: 4px !important;
            }

            .h-1956-placed-item {
                font-size: 22px !important;
                cursor: pointer !important;
                filter: drop-shadow(0 2px 6px rgba(228, 176, 68, 0.35)) !important;
                transition: transform 0.15s !important;
            }

            .h-1956-placed-item:hover {
                transform: scale(1.18) !important;
            }

            .h-1956-altar-controls {
                display: flex !important;
                justify-content: flex-end !important;
                margin-top: 8px !important;
            }

            .h-1956-clear-btn {
                background: transparent !important;
                border: 1px solid #3c3e47 !important;
                color: #a49f94 !important;
                font-family: inherit !important;
                font-size: 11.5px !important;
                cursor: pointer !important;
                padding: 3px 10px !important;
                border-radius: 2px !important;
                transition: all 0.2s !important;
            }

            .h-1956-clear-btn:hover {
                background: #1c1d22 !important;
                color: #ded9cd !important;
                border-color: #636675 !important;
            }
        `;
        (document.head || document.documentElement).appendChild(style);
    }

    function show1956MemorialModal() {
        if (document.getElementById('hungaromoji-1956-modal')) return;

        const body = document.body;
        if (!body) return;

        const overlay = document.createElement('div');
        overlay.id = 'hungaromoji-1956-modal';
        overlay.setAttribute('data-h', '1');
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', '1956-os Forradalom és Szabadságharc Emléklap');

        overlay.innerHTML = `
            <div class="h-1956-backdrop"></div>
            <div class="h-1956-card">
                <div class="h-1956-header">
                    <div class="h-1956-title-wrap">
                        <div class="h-1956-flag-strip"></div>
                        <h2>🇭🇺 In Memoriam: 1956. október 23.</h2>
                        <div class="h-1956-sub">Kegyelet a magyar forradalom és szabadságharc hőseinek és mártírjainak</div>
                    </div>
                    <button type="button" class="h-1956-close" aria-label="Bezárás">&#x2715;</button>
                </div>
                <div class="h-1956-body">
                    <div class="h-1956-intro">
                        <p class="h-1956-motto">„Ahol a hősöket nem felejtik, ott mindig születnek újak.”</p>
                        <p style="margin:0;">1956 őszén a magyar nemzet egy emberként kelt fel a szovjet megszállás és az elnyomó diktatúra ellen. Tisztelettel hajtunk fejet a pesti srácok, a bátor leányok, a fegyvert ragadó ifjak és az önfeláldozó sebesültmentők előtt.</p>
                        <a class="h-1956-wiki-link" href="https://hu.wikipedia.org/wiki/1956-os_forradalom" target="_blank" rel="noopener noreferrer">
                            Történelmi háttér: Az 1956-os forradalom története (Wikipédia) &rarr;
                        </a>
                    </div>

                    <!-- Márai Sándor: Mennyből az angyal (1956) -->
                    <div class="h-1956-section-title">Márai Sándor: Mennyből az angyal (1956)</div>
                    <div class="h-1956-poem-box">
                        <div class="h-1956-poem-stanza">
                            Mennyből az angyal – menj sietve<br>
                            Az üszkös, fagyos Budapestre.<br>
                            Oda, ahol az orosz tankok<br>
                            Között hallgatnak a harangok.<br>
                            Ahol nem csillog a karácsony,<br>
                            Nincsen aranydió a fákon,<br>
                            Nincs más, csak fagy, didergés, éhség.<br>
                            Mondd el nekik, úgy, hogy megértsék.<br>
                            Szólj hangosan az éjszakából:<br>
                            Angyal, vigyél hírt a csodáról.
                        </div>
                        <div class="h-1956-poem-stanza">
                            Mondd el, mert ez világ csodája:<br>
                            Egy szegény nép karácsonyfája<br>
                            A Csendes Éjben égni kezdett –<br>
                            És sokan vetnek most keresztet.<br>
                            Földrészek népe nézi, nézi,<br>
                            Egyik érti, másik nem érti.<br>
                            Fejük csóválják, sok ez, soknak.<br>
                            Imádkoznak vagy iszonyodnak,<br>
                            Mert más lóg a fán, nem cukorkák:<br>
                            <span style="color:#f2e6cf;font-weight:600;">Népek Krisztusa, Magyarország.</span>
                        </div>
                        <div class="h-1956-poem-stanza">
                            Miért, hogy meghasadt az égbolt?<br>
                            Mert egy nép azt mondta: „Elég volt.”<br>
                            Nem érti ezt az a sok ember,<br>
                            Mi áradt itt meg, mint a tenger?<br>
                            Miért remegtek világrendek?<br>
                            Egy nép kiáltott. Aztán csend lett.<br>
                            De most sokan kérdik: mi történt?<br>
                            Ki tett itt csontból, húsból törvényt?<br>
                            És kérdik, egyre többen kérdik,<br>
                            Hebegve, mert végképp nem értik –<br>
                            Ők, akik örökségbe kapták –:<br>
                            <span style="color:#e0b977;">Ilyen nagy dolog a Szabadság?...</span>
                        </div>
                        <div class="h-1956-poem-stanza">
                            Angyal, vidd meg a hírt az égből,<br>
                            Mindig új élet lesz a vérből.<br>
                            Találkoztak ők már néhányszor<br>
                            – a gyermek, a szamár, a pásztor –<br>
                            az alomban, a jászol mellett,<br>
                            ha az Élet megszületett.<br>
                            A csodát most is ők vigyázzák,<br>
                            leheletükkel párolgatják,<br>
                            mert a Csillag ég, hasad a hajnal.<br>
                            Mondd meg nekik: mennyből az angyal.
                        </div>
                        <div class="h-1956-poem-footer">— New York, 1956 karácsonya</div>
                    </div>

                    <div class="h-1956-section-title">Kiemelkedő mártírok és ifjú hősök:</div>
                    <ul class="h-1956-victims-list">
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👧" title="Helyezd az emlékkőre!">👧</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Szeles Erika Kornélia (1941–1956)</span>
                                <span class="h-1956-tag-young">15 éves mártír</span>:
                                A forradalom világhírűvé vált jelképe. Diáklány és önkéntes vöröskeresztes ápoló, aki a novemberi szovjet intervenció utcai harcaiban sebesültek mentése közben vesztette életét.
                            </div>
                        </li>
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👩‍⚕️" title="Helyezd az emlékkőre!">👩‍⚕️</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Tóth Ilona (1932–1957)</span>:
                                25 éves szigorló orvostanhallgató és mentőápoló. A Péterfy Sándor utcai kórházban éjjel-nappal küzdött az elesettek életéért. A megtorlás során koncepciós perben végezték ki.
                            </div>
                        </li>
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👩" title="Helyezd az emlékkőre!">👩</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Havrila Béláné Sticker Katalin (1932–1959)</span>:
                                A Vajdahunyad utcai és Corvin közi ellenállók ifjú ápolója és harcosa. A kádári megtorlás legfiatalabb női kivégzettjeinek egyike, 26 évesen oltották ki életét.
                            </div>
                        </li>
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👦" title="Helyezd az emlékkőre!">👦</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Mansfeld Péter (1941–1959)</span>
                                <span class="h-1956-tag-young">18 éves mártír</span>:
                                A megtorlás legfiatalabb fiú mártírja. A Széna téri szabadságharcosok összekötője, akinek kivégzésével megvárták a 18. életévének betöltését.
                            </div>
                        </li>
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👨‍💼" title="Helyezd az emlékkőre!">👨‍💼</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Nagy Imre (1896–1958)</span>:
                                A forradalom miniszterelnöke, aki a nemzeti függetlenség és semlegesség védelmében mártírhalált vállalt.
                            </div>
                        </li>
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👨‍✈️" title="Helyezd az emlékkőre!">👨‍✈️</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Maléter Pál (1917–1958)</span>:
                                Honvédelmi miniszter, vezérezredes, a Kilián laktanya parancsnoka. Tárgyalás ürügyén tőrbe csalták, majd kivégezték.
                            </div>
                        </li>
                        <li class="h-1956-victim-item">
                            <span class="h-1956-victim-emoji h-1956-drag-item" draggable="true" data-emoji="👴" title="Helyezd az emlékkőre!">👴</span>
                            <div class="h-1956-victim-text">
                                <span class="h-1956-victim-name">Szabó János („Szabó bácsi”, 1897–1957)</span>:
                                A Széna téri felkelők legendás és köztiszteletben álló parancsnoka.
                            </div>
                        </li>
                    </ul>

                    <div class="h-1956-section-title">Kegyeletadás és Főhajtás:</div>
                    <div class="h-1956-tribute-panel">
                        <div class="h-1956-palette-label">Helyezzen el egy mécsest, koszorút vagy kegyeleti jelképet az emlékkövön:</div>
                        
                        <div class="h-1956-palette">
                            <span class="h-1956-drag-item" draggable="true" data-emoji="🕯️" title="Kegyeleti mécses">🕯️</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="🌹" title="A megemlékezés rózsája">🌹</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="💐" title="Koszorú / csokor">💐</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="🥀" title="Elnémult virág">🥀</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="🕊️" title="A szabadság és béke galambja">🕊️</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="🎗️" title="Nemzeti gyászszalag">🎗️</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="👧" title="Fiatal pesti lány (Szeles Erika)">👧</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="👩‍⚕️" title="Önfeláldozó ápolónő (Tóth Ilona)">👩‍⚕️</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="👩" title="Hőslelkű forradalmár (Sticker Katalin)">👩</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="👦" title="Pesti srác (Mansfeld Péter)">👦</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="👨‍✈️" title="Mártír katona (Maléter Pál)">👨‍✈️</span>
                            <span class="h-1956-drag-item" draggable="true" data-emoji="👨‍💼" title="Mártír miniszterelnök (Nagy Imre)">👨‍💼</span>
                        </div>

                        <div class="h-1956-dropzone">
                            <p class="h-1956-dropzone-prompt">🕯️ Kattintson a fenti jelképekre, vagy húzza őket ide az emlékezés kövére 🕯️</p>
                            <div class="h-1956-placed-items"></div>
                        </div>

                        <div class="h-1956-altar-controls">
                            <button type="button" class="h-1956-clear-btn">Emlékkő megújítása</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const prevOverflow = body.style.overflow;
        body.style.overflow = 'hidden';

        function closeModal() {
            body.style.overflow = prevOverflow;
            overlay.remove();
            document.removeEventListener('keydown', onKeyDown);
        }

        function onKeyDown(e) {
            if (e.key === 'Escape') closeModal();
        }

        overlay.querySelector('.h-1956-close').addEventListener('click', closeModal);
        overlay.querySelector('.h-1956-backdrop').addEventListener('click', closeModal);
        document.addEventListener('keydown', onKeyDown);

        const dropzone = overlay.querySelector('.h-1956-dropzone');
        const promptText = overlay.querySelector('.h-1956-dropzone-prompt');
        const placedContainer = overlay.querySelector('.h-1956-placed-items');
        const dragItems = overlay.querySelectorAll('.h-1956-drag-item');
        const clearBtn = overlay.querySelector('.h-1956-clear-btn');

        function togglePrompt() {
            promptText.style.display = placedContainer.children.length > 0 ? 'none' : 'block';
        }

        function addItem(emojiChar) {
            if (!emojiChar) return;
            const cleanChar = emojiChar.trim();
            if (!cleanChar || cleanChar.length > 30) return;

            const item = document.createElement('span');
            item.className = 'h-1956-placed-item';
            item.textContent = cleanChar;
            item.title = 'Kattintson az eltávolításhoz';
            item.addEventListener('click', () => {
                item.remove();
                togglePrompt();
            });
            placedContainer.appendChild(item);
            togglePrompt();
        }

        dragItems.forEach(item => {
            item.addEventListener('dragstart', (e) => {
                const char = item.getAttribute('data-emoji') || item.textContent;
                e.dataTransfer.setData('text/plain', char);
            });
            item.addEventListener('click', () => {
                const char = item.getAttribute('data-emoji') || item.textContent;
                addItem(char);
            });
        });

        // Anti-flicker drag handling for nested dropzone elements
        let dragCounter = 0;

        dropzone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            dragCounter++;
            dropzone.classList.add('h-1956-dropzone-active');
        });

        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (e.dataTransfer) {
                e.dataTransfer.dropEffect = 'copy';
            }
            dropzone.classList.add('h-1956-dropzone-active');
        });

        dropzone.addEventListener('dragleave', (e) => {
            dragCounter--;
            if (dragCounter <= 0 || !dropzone.contains(e.relatedTarget)) {
                dragCounter = 0;
                dropzone.classList.remove('h-1956-dropzone-active');
            }
        });

        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dragCounter = 0;
            dropzone.classList.remove('h-1956-dropzone-active');
            const emojiChar = e.dataTransfer ? e.dataTransfer.getData('text/plain') : '';
            addItem(emojiChar);
        });

        clearBtn.addEventListener('click', () => {
            placedContainer.innerHTML = '';
            togglePrompt();
        });

        body.appendChild(overlay);
    }

    // Comprehensive boundary validator (checks tags, namespaces, contenteditable, [data-h])
    function isForbiddenOrEditable(node) {
        if (!node) return true;
        const element = node.nodeType === Node.ELEMENT_NODE ? node : (node.parentElement || node.parentNode);
        if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;

        // Skip non-HTML namespaces (e.g. SVG <text>, MathML)
        if (element.namespaceURI && element.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
            return true;
        }

        const tag = (element.tagName || '').toUpperCase();
        if (FORBIDDEN_TAGS.has(tag) || element.hasAttribute('data-h')) {
            return true;
        }

        if (element.isContentEditable) return true;

        if (element.closest) {
            return Boolean(element.closest(
                'head, title, script, style, textarea, input, select, option, noscript, ' +
                'canvas, video, audio, code, pre, svg, math, template, iframe, object, embed, ' +
                '[contenteditable="true"], [contenteditable=""], [role="textbox"], [data-h]'
            ));
        }

        return false;
    }

    function fastReplace(textNode) {
        const text = textNode.nodeValue;
        if (!text) return;

        emojiRegex.lastIndex = 0;
        if (!emojiRegex.test(text)) {
            processedNodes.add(textNode);
            return;
        }

        const parent = textNode.parentElement || textNode.parentNode;
        if (!parent || textNode.parentNode !== parent || isForbiddenOrEditable(parent)) {
            return;
        }

        const wrapper = document.createElement('span');
        wrapper.className = 'h-mojis-wrapper';
        wrapper.setAttribute('data-h', '1');

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
                span.style.setProperty('--h-emoji-bg', safeCssUrl(url));
                span.setAttribute('role', 'img');
                span.setAttribute('aria-label', match);

                if (isOctober23 && (match === "🇭🇺" || match === "🇭🇺\uFE0F")) {
                    span.classList.add('h-mojis-1956');
                    span.setAttribute('title', '1956. október 23. Emléknap (Ctrl + Kattintás az emléklap megnyitásához)');
                }

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

        try {
            if (textNode.parentNode === parent) {
                processedNodes.add(wrapper);
                processedNodes.add(textNode);
                parent.replaceChild(wrapper, textNode);
            }
        } catch (_) {
            // Node was unmounted or replaced concurrently by a framework
        }
    }

    function walk(node) {
        if (!node || processedNodes.has(node)) return;

        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            if (node.nodeType === Node.ELEMENT_NODE && isForbiddenOrEditable(node)) {
                return;
            }

            const children = Array.from(node.childNodes);
            for (let i = 0; i < children.length; i++) {
                walk(children[i]);
            }
        } else if (node.nodeType === Node.TEXT_NODE) {
            fastReplace(node);
        }
    }

    function init() {
        injectStyles();
        const root = document.body || document.documentElement;
        if (root) walk(root);

        if (isOctober23) {
            document.addEventListener('click', function(e) {
                if ((e.ctrlKey || e.metaKey) && e.button === 0) {
                    const el = e.target instanceof Element ? e.target : (e.target && e.target.parentElement);
                    const target = el && el.closest('.h-mojis-1956');
                    if (target) {
                        e.preventDefault();
                        e.stopPropagation();
                        show1956MemorialModal();
                    }
                }
            }, true);
        }

        const observer = new MutationObserver(mutations => {
            for (let i = 0; i < mutations.length; i++) {
                const m = mutations[i];
                if (m.type === 'childList') {
                    for (let j = 0; j < m.addedNodes.length; j++) {
                        walk(m.addedNodes[j]);
                    }
                } else if (m.type === 'characterData') {
                    const target = m.target;
                    if (target && target.nodeType === Node.TEXT_NODE) {
                        processedNodes.delete(target);
                        const parent = target.parentElement || target.parentNode;
                        if (parent && !isForbiddenOrEditable(parent)) {
                            fastReplace(target);
                        }
                    }
                }
            }
        });

        observer.observe(document.documentElement || document, {
            childList: true,
            subtree: true,
            characterData: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
/* @license-end */
