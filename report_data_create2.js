//引数=にクライアントIDを入力すると、AからBまでのナンバリング付きでダッシュボードと付随するリーチデータソースを作成する
const id=process.argv[2] //クライアントID
var noFrom=process.argv[3] //
var noTo=process.argv[4] //

var mail='lognos.dev@macromill.com'
const pass='Testadmin-01'


const Chromy = require('chromy')

async function main () {
  
  
  let c = new Chromy({visible:true})
  
  
  //login
  await c.goto('https://adplat-dev-console.lognos.com/accounts/login')
  await c.type('[id=AccountEmail]', mail)
  await c.type('[id=AccountPassword]',pass)
  await c.click('[id=login]')


  //登録処理
  await c.waitLoadEvent()
  await c.goto('https://adplat-dev-console.lognos.com/admin/dashboard_manage?p%5Bclient_id%5D='+id)
  
  await c.waitLoadEvent()
  await c.click('[id="tablefix2">tbody>tr[data-dashboard-id="139"]>td>a')
  await c.click('[id="DashboardListSection"]>div[data-dashboard-id="51"]>div[data-report-type="2"]>img')
  await c.waitLoadEvent()
  
  await c.type('[id=report_name]',"test_node_profile")
  await c.select('[id=date_time_aggregation_period_from]',"2018/03/01")
  await c.select('[id=date_time_aggregation_period_to]',"2019/03/01")
  
  await c.click('[id="select_tag_img"]')
  await c.click('[id="ReportDetailInfo"]>div[class="split_box m_side-20"]>div>table>tbody>tr>td>div>table>tbody>tr>td>input[class="list_check"]')
  await c.click('[id="tagSettingFirst"]>td>span>a>img')
  await c.click('[id="Confirm"]')
    
  console.log('END');
  
}

main()




