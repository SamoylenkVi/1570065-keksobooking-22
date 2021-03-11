import {createMapPin} from './map.js';
import {setFiltersChange} from './sort-pin.js'

const importServer = 'https://22.javascript.pages.academy/keksobooking/data';
const PIN_COUNT = 10;
fetch(importServer)
  .then((response) => response.json())
  .then((offers) => {
    createMapPin(offers.slice(0, PIN_COUNT));
    setFiltersChange(offers.slice())
  });
