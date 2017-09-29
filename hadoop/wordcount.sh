#!/bin/sh#!/bin/sh

start_time=`date +%s`;

hadoop jar /usr/local/Cellar/hadoop/2.8.1/libexec/share/hadoop/tools/lib/hadoop-streaming-2.8.1.jar -input ${1} -output result-${1} -mapper map.php -reducer reduce.php

open result-${1}/part-00000

end_time=`date +%s`

time=$((end_time - start_time))

echo $time' sec'