const TypeOfHouse = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
}

const NumberOfGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
}

const adForm = document.querySelector('.ad-form')
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const formTime = adForm.querySelector('.ad-form__element--time');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');

const onTypeOfHouseChange = () => {
  const minPrice = TypeOfHouse[type.value];
  price.placeholder = minPrice;
  price.min = minPrice;
}

type.addEventListener('change', onTypeOfHouseChange);

formTime.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
  timeIn.value = evt.target.value;
});


const validateRooms = () => {
  const roomValue = roomNumber.value;

  guestNumber.forEach((guest) => {
    const isDisabled = (NumberOfGuests[roomValue].indexOf(guest.value) === -1);
    guest.selected = NumberOfGuests[roomValue][0] === guest.value;
    guest.disabled = isDisabled;
    guest.hidden = isDisabled;
  });
}

validateRooms();

const onRoomNumberChange = () => {
  validateRooms();
}

roomNumber.addEventListener('change', onRoomNumberChange);
