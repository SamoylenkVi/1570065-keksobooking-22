import { adressDefoult } from './map.js';
const AVATAR_DEFOULT = 'img/muffin-grey.svg';
const addOfferForm = document.querySelector('.ad-form');
const resetFormButton = addOfferForm.querySelector('.ad-form__reset');
const successMesage = document.querySelector('#success')
  .content;
const errorMesage = document.querySelector('#error')
  .content;
const main = document.querySelector('main');
const containerPictureAvatar = document.querySelector('.ad-form-header__preview');
const avatarPicture = containerPictureAvatar.querySelector('img');
const housingPictureContainer = document.querySelector('.ad-form__photo');
const housingPicture = document.querySelector('.ad-form__photo').children;
const keyEscape = 'Escape';

const addOfferFormSubmit = (onSuccess, onError ) => {

  addOfferForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://22.javascript.pages.academy/keksobooking',
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

  if (evt.key === keyEscape) {
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

  if (evt.key === keyEscape) {
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
  adressDefoult();
  avatarPicture.src = AVATAR_DEFOULT;
  housingPictureContainer.removeChild(housingPicture);
}

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm ();
})

const successfulFormSubmission = () => {
  createSuccessMesage();
  resetForm();
}

addOfferFormSubmit(successfulFormSubmission, createErrorMesage)
