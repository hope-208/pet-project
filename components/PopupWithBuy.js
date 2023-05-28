import Popup from './Popup.js';

export default class PopupWithBuy extends Popup {
  constructor(popupSelector, handleFormSubmit, handleThinkPopup) {
    super(popupSelector);
    this.buyPhoto = this._container.querySelector('.popup__cover');
    this._form = this._container.querySelector('.form');
    this._handleFormSubmit = handleFormSubmit;
    this._handleThinkPopup = handleThinkPopup;
    this.setEventListeners();
    this._buttonSubmit = this._form.querySelector('.button-submit');
  }

  _getInputValues() {
    const formData = new FormData(this._form);
    for (const pair of formData.entries()) {
      values[pair[0]] = pair[1];
    }
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      alert('Спасибо за покупку!');
      this.close();
    });
  }

  open(card) {
    this.buyPhoto.setAttribute('src', card._link);
    this.buyPhoto.setAttribute('alt', card._name);
    this.buyPhoto.setAttribute('title', card._name);
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }

  loading(isLoading, content) {
    if (isLoading) {
      this._buttonSubmit.textContent = 'Купить...';
    } else {
      this._buttonSubmit.textContent = content;
    }
  }
}
