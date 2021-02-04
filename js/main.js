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

const TITLE = ['Отель Марриотт Москва Гранд', 'AZIMUT Отель Смоленская', 'Рэдиссон Коллекшен Отель', 'Radisson Blu'];
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Oтель находится в Москве, всего в 10 минутах ходьбы от станции', 'с панорамным видом на город', 'К услугам гостей крытый бассейн и современный спа-центр', 'расположен в тихом месте в центре города'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)]
}

const getRandomFeatures = () => {
  return FEATURES.filter(() => {
    return getRandomInteger(0, 1);
  })
};

const createOffer = () => {
  const locationX = getRandomNumber(35.6, 35.7, 5);
  const locationY = getRandomNumber(139.7, 139.8, 5);

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLE),
      address: locationX + ', ' + locationY,
      price: getRandomInteger(1000, 10000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomFeatures(),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
    },

    location: {
      X: locationX,
      Y: locationY,
    },
  }
}

const similarOffer = new Array(10).fill(null).map(() => createOffer());

similarOffer();
