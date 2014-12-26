appium-base
===================

Use this as a base when creating appium packages

Instructions
-------

```
# 1/ set the PACKAGE_NAME env variable
export PACKAGE_NAME=<PACKAGE NAME>

# 2/ clone package and delete .git dir
git clone git@github.com:appium/appium-base.git $PACKAGE_NAME
pushd $PACKAGE_NAME
rm -rf .git

# 3/ update package name in files
awk "{gsub(\"appium-base\", \"$PACKAGE_NAME\")}1" package.json | tee package.json >> /dev/null
awk "{gsub(\"appium-base\", \"$PACKAGE_NAME\")}1" README.md | tee README.md >> /dev/null

sed -e "s/appium-base/$PACKAGE_NAME/g" package.json | tee package.json >> /dev/null
sed -e "s/appium-base/$PACKAGE_NAME/g" README.md | tee README.md >> /dev/null
sed -e "s/Instructions.*//ga" README.md | tee README.md >>

# 2/ run npm init to make sure
npm init

```
