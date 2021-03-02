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

  offerCard.querySelector('.popup__title').textContent = offer.title;
  offerCard.querySelector('.popup__text--address').textContent = offer.address;
  offerCard.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  offerCard.querySelector('.popup__type').textContent = TypeOfHouse[offer.type];
  offerCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${numDecline(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} ${numDecline(offer.guests, 'гостя', 'гостей', 'гостей')}`;
  offerCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  offerCard.querySelector('.popup__description').textContent = offer.description;
  offerCard.querySelector('.popup__avatar').src = author.avatar;

  let photoContainer = offerCard.querySelector('.popup__photos');

  photoContainer.appendChild(renderImages(photoContainer, offer.photos));

  renderFeatures(offer.features, offerCard.querySelector('.popup__features'));

  return offerCard
};

export { renderCard };
