export default class Card {
  constructor(item, templateSelector, handleCardClick, handleCardBuy) {
    this._name = item.name;
    this._link = item.link;
    this._date = item.date;
    this._handleCardClick = handleCardClick;
    this._handleCardBuy = handleCardBuy;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
  }

  _eventListeners = () => {
    const elementCover = this._element.querySelector('.element__cover');
    elementCover.addEventListener('click', () =>
      this._handleCardClick(this._name, this._link)
    );

    const buyButton = this._element.querySelector('.button-buy');
    buyButton.addEventListener('click', () => {
      this._handleCardBuy((this._name, this._link));
    });
  };

  generateCard() {
    const day = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ];
    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    this._element = this._getTemplate();
    const elementCover = this._element.querySelector('.element__cover');
    const elementTitle = this._element.querySelector('.element__title');
    const elementDate = this._element.querySelector('.element__date');
    elementCover.src = this._link;
    elementCover.alt = this._name;
    elementTitle.textContent = this._name;
    elementTitle.title = this._name;
    elementDate.textContent = `Добавлено: ${
      day[this._date.getDay()]
    }, ${Math.ceil(this._date.getDate() / 7)} неделя ${
      months[this._date.getMonth()]
    } ${this._date.getFullYear()} года`;

    const buyButton = this._element.querySelector('.button-buy');

    elementCover.addEventListener('click', () => this._handleCardClick());
    buyButton.addEventListener('click', () => this._handleCardBuy());
    this._eventListeners();

    return this._element;
  }
}
