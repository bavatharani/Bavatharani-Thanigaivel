```javascript
// ==========================================
// BAVATHARANI & THANIGAIVEL
// WEDDING INVITATION
// ==========================================


document.addEventListener("DOMContentLoaded", () => {

    const enterButton =
        document.getElementById("enterButton");

    const opening =
        document.querySelector(".opening");

    const invitation =
        document.getElementById("invitation");


    // --------------------------------------
    // OPEN INVITATION
    // --------------------------------------

    enterButton.addEventListener("click", () => {

        opening.classList.add("hide");

        setTimeout(() => {

            invitation.scrollIntoView({
                behavior: "smooth"
            });

        }, 600);

    });

});
```
