import {debounce} from './utils.js'
import { createMapPin, removeMapPin } from './map.js';

const MAX_OFFERS = 10;
const DEFAULT = 'any';

const filterSettings = {
  type: 'any',
  price: 'any',
  rooms: 'any',
  guests: 'any',
}

const price = {
  INTERVALS: {
    LOW: {
      END: 10000,
    },
    MIDDLE: {
      START: 10000,
      END: 50000,
    },
    HIGH: {
      START: 50000,
    },
  },
  low({ price }) {
    return price < this.INTERVALS.LOW.END;
  },
  middle({ price }) {
    return price >= this.INTERVALS.MIDDLE.START && price <= this.INTERVALS.MIDDLE.END;
  },
  high({ price }) {
    return price > this.INTERVALS.HIGH.START;
  },
}

const mapFilters = document.querySelector('.map__filters');

const checkFeturesList = ({ features }) => {
  const checkedfeaturesElements = Array.from(mapFilters.querySelectorAll('input[type=checkbox]:checked'));

  return checkedfeaturesElements.every(({ value: filter }) => features.some((feature) => feature === filter))
}

const filterOffers = (offers) => {
  let filtered = [];
  for (let i = 0; i < offers.length; i++) {
    const { offer } = offers[i];
    if (
      (filterSettings.type === DEFAULT || filterSettings.type === offer.type) &&
      (filterSettings.price === DEFAULT || price[filterSettings.price](offer)) &&
      (filterSettings.rooms === DEFAULT || +filterSettings.rooms === offer.rooms) &&
      (filterSettings.guests === DEFAULT || +filterSettings.guests === offer.guests) &&
      checkFeturesList(offer)
    ) {
      filtered.push(offers[i]);
    }
    if (filtered.length === MAX_OFFERS) {
      break;
    }
  }
  return filtered
}

const setFilters = (offers) => {
  const onFiltersChange = (evt) => {

    removeMapPin();
    filterSettings[evt.target.id.replace('housing-', '')] = evt.target.value;

    createMapPin(filterOffers(offers));
  }
  mapFilters.addEventListener('change', debounce(
    (evt) => onFiltersChange(evt),
  ))
}

export { setFilters }
