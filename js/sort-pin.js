import { createMapPin, removeMapPin } from './map.js';
const mapFilters = document.querySelector('.map__filters');

const filterSettings = {
  HOUSING_TYPE: 'any',
  HOUSING_PRICE: 'any',
  HOUSING_ROOMS: 'any',
  HOUSING_GUESTS: 'any',
  FILTER_WIFI: '',
}


const setFiltersChange = (offers) => {
  mapFilters.addEventListener('change', (evt) => {

    filterSettings[evt.target.id.replace('-', '_').toUpperCase()] = evt.target.value;
    removeMapPin();

    const filteredOffers = offers.filter(({ offer }) => {

      if (offer.price < 10000) {
        offer.price = 'low'
      } else if (offer.price >= 10000 || offer.price <= 50000) {
        offer.price = 'middle'
      } else  {
        offer.price = 'high'
      }

      const feature = !(offer.features.indexOf(evt.target.id.replace('filter-', '')) === -1);
      const isTypeMatched = filterSettings.HOUSING_TYPE === 'any' || offer.type === filterSettings.HOUSING_TYPE;
      const isPriceMatched = filterSettings.HOUSING_PRICE === 'any' || offer.price === filterSettings.HOUSING_PRICE;
      const isRoomsMatched = filterSettings.HOUSING_ROOMS === 'any' || offer.rooms === filterSettings.HOUSING_ROOMS;
      const isGuestsMatched = filterSettings.HOUSING_GUESTS === 'any' || offer.guests === filterSettings.HOUSING_GUESTS;
      return isTypeMatched && isRoomsMatched && isPriceMatched && isGuestsMatched &&feature;
    });
    createMapPin(filteredOffers);
  })
}

export { setFiltersChange }
