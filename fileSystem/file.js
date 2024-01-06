const fs =  require('fs');

  const write = fs.writeFileSync('test1.txt',"Hello World")

  const append = fs.appendFileSync('test1.txt'," Hello Asia")

  const read = fs.readFileSync('test1.txt');
  console.log("read ---> " +read);

   // const unlink = fs.unlinkSync('test2.txt');

    const create = fs.writeFileSync('test2.txt',"Hello World")
