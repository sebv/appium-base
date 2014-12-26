appium-base
===================

Use this as a base when creating appium packages

Instructions
-------

```
# 1/ clone package and delete .git dir
git clone git@github.com:appium/appium-base.git $PACKAGE_NAME
pushd $PACKAGE_NAME
rm -rf .git

# 2/ run the init script passing your package name as argument, then delete the script dir
./scripts/init.js <PACKAGE NAME>
rm -rf ./scripts

# 3/ run npm init to make sure
npm init

# 4/
git init && git add .
git commit  -am 'Initial commit'
```
