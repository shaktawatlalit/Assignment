#!/bin/bash


for i in `ls $1`
do
   if [ `grep [-*—$@] $1/$i | wc -l` -ne 0 ]
   then 
        rm $1/$i
   else
        echo "not deleted"
   fi
done
