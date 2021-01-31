const getRandomInteger = function(min, max) {
  if (max < min) {
    const savedMax =max;
    max = min;
    min= savedMax;
  }

  return Math.floor(min + Math.random() * (max + 1 - min));
}
