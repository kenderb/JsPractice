function staircase(n) {
    var hash = [];
    for( let i = 0; i < n; i++) {
        hash.unshift(" ");
    }
    for( let j = n; j > 0; j--) {
        hash[j] = "#";
        console.log(hash);
    }
}

staircase(6);
staircase(10);
staircase(20);