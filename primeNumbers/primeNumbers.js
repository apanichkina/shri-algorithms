function getPrimes(N) {
  const primes = [];
  if (N >= 2) {
    console.log(2);
  } else {
    console.log('nope');
  }

  // все простые числа старше 2 нечетные
  for(let i = 3; i <= N; i += 2) {
    let isPrime = true;
    // наименьший делитель составного числа n не превосходит sqrt(n)
    for(let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }

  }
}

function getPrimesMemorized(N) {
  const primes = [];
  if (N >= 2) {
    primes.push(2);
  } else {
    return primes
  }

  // все простые числа старше 2 нечетные
  for(let i = 3; i <= N; i += 2) {
    let isPrime = true;
    let j = 0;
    // наименьший собственный делитель k составного числа n -  есть простое число
    // наименьший делитель составного числа n не превосходит sqrt(n)
    while(primes[j] * primes[j] <= i) {
      if(i % primes[j] === 0) {
        isPrime = false;
        break;
      }
      j++;
    }

    if (isPrime) {
      primes.push(i)
    }

  }

  return primes

}

module.exports = {
  getPrimes,
  getPrimesMemorized
};
