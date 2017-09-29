<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>




<?php

try{

	$staff_code = htmlspecialchars($staff_code,ENT_QUOTES,'UTF-8');

	$sql = 'delete from mst_staff where code=' . $staff_code ;

	DB::delete($sql);


}catch (Exception $e){
	print 'ただいま障害により利用できません。ご迷惑おかけします。';
	exit();
}

?>


削除しました。
<br>
<br>

<a href="staff_list">戻る</a>

</body>
</html>
