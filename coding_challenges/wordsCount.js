function getIndexToIns(arr, num) {
    arr.push(num);
    let arrayVar = arr.sort(function(a, b){return a-b});
    for (let item of arrayVar) {
        if(num<=item){
            return arrayVar.indexOf(item);
        }  
    }
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));

//truncateString("A-tisket a-tasket A green and yellow basket", 8);