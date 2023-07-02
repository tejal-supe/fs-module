const fs = require("fs");
console.log('1');
const fileT = fs.readFileSync("./file.txt","utf-8")
console.log(fileT);
console.log('2');

fs.readFile("./file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
console.log('3');


fs.writeFileSync("./coder.txt","Learn by coding!!")

fs.writeFile("./job.txt","You got the best job with a great package!!",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File Created!!");
    }
})