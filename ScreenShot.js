//説明文


const Chromy = require('chromy')

const path = require('path')
const fs = require('fs')



async function main () {
  
  let c = new Chromy({visible:true})
  
  
  c.chain()
      .goto('file://' + path.join(__dirname, '/pages/index.html'))
      .screenshot()
      .result((png) => {
        fs.writeFileSync('out.png', png)
      })
      .screenshotSelector('form')
      .result((png) => {
        fs.writeFileSync('out_form.png', png)
      })
      .screenshotDocument() // take screenshot of whole document
      .result((png) => {
        fs.writeFileSync('out_doc.png', png)
      })
      .pdf()
      .result((pdf) => {
        fs.writeFileSync('out.pdf', pdf)
      })
      .end()
      .then(_ => chromy.close())
      .catch(e => {
        console.log(e)
        chromy.close()
})


axxa
ep0:grand opening encounter
..encounter
..fusion
..the lunatic
..

