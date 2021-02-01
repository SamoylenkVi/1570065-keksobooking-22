const getRandomInteger = function (min, max) {
  if (max < min) {
    [min, max] = [max, min]
  }
  if (min < 0 || max < 0) {
    return -1;
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

const getRandomNumber = function (min, max, fixed) {
  if (max < min) {
    [min, max] = [max, min]
  }
  if (min < 0 || max < 0) {
    return -1;
  }
  const random = min + Math.random() * (max - min);
  const multiplier = Math.pow(10, fixed);
  return Math.round(random * multiplier) / multiplier;
}

getRandomInteger(5, 10);
getRandomNumber(0.1, 0.2, 5);
