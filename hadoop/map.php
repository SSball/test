#!/usr/bin/php

<?php
    
    //入力取得
    while(!feof(STDIN)){

        $line = trim(fgets(STDIN));
        $words = preg_split('/[\/\s,.:;=\']+/',$line); 
        
        foreach($words as $unit){

            if(!empty($unit)){

                printf("%s\t1\n",$unit);
            
            }
        }
    }