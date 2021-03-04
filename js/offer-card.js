import { numDecline } from './utils.js'

const card = document.querySelector('#card')
  .content;

const TypeOfHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const renderImages = (container, sources) => {
  let popupPhoto = container.querySelector('.popup__photo');
  container.innerHTML = '';

  const fragmentPhoto = document.createDocumentFragment();

  sources.forEach((source) => {
    const newPhoto = popupPhoto.cloneNode(true);
    newPhoto.src = source;
    fragmentPhoto.appendChild(newPhoto);
  });

  return fragmentPhoto;
};

const renderFeatures = (features, container) => {
  let list = container.querySelectorAll('li');

  list.forEach((item) => {
    if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
      item.remove();
    }
  });
}

const renderCard = ({ author, offer }) => {
  const offerCard = card.cloneNode(true);
  const title = offerCard.querySelector('.popup__title');
  if (offer.title) {
    title.textContent = offer.title;
  } else {
    title.remove();
  }
  const address = offerCard.querySelector('.popup__text--address');
  if (offer.address) {
    address.textContent = offer.address;
  } else {
    address.remove();
  }
  const price = offerCard.querySelector('.popup__text--price');
  if (offer.price) {
    price.textContent = `${offer.price} ₽/ночь`;
  } else {
    price.remove();
  }
  const type = offerCard.querySelector('.popup__type');
  if (offer.type) {
    type.textContent = TypeOfHouse[offer.type];
  } else {
    type.remove();
  }
  const capacity = offerCard.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacity.textContent = `${offer.rooms} ${numDecline(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} ${numDecline(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  } else {
    capacity.remove();
  }
  const time = offerCard.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    time.remove();
  }
  const description = offerCard.querySelector('.popup__description');
  if (offer.description) {
    description.textContent = offer.description;
  } else {
    description.remove();
  }
  const avatar = offerCard.querySelector('.popup__avatar');
  if (author.avatar) {
    avatar.src = author.avatar;
  } else {
    avatar.remove();
  }
  const photoContainer = offerCard.querySelector('.popup__photos');
  if (offer.photos) {
    photoContainer.appendChild(renderImages(photoContainer, offer.photos));
  } else {
    photoContainer.remove()
  }
  const features = offerCard.querySelector('.popup__features');
  if (offer.features) {
    renderFeatures(offer.features, features);
  } else {
    features.remove()
  }

  return offerCard
};

export { renderCard };
