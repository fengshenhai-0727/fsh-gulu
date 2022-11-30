#!/usr/bin/env bash

_outDir="./dist"
_pubDir=${_outDir}

echo `pwd`
# 删除上次留存的文件夹
rm -rf ${_outDir}

# tsc 编译项目
yarn tsc

if [ $? -ne 0 ]; then
    echo '...'
    echo '编译错误'
    echo '...'
    exit 1
fi

# 写入相关文件
cp README.md ${_pubDir}/README.md
cp LICENSE ${_pubDir}/LICENSE
cp -r ./bin ${_pubDir}/bin
cp -r ./codemod ${_pubDir}/codemod
# 代码美化配置，供tpl美化代码时用
cp -r ../../.prettierrc.js ${_pubDir}/.prettierrc.js
# cp -r ../../tsconfig.json ${_pubDir}/tsconfig.json

if [ $? -ne 0 ]; then
  echo '...'
  echo '版本设置错误'
  echo '...'
  exit 1
fi



