// import fs from 'fs/promises'
// // 
// // fs.writeFileSync('files/apple.txt',"This is the fruite");
// // fs.unlinkSync('files/apple.txt');

// // const data = fs.readFileSync('files/apple.txt','utf-8');
// // console.log(data);

// // fs.appendFileSync('files/banana.txt',"this is the banana");

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

// else if (opertion=='update'){
//     const name = process.argv[3];
//     const content = process.argv[4];
//     fs.appendFileSync("files/"+name+".txt",content)
// }

// else if (opertion=='delete'){
//     const name = process.argv[3];
//     fs.unlinkSync("files/"+name+".txt")
// }

// const data = fs.readFileSync('files/mudassir.txt','utf-8');
// console.log(data);
// console.log('end script')

// // fs.writeFile('data.txt',"Hello this is data file",'utf-8')
// //  .then(()=>{
// //     console.log('file is creat succefully')
// //  })
// //  .catch((err)=>{
// //     console.log('error is accuring during file creation')
// //  })

// // fs.readFile('data.txt','utf-8').then((data)=>console.log("file is read",data)).catch((err)=>console.log(err))

// // async function writeFile() {
// //      try {
// //         await fs.writeFile('example.txt',"hello from example file");
// //         console.log("file is created succefully")
// //      } catch (error) {
// //           console.log("error during file creation")
// //      }
// // }

// // writeFile()

// // async function readFile() {
// //      try {
// //        const data =  await fs.readFile('example.txt','utf-8');
// //         console.log(data)
// //      } catch (error) {
// //           console.log("error during file reading")
// //      }
// // }

// // readFile()

// // async function readFile() {
// //     try {
// //         const data = await fs.readFile('example.txt','utf-8')
// //         const data1 = await fs.readFile('example.txt','utf-8')
// //         const data2 = await fs.readFile('mudassir.txt','utf-8')
// //         const delet = await fs.unlink('mudassir.txt')
// //         console.log('file is deleted succefully')
// //         console.log(data)
// //         console.log(data1)
// //         console.log(data2)
// //     } catch (error) {
// //         console.log(error);
        
// //     }
// // }

// // readFile();
