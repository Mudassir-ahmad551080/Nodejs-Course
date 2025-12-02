const fs = require('fs');
// 
// fs.writeFileSync('files/apple.txt',"This is the fruite");
// // fs.unlinkSync('files/apple.txt');
// 
// const data = fs.readFileSync('files/apple.txt','utf-8');
// console.log(data);
// 
// fs.appendFileSync('files/banana.txt',"this is the banana");

// const opertion = process.argv[2];
// if(opertion=='write'){
//     const name = process.argv[3];
//     const content = process.argv[4];
//     console.log(opertion,name,content)
//     fs.writeFileSync("files/"+name+".txt",content)
// }
// else if(opertion=='read'){
//   const name = process.argv[3];
//   let data =  fs.readFileSync("files/"+name+".txt","utf-8");
//   console.log(data);
// }
// 
// else if (opertion=='update'){
//     const name = process.argv[3];
//     const content = process.argv[4];
//     fs.appendFileSync("files/"+name+".txt",content)
// }
// 
// else if (opertion=='delete'){
//     const name = process.argv[3];
//     fs.unlinkSync("files/"+name+".txt")
// }

const data = fs.readFileSync('files/mudassir.txt','utf-8');
console.log(data);
console.log('end script')