#!/bin/bash
echo `grep -r "lalit" $1 | rev |  cut -f1 -d"/" |rev | cut -f1 -d ":" `
