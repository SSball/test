<!doctype html>
<html>
<head>
    <title>Sample</title>
    <style>
    body { color:gray; }
    h1 { font-size:18pt; font-weight:bold; }
    th { color:white; background:#999; }
    td { color:black; background:#eee; padding:5px 10px; }
    </style>
</head>
<body>

    <form method="post" action="staff_delete_check">
    <h1>mst_staff Table</h1>
    <table>
    <tr><th></th><th>CODE</th><th>NAME</th></tr>
    <?php foreach($data as $val){ ?>
    <tr>
        <td><input type="radio" name="staff_code" value="<?php echo $val->code;?>"></td>
        <input type="hidden" name="staff_name<?php echo $val->code;?>" value="<?php echo $val->name;?>">
        <td><?php echo $val->code; ?></td>
        <td><?php echo $val->name; ?></td>
    </tr>
    <?php } ?>
    </table>

    <input type="submit" value="削除">
    </form>

    <form method="post" action="staff_add">
    <input type="submit" value="追加">
    </form>



</body>