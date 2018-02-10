#!/bin/bash

echo "Enter First Number"
read a

echo "Enter Second Number"
read b

echo "Addition, subtraction ,multiply is"
expr $a + $b
expr $a - $b
expr $a \* $b

if [ $a -gt $b ]
then
   echo "$a is maximum and $b is minimum"
elif [ $a -lt $b ]
then
   echo "$b is maximum and $a is minimum"
else
   echo "Both are equal"
fi


if [ $a -ge 0 ]
then
   echo "$a is positive"
else
   echo "$a is negative"
fi

if [ $b -ge 0 ]
then
   echo "$b is positive"
else
   echo "$b is negative"
fi
