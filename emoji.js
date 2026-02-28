/*
Hungaromoji v0.9.6.0
Copyright © 2025 Urbanmove 8 Qatar Sole Prop.
All rights reserved.

────────────────────────────────────────────
Emoji Assets:
• Original emoji artwork and base assets © Penguinmod.com — Licensed under the MIT License.
• All images, animations, and source code are distributed under the MIT License.
• Modification and redistribution permitted under MIT terms, with original credit required.

────────────────────────────────────────────
Other Assets and References:
• Book excerpts © Móra Könyvkiadó & feketeistvan.hu — Minden jog fenntartva.
• OMSZ logo & STOP sign © Wikimedia Commons — Public domain / All rights reserved.
• 100 Hungarian Forint image © Magyar Nemzeti Bank — Minden jog fenntartva.
• Haragos Pista © Univer Csoport — Minden jog fenntartva.
• Hévíz boat photo © Balatoni Hajózás Zrt. (BAHART), via Hungarian Wikipedia — Minden jog fenntartva.
• Bus stop sign © KRESZ official materials — Minden jog fenntartva.
• Train images (e.g., Bzmot) © MÁV Zrt. — Minden jog fenntartva.
• Jászkeszeg fish image by Kristian Kostov, Wikipedia — CC BY 3.0 (modified)
• OMSZ logo by OMSZ (uploaded by Madboy74), Wikimedia Commons — CC BY 4.0
• Góbé Plane Emoji by Regasterios, Wikipedia — CC BY-SA 3.0
• Tu-154 Malév plane image by Fæ, Wikipedia — GFDL 1.2
• Negro image by Metsavend, Wikipedia — CC BY-SA 4.0
• Budgerigar image by Flickr Upload Bot, Wikipedia — CC BY-SA 2.0
and more!

────────────────────────────────────────────
License Information:
This project is licensed under the Apache License, Version 2.0 (the “License”);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
────────────────────────────────────────────
*/

(function() {
    const emojiMap = {
        "👩": "hungaromoji_assets/woman.png",
        "👨": "hungaromoji_assets/man.png",
        "👧": "hungaromoji_assets/girl.png",
        "👦": "hungaromoji_assets/boy.png",
        "💀": "hungaromoji_assets/skull.png",
        "😀": "hungaromoji_assets/animatedsmile.png",
        "😭": "hungaromoji_assets/sobbing.png",
        "💻": "hungaromoji_assets/laptop.png",
        "🎉": "hungaromoji_assets/tada.png",
        "🥳": "hungaromoji_assets/party.png",
        "🚗": "hungaromoji_assets/suzukiscross.png",
        "🤓": "hungaromoji_assets/nerd.png",
        "👉": "hungaromoji_assets/pointright.png",
        "👈": "hungaromoji_assets/pointleft.png",
        "👇": "hungaromoji_assets/pointdown.png",
        "🫵": "hungaromoji_assets/pointatyou.png",
        "☝️": "hungaromoji_assets/pointup.png",
        "🗿": "hungaromoji_assets/moai.png",
        "📱": "hungaromoji_assets/kekfontelefon.png",
        "🪙": "hungaromoji_assets/100-forintos.png",
        "🌉": "hungaromoji_assets/lanchid.png",
        "📗": "hungaromoji_assets/konyborito_mora_tuskevar.png",
        "📙": "hungaromoji_assets/fekete_istvan_vuk.png",
        "📕": "hungaromoji_assets/Egricsillagok.jpg",
        "🙂": "hungaromoji_assets/smile.png",
        "🤡": "hungaromoji_assets/clown.png",
        "🤑": "hungaromoji_assets/money.png",
        "🙄": "hungaromoji_assets/rollingeyes.png",
        "😍": "hungaromoji_assets/hearteyes.png",
        "😞": "hungaromoji_assets/animatedfrown.png",
        "😫": "hungaromoji_assets/annoyed.png",
        "🇱🇺": "hungaromoji_assets/luxemburg.png",
        "🇭🇺": "hungaromoji_assets/hungary.png",
        /* "🇭🇺": "https://urbanmove8.neocities.org/images/flags/hungary1956.png", */ //It is important to remember about 1956 October 23...
        "🇵🇱": "hungaromoji_assets/poland.png",
        "🇨🇿": "hungaromoji_assets/czech.png",
        "🇦🇹": "hungaromoji_assets/austria.png",
        "🇪🇺": "hungaromoji_assets/eu.png",
        "🌃": "hungaromoji_assets/orszaghaz.png",
        "⚕️": "https://upload.wikimedia.org/wikipedia/commons/3/34/Insignia_Hungary_OMSZ_v1.svg",
        "🤷": "hungaromoji_assets/idk.png",
        "🍫": "hungaromoji_assets/sportcsoki.png",
        "🔞": "hungaromoji_assets/18plusz.png",
        "🚌": "hungaromoji_assets/credoeconell12.png",
        "🚂": "hungaromoji_assets/mav43.png",
        // "Ⓜ️": "https://upload.wikimedia.org/wikipedia/commons/f/fb/BKV_metro.svg",
        // "BPIM1": "https://urbanmove8.neocities.org/kekhegy/kepek/metro1.png",
        // "BPIM2": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/BKV_m_2_jms.svg/800px-BKV_m_2_jms.svg.png",
        // "BPIM3": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/BKV_m_3_jms.svg/800px-BKV_m_3_jms.svg.png",
        // "BPIM4": "https://urbanmove8.neocities.org/kekhegy/kepek/metro4.png",
        /* Due to issues with BKK, we need to ask their permission to use those :( */
        "🚇": "hungaromoji_assets/budapestim3asmetroszerelveny.png",
        "💶": "hungaromoji_assets/stackedeuros.png",
        "💵": "hungaromoji_assets/stackeddollars.png",
        "💴": "hungaromoji_assets/stackedyens.png",
        "☹️": "hungaromoji_assets/bigfrown.png",
        "😧": "hungaromoji_assets/scared.png",
        "🧐": "hungaromoji_assets/investigate.png",
        "😠": "hungaromoji_assets/angry.png",
        "😲": "hungaromoji_assets/astonishment.png",
        "😨": "hungaromoji_assets/shocked.png",
        "👶": "hungaromoji_assets/baby.png",
        "🏳️": "hungaromoji_assets/flagwhite.png",
        "🚩": "hungaromoji_assets/flagred.png",
        "🏁": "hungaromoji_assets/flagcheck.png",
        "🏴": "hungaromoji_assets/flagblack.png",
        "😎": "hungaromoji_assets/cool.png",
        "🥶": "hungaromoji_assets/cold.png",
        "😈": "hungaromoji_assets/devil.png",
        "😵": "hungaromoji_assets/expressivedead.png",
        "😶‍🌫️": "hungaromoji_assets/faceinclouds.png",
        "💪": "hungaromoji_assets/flex.png",
        "😡": "hungaromoji_assets/furious.png",
        "🎂": "hungaromoji_assets/cake.png",
        "🔔": "hungaromoji_assets/bell.png",
        "🔕": "hungaromoji_assets/bellno.png",
        "🤮": "hungaromoji_assets/barf.png",
        "🤢": "hungaromoji_assets/badtaste.png",
        "👋": "hungaromoji_assets/animatedwave.png",
        "👽": "hungaromoji_assets/alien.png",
        "🎆": "hungaromoji_assets/szntistvannapjatuzijatekok.png",
        "📰": "hungaromoji_assets/magyarnemzetujsagutolso.png",
        "😂": "hungaromoji_assets/laughing.png",
        "🚓": "hungaromoji_assets/rendorseg.png",
        "😊": "hungaromoji_assets/blush.png",
        "🤠": "hungaromoji_assets/cowboy.png",
        "🍔": "hungaromoji_assets/burger.png",
        "🫧": "hungaromoji_assets/bubbles.png",
        "😄": "hungaromoji_assets/casualjoy.png",
        "😝": "hungaromoji_assets/bleh.png",
        "🫡": "hungaromoji_assets/salute.png",
        "😇": "hungaromoji_assets/angel.png",
        "😬": "hungaromoji_assets/grimacing.png",
        "😟": "hungaromoji_assets/worried.png",
        "🫤": "hungaromoji_assets/meh.png",
        "🔊": "hungaromoji_assets/volumeloud.png",
        "🔇": "hungaromoji_assets/volumeoff.png",
        "🙍": "hungaromoji_assets/personfrown.png",
        "🙎": "hungaromoji_assets/duzzogoember.png",
        "😾": "hungaromoji_assets/catangry.png",
        "😸": "hungaromoji_assets/cathappy.png",
        "😻": "hungaromoji_assets/cathearteyes.png",
        "🙀": "hungaromoji_assets/catscream.png",
        "🐶": "hungaromoji_assets/dog.png",
        "🚫": "hungaromoji_assets/ocross.png",
        "🪛": "hungaromoji_assets/screwdriver.png",
        "👍": "hungaromoji_assets/thumbsup.png",
        "👎": "hungaromoji_assets/thumbsdown.png",
        "😱": "hungaromoji_assets/gladlyshocked.png",
        "🫥": "hungaromoji_assets/dotted.png",
        "😕": "hungaromoji_assets/confused.png",
        "🥹": "hungaromoji_assets/holdingbacktears.png",
        "🤝": "hungaromoji_assets/handshake.png",
        "💥": "hungaromoji_assets/explode.png",
        "😮": "hungaromoji_assets/surprised.png",
        "🔓": "hungaromoji_assets/unlocked.png",
        "🔒": "hungaromoji_assets/lock.png",
        "😵‍💫": "hungaromoji_assets/dizzy.png",
        "🙃": "hungaromoji_assets/upsidedownsmile.png",
        "💎": "hungaromoji_assets/diamond.png",
        "✅": "hungaromoji_assets/check.png",
        "👏": "hungaromoji_assets/clap.png",
        "☁️": "hungaromoji_assets/cloud.png",
        "📈": "hungaromoji_assets/chartrising.png",
        "📉": "hungaromoji_assets/chartlowering.png",
        "🐻": "hungaromoji_assets/bear.png",
        "🐻‍❄️": "hungaromoji_assets/polarbear.png",
        "⬆️": "hungaromoji_assets/arrowup.png",
        "⬇️": "hungaromoji_assets/arrowdown.png",
        "⬅️": "hungaromoji_assets/arrowleft.png",
        "➡️": "hungaromoji_assets/arrowright.png",
        "🐝": "hungaromoji_assets/bee.png",
        "🦊": "hungaromoji_assets/fox.png",
        "🎄": "hungaromoji_assets/treechristmas.png",
        "🚦": "hungaromoji_assets/trafficlight.png",
        "🤔": "hungaromoji_assets/thinking.png",
        "🤧": "hungaromoji_assets/tissue.png",
        "😋": "hungaromoji_assets/tasty.png",
        "😅": "hungaromoji_assets/sweating.png",
        "🤩": "hungaromoji_assets/stars.png",
        /* "🌊": "https://library.penguinmod.com/files/emojis/stream.png", */ // No longer exists
        "🙏": "hungaromoji_assets/pray.png",
        "🗣️": "hungaromoji_assets/speaking.png",
        "😴": "hungaromoji_assets/sleeping.png",
        "🏃": "hungaromoji_assets/personrunning.png",
        "🚶": "hungaromoji_assets/personwalking.png",
        "✌️": "hungaromoji_assets/peace.png",
        "🌍": "hungaromoji_assets/earth.png",
        "💧": "hungaromoji_assets/droplet.png",
        "🎮": "hungaromoji_assets/controller.png",
        "🫠": "hungaromoji_assets/melting.png",
        "🫨": "hungaromoji_assets/shakingface.png",
        "🤫": "hungaromoji_assets/shhh.png",
        "🐧": "hungaromoji_assets/penguin.png",
        "🐱": "hungaromoji_assets/cat.png",
        "📄": "hungaromoji_assets/paper.png",
        "⚠️": "hungaromoji_assets/warning.png",
        "😷": "hungaromoji_assets/mask.png",
        "💰": "hungaromoji_assets/moneybag.png",
        "🖐️": "hungaromoji_assets/openhand.png",
        "✋": "hungaromoji_assets/palm.png",
        "✏️": "hungaromoji_assets/pencil.png",
        "👻": "hungaromoji_assets/ghost.png",
        "📝": "hungaromoji_assets/pencilonpaper.png",
        "🗨️": "hungaromoji_assets/speech.png",
        "💭": "hungaromoji_assets/thought.png",
        "🖖": "hungaromoji_assets/vulcan.png",
        "❌": "hungaromoji_assets/xsimple.png",
        "🤐": "hungaromoji_assets/zipper.png",
        "🥱": "hungaromoji_assets/yawn.png",
        "🐼": "https://library.penguinmod.com/files/emojis/panda.png",
        "🔨": "https://library.penguinmod.com/files/emojis/hammer.png",
        "🛠️": "hungaromoji_assets/hammerandwrench.png",
        "🔍": "hungaromoji_assets/magnify.png",
        "🤥": "hungaromoji_assets/lying.png",
        "📊": "hungaromoji_assets/charthungarianstyle.png",
        "🛑": "hungaromoji_assets/stopsign.png",
        "🧑‍💼": "hungaromoji_assets/businessman_businesswoman.png",
        "👔": "hungaromoji_assets/necktie.png",
        "⛏️": "hungaromoji_assets/Pickaxe.png",
        "🐀": "hungaromoji_assets/rat.png",
        "🌕": "hungaromoji_assets/moon.png",
        "🤖": "hungaromoji_assets/robot.png",
        "🎁": "hungaromoji_assets/magyarajandek.png",
        "🧩": "hungaromoji_assets/puzzle.png",
        "🧑‍🎤": "hungaromoji_assets/singing.png",
        "✈️": "hungaromoji_assets/malev.png",
        "💼": "hungaromoji_assets/businessbag.png",
        "🐥": "hungaromoji_assets/chick.png",
        "🤯": "hungaromoji_assets/mindblown.png",
        "🌈": "hungaromoji_assets/rainbow.png",
        "😓": "hungaromoji_assets/nervous.png",
        "📖": "hungaromoji_assets/openedbook.png",
        "🛩️": "hungaromoji_assets/smallplane.png",
        "🛫": "hungaromoji_assets/planetakeoff.png",
        "🛬": "hungaromoji_assets/planeland.png",
        "🧏": "hungaromoji_assets/deaf.png",
        "💸": "hungaromoji_assets/forintszarnyakkal.png",
        "❤️": "hungaromoji_assets/heart.png",
        "🧡": "hungaromoji_assets/heartorange.png",
        "📚": "hungaromoji_assets/stackedbooks.png",
        "🎓": "hungaromoji_assets/studentscap.png",
        "📣": "hungaromoji_assets/megaphone.png",
        "🧑‍🦳": "hungaromoji_assets/oszhajufelnott.png",
        "🧑": "hungaromoji_assets/felnott.png",
        "👱": "hungaromoji_assets/szokefelnott.png",
        "🧑‍🦰": "hungaromoji_assets/voroshajufelnott.png",
        "🧑‍🦲": "hungaromoji_assets/kopaszfelnott.png",
        "🦃": "hungaromoji_assets/pulyka.png",
        "🍉": "hungaromoji_assets/felbevagottdinnye.png",
        "🍈": "hungaromoji_assets/dinnye.png",
        "🐌": "hungaromoji_assets/snail.png",
        "👥": "hungaromoji_assets/2persons.png",
        "👤": "hungaromoji_assets/person.png",
        "☺": "hungaromoji_assets/smile.png",
        "✈": "hungaromoji_assets/malev.png",
        "⛄": "hungaromoji_assets/hoember.png",
        "🍡": "hungaromoji_assets/dango.png",
        "penguinmod:jeremygamer13": "hungaromoji_assets/jeremygamer13.png",
        "🛡": "hungaromoji_assets/shield.png",
        "penguinmod:joe": "hungaromoji_assets/joe.png",
        "🔋": "hungaromoji_assets/akkumlator.png",
        "🪫": "hungaromoji_assets/gyengeakkumlator.png",
        "🐔": "hungaromoji_assets/tyuk.png",
        "🌧️": "hungaromoji_assets/eso.png",
        "⛈️": "hungaromoji_assets/zaporzivataresokkel.png",
        "🌩️": "hungaromoji_assets/zaporzivatar.png",
        "🌬️": "hungaromoji_assets/szelfujoarc.png",
        "🫙": "hungaromoji_assets/haragospista.png",
        "🗓": "hungaromoji_assets/naptar.png",
        "📅": "hungaromoji_assets/naptar.png",
        "🌶": "hungaromoji_assets/szegedipaprika.png",
        "☕": "hungaromoji_assets/bogre.png",
        "🚥": "hungaromoji_assets/trafficlightvertical.png",
        "🚍": "hungaromoji_assets/indulocredoeconell12.png",
        "🚘": "hungaromoji_assets/indulosuzukiscross.png",
        "⏩": "hungaromoji_assets/fastforward.png",
        "⏪": "hungaromoji_assets/fastrewind.png",
        "↕️": "hungaromoji_assets/updownarrow.png",
        "↔️": "hungaromoji_assets/leftrightarrow.png",
        "↙️": "hungaromoji_assets/arrowdownleft.png",
        "↘️": "hungaromoji_assets/arrowdownright.png",
        "↖️": "hungaromoji_assets/arrowupleft.png",
        "↗️": "hungaromoji_assets/arrowupright.png",
        "▶️": "hungaromoji_assets/play.png",
        "🚔": "hungaromoji_assets/indulorendorauto.png",
        "🚖": "hungaromoji_assets/indulotaxi.png",
        "🚕": "hungaromoji_assets/taxi.png",
        "🚊": "hungaromoji_assets/tatravillamos.png",
        "🚃": "hungaromoji_assets/vasutikocsi.png",
        "🏎️": "hungaromoji_assets/mclarenf1.png",
        "💦": "hungaromoji_assets/cseppek.png",
        "🩸": "hungaromoji_assets/ver.png",
        "💔": "hungaromoji_assets/brokenheart.png",
        "💙": "hungaromoji_assets/heartblue.png",
        "💛": "hungaromoji_assets/heartyellow.png",
        "🖤": "hungaromoji_assets/heartblack.png",
        "🤍": "hungaromoji_assets/heartwhite.png",
        "🤎": "hungaromoji_assets/heartbrown.png",
        "💚": "hungaromoji_assets/heartgreen.png",
        "💜": "hungaromoji_assets/heartpurple.png",
        "🚑": "hungaromoji_assets/mentoauto.png",
        "🚒": "hungaromoji_assets/tuzoltoauto.png",
        "🧑‍🎓": "hungaromoji_assets/student.png",
        "🇶🇦": "hungaromoji_assets/qatar.png",
        "🇩🇪": "hungaromoji_assets/germany.png",
        "🧑🏻": "hungaromoji_assets/felnott2.png",
        "🧑🏼": "hungaromoji_assets/felnott3.png",
        "🧑🏽": "hungaromoji_assets/felnott4.png",
        "🧑🏾": "hungaromoji_assets/felnott5.png",
        "🧑🏿": "hungaromoji_assets/felnott6.png",
        "🚽": "hungaromoji_assets/toilet.png",
        "🌵": "hungaromoji_assets/cactus.png",
        "🧑‍💻": "hungaromoji_assets/developer.png",
        "🎃": "hungaromoji_assets/pumpkin.png",
        "◀️": "hungaromoji_assets/playback.png",
        "🪼": "hungaromoji_assets/jellyfish.png",
        "😁": "hungaromoji_assets/allsmile.png",
        "❗": "hungaromoji_assets/exclamation.png",
        "❓": "hungaromoji_assets/question.png",
        "🌸": "hungaromoji_assets/flower.png",
        "urbanmove8:idióta": "hungaromoji_assets/1418694146486702121.webp",
        "😜": "hungaromoji_assets/winkingface.png",
        "🚆": "hungaromoji_assets/bzmot.png",
        "📂": "hungaromoji_assets/mappa.png",
        "🤭": "hungaromoji_assets/handovermouth.png",
        "🙂‍↕️": "hungaromoji_assets/nodvertical.png",
        "🤨": "hungaromoji_assets/suspicious.png",
        "😢": "hungaromoji_assets/tear.png",
        "🚎": "hungaromoji_assets/solaristrollino12trolibusz.png",
        "🪦": "hungaromoji_assets/s%C3%ADrhely.png",
        "🤣": "hungaromoji_assets/rofl.png",
        "🚞": "hungaromoji_assets/budapestifogaskerekuvasut.png",
        "🚄": "hungaromoji_assets/stadlerflirt.png",
        "🍰": "hungaromoji_assets/dobostorta.png",
        "🍪": "hungaromoji_assets/pilotakeksz.png",
        "🍞": "hungaromoji_assets/magyarokkenyere.png",
        "🧛": "hungaromoji_assets/felnottkisvampir.png",
        "🚈": "hungaromoji_assets/hev.png",
        "🚏": "hungaromoji_assets/buszmeg%C3%A1llokresz.png",
        "🛣️": "hungaromoji_assets/m7esautopalya.png",
        "😉": "hungaromoji_assets/kacsintosarc.png",
        "🫩": "hungaromoji_assets/faradtarctaskasszemekkel.png",
        "🛳": "hungaromoji_assets/hajo.png",
        "🦜": "hungaromoji_assets/hullamospapagajok.png",
        "🐟": "hungaromoji_assets/jaszkeszeg.png",
        "🍬": "hungaromoji_assets/negrocukor.png",
        "⛽": "hungaromoji_assets/benzinkut.png",
        "🔌": "hungaromoji_assets/europlug.png",
        "💁": "hungaromoji_assets/nyitotttenyeruember.png",
        "💁‍♀️": "hungaromoji_assets/nyitotttenyeruno.png",
        "🤬": "hungaromoji_assets/furiouswithcensorbar.png",
        "🫢": "hungaromoji_assets/handovermouth.png",
        "👩‍💼": "hungaromoji_assets/noiirodista.png",
        "🚣": "hungaromoji_assets/kishajozofelnott.png",
        "🤳": "hungaromoji_assets/selfie.png",
        "🧑‍🎄": "hungaromoji_assets/felnottmikulas.png",
        "🚶‍➡️": "hungaromoji_assets/personwalkingright.png",
        "🏃‍➡️": "hungaromoji_assets/personrunningright.png",
        "🧍": "hungaromoji_assets/allofelnott.png",
        "🧑‍🦯": "hungaromoji_assets/setalofelnottfeherbottal.png",
        "🧑‍🦯‍➡️": "hungaromoji_assets/setalofelnottfeherbottalright.png",
        "🧑‍❤️‍👩": "hungaromoji_assets/felnottesnoszerelmespar.png",
        "👩‍❤️‍🧑": "hungaromoji_assets/noesfelnottszerelmespar.png",
        "🧑‍👩": "hungaromoji_assets/felnottesno.png",
        "🤕": "hungaromoji_assets/hurt.png",
        "🍀": "hungaromoji_assets/lucky.png",
        "💯": "hungaromoji_assets/hundred.png",
        "👿": "hungaromoji_assets/imp.png",
        "😑": "hungaromoji_assets/sigh.png",
        "🪏": "hungaromoji_assets/shovel.png",
        "😮‍💨": "hungaromoji_assets/relief.png",
        "😔": "hungaromoji_assets/pensive.png",
        "😒": "hungaromoji_assets/bummed.png",
        "🤤": "hungaromoji_assets/drooling.png",
        "🙂‍↔️": "hungaromoji_assets/nodhorizontal.png",
        "🙎🏻": "hungaromoji_assets/duzzogoemberfeherbor.png",
        "👑": "hungaromoji_assets/szentkorona.png",
        "🗑️": "hungaromoji_assets/magyarkuka.png",
        "🦢": "hungaromoji_assets/hattyu.png",
        "🦆": "hungaromoji_assets/vadkacsak.png",
        "⏸️": "hungaromoji_assets/pause.png",
        "👮": "hungaromoji_assets/rendor_rendorno.png",
        "🧑‍✈️": "hungaromoji_assets/pilota_pilotano.png",
        "🕶️": "hungaromoji_assets/napszemuveg.png",
        "🚲": "hungaromoji_assets/bicikli.png",
        "👕": "hungaromoji_assets/ferfipolo.png",
        "🎫": "hungaromoji_assets/mozijegy.png",
        "🖐🏻": "hungaromoji_assets/kez.png",
        "🖐🏼": "hungaromoji_assets/kez2.png",
        "🖐🏽": "hungaromoji_assets/kez3.png",
        "🖐🏾": "hungaromoji_assets/kez4.png",
        "🖐🏿": "hungaromoji_assets/kez5.png",
        "✋🏻": "hungaromoji_assets/tenyer.png",
        "✋🏼": "hungaromoji_assets/tenyer2.png",
        "✋🏽": "hungaromoji_assets/tenyer3.png",
        "✋🏾": "hungaromoji_assets/tenyer4.png",
        "✋🏿": "hungaromoji_assets/tenyer5.png",
        "🌲": "hungaromoji_assets/tree.png",
        "🎵": "hungaromoji_assets/ti-ti.png",
        "🎶": "hungaromoji_assets/kottak.png",
        "🎼": "hungaromoji_assets/violinkulcs.png",
        "♀️": "hungaromoji_assets/nonem.png",
        "♂️": "hungaromoji_assets/ferfinem.png",
        "💣": "hungaromoji_assets/bomba.png",
        "🎲": "hungaromoji_assets/dobokocka.png",
        "📥": "hungaromoji_assets/Download.png",
        "📤": "hungaromoji_assets/Load.png",
        "🕴️": "hungaromoji_assets/maninbusinesssuitlevitating.png",
        "🤦": "hungaromoji_assets/archozszoritottkez.png",
        "🕵️": "hungaromoji_assets/persondetective.png",
        "🥔": "hungaromoji_assets/burgonya.png",
        "🍆": "hungaromoji_assets/padlizs%C3%A1n_(NEHASZNALD_NSFWKENT!!).png",
        "🕴": "hungaromoji_assets/maninbusinesssuitlevitating.png",

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
