## Задача:
[Сверстать страницу галереи изображений](https://github.com/shri-msk-2017/rwd-home-task/).

### Чеклист

- Превью изображений, при клике изображение открывается на весь экран

Реализован класс модального окна с анимацией. Закрытие осуществляется
 по клику на крестик либо по клику в области вне картинки.

- заголовок не более 2 строк на всех экранах + на больших экранах размер текста обеспечивает оптимальную длину строки

Сделано через `rem`.

- картинки могут быть любых размеров, превью масштабируются до одинаковой высоты +

- блоки с картинками занимают всю ширину страницы и распределяются по следующему правилу:
каждая первая из 7 картинок стремится к значению ширины 550px, каждая 4 - к 460px, все остальные картинки распределяются по оставшейся ширине

Сделано через `nth-child` селекторы + `display: flex`

- поддержка ретины -

- футер всегда находится внизу страницы, даже если контент не занимает всю область

Сделано через `display: flex` + `min-height: 100vh;`

- верстка должна быть кроссбраузерной

Post-css плагин `autoprefixer` автоматически проставляет префиксы для поддержки двумя последними версиями основных браузеров.

- классы по БЭМ +

- оптимизация изображений

Для превью используются отдельные легковесные превьюшки.