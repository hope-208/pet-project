import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithBuy from '../components/PopupWithBuy.js';
import PopupWithImage from '../components/PopupWithImage.js';

import {
  fashionCards,
  interiorCards,
  artCards,
  foodCards,
  settings,
  buyForm,
  nightButton,
  bodyElement,
  captionsElement,
  headerLinksElement,
  footerLinksElement,
  footerElement,
  homeButton,
  buyList,
} from '../utils/constants.js';

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

homeButton.onclick = function () {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const smoothJumpUp = function () {
  if (bodyElement.scrollTop > 0 || homeButton.scrollTop > 0) {
    window.scrollBy(0, -50);
    setTimeout(smoothJumpUp, 10);
  }
};

window.onscroll = function () {
  const scrolled = window.pageYOffset || homeButton.scrollTop;
  if (scrolled > 5200) {
    homeButton.classList.add('button-home_show');
  } else {
    homeButton.classList.remove('button-home_show');
  }
};
