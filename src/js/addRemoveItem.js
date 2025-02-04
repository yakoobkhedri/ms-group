document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('addBtn');
    const inputContainer = document.getElementById('inputContainer');
    const cardInput = document.getElementById('cardInput');
    const cardsContainer = document.getElementById('cardsContainer');

    // نمایش اینپوت وقتی دکمه + کلیک می‌شود
    addBtn.addEventListener('click', function() {
        inputContainer.classList.add('activeInput');
        cardInput.focus(); // فوکوس خودکار روی اینپوت
    });

    // اضافه کردن کارت با فشردن کلید Enter
    cardInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const text = cardInput.value.trim();
            if (text) {
                addCard(text);
                cardInput.value = ''; // پاک کردن اینپوت
                inputContainer.classList.remove('activeInput'); // مخفی کردن اینپوت
            }
        }
    });

    // تابع برای اضافه کردن کارت
    function addCard(text) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = text;

        // دکمه حذف کارت
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.textContent = '×';
        closeBtn.addEventListener('click', function() {
            cardsContainer.removeChild(card);
        });

        card.appendChild(closeBtn);
        cardsContainer.appendChild(card);
    }
});