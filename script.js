document.addEventListener("DOMContentLoaded", function () {

    const enterButton = document.getElementById("enterButton");
    const opening = document.querySelector(".opening");

    if (enterButton && opening) {

        enterButton.addEventListener("click", function () {

            opening.classList.add("hide");

        });

    }

});
