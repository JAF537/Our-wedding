document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/translations/translations.json')
        .then(response => response.json())
        .then(translations => {
            const languageFlags = document.querySelectorAll('.language-flag');
            languageFlags.forEach(flag => {
                flag.addEventListener('click', () => {
                    const lang = flag.dataset.lang;
                    switchLanguage(lang, translations);
                });
            });

            function switchLanguage(lang, translations) {
                document.querySelectorAll('[data-translate]').forEach(element => {
                    const key = element.dataset.translate;
                    element.textContent = translations[lang][key];
                });
            }

            // Idioma por defecto
            switchLanguage('en', translations);
        })
        .catch(error => console.error('Error cargando traducciones:', error));

    // Slider de imágenes
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentPosition = 0;
    const imageWidth = document.querySelector('.slider-container img').clientWidth;

    nextButton.addEventListener('click', () => {
        currentPosition -= imageWidth;
        if (currentPosition < -imageWidth * (sliderContainer.children.length - 1)) {
            currentPosition = 0;
        }
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    prevButton.addEventListener('click', () => {
        currentPosition += imageWidth;
        if (currentPosition > 0) {
            currentPosition = -imageWidth * (sliderContainer.children.length - 1);
        }
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    // Slider automático
    setInterval(() => {
        nextButton.click();
    }, 3000);
});
