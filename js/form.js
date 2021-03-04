const type = document.querySelector('#type');
const price = document.querySelector('#price');
const formTime = document.querySelector('.ad-form__element--time');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');

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

    //  в словарь numberOfGuests подставляется в значение roomValue получаем массив с возможным колличеством гостей для данного номера
    // , в массиве смотрим есть ли такой элемент при приравнивание к -1 мы получаем, что такого элемента нет,
    // то что это написанно в скобках дает нам булевое значение
    // если этого элемента нет, то нам выдает try и значит этот элемент будет disabled

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
