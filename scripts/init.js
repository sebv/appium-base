#!/usr/bin/env node

var fs = require('fs');

var packageName = process.argv[2];

if(!process.env.PACKAGE_NAME) throw new Error('PACKAGE_NAME env variable undefined');

var fileNames = ['package.json', 'README.md'];
for(var i=0; i<fileNames.length; i++) (function(fileName) {
  var filePath = __dirname + '/../' +  fileName;
  var content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/appium-base/g, packageName);
  if(fileName == 'README.md') {
    content = content.replace(/===================(.|\s)*/m,
      '===================\n\nWork in progress!\n');
  }
  fs.writeFileSync(filePath, content, 'utf8');
})(fileNames[i]);

