function birthdayCakeCandles(ar) {
    var maxH = Math.max(...ar);
    var j =  0;
    for(let i = 0; i < ar.length; i++) {
        if(ar[i] == maxH) {
           j++;
        }
    }
    return j;
}

console.log(birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]));