document.addEventListener("DOMContentLoaded", () => {
    const addButtons = document.querySelectorAll(".addButton");
    const cardContainers = document.querySelectorAll(".cardContainer");
    let itemsArray = Array.from({ length: addButtons.length }, () => []);
    let activeInputBox = null;

    addButtons.forEach((button, btnIndex) => {
        button.addEventListener("click", () => {
            if (activeInputBox && activeInputBox.value.trim() !== "") {
                return;
            }
            if (activeInputBox) {
                activeInputBox.remove();
            }
            
            let inputBox = document.createElement("input");
            inputBox.type = "text";
            inputBox.classList.add("inputBox");
            inputBox.setAttribute("required", "true");
            cardContainers[btnIndex].parentNode.insertBefore(inputBox, cardContainers[btnIndex]);
            inputBox.focus();
            activeInputBox = inputBox;

            inputBox.addEventListener("keydown", (event) => {
                if (event.key === "Enter" && inputBox.value.trim() !== "") {
                    const text = inputBox.value.trim();
                    itemsArray[btnIndex].push(text);
                    inputBox.remove();
                    activeInputBox = null;
                    updateCards(btnIndex);
                }
            });
        });
    });

    function updateCards(index) {
        cardContainers[index].innerHTML = "";
        itemsArray[index].forEach((item, itemIndex) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `<span>${item}</span> <button class="close" data-index="${itemIndex}" data-btnindex="${index}">X</button>`;
            cardContainers[index].appendChild(card);
        });
        attachCloseEvents();
    }

    function attachCloseEvents() {
        document.querySelectorAll(".close").forEach(button => {
            button.addEventListener("click", (event) => {
                const itemIndex = event.target.getAttribute("data-index");
                const btnIndex = event.target.getAttribute("data-btnindex");
                itemsArray[btnIndex].splice(itemIndex, 1);
                updateCards(btnIndex);
            });
        });
    }
});
