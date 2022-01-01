#!/bin/bash
MYFOLDER=$(pwd)

cd /tmp
git clone https://github.com/tharsis/evmos/
cd evmos/
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf evmos
