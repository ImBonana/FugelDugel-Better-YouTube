setInterval(() => {
    replaceText(document.body)
    function replaceText(element) {
        if (element.hasChildNodes()) {
            element.childNodes.forEach(replaceText)
            } else if (element.nodeType === Text.TEXT_NODE) {
                //emoji 1
                if (element.textContent.match(/;smart/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;smart)/gi,
                    '<img class="Emote_emote__1" src="https://cdn.betterttv.net/emote/5acdc7cb31ca5d147369ead8/1x" alt=";smart">')
                    element.replaceWith(newElement)
                } //End
                //emoji 2
                if (element.textContent.match(/;laugh/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;laugh)/gi,
                    '<img class="Emote_emote__2" src="https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/1x" alt=";laugh">')
                    element.replaceWith(newElement)
                } //End
                //emoji 3
                if (element.textContent.match(/;pogu/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pogu)/gi,
                    '<img class="Emote_emote__3" src="https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/1x" alt=";pogu">')
                    element.replaceWith(newElement)
                } //End
                //emoji 4
                if (element.textContent.match(/;pepel/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pepel)/gi,
                    '<img class="Emote_emote__4" src="https://cdn.betterttv.net/emote/5d324913ff6ed36801311fd2/1x" alt=";pepel">')
                    element.replaceWith(newElement)
                } //End
                //emoji 5
                if (element.textContent.match(/;ph/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;ph)/gi,
                    '<img class="Emote_emote__5" src="https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/1x" alt=";ph">')
                    element.replaceWith(newElement)
                } //End
                //emoji 6
                if (element.textContent.match(/;wow/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;wow)/gi,
                    '<img class="Emote_emote__6" src="https://cdn.betterttv.net/emote/5aea37908f767c42ce1e0293/1x" alt=";wow">')
                    element.replaceWith(newElement)
                } //End
                //emoji 7
                if (element.textContent.match(/;f/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;f)/gi,
                    '<img class="Emote_emote__7" src="https://cdn.betterttv.net/emote/5c857788f779543bcdf37124/1x" alt=";f">')
                    element.replaceWith(newElement)
                } //End
                //emoji 8
                if (element.textContent.match(/;simp/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;simp)/gi,
                    '<img class="Emote_emote__8" src="https://cdn.betterttv.net/emote/5e3a2c6cd736527d5cd26836/1x" alt=";simp">')
                    element.replaceWith(newElement)
                } //End
                //emoji 9
                if (element.textContent.match(/;pgr/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pgr)/gi,
                    '<img class="Emote_emote__9" src="https://cdn.betterttv.net/emote/58f6e05e58f5dd226a16166e/1x" alt=";pgr">')
                    element.replaceWith(newElement)
                } //End
                //emoji 10
                if (element.textContent.match(/;pa/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pa)/gi,
                    '<img class="Emote_emote__10" src="https://cdn.betterttv.net/emote/5db4816f8b059b723dc1a58d/1x" alt=";pa">')
                    element.replaceWith(newElement)
                } //End
                //emoji 11
                if (element.textContent.match(/;pga/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pga)/gi,
                    '<img class="Emote_emote__11" src="https://cdn.betterttv.net/emote/59c232aeb27c823d5b1fa579/1x" alt=";pga">')
                    element.replaceWith(newElement)
                } //End
                //emoji 12
                if (element.textContent.match(/;pt/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pt)/gi,
                    '<img class="Emote_emote__12" src="https://cdn.betterttv.net/emote/5f2e77591ab9be446c4e8d9b/1x" alt=";pt">')
                    element.replaceWith(newElement)
                } //End
                //emoji 13
                if (element.textContent.match(/;pnoob/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pnoob)/gi,
                    '<img class="Emote_emote__13" src="https://cdn.betterttv.net/emote/5e8b86328fb1ca5cde5866b5/1x" alt=";pnoob">')
                    element.replaceWith(newElement)
                } //End
                //emoji 14
                if (element.textContent.match(/;pgu/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pgu)/gi,
                    '<img class="Emote_emote__14" src="https://cdn.betterttv.net/emote/5e774ccfd112fc372574d6a1/1x" alt=";pgu">')
                    element.replaceWith(newElement)
                } //End
                //emoji 15
                if (element.textContent.match(/;ef/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;ef)/gi,
                    '<img class="Emote_emote__15" src="https://cdn.betterttv.net/emote/5d76c43abd340415e9f32fb1/1x" alt=";ef">')
                    element.replaceWith(newElement)
                } //End
                //emoji 16
                if (element.textContent.match(/;loading/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;loading)/gi,
                    '<img class="Emote_emote__16" src="https://cdn.betterttv.net/emote/5db72e15b537d747e37a8e07/1x" alt=";loading">')
                    element.replaceWith(newElement)
                } //End
                //emoji 17
                if (element.textContent.match(/;cpd/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;cpd)/gi,
                    '<img class="Emote_emote__17" src="https://cdn.betterttv.net/emote/5723e5f2ece3853a0adb03d2/1x" alt=";cpd">')
                    element.replaceWith(newElement)
                } //End
                //emoji 18
                if (element.textContent.match(/;sb/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;sb)/gi,
                    '<img class="Emote_emote__18" src="https://cdn.betterttv.net/emote/5f2d7f1dfe85fb4472d24d05/1x" alt=";sb">')
                    element.replaceWith(newElement)
                } //End
                //emoji 19
                if (element.textContent.match(/;psit/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;psit)/gi,
                    '<img class="Emote_emote__19" src="https://cdn.betterttv.net/emote/5d7abbaa1df66f68c80bf105/1x" alt=";psit">')
                    element.replaceWith(newElement)
                } //End
                //emoji 20
                if (element.textContent.match(/;pp/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pp)/gi,
                    '<img class="Emote_emote__20" src="https://cdn.betterttv.net/emote/5a8b59f6a0b6793a31509f6f/1x" alt=";pp">')
                    element.replaceWith(newElement)
                } //End
                //emoji 21
                if (element.textContent.match(/;pnt/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pnt)/gi,
                    '<img class="Emote_emote__21" src="https://cdn.betterttv.net/emote/5e37903f61ff6b51e652837c/1x" alt=";pnt">')
                    element.replaceWith(newElement)
                } //End

                //emoji 22
                if (element.textContent.match(/;pjedi/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pjedi)/gi,
                    '<img class="Emote_emote__22" src="https://cdn.betterttv.net/emote/5b52e96eb4276d0be256f809/1x" alt=";pjedi">')
                    element.replaceWith(newElement)
                } //End
                
                //emoji 23
                if (element.textContent.match(/;bwop/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;bwop)/gi,
                    '<img class="Emote_emote__23" src="https://cdn.betterttv.net/emote/5fb6d395c242076f1a04d83e/1x" alt=";bwop">')
                    element.replaceWith(newElement)
                } //End

                //emoji 24
                if (element.textContent.match(/;hype/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;hype)/gi,
                    '<img class="Emote_emote__24" src="https://cdn.betterttv.net/emote/5bc455a4b877251670e37f5b/1x" alt=";hype">')
                    element.replaceWith(newElement)
                } //End

                //emoji 25
                if (element.textContent.match(/;pdog/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pdog)/gi,
                    '<img class="Emote_emote__25" src="https://cdn.betterttv.net/emote/5ec4d6f8f54be95e2a826a2a/1x" alt=";pdog">')
                    element.replaceWith(newElement)
                } //End

                //emoji 26
                if (element.textContent.match(/;br/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;br)/gi,
                    '<img class="Emote_emote__26" src="https://cdn.betterttv.net/emote/5ffd61055303dc315cbc3aae/1x" alt=";br">')
                    element.replaceWith(newElement)
                } //End

                //emoji 27
                if (element.textContent.match(/;pls/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;pls)/gi,
                    '<img class="Emote_emote__27" src="https://cdn.betterttv.net/emote/5ffc93255303dc315cbc2c44/1x" alt=";pls">')
                    element.replaceWith(newElement)
                } //End

               //emoji 28
                if (element.textContent.match(/;iloveu/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;iloveu)/gi,
                    '<img class="Emote_emote__28" src="https://cdn.betterttv.net/emote/5ca7591926dfd77429327bb6/1x" alt=";iloveu">')
                    element.replaceWith(newElement)
                } //End

                //emoji 29
                if (element.textContent.match(/;hacks/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;hacks)/gi,
                    '<img class="Emote_emote__29" src="https://cdn.betterttv.net/emote/569c12df74e294571e59fded/1x" alt=";hacks">')
                    element.replaceWith(newElement)
                } //End

                //emoji 30
                if (element.textContent.match(/;gg/gi)) {
                    const newElement = document.createElement('span')
                    newElement.innerHTML = element.textContent.replace(/(;gg)/gi,
                    '<img class="Emote_emote__30" src="https://cdn.betterttv.net/emote/5b17135d1e360065b92a9d59/1x" alt=";gg">')
                    element.replaceWith(newElement)
                } //End 
            }
        }
}, 1)