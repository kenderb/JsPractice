function isEven(num){
    if (num>0) {
        if (num===0){
            return true;
        }else if(num===1){
            return false
        }
        return isEven(num - 2);
    }else{
        return num + " Is not a  natural number";
    }
}
newNum = isEven(Number(prompt("type a number:")));
console.log(newNum);
