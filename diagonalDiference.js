function diagonalDifference(arr) {
    var sum1 = 0;
    var sum2 = 0;
    var k = 0;
    var z = arr.length-1;
    var acumulate1 = 0;
    var acumulate2 = 0;
    for (var i = 0; i < arr.length; i++) {
        var cube = arr[i];
        for (var j = 0; j < cube.length; j++) {
            if (acumulate1==0) {
                sum1 += cube[k];
                acumulate1++;
            }
            if (acumulate2==0) {
                sum2 += cube[z];
                acumulate2++;
            }
            
        }
        acumulate1 = 0;
        acumulate2 = 0;
        z--;
        k++;
        
    }
    return sum2;


}
console.log(diagonalDifference([[1, 2, 2],
                                [4, 3, 6],
                                [1, 8, 1]
]));