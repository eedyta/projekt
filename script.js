document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            const fullscreenContainer = document.createElement('div');
            fullscreenContainer.classList.add('fullscreen');

            const fullscreenImage = document.createElement('img');
            fullscreenImage.src = this.src;

            fullscreenContainer.appendChild(fullscreenImage);
            document.body.appendChild(fullscreenContainer);

            fullscreenContainer.addEventListener('click', function() {
                document.body.removeChild(this);
            });
        });
    });
});


function changeLanguage(lang){
    fetch(`pliki/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            for (const [key, value] of Object.entries(data)) {
                console.log("Key:", key, "Value:", value); // Dodaj ten wiersz
                const element = document.getElementById(key);
                if (element) {
                    element.innerText = value;
                }
            }
        })
        .catch(error => console.error('Error loading language file:', error));
}


document.addEventListener("DOMContentLoaded", function() {
    var acceptCookiesBtn = document.getElementById("przycisk");
    var cookiesInfo = document.querySelector(".cookies-info");

    acceptCookiesBtn.addEventListener("click", function() {
        cookiesInfo.style.display = "none"; // Ukryj informację o plikach cookies po kliknięciu przycisku "Akceptuj"
    });
});


