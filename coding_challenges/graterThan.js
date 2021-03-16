function compareTriplets(a, b) {
    var winners = [0, 0];
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) winners[0]++; 
        if(a[i] < b[i]) winners[1]++;   
    }
    return winners;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]))