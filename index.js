// const fs = require("fs"); // if maximum performance is required in terms of memory allocation and execution time thenuse callback way
const fs = require("node:fs/promises");

console.log("1st");
//using promises
// fs.readFile('file.txt',"utf-8")
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

//Using async await

async function readFile () {
    try {
        const data = await fs.readFile("file.txt","utf-8")
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFile();
console.log('2nd');


// console.log('1');
// const fileT = fs.readFileSync("./file.txt","utf-8")
// console.log(fileT);
// console.log('2');

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
// console.log('3');   


// fs.writeFileSync("./coder.txt","Learn by coding!!")

// fs.writeFile("./file.txt"," You got the best job with a great package!!",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Created!!");
//     }
// })
// // by using {flag:"a"}, we can append into the file rather than wiping everything out and rewriting!!!!

// fs.appendFile("./job.txt","And I am Extreamly happy",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Appended!!");
//     }
// })