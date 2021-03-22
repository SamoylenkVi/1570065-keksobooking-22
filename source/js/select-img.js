const FILE_TIPES = ['jpg', 'jpeg', 'png'];
const TAGNAME = 'img';

const avatar = document.querySelector('#avatar');
const avatarImageContainer = document.querySelector('.ad-form-header__preview');
const inputPhotoOfHousing = document.querySelector('.ad-form__input');
const housingPictureContainer = document.querySelector('.ad-form__photo');

const picture = {
  alt: 'Фотография жилья',
  width: 70,
  height: 70,
}

const renderImage = (container, tagName, pictureAttribut) => {

  const onAvatarChange = (evt) => {
    let element = container.querySelector(tagName);
    const file = evt.target.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TIPES.some((it) => {
      return fileName.endsWith(it);
    })

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {

        if (element === null) {
          element = document.createElement(tagName);
          element.width = pictureAttribut.width;
          element.height = pictureAttribut.height;
          element.alt = pictureAttribut.alt
          container.appendChild(element);
        }

        element.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  }
  return onAvatarChange
}

avatar.addEventListener('change', renderImage(avatarImageContainer,TAGNAME, picture));
inputPhotoOfHousing.addEventListener('change', renderImage(housingPictureContainer,TAGNAME, picture));
