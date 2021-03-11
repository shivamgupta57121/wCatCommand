
let fs = require("fs");

let option = [];
let filepath = [];
let data = ``;

let input = process.argv.slice(2);

for(let i = 0 ; i < input.length ; i++){
    if( input[i].startsWith('-') ){
        option.push(input[i]);
    }
    else{
        filepath.push(input[i]);
    }
}

// console.log(option);
// console.log(filepath);

function isFileorNOt(dirpath) {
    return fs.lstatSync(dirpath).isFile();
}

for(let i = 0 ; i < filepath.length ; i++){
    let path = filepath[i];
    if(fs.existsSync(path) && isFileorNOt(path)){
        if(i>0) data += '\n';
        data += fs.readFileSync(path,"utf-8");
    } else{
        console.log("File does not exist")
    }
    
}

dataArr = data.split('\n');

if(option.includes('-s')){
    dataArr = removeBigLineBreaks(dataArr);
}

if( option.includes('-n') && option.includes('-b') ){
    if( option.indexOf('-n') > option.indexOf('-b') ){
        dataArr = giveNumbering(dataArr);
    } else{
        dataArr = giveNumberingNonEmpty(dataArr);
    }
} else if( option.includes('-n') ){
    dataArr = giveNumbering(dataArr);
} else if( option.includes('-b') ){
    dataArr = giveNumberingNonEmpty(dataArr);
}

data = dataArr.join('\n');

console.log(data);

function removeBigLineBreaks(dataArr){
    // console.log("Remove big spaces");
    let newDataArr = [];
    for(let i = 0 ; i < dataArr.length ; ){
        if(dataArr[i] == '\r'){
            while(dataArr[i] == '\r'){
                i++;
            }
            newDataArr.push('\r');
        }
        else{
            newDataArr.push(dataArr[i]);
            i++ ;
        }
    }
    return newDataArr;
}

function giveNumbering(dataArr){
    for(let i = 0 ; i < dataArr.length ; i++){
        dataArr [i] = i+1 + " " + dataArr[i];
    }
    return dataArr;
}

function giveNumberingNonEmpty(dataArr){
    let lineNo = 1;
    for(let i = 0 ; i < dataArr.length ; i++){
        if(dataArr[i] != '\r'){
            dataArr [i] = lineNo + " " + dataArr[i];
            lineNo++;
        }
    }
    return dataArr;
}


