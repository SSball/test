<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>

<?php

try{

	$staff_name = htmlspecialchars($staff_name,ENT_QUOTES,'UTF-8');
	$staff_pass = htmlspecialchars($staff_pass,ENT_QUOTES,'UTF-8');

	$sql = 'insert into mst_staff (name, password) values ("' . $staff_name . '","' . $staff_pass . '");' ;

	DB::insert($sql);


	print $staff_name;
	print ' さんを追加しました。 <br>';
	print '<a href="staff_list">戻る</a>';


}catch (Exception $e){
	print 'ただいま障害により利用できません。ご迷惑おかけします。';
	exit();
}



?>


</body>
</html>
