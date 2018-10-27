function getPrimes(N) {
  const primes = [];
  if (N >= 2) {
    primes.push(2);
  } else {
    return primes
  }

  // все простые числа старше 2 нечетные
  for(let i = 3; i <= N; i += 2) {
    let isPrime = true;
    // наименьший делитель составного числа k не превосходит sqrt(k)
    for(let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i)
    }

  }

  return primes

}

module.exports = {
  getPrimes
};
