let fs = require("fs");

function displayContent(input){
    console.log("Content is ------------");
    let filepath = input[0];
    let i = 0;
    while(filepath != null){
        let content = fs.readFileSync(filepath,"utf-8");
        console.log(content);
        i++;
        filepath = input[i]; 
    }
}
function displayContentLine(input){
    console.log("Content Line Number ------------");
    let filepath = input[0];
    // let i = 0;
    // while(filepath != null){
        let content = fs.readFileSync(filepath,"utf-8");
        let strArr = content.split("\n");
        for(let i = 0 ; i < strArr.length ; i++){
            console.log(i+1," ",strArr[i]);
        }
        //console.log(content);
        // i++;
    //     filepath = input[i]; 
    // }
}
function displayContentLineC(input){
    console.log("Content Line Number C------------");
    let filepath = input[0];
    // let i = 0;
    // while(filepath != null){
        let content = fs.readFileSync(filepath,"utf-8");
        let strArr = content.split("\n");
        let val = 1;
        for(let i = 0 ; i < strArr.length ; i++){
           if(strArr[i]!=""){ 
               console.log(val," ",strArr[i]);
               val++;
           }
           else console.log(strArr[i]);
        }
        //console.log(content);
        // i++;
    //     filepath = input[i]; 
    // }
}
let input = process.argv.slice(2);
// console.log(input);

//if(cmd != '-s' || cmd != '-n' || cmd != '-b' ){
    displayContent(input);
    displayContentLine(input);
    displayContentLineC(input);
//}
