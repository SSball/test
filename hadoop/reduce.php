#!/usr/bin/php

<?php

    $result = array();

    while(!feof(STDIN)){

        //"<key>    1"の形で標準入力値を受け取る。
        //１行ずつ読み込んでは、該当する配列キーのvalueに＋１していく。

        $line = trim(fgets(STDIN));

        if(!empty($line)){   

            list($key,$value) = preg_split('/\t/',$line);
            $result[$key] += $value;

        }
    }

    //value降順でソートする。
    arsort($result);

    foreach($result as $key => $value){

        printf("%s\t%s\n",$key,$value);

    }