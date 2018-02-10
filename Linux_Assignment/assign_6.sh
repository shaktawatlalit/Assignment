#!/bin/bash

 echo `ls $1 | find . -name "*.txt" | xargs grep -o "lalit" | wc -l`

