import { createOffers, PHOTOS } from './data.js';

const map = document.querySelector('.map__canvas')
const card = document.querySelector('#card')
  .content;

const similarOffers = createOffers;

const FeaturesCollection = {
  wifi: 'popup__feature--wifi',
  dishwasher: 'popup__feature--dishwasher',
  parking: 'popup__feature--parking',
  washer: 'popup__feature--washer',
  elevator: 'popup__feature--elevator',
  conditioner: 'popup__feature--conditioner',
};

const TypeOfHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const popupPhoto = card.querySelector('.popup__photo');

const renderImages = (sources) => {
  const fragmentPhoto = document.createDocumentFragment();

  sources.forEach((source) => {
    const newPhoto = popupPhoto.cloneNode(true)
    newPhoto.src = source;
    fragmentPhoto.appendChild(newPhoto);
  });

  return fragmentPhoto;
};

const renderFeatures = (features, classFeatures) => {
  const fragmentFeatures = document.createDocumentFragment();
  for (let i = 0; i < classFeatures.length; i++) {
    const feature = classFeatures[i];
    if (feature.classList.contains(FeaturesCollection[features])) {
      fragmentFeatures.appendChild(feature)
    } else {
      feature.remove()
    }
  }
  return fragmentFeatures
}

similarOffers.forEach(({ author, offer }) => {
  const offerCard = card.cloneNode(true);
  const popupFeature = offerCard.querySelectorAll('.popup__feature');
  offerCard.querySelector('.popup__title').textContent = offer.title;
  offerCard.querySelector('.popup__text--address').textContent = offer.address;
  offerCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerCard.querySelector('.popup__type').textContent = TypeOfHouse[offer.type];
  offerCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerCard.querySelector('.popup__features').appendChild(renderFeatures(offer.features, popupFeature));
  offerCard.querySelector('.popup__description').textContent = offer.description;
  offerCard.querySelector('.popup__photos').appendChild(renderImages(PHOTOS));
  offerCard.querySelector('.popup__photo').remove();
  offerCard.querySelector('.popup__avatar').src = author.avatar;
  map.appendChild(offerCard);
})
