import {createMapPin} from './map.js';

const importServer = 'https://22.javascript.pages.academy/keksobooking/data';

fetch(importServer)
  .then((response) => response.json())
  .then((offers) => {
    createMapPin(offers);
  });
