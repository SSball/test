<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>

<?php

$staff_code = htmlspecialchars($staff_code,ENT_QUOTES,'UTF-8');
$staff_name = htmlspecialchars($staff_name,ENT_QUOTES,'UTF-8');

if($staff_code === ""){
	echo '削除するスタッフを選択してください <br>';
	echo '<input type="button" onclick="history.back()" value="戻る">';
	exit;
};

?>


スタッフコード：
<?php print $staff_code;?>
<br>

スタッフ名：
<?php print $staff_name;?>
<br><br>

このスタッフを削除してよろしいですか？
<br><br>

<form method="post" action="staff_delete_cmp">
<input type="hidden" name="staff_code" value="<?php print $staff_code;?>">


<input type="button" onclick="history.back()" value="戻る">
<input type="submit" value="OK">
</form>




</body>
</html>
