const addOfferForm = document.querySelector('.ad-form');
const resetFormButton = addOfferForm.querySelector('.ad-form__reset');
const successMesage = document.querySelector('#success')
  .content;
const errorMesage = document.querySelector('#error')
  .content;
const main = document.querySelector('main');

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

  if (evt.keyCode === 27) {
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

  if (evt.keyCode === 27) {
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

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addOfferForm.reset();
})

const successfulFormSubmission = () => {
  createSuccessMesage();
  addOfferForm.reset();
}

addOfferFormSubmit(successfulFormSubmission, createErrorMesage)
