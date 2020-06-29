let numInX=Number(prompt("Type the number of rows: "));
let numInY=Number(prompt("Type the number of colums: "));
let singS="";
while(singS.length<=numInX-1) {
    singS+="#";
}
for (let index = 0; index < numInY; index++) {
    
    if (index%2==0) {
        console.log(" " + singS)
    }else {
        console.log(singS);
    } 
    
}
console.log("Hi");
