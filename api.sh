
#実施環境
env="-stg" #dev:".adplat-dev" STG:"-stg"

#全共通
key="v9L7kHdTfhvsID0o3QCOXmmTF0tUjQ55"
secret="0rcAYg4enPxV3NjWEMLCZX5ExP87Gecg"
api="API-001"
start_date="&from=2017-06-22"
end_date="&to=2018-01-28"



#API001,002なら「&prj_id=(対象の案件ID)」 API003なら「&sync_id=(対象のsyncID)」 API004,005なら「&dashboard_id=(対象のダッシュボードID)」 API006なら「$file_id=(対象のファイルID)」 これらはrequestの結果から確認できる
target_id="&prj_id=308662"
#target_id="&sync_id=1"
#target_id="&dashboard_id=78ciClLI47djjKFfBG32W7YqhRTU2PElORFhUpJC53k%3D"
#target_id="&file_id=cd8erw35CBrNOIN5hdw74ZK2yXkSdo72nrnzz1Gpois%3D"

#API-001,002の場合に入力
type="&type=1"
user_agent="&user_agent=0"
base_type="&base_type=1"

#API-001,002,003の場合は""にしておく
#API-004,005の場合に入力
parameter_format=""
dashboard_type=""



if [ ! $api = "API-001" ] && [ ! $api = "API-002" ]; then
  sync_id=""
  type=""
  user_agent=""
  base_type=""
fi

if [ ! $api = "API-004" ] && [ ! $api = "API-005" ]; then
  parameter_format=""
  dashboard_type=""
fi



c=$(curl -H "Content-Type: application/x-www-form-urlencoded" -X POST http://api"$env".lognos.com/v1/token -d "grant_type=client_credentials&client_id="$key"&client_secret="$secret"" -i)
echo ${c}
token=${c}

access_token=$(echo "$c" | grep -e '"access_token":.*,' -o)
access_token_cut=$(echo "$c" | grep -e '","refresh_token":.*,' -o)

access_token=$(echo ${access_token} | sed -e "s/${access_token_cut}//")
access_token=$(echo ${access_token} | sed -e "s/\"access_token\":\"//")

echo -e "\\n\\n----token created----\\n"

c=$(curl -H "Authorization: Bearer "$access_token"" -X GET http://api"$env".lognos.com/v1/search?app_id="$api""$start_date""$end_date""$type" -i)
echo ${c}
search=${c}

echo -e "\\n\\n----search finished----\\n"

c=$(curl -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Bearer "$access_token"" -H "Accept-Language: ja" -X POST "http://api"$env".lognos.com/v1/request" -d "app_id="$api""$start_date""$end_date""$user_agent""$base_type""$parameter_format""$target_id""$dashboard_type"" -i)
echo ${c}
request=${c}

request_id=$(echo "$c" | grep -e '"request_id":.*,' -o)

request_id=$(echo ${request_id} | sed -e "s/\"request_id\":\"//")
request_id=$(echo ${request_id} | sed -e "s/\",//")
request_id="?&request_id=""$request_id"

echo -e "\\n\\n----request finished----\\n"

key=""
while ["$key" = ""]
do
 c=$(curl -H "Authorization: Bearer "$access_token""  -H "Accept-Language: ja" -X GET "http://api"$env".lognos.com/v1/status"$request_id"" -i)
 key=$(echo ${c} | grep -e '"status":"3"')
 echo "$c"
 
 if [ "$key" = "" ]; then
 sleep 15s
 fi
done

echo ${c}
status=${c}

result_id=$(echo "$c" | grep -e '"result_id":.*,' -o)

result_id=$(echo ${result_id} | sed -e "s/\"result_id\":\"//")
result_id=$(echo ${result_id} | sed -e "s/\",//")
result_id="&result_id=""$result_id"


echo -e "\\n\\n----status finished----\\n"

request_id=$(echo ${request_id} | sed -e "s/&//")
c=$(curl -H "Authorization: Bearer "$access_token"" -X GET "http://api"$env".lognos.com/v1/result"$request_id""$result_id"" -i)
result=${c}

echo [[token]]
echo ${token}
echo [[search]]
echo ${search}
echo [[request]]
echo ${request}
echo [[status]]
echo ${status}
echo [[result]]
echo ${result}
echo [[end]]





