document.addEventListener("DOMContentLoaded", () => {
    // Cargar traducciones desde JSON
    fetch("translations.json")
        .then(response => response.json())
        .then(translations => {
            const languageFlags = document.querySelectorAll(".language-flag");

            languageFlags.forEach(flag => {
                flag.addEventListener("click", () => {
                    const lang = flag.dataset.lang;
                    switchLanguage(lang, translations);
                });
            });

            // Idioma por defecto (inglés)
            switchLanguage("en", translations);
        })
        .catch(error => console.error("Error cargando traducciones:", error));

    function switchLanguage(lang, translations) {
        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.dataset.translate;
            element.textContent = translations[lang][key];
        });
    }

    // Reproducir música automáticamente
    const audio = document.getElementById("background-music");
    audio.play().catch(error => console.warn("La reproducción automática está bloqueada por el navegador."));
});
