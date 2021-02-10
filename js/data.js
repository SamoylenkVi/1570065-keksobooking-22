import { getRandomInteger, getRandomNumber } from './utils.js';

const TITLE = ['Отель Марриотт Москва Гранд', 'AZIMUT Отель Смоленская', 'Рэдиссон Коллекшен Отель', 'Radisson Blu'];
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTION = ['Oтель находится в Москве, всего в 10 минутах ходьбы от станции', 'с панорамным видом на город', 'К услугам гостей крытый бассейн и современный спа-центр', 'расположен в тихом месте в центре города'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

const priceRange = {
  min: 1000,
  max: 10000,
}

const idRange = {
  min: 1,
  max: 8,
}

const roomRange = {
  min: 1,
  max: 5,
}

const guestsRange = {
  min: 1,
  max: 10,
}

const xRange = {
  min: 35.6,
  max: 35.7,
}

const yRange = {
  min: 139.7,
  max: 139.8,
}

const splitNumber = 5;
const arrayLength = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)]
}

const getRandomFeatures = () => {
  return FEATURES.filter(() => {
    return getRandomInteger(0, 1);
  })
};

const createOffer = () => {

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(idRange.min, idRange.max) + '.png',
    },

    offer: {
      title: getRandomArrayElement(TITLE),
      address: getRandomNumber(xRange.min, xRange.max, splitNumber) + ', ' + getRandomNumber(yRange.min, yRange.max, splitNumber),
      price: getRandomInteger(priceRange.min, priceRange.max),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(roomRange.min, roomRange.max),
      guests: getRandomInteger(guestsRange.min, guestsRange.max),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomFeatures(),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
    },

    location: {
      X: getRandomNumber(xRange.min, xRange.max, splitNumber),
      Y: getRandomNumber(yRange.min, yRange.max, splitNumber),
    },
  }
}

const similarOffer = new Array(arrayLength).fill(null).map(() => createOffer());

similarOffer;
