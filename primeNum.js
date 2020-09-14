for (let j = 0; j < 100; j++)
  if(prime(j)) console.log(j);

function prime(j) {
  for (let i = 2; i < j; i++)
    if (j % i == 0) return false;
  return j > 1;
}


