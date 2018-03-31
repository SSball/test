//引数=にクライアントIDを入力すると、AからBまでのナンバリング付きでダッシュボードと付随するリーチデータソースを作成する
const id=process.argv[2] //クライアントID
var noFrom=process.argv[3] //
var noTo=process.argv[4] //

var noFrom=parseInt(noFrom)
var noTo=parseInt(noTo)

const mail='lognos.dev@macromill.com'
const pass='Testadmin-01'


const Chromy = require('chromy')

async function main () {
  
  
  let c = new Chromy({visible:true})
  
  
  //login
  await c.goto('https://adplat-dev-console.lognos.com/accounts/login')
  await c.type('[id=AccountEmail]', mail)
  await c.type('[id=AccountPassword]',pass)
  await c.click('[id=login]')

  await c.waitLoadEvent()
  
  while(noFrom<=noTo){
  
  console.log(noFrom)
  
  //登録処理  
  await c.goto('https://adplat-dev-console.lognos.com/admin/dashboard_manage/edit?p%5Bclient_id%5D=4324&p%5Bdashboard_id%5D=134')
  
  await c.click('[id="btnReach"]')
  await c.waitLoadEvent()

  await c.type('[id=DashboardReachDatasourceFormDatasourceName]',"test_node_reach")
  
  await c.click('[id="SelectContractsTable"]>tbody>tr>td>div>table>tbody>tr>td>input[class="list_check contract_list"]')
  await c.check('[id="SelectTagsTable"]>tbody>tr>td>div>table>tbody>tr>td>input[class="list_check"]')
  await c.select('[id="reach_estimation_monitor_data_month"]','2017/12/01')
  
  await c.click('[id="confirm_submit_btn_enable"]')
  await c.waitLoadEvent()
  noFrom++;
  }
  
  
  console.log(noFrom<=noTo);
  console.log(noFrom);
  console.log(noTo);
  console.log('END');
  await c.close()
  
}

main()




