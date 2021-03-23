import { createMapPin } from './map.js';
import { setFilters } from './sort-pin.js'

const CLASS_NAME = 'map__error';
const TEXT = 'Произошла ошибка! Попробуйте обновить страницу';
const BUTTON_TEXT = 'Закрыть';
const IMPORT_SERVER = 'https://22.javascript.pages.academy/keksobooking/data';
const PIN_COUNT = 10;

const map = document.querySelector('.map__canvas');
let dataOffers = [];

const createErrorMesage = () => {

  const message = document.createElement('div');
  message.classList.add(CLASS_NAME);
  const textMessage = document.createElement('p');
  textMessage.textContent = TEXT;
  const button = document.createElement('button');
  button.textContent = BUTTON_TEXT;
  message.appendChild(textMessage);
  message.appendChild(button);
  map.appendChild(message);

  const closeErrorPopUpHandler = () => {
    message.remove();
    document.removeEventListener('click', closeErrorPopUpHandler);
  }

  button.addEventListener('click', closeErrorPopUpHandler);
}

fetch(IMPORT_SERVER)
  .then((response) => response.json())
  .then((offers) => {
    dataOffers = offers.slice(0, PIN_COUNT);
    createMapPin(offers.slice(0, PIN_COUNT));
    setFilters(offers.slice())
  })
  .catch(() =>{
    createErrorMesage();
  });

export { dataOffers };
