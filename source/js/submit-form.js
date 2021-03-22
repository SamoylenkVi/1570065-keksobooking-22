import { adressDefoult, createMapPin, updateMainMarker } from './map.js';
import { dataOffers } from './fetch.js';

const AVATAR_DEFOULT = 'img/muffin-grey.svg';
const EXPORT_SERVER = 'https://22.javascript.pages.academy/keksobooking';
const PRICE_DEFOULT = '1000';

const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc',
}

const addOfferForm = document.querySelector('.ad-form');
const offerPrice = addOfferForm.querySelector('#price');
const resetFormButton = addOfferForm.querySelector('.ad-form__reset');
const successMesage = document.querySelector('#success')
  .content;
const errorMesage = document.querySelector('#error')
  .content;
const main = document.querySelector('main');
const containerPictureAvatar = document.querySelector('.ad-form-header__preview');
const avatarPicture = containerPictureAvatar.querySelector('img');
const housingPictureContainer = document.querySelector('.ad-form__photo');
const mapFilters = document.querySelector('.map__filters');

const addOfferFormSubmit = (onSuccess, onError) => {

  addOfferForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      EXPORT_SERVER,
      {
        method: 'POST',
        body: formData,
      },
    ).then(() => onSuccess())
      .catch(() => onError())
  })
}

const createSuccessMesage = () => {
  const successPopUp = successMesage.cloneNode(true);
  document.addEventListener('keydown', escapeSuccessKeydownHandler);
  document.addEventListener('click', closeSuccessPopUpHandler);
  main.appendChild(successPopUp);
}

const escapeSuccessKeydownHandler = (evt) => {
  const popUp = main.querySelector('.success')

  evt.preventDefault();

  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC ) {
    popUp.remove();
  }

  document.removeEventListener('keydown', escapeSuccessKeydownHandler);
  document.removeEventListener('click', closeSuccessPopUpHandler);

}

const closeSuccessPopUpHandler = () => {
  const popUp = main.querySelector('.success')
  popUp.remove();

  document.removeEventListener('click', closeSuccessPopUpHandler);
  document.removeEventListener('keydown', escapeSuccessKeydownHandler);
}

const createErrorMesage = () => {
  const error = errorMesage.cloneNode(true);
  document.addEventListener('keydown', escapeErrorKeydownHandler);
  document.addEventListener('click', closeErrorPopUpHandler);
  main.appendChild(error);
}

const escapeErrorKeydownHandler = (evt) => {
  const popUpError = main.querySelector('.error')

  evt.preventDefault();

  if (evt.key === Keys.ESCAPE || evt.key === Keys.ESC) {
    popUpError.remove();
  }

  document.removeEventListener('keydown', escapeErrorKeydownHandler);
  document.removeEventListener('click', closeErrorPopUpHandler);

}

const closeErrorPopUpHandler = () => {
  const popUpError = main.querySelector('.error')
  popUpError.remove();

  document.removeEventListener('click', closeErrorPopUpHandler);
  document.removeEventListener('keydown', escapeErrorKeydownHandler);
}

const resetForm = () => {
  addOfferForm.reset();
  offerPrice.placeholder = PRICE_DEFOULT;
  adressDefoult();
  updateMainMarker();
  avatarPicture.src = AVATAR_DEFOULT;
  housingPictureContainer.innerHTML = '';
  mapFilters.reset();
  createMapPin(dataOffers);
}

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
})

const successfulFormSubmission = () => {
  createSuccessMesage();
  resetForm();
}

addOfferFormSubmit(successfulFormSubmission, createErrorMesage)
