const fs = require('fs');

const creatDir = fs.mkdir('myDir');

const folderPath = 'dirctory Path';

  //const folderDetails = fs.readdirSync(folderPath);

  const dirExit = fs.existsSync('file.js');
  console.log('dirExit ',dirExit);

  const rmvDir = fs.rmdirSync('myDir');

  console.log('dirExit '); 
