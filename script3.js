function showPromotion() {
    var promotionText = document.getElementById("promotionText");
    promotionText.style.display = "block"; // Показуємо текст акції
    // Тут можна додати додаткову логіку анімації або інші ефекти
}

document.getElementById('gif').addEventListener('click', function() {
    this.style.display = 'none'; // Приховати гіфку
    document.querySelector('.prompt-text').style.display = 'none'; // Приховати текст "Відкрийте коробку"
    document.getElementById('hiddenText').style.display = 'block'; // Показати новий текст
});