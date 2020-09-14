function kangaroo(x1, v1, x2, v2) {
    for (let i = 0; i < 1000; i++) {
        x1 += v1;
        x2 += v2;
        if (x1===x2) {
          return "YES";  
        }
        
    }
    return "NO";

}
console.log(kangaroo(14, 4, 98, 2));