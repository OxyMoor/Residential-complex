$(document).on('click','.js-videoPoster',function(e) {
//отменяем стандартное действие button
e.preventDefault();
var poster = $(this);
// ищем родителя ближайшего по классу
var wrapper = poster.closest('.js-videoWrapper');
videoPlay(wrapper);
});

//вопроизводим видео, при этом скрывая постер
function videoPlay(wrapper) {
var iframe = wrapper.find('.js-videoIframe');
// Берем ссылку видео из data
var src = iframe.data('src');
// скрываем постер
wrapper.addClass('videoWrapperActive');
// подставляем в src параметр из data
iframe.attr('src',src);
}

var _burger = document.getElementById('burgerMenu');
var _navigation = document.getElementById('nav');
_burger.addEventListener('click', function (event) {
    _burger.classList.toggle ('burger-christ');
    _navigation.classList.toggle ('menu-column'); 
})

var _watchButton = document.getElementById('watchButton');
var _contactsButton = document.getElementById('contactsButton');
_watchButton.addEventListener('click', function (event) {
    alert('Упс! Здесь пока ничего не работает');
});
_contactsButton.addEventListener('click', function (event) {
    alert('Упс! Здесь пока ничего не работает');
});

