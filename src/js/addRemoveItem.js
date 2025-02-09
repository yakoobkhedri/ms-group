document.addEventListener('DOMContentLoaded', () => {
    // تعریف کلاس CardComponent
    class CardComponent {
        constructor(container) {
            this.container = container;
            this.cards = [];
            this.render();
        }

        render() {
            // ساخت ساختار HTML کامپوننت
            this.container.innerHTML = `
                 <div class="inputContainer flex items-center flex-wrap gap-2">
                    <div class="addCardSection flex items-center gap-2 w-full">
                        <div class="addCardBtn transition hover:bg-green-700 hover:text-white w-6 h-6 rounded-full flex items-center justify-center bg-green-300 text-green-800 font-bold cursor-pointer text-lg">
                        +</div>
                        <input type="text" class="cardInput outline-none rounded-[4px] px-2 border border-[#aaa] text-sm h-[38px] w-full" placeholder="متن را وارد کنید و Enter بزنید" style="display: none;">
                    </div>
                 </div>
                 <p class="errorMessage text-red-600 text-sm mt-3"></p>
                <div class="cardsContainer flex items-center flex-wrap gap-2 mt-3"></div>
                </div>
            `;

            // انتخاب عناصر
            this.cardsContainer = this.container.querySelector('.cardsContainer');
            this.addCardBtn = this.container.querySelector('.addCardBtn');
            this.cardInput = this.container.querySelector('.cardInput');
            this.errorMessage = this.container.querySelector('.errorMessage');

            // افزودن رویدادها
            this.addCardBtn.addEventListener('click', () => this.showInput());
            this.cardInput.addEventListener('keypress', (e) => this.handleInputKeyPress(e));
        }

        showInput() {
            this.cardInput.style.display = 'block';
            this.cardInput.focus();
        }

        handleInputKeyPress(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const text = this.cardInput.value.trim();
                if (text !== '') {
                    const id = Date.now(); // ایجاد یک شناسه منحصر به فرد
                    this.cards.push({ id, text }); // اضافه کردن کارت با شناسه و متن
                    this.createCard(id, text);
                    this.cardInput.value = '';
                    this.cardInput.style.display = 'none';
                }
            }
        }

        createCard(id, text) {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.dataset.id = id; // افزودن شناسه به عنصر کارت

            const cardText = document.createElement('span');
            cardText.textContent = text;

            const removeCardBtn = document.createElement('button');
            removeCardBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash text-red-600" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            `;
            removeCardBtn.addEventListener('click', () => {
                this.cardsContainer.removeChild(cardDiv);
                // حذف کارت بر اساس شناسه
                this.cards = this.cards.filter((card) => card.id !== id);
            });

            cardDiv.appendChild(cardText);
            cardDiv.appendChild(removeCardBtn);
            this.cardsContainer.appendChild(cardDiv);
        }

        getCards() {
            return this.cards.map(card => card.text); // فقط متن کارت‌ها را برمی‌گرداند
        }
    }

    // ایجاد نمونه‌های کامپوننت برای هر بخش
    const cardComponents = document.querySelectorAll('.cardComponent');
    const cardInstances = [];
    cardComponents.forEach(container => {
        const cardInstance = new CardComponent(container);
        cardInstances.push(cardInstance);
    });

    // ارسال فرم‌ها
    const forms = document.querySelectorAll('.mainForm');
    forms.forEach((form, index) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const errorMessage = form.querySelector('.errorMessage');

            // بررسی اینکه آیا کامپوننت مربوطه وجود دارد
            if (!cardInstances[index]) {
                errorMessage.textContent = 'خطا: کامپوننت مربوطه یافت نشد.';
                return;
            }

            const cards = cardInstances[index].getCards();

            // بررسی اینکه آیا کارتی اضافه شده است یا نه
            if (cards.length === 0) {
                errorMessage.textContent = 'لطفا حداقل یک کارت اضافه کنید.';
            } else {
                errorMessage.textContent = '';

                // تبدیل آرایه کارت‌ها به JSON
                const cardsData = JSON.stringify(cards);

                // ذخیره داده‌ها در input مخفی
                const cardsInput = form.querySelector('input[name="cardsData"]');
                cardsInput.value = cardsData;

                // ارسال فرم
                // form.submit();
                console.log(cardsInput)
            }
        });
    });
});