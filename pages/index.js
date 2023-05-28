import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithBuy from '../components/PopupWithBuy.js';
import PopupWithImage from '../components/PopupWithImage.js';
/*
import {
  initialCards,
  settings,
  profileForm,
  photoForm,
  editPopupButton,
  addPopupButton,
} from '../utils/constants.js';
*/

const fashionCards = [
  {
    name: 'Сумки',
    link: 'https://images.unsplash.com/photo-1683922579559-ef239893ccac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '02.05.2023',
  },
  {
    name: 'Серьги',
    link: 'https://images.unsplash.com/photo-1684771002359-e5a78eeb33d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80',
    date: '22.05.2023',
  },
  {
    name: 'Комплект украшений',
    link: 'https://images.unsplash.com/photo-1684771002403-70622a566d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=434&q=80',
    date: '22.05.2023',
  },
  {
    name: 'Пудра',
    link: 'https://images.unsplash.com/photo-1679423989411-b159f9cbab25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    date: '21.03.2023',
  },
  {
    name: 'Духи',
    link: 'https://images.unsplash.com/photo-1676924873855-a77e7fe40791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '21.02.2022',
  },
  {
    name: 'Набор для макияжа',
    link: 'https://images.unsplash.com/photo-1600869515873-0cec54f54805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '23.09.2020',
  },
  {
    name: 'Комплект украшений',
    link: 'https://images.unsplash.com/photo-1682823540850-541887c8de3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '30.04.2023',
  },
  {
    name: 'Духи Prada',
    link: 'https://images.unsplash.com/photo-1681432268753-9121b680d83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    date: '14.04.2023',
  },
  {
    name: 'Губная помада',
    link: 'https://images.unsplash.com/photo-1681679103943-cff212a6461a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '17.04.2023',
  },
  {
    name: 'Духи мужские',
    link: 'https://images.unsplash.com/photo-1676487538577-fc5a7143a2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=438&q=80',
    date: '15.02.2023',
  },
  {
    name: 'Часы',
    link: 'https://images.unsplash.com/photo-1677083800091-825eb72cb2a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    date: '22.02.2023',
  },
];

const interiorCards = [
  {
    name: 'Кофейный столик',
    link: 'https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '11.05.2018',
  },
  {
    name: 'Гостиная, лобби',
    link: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '18.03.2021',
  },
  {
    name: 'Оформление стены',
    link: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '18.08.2018',
  },
  {
    name: 'Гостиная с камином',
    link: 'https://images.unsplash.com/photo-1615874694520-474822394e73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '16.03.2021',
  },
  {
    name: 'Гостиная',
    link: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    date: '23.03.2021',
  },
  {
    name: 'Рабочее место',
    link: 'https://images.unsplash.com/photo-1616593918824-4fef16054381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '24.03.2021',
  },
  {
    name: 'Кухня',
    link: 'https://images.unsplash.com/photo-1616594266774-769089710d76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '24.03.2021',
  },
  {
    name: 'Гостиная',
    link: 'https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '16.03.2021',
  },
  {
    name: 'Рабочее место',
    link: 'https://images.unsplash.com/photo-1615875388242-46b822b09cda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    date: '16.03.2021',
  },
  {
    name: 'Спальня',
    link: 'https://images.unsplash.com/photo-1618219629869-9ef11e2d7701?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    date: '12.04.2021',
  },
  {
    name: 'Гостиная',
    link: 'https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '12.03.2021',
  },
  {
    name: 'Декор стены',
    link: 'https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    date: '12.04.2021',
  },
  {
    name: 'Место для отдыха',
    link: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '16.09.2017',
  },
];

const artCards = [
  {
    name: 'Египетская фреска',
    link: 'https://images.unsplash.com/photo-1683144298844-a2128e48883a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '04.05.2023',
  },
  {
    name: 'Мазандаранская провинция',
    link: 'https://images.unsplash.com/photo-1684483879055-690f9b58831b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
    date: '19.05.2023',
  },
  {
    name: 'Гранд макет',
    link: 'https://images.unsplash.com/photo-1683628005690-6d343fd3f365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '30.04.2023',
  },
  {
    name: 'Окно в сад',
    link: 'https://images.unsplash.com/photo-1682837117533-13d16b168d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '26.03.2023',
  },
  {
    name: 'Фестиваль фонарей',
    link: 'https://images.unsplash.com/photo-1500754088824-ce0582cfe45f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
    date: '23.07.2017',
  },
  {
    name: 'Всадник',
    link: 'https://images.unsplash.com/photo-1683376873874-4cd0cc033235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '05.05.2023',
  },
  {
    name: 'Мост',
    link: 'https://images.unsplash.com/photo-1683177920180-0175523b0271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    date: '02.05.2023',
  },
  {
    name: 'Ночной город',
    link: 'https://images.unsplash.com/photo-1542466500-dccb2789cbbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
    date: '17.11.2018',
  },
  {
    name: 'Уличный музыкант',
    link: 'https://images.unsplash.com/photo-1682253572700-4173885b68f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '23.04.2023',
  },
  {
    name: 'Городская архитектура',
    link: 'https://images.unsplash.com/photo-1683351488105-7c89b7e86b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '06.05.2023',
  },
  {
    name: 'Журналы',
    link: 'https://images.unsplash.com/photo-1681554085454-93da5a5663f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=441&q=80',
    date: '15.04.2023',
  },
  {
    name: 'Арт',
    link: 'https://images.unsplash.com/photo-1680062305739-fe7387652174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    date: '29.03.2023',
  },
  {
    name: 'Полароид',
    link: 'https://images.unsplash.com/photo-1681137418554-5220a8daffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '10.04.2023',
  },
];

const foodCards = [
  {
    name: 'Ice-латте',
    link: 'https://images.unsplash.com/photo-1684548856346-041e1a90d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '20.05.2023',
  },
  {
    name: 'Шоколадные конфеты',
    link: 'https://images.unsplash.com/photo-1684538924717-1a60db97a90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80',
    date: '19.05.2023',
  },
  {
    name: 'Клубника',
    link: 'https://images.unsplash.com/photo-1684378784787-1b8ca456118e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    date: '17.05.2023',
  },
  {
    name: 'Фруктовые десерты',
    link: 'https://images.unsplash.com/photo-1683700152394-bb7b6c1d9aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '10.05.2023',
  },
  {
    name: 'Капучино',
    link: 'https://images.unsplash.com/photo-1683900694874-6885a9a0523e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    date: '12.05.2023',
  },
  {
    name: 'Яичница',
    link: 'https://images.unsplash.com/photo-1684248182456-c75e55e46e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    date: '15.05.2023',
  },
  {
    name: 'Фокачча',
    link: 'https://images.unsplash.com/photo-1667895210591-d999b9b6fecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '08.11.2022',
  },
  {
    name: 'Салат',
    link: 'https://images.unsplash.com/photo-1684243841387-9657e956afb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '13.05.2023',
  },
  {
    name: 'Гамбургер',
    link: 'https://images.unsplash.com/photo-1524817935500-bb9d3a1dd6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    date: '27.04.2028',
  },
  {
    name: 'Картошка фри',
    link: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    date: '07.02.2018',
  },
  {
    name: 'Пироженое',
    link: 'https://images.unsplash.com/photo-1681227222904-999593a56956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    date: '11.04.2023',
  },
  {
    name: 'Печенье',
    link: 'https://plus.unsplash.com/premium_photo-1670895802275-ed748ced4309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    date: '13.12.2022',
  },
];

const settings = {
  inputSelector: '.form__input',
  submitButtonSelector: '.button-submit',
  inactiveButtonClass: 'button-submit_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'error_active',
  errorSpanPostfix: '-error',
};

const buyForm = document.forms.buy;

let buyList = [];

const buyFormValidation = new FormValidator(settings, buyForm);
buyFormValidation.enableValidation();

const zoomPopup = new PopupWithImage('.popup_zoom');

const buyPopup = new PopupWithBuy('.popup_buy', (inputValues) => {
  console.log(inputValues['color'].checked);
  const newBuy = {
    name: buyForm.querySelector('.popup__cover').alt,
    link: buyForm.querySelector('.popup__cover').src,
    number: inputValues.number,
    color: buyForm.elements['color'].value,
  };
  buyList.unshift(newBuy);
  console.log(buyList);
});

const cardListFashion = new Section(
  {
    items: fashionCards,
    renderer: (item) => {
      const card = new Card(
        item,
        '.card-template',
        () => {
          zoomPopup.open(card);
        },

        () => {
          buyPopup.open(card);
          buyFormValidation.resetErrors();
          buyFormValidation.toggleButtonState();
        }
      );
      const cardElement = card.generateCard();
      cardListFashion.addItem(cardElement);
    },
  },
  '.category__elements-fashion'
);

cardListFashion.renderItems();

const cardListInterior = new Section(
  {
    items: interiorCards,
    renderer: (item) => {
      const card = new Card(
        item,
        '.card-template',
        () => {
          zoomPopup.open(card);
        },

        () => {
          buyPopup.open(card);
          buyFormValidation.resetErrors();
          buyFormValidation.toggleButtonState();
        }
      );
      const cardElement = card.generateCard();
      cardListInterior.addItem(cardElement);
    },
  },
  '.category__elements-interior'
);

cardListInterior.renderItems();

const cardListArt = new Section(
  {
    items: artCards,
    renderer: (item) => {
      const card = new Card(
        item,
        '.card-template',
        () => {
          zoomPopup.open(card);
        },

        () => {
          buyPopup.open(card);
          buyFormValidation.resetErrors();
          buyFormValidation.toggleButtonState();
        }
      );
      const cardElement = card.generateCard();
      cardListArt.addItem(cardElement);
    },
  },
  '.category__elements-art'
);

cardListArt.renderItems();

const cardListFood = new Section(
  {
    items: foodCards,
    renderer: (item) => {
      const card = new Card(
        item,
        '.card-template',
        () => {
          zoomPopup.open(card);
        },

        () => {
          buyPopup.open(card);
          buyFormValidation.resetErrors();
          buyFormValidation.toggleButtonState();
        }
      );
      const cardElement = card.generateCard();
      cardListFood.addItem(cardElement);
    },
  },
  '.category__elements-food'
);

cardListFood.renderItems();

const nightButton = document.querySelector('.button-night');
const bodyElement = document.querySelector('.body');
const captionsElement = document.querySelectorAll('.element__caption');
const headerLinksElement = document.querySelectorAll('.header__menu-link');
const footerLinksElement = document.querySelectorAll('.footer__nav-link');
const footerElement = document.querySelector('.footer');

nightButton.addEventListener('mousedown', () => {
  nightButton.classList.toggle('button-night_active');
  bodyElement.classList.toggle('body_night');
  captionsElement.forEach((captionElement) => {
    captionElement.classList.toggle('element__caption-night');
  });
  headerLinksElement.forEach((headerLinkElement) => {
    headerLinkElement.classList.toggle('header__menu-link-night');
  });
  footerLinksElement.forEach((footerLinkElement) => {
    footerLinkElement.classList.toggle('footer__nav-link-night');
  });
  footerElement.classList.toggle('footer-night');
});

const homeButton = document.querySelector('.button-home');

homeButton.onclick = function () {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
