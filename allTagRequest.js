//引数=に案件IDを入力して実行すると、対象案件に全種類（オプション含む）タグを作成するスクリプト
const id=process.argv[2]

var user='us000439tfe'




const Chromy = require('chromy')

async function main () {
  
  
  let c = new Chromy({visible:true})
  
  
  //login
  await c.goto('https://img-test.macromill.com/imp/'+user+'/4004012000-img-f2')
  
  
  await c.waitLoadEvent()
  await c.goto('https://img-test.macromill.com/imp/'+user+'/4004012013-mov-53')
  
  
  await c.waitLoadEvent()

  
  
  await c.close()
  
  console.log('END');
  
}

main()




