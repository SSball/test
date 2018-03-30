//引数=に案件IDを入力して実行すると、対象案件に全種類（オプション含む）タグを作成するスクリプト
const id=process.argv[2]

var mail='noda_c@macromill.com'
const pass='noda-444' //dmi:111 mm:444


const Chromy = require('chromy')

async function main () {
  
  
  let c = new Chromy({visible:true})
  
  
  //login
  await c.goto('https://adplat-stg-console.lognos.com/accounts/login')
  await c.type('[id=AccountEmail]', mail)
  await c.type('[id=AccountPassword]',pass)
  await c.click('[id=login]')
  
  
  await c.waitLoadEvent()
  await c.goto('https://adplat-stg-console.lognos.com/admin/tag_informations?p%5Bcontract_id%5D='+id)
  
  
  //静止画タグ発行
  await c.click('[id=tagPublish_image]')
  await c.waitLoadEvent()
  await c.type('[id=TagInformationsPublishImageAdvertisementName]',"testImg")
  await c.type('[id=TagInformationsPublishImageTagName]',"testImg")
  await c.type('[id=cal_3]',"2018/01/01")
  await c.type('[id=cal_4]',"2018/01/31")
  await c.click('[id="TagInformationsPublishImageClickMeasureType2"]')
  
  await c.click('[id="submit_confirm_btn"]')
  await c.waitLoadEvent()
  await c.click('[id="submit_regist_btn"]')
  await c.waitLoadEvent()
  await c.click('a[href="/admin/tag_informations?p%5Bcontract_id%5D='+id+'"]')
  await c.waitLoadEvent()
  
  
  //動画タグ発行
  await c.click('[id=tagPublish_movie]')
  await c.waitLoadEvent()
  await c.type('[id=TagInformationsPublishMovieAdvertisementName]',"testMovie")
  await c.type('[id=TagInformationsPublishMovieTagName]',"testMovie")
  await c.type('[id=cal_3]',"2018/01/01")
  await c.type('[id=cal_4]',"2018/01/31")
  await c.click('[id="TagInformationsPublishMovieClickMeasureType2"]')
  await c.click('[id="TagInformationsPublishMovieOptionTag0"]')
  await c.click('[id="TagInformationsPublishMovieOptionTag25"]')
  await c.click('[id="TagInformationsPublishMovieOptionTag50"]')
  await c.click('[id="TagInformationsPublishMovieOptionTag75"]')
  await c.click('[id="TagInformationsPublishMovieOptionTag100"]')
  await c.click('[id="TagInformationsPublishMovieOptionTagCtp"]')
  await c.click('[id="TagInformationsPublishMovieOptionTagSkp"]')
  await c.click('[id="TagInformationsPublishImageClickMeasureType2"]')
  
  await c.click('[id="submit_confirm_btn"]')
  await c.waitLoadEvent()
  await c.click('[id="submit_regist_btn"]')
  await c.waitLoadEvent()
  await c.click('a[href="/admin/tag_informations?p%5Bcontract_id%5D='+id+'"]')
  await c.waitLoadEvent()
  
  
  //Webサイト
  await c.click('[id="tagPublish_web"]')
  await c.waitLoadEvent()
  
  await c.type('[id=TagInformationsPublishMovieWebsiteName]',"testWeb")
  await c.type('[id=TagInformationsPublishMovieTagName]',"testWeb")
  await c.type('[id=TagInformationsPublishMovieInstallationUrl]',"testwebsite.com")
  await c.type('[id=cal_3]',"2018/01/01")
  await c.type('[id=cal_4]',"2018/01/31")
  
  await c.click('[id="submit_confirm_btn"]')
  await c.waitLoadEvent()
  await c.click('[id="submit_regist_btn"]')
  await c.waitLoadEvent()
  await c.click('a[href="/admin/tag_informations?p%5Bcontract_id%5D='+id+'"]')
  await c.waitLoadEvent()
  
  
  //滞在
  await c.click('[id="tagPublish_visit"]')
  await c.waitLoadEvent()
  
  await c.type('[id=TagInformationsPublishVisitAdvertisementName]',"testVis")
  await c.type('[id=TagInformationsPublishVisitTagName]',"testVis")
  await c.type('[id=cal_3]',"2018/01/01")
  await c.type('[id=cal_4]',"2018/01/31")
  
  await c.click('[id="submit_confirm_btn"]')
  await c.waitLoadEvent()
  await c.click('[id="submit_regist_btn"]')
  await c.waitLoadEvent()
  await c.click('a[href="/admin/tag_informations?p%5Bcontract_id%5D='+id+'"]')
  await c.waitLoadEvent()
  
  
  await c.close()
  
  console.log('END');
  
}

main()




