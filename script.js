document.addEventListener("DOMContentLoaded", function () {

    const enterButton = document.getElementById("enterButton");
    const music = document.getElementById("weddingMusic");

    if (enterButton) {
        enterButton.addEventListener("click", function () {

            // Hide opening screen
            const openingScreen = document.getElementById("opening-screen");

            if (openingScreen) {
                openingScreen.classList.add("hidden");
            }

            // Show invitation
            const invitation = document.getElementById("invitation");

            if (invitation) {
                invitation.classList.add("show");
            }

            // Play music
            if (music) {
                music.play().catch(function (error) {
                    console.log("Music could not autoplay:", error);
                });
            }

        });
    }

});
