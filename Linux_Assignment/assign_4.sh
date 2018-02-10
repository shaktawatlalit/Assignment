#!/bin/bash

echo "Enter The Number"
read n

j=1;
echo "Printing number using for loop"
for ((i=1;i<=$n;i++))
   do
      echo $i
done

echo "Printing number using while loop"
while [ $j -le $n ]
   do
      echo $j
      let j++;
done

k=1;

echo "Printing number using until loop"
until [ $k -gt $n ]
   do
      echo $k
      let k++;
done 
