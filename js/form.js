const selectTypeOfHousing = document.querySelector('#type');
const price = document.querySelector('#price');
const formTime = document.querySelector('.ad-form__element--time');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const guestNumber = capacity.querySelectorAll('option');

const bungalow = {
  placeholder: '0',
  min: '0',
}

const flat = {
  placeholder: '1000',
  min: '1000',
}

const house = {
  placeholder: '5000',
  min: '5000',
}

const palace = {
  placeholder: '10000',
  min: '10000',
}

selectTypeOfHousing.addEventListener('change', () => {

  switch (selectTypeOfHousing.value) {
    case 'bungalow':
      price.placeholder = bungalow.placeholder
      price.min = bungalow.min
      break;
    case 'flat':
      price.placeholder = flat.placeholder
      price.min = flat.min
      break;
    case 'house':
      price.placeholder = house.placeholder
      price.min = house.min
      break;
    case 'palace':
      price.placeholder = palace.placeholder
      price.min = palace.min
      break;

  }
});

formTime.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
  timeIn.value = evt.target.value;
});

const renderGuestNumber = () => {

  guestNumber.forEach((guest) => {
    if (+roomNumber.value === 100) {
      guest.disabled = true;
      if (+guest.value === 0) {
        guest.disabled = false;
      }
    } else if ((+guest.value > roomNumber.value) || (+guest.value === 0)) {
      guest.disabled = true;
    } else {
      guest.disabled = false;
    }
  });
}

renderGuestNumber();

roomNumber.addEventListener('change', () => {
  renderGuestNumber();
});
