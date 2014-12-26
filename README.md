appium-base
===================

Use this as a base when creating appium packages

Instructions
-------

```

# 1/ clone package and delete .git dir
export PACKAGE_NAME=<PACKAGE NAME>
git clone git@github.com:appium/appium-base.git $PACKAGE_NAME
pushd $PACKAGE_NAME
rm -rf .git

# 2/ run npm init
npm init

```
