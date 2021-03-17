const DEBOUNCE_INTERVAL = 500;
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
const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num > 10 && (Math.round((num % 100) / 10)) == 1) {
    return genitivePlural;
  } else {
    switch (num % 10) {
      case 1: return nominative;
      case 2:
      case 3:
      case 4: return genitiveSingular;
    }
    return genitivePlural;
  }
};

const debounce = (cb) => {
  let lastTimeout = null;

  return function () {
    const parameters = arguments;

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(function () {
      cb.apply(null, parameters);
    }, DEBOUNCE_INTERVAL);
  };
};
export { getRandomInteger, getRandomNumber, numDecline, debounce };
