const getRandomInteger = function(min, max) {
  if (max < min) {
    const savedMax = max;
    max = min;
    min= savedMax;
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}

const getRandomNumber = function (min, max, fixed) {
  if (max < min) {
    const savedMax = max;
    max = min;
    min= savedMax;
  }

  const random = min + Math.random() * (max - min);
  const multiplier = Math.pow(10, fixed);
  return Math.round(random * multiplier) / multiplier;
}

getRandomInteger(5, 10);
getRandomNumber(0.1, 0.2, 5);
