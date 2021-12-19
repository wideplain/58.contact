window.addEventListener('load', () => {
    document.querySelectorAll(".gallery-page-image").forEach(function (image) {
        image.addEventListener('click', (event) => {
            if (image.style.width == "100%") {
                image.style.width = ""
            } else {
                image.style.width = "100%"
            }
        })
    });
});