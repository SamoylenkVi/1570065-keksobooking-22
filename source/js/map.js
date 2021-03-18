/*global L:readonly*/
import { renderCard } from './offer-card.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const disabledFields = document.querySelectorAll('select.map__filter, fieldset');
const address = adForm.querySelector('#address')
const FIXED_NUMBER = 5;
const LAT_MAP = 35.652832;
const LNG_MAP = 139.839478;
const ZOOM_MAP = 12;
const LAT_MAIN_MARKER = 35.65952;
const LNG_MAIN_MARKER = 139.78179;

const MainPin = {
  url: './img/main-pin.svg',
  size: [40, 40],
  anchor: [20, 40],
};

const Pin = {
  url: './img/pin.svg',
  size: [40, 40],
  anchor: [20, 40],
};

const setDisabledState = () => {
  disabledFields.forEach((item) => {
    item.disabled = !item.disabled
  });
};

const toggleInteractiv = () => {
  adForm.classList.toggle('ad-form--disabled')
  mapFilters.classList.toggle('map__filters--disabled')

  setDisabledState()

  address.readOnly = true;
};

toggleInteractiv();

const map = L.map('map-canvas')
  .on('load', () => {
    toggleInteractiv();
  })
  .setView({
    lat: LAT_MAP,
    lng: LNG_MAP,
  }, ZOOM_MAP);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MainPin.url,
  iconSize: MainPin.size,
  iconAnchor: MainPin.anchor,
});

const mainMarker = L.marker(
  {
    lat: LAT_MAIN_MARKER,
    lng: LNG_MAIN_MARKER,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);

const adressDefoult = () => {
  address.value = LAT_MAIN_MARKER + ', ' + LNG_MAIN_MARKER;
}

adressDefoult();

mainMarker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(FIXED_NUMBER)}, ${lng.toFixed(FIXED_NUMBER)}`;
});

const PinIcon = L.icon({
  iconUrl: Pin.url,
  iconSize: Pin.size,
  iconAnchor: Pin.anchor,
});

const layerGroup = L.layerGroup().addTo(map);

const removeMapPin = () => {
  layerGroup.clearLayers();
}

const createMapPin = (points) => {
  points.forEach((point) => {
    const { location } = point;
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: PinIcon,
      },
    );

    marker
      .addTo(layerGroup)
      .bindPopup(() => renderCard(point),
        {
          keepInView: true,
        },
      );
  });

}


export { createMapPin, removeMapPin, adressDefoult };
