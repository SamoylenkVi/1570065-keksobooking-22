const DEBOUNCE_INTERVAL = 500;

const numDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  if (num > 10 && (Math.round((num % 100) / 10)) === 1) {
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
export { numDecline, debounce };
