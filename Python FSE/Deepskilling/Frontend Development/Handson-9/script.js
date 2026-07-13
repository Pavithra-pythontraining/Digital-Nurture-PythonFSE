const cards = document.querySelectorAll(".course-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const course =
            card.querySelector("h3").textContent;

        alert(course);

    });

    card.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            card.click();

        }

    });

});