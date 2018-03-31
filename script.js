//説明文


const Chromy = require('chromy')

var mail='lognos.dev@macromill.com'
const pass='Testadmin-01'

async function main () {
  
  let c = new Chromy({visible:true})
  
  await c.clearAllCookies()
  
  await c.evaluate(() => {
        window.open('http://img.adplat-dev.lognos.com/myp/3000001')
        alert('OK')
      })
  
  await c.goto('chrome://settings/content/cookies')
  
  await c.sleep(1000)
  await c.click('paper-toggle-button[id=control]')
  //await c.click('[id=toggleButton]')
  
  
  await c.sleep(10000)
  await c.close()
  console.log('END');
  
}

main()




  /*
  await chromy.type('input[id="ContractsManageContractIdentity"]',id) //検索ID入力
  await chromy.click('a[class="inline-btn submit_btn_enable"]') //検索ボタン押下
  await chromy.click('td[title="cookieTest017_SmartPhone_iOS_Safari"]>a>span[class="white_space_pre"]')
  */
  
  //href="/admin/tag_informations?p%5Bcontract_id%5D=8192"
  //await chromy.click('a[href="/admin/url_aggregates/add"]')
  //await chromy.click('a[data-tag-type="1"]')
  //await chromy.click('[id=tagTypeGroup1]')
  //document.getElementsByClassName(submit_btn_enable select_tag_btn)