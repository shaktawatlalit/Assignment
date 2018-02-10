#!/bin/bash
echo "Answer 8.1 - "
 head $1
 tail $1

echo "Answer 8.2 -"
sed -n '3,+5p' $1

echo "Answer 8.3 -"
cat $1 | rev 

echo "Answer 8.4 -"
tac test | sed -n '3,+6p' 



