/*Шапка сайту*/

document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector(".burger-icon");
    const mobileMenu = document.querySelector(".mobile-menu-content");

    burgerIcon.addEventListener("click", function() {
        mobileMenu.classList.toggle('active');
    });
});

document.querySelector('.burger-icon').addEventListener('click', function() {
    var menuContent = document.querySelector('.mobile-menu-content');
    if (menuContent.classList.contains('active')) {
        menuContent.classList.remove('active');
    } else {
        menuContent.classList.add('active');
    }
});

$(document).ready(function(){
    $('.brands-carousel').slick({
        autoplay: true, // Автоматична прокрутка
        autoplaySpeed: 10000, // Швидкість автоматичної прокрутки
        dots: false, // Включення пагінації (точки)
        arrows: true, // Включення стрілок
        infinite: true, // Безкінечне прокручування
        speed: 2500, // Швидкість переключення слайдів
        slidesToShow: 3, // Кількість слайдів, які показуються одночасно
        slidesToScroll: 1, // Кількість слайдів для прокрутки за один раз
        responsive: [ // Налаштування адаптивності
            {
                breakpoint: 768, // Для пристроїв з розширенням до 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Для пристроїв з розширенням до 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


