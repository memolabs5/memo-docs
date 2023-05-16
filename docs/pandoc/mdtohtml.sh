#! /bin/bash

# usage: sh mdtohtml.sh

for i in ../*/*.md;
do
    echo "$i" && pandoc $i --template ./toc-sidebar.html --toc-depth=5 --toc -B ./nav -o ${i%.md}.html;
done

for i in ../*/*/*.md;
do
    echo "$i" && pandoc $i --template ./toc-sidebar.html --toc-depth=5 --toc -B ./nav -o ${i%.md}.html;
done

for i in ../*/*/*/*.md;
do
    echo "$i" && pandoc $i --template ./toc-sidebar.html --toc-depth=5 --toc -B ./nav -o ${i%.md}.html;
done