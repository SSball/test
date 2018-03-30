const Chromy = require('chromy')

let chromy = new Chromy()
chromy.chain()
      .blockUrls(['*.ttf', '*.gif', '*.png', '*.jpg', '*.jpeg', '*.webp'])
      .goto('https://shop.polymer-project.org/list/mens_outerwear')
      .console(m => console.log(m))
      .wait(_ => {
        let app = document.body.querySelector('shop-app')
        if (app === null ||  app.shadowRoot === null) return false
        let list = app.shadowRoot.querySelector('shop-list')
        if (list === null || list.shadowRoot === null) return false
        let item = list.shadowRoot.querySelector('shop-list-item')
        if (item === null || item.shadowRoot === null) return false
        return item.shadowRoot.querySelector('.title').innerText.length > 0
      })
      .evaluate(_ => {
        let results = []
        let app = document.body.querySelector('shop-app')
        let list = app.shadowRoot.querySelector('shop-list')
        let items = list.shadowRoot.querySelectorAll('shop-list-item')
        items.forEach(item => {
          let root = item.shadowRoot
          let title = root.querySelector('.title').innerText
          let price = root.querySelector('.price').innerText
          results.push({title, price})
        })
        return results
      })
      .result(items => {
        items.forEach(item => {
          console.log(item)
        })
      })
      .end()
      .catch(e => console.log(e))
      .then(_ => chromy.close())