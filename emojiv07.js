(function() {
    // Hungaromoji v0.7
    // Copyright © 2023–2025 Urbanmove 8 Qatar Sole Prop.
    // Emoji assets © Penguinmod.com. All rights reserved.
    // Some book excerpts © Móra Könyvkiadó and feketeistvan.hu. Minden jog fenntartva.
    // OMSZ logo © Wikimedia.org. All rights reserved.
    // Budapest Metro logo assets © Budapesti Közlekedési Központ Zrt. Minden jog fenntartva.
    // 100 Hungarian Forints image © Magyar Nemzeti Bank. Minden jog fenntartva.
    
    //Copyright 2025 Urbanmove 8

    //Licensed under the Apache License, Version 2.0 (the "License");
    //you may not use this file except in compliance with the License.
    //You may obtain a copy of the License at
    
        //http://www.apache.org/licenses/LICENSE-2.0
    
    //Unless required by applicable law or agreed to in writing, software
    //distributed under the License is distributed on an "AS IS" BASIS,
    //WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    //See the License for the specific language governing permissions and
    //limitations under the License.
  
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
        "🚗": "https://library.penguinmod.com/files/emojis/car.png",
        "🤓": "https://library.penguinmod.com/files/emojis/nerd.png",
        "👉": "https://library.penguinmod.com/files/emojis/pointright.png",
        "👈": "https://library.penguinmod.com/files/emojis/pointleft.png",
        "👇": "https://library.penguinmod.com/files/emojis/pointdown.png",
        "🫵": "https://library.penguinmod.com/files/emojis/pointatyou.png",
        "☝️": "https://library.penguinmod.com/files/emojis/pointup.png",
        "🗿": "https://library.penguinmod.com/files/emojis/moai.png",
        "📱": "https://library.penguinmod.com/files/emojis/phone.png",
        "🪙": "https://urbanmove8.neocities.org/kekhegy/kepek/100-forintos.png",
        "🌉": "https://urbanmove8.neocities.org/kekhegy/kepek/lanchid.png",
        "📗": "https://www.feketeistvan.hu/wp-content/uploads/2024/07/konyborito_mora_tuskevar.png",
        "📙": "https://mora.hu/content/2021/3/Product/fekete_istvan_vuk.png",
        "📕": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Egricsillagok.jpg",
        "🙂": "https://library.penguinmod.com/files/emojis/smile.png",
        "🤡": "https://library.penguinmod.com/files/emojis/clown.png",
        "🤑": "https://library.penguinmod.com/files/emojis/eyesofmoney.png",
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
        "‍⚕️": "https://upload.wikimedia.org/wikipedia/commons/3/34/Insignia_Hungary_OMSZ_v1.svg",
        "🤷": "https://library.penguinmod.com/files/emojis/idk.png",
        "🍫": "https://urbanmove8.neocities.org/kekhegy/kepek/sportcsoki.png",
        "🔞": "https://urbanmove8.neocities.org/kekhegy/kepek/18plusz.png",
        "🚌": "https://urbanmove8.neocities.org/kekhegy/kepek/ikarus260.png",
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
        //"😟": "https://library.penguinmod.com/files/emojis/sad.png",
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
        "🫤": "https://library.penguinmod.com/files/emojis/meh.png"
    };

    function walk(node) {
        let child, next;
        switch (node.nodeType) {
            case 1:
            case 9:
            case 11:
                child = node.firstChild;
                while (child) {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
            case 3:
                replaceInTextNode(node);
                break;
        }
    }

    function replaceInTextNode(textNode) {
        const parent = textNode.parentNode;
        let text = textNode.nodeValue;
        const pattern = new RegExp(Object.keys(emojiMap).join('|'), 'g');
        if (pattern.test(text)) {
            const newHTML = text.replace(pattern, (match) =>
                `<img src="${emojiMap[match]}" style="width:1em; height:1em; vertical-align:middle;">`);
            const span = document.createElement('span');
            span.innerHTML = newHTML;
            while (span.firstChild) {
                parent.insertBefore(span.firstChild, textNode);
            }
            parent.removeChild(textNode);
        }
    }

    // Run emoji replacer once on page load
    walk(document.body);

    // Re-run when DOM changes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            for (const node of mutation.addedNodes) {
                walk(node);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
