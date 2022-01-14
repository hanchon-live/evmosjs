#!/bin/bash
MYFOLDER=$(pwd)

cd /tmp
git clone https://github.com/tharsis/evmos/
cd evmos/
# git checkout fedekunze/claims using commit 69de61d3468d36420526926444b5db0987a6838c
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf evmos
