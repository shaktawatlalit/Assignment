#!/bin/bash

for f in `ls $1/*`
do
  mv $f $f.new
done 
