document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const inputContainer = document.getElementById("inputContainer");
    const inputBox = document.getElementById("inputBox");
    const cardContainer = document.getElementById("cardContainer");
    let items = [];

    addButton.addEventListener("click", () => {
        inputBox.classList.add('active');
        inputBox.focus();
    });

    inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && inputBox.value.trim() !== "") {
            event.preventDefault();
            const text = inputBox.value.trim();
            items.push(text);
            inputBox.value = "";
            updateCards();
        }
    });

    function updateCards() {
        cardContainer.innerHTML = "";
        items.forEach((item, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `<span>${item}</span> <button class="close" data-index="${index}">X</button>`;
            cardContainer.appendChild(card);
        });
        attachCloseEvents();
    }

    function attachCloseEvents() {
        document.querySelectorAll(".close").forEach(button => {
            button.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                items.splice(index, 1);
                updateCards();
            });
        });
    }
});
