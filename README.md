# Проект: Всякая всячина

### Обзор

Проект выполнен в рамках тестового задания для отбора на курс [«Школа Frontend-разработки»](https://digdes.ru/it-university/front-end-development) от компании [Digital Design](https://digdes.ru/).

В соответствии с заданием необходимо разработать веб-страницу с использованием HTML5/CSS/Javascript, которая будет содержать набор карточек «товаров», разбитых по категориям. Информация внутри карточек может быть любой.
Вот что у меня получилось: https://hope-208.github.io/pet-project/.

Макет оформления к заданию отсутствовал, поэтому проявила фантазию. Навыки веб-дизайнера ещё предстоит развивать.

Файловая структура веб-страницы оформлена по БЭМ. Для вёрстки заголовков применяются несколько тегов от h1 до h2, текстовые блоки размечены тегом p. Присутствуют и используются по назначению элементы header, main, footer, section, div, article, form, button, input. Изображения используются растрового и векторного формата. Для создания сеток используется grid и flex. Ссылки на странице реагируют на действия пользователя по наведению мыши.

Фотографии товаров взяты из сервиса фирменной стоковой фотографии [Unsplash](https://unsplash.com).

Благодаря возможностям Javascript реализованы:

- добавление карточек товара из сформированного списка,
- всплывающее окно формы оформления заказа и благодарности за покупку,
- всплывающее окно увеличения фотографии товара при нажатии на карточку товара,
- валидация формы оформления заказа,
- переключение между тёмной и светлой темой,
- переходы между категориями,
- плавное пролистывание сайта из конца в начало (эффект кнопки "Наверх").

Планы по доработке проекта:

- реализовать кросбраузерность отображения страницы и её сборку с помощью Webpack (не была уверена в том, что по условию задания им можно пользоваться),
- сделать адаптивность сайта более плавной,
- создать базу данных товаров и заказов,
- в окне увеличения фотографии товара добавить фото на каждый выбранный цвет и возможность листать такие фотографии,
- дополнить сайт метриками для оценки посещаемости.

Автор: Телепенина Надежда.
