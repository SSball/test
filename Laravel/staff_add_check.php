<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>

<?php
$staff_name = htmlspecialchars($staff_name,ENT_QUOTES,'UTF-8');
$staff_pass = htmlspecialchars($staff_pass,ENT_QUOTES,'UTF-8');
$staff_pass2 = htmlspecialchars($staff_pass2,ENT_QUOTES,'UTF-8');


if($staff_name==''){
	print'スタッフ名が入力されていません <br>';
}else{
	print'スタッフ名:'.$staff_name.'<br>';
}

if($staff_pass==''){
	print'パスワードが入力されていません <br>';
}

if($staff_pass!=$staff_pass2){
	print 'パスワードが一致しません <br>';
}

if($staff_name=='' || $staff_pass=='' || $staff_pass!=$staff_pass2){
	print '<form> <input type="button" onclick="history.back()" value="戻る"> </form>';
}else{
	$staff_pass=md5($staff_pass);
	print'<form method="post" action="staff_add_cmp">';
	print'<input type="hidden" name="staff_name" value="'.$staff_name.'">';
	print'<input type="hidden" name="staff_pass" value="'.$staff_pass.'">';
	print'<br>';
	print'<input type="button" onclick="history.back()" value="戻る">';
	print'<input type="submit" value="OK">';
	print'</form>';
}


?>



</body>
</html>
