function updateDateTime() {
    var currentDateTimeElement = document.getElementById('currentDateTime');
    var optionsDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    var optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    var currentDateTime;

    if (currentLanguage === 'de') {
        // German locale
        currentDateTime = new Date().toLocaleDateString('de-DE', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('de-DE', optionsTime);
    } else if (currentLanguage === 'en') {
        // English locale
        currentDateTime = new Date().toLocaleDateString('en-US', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('en-US', optionsTime);
    } else if (currentLanguage === 'es') {
        // Spanish locale
        currentDateTime = new Date().toLocaleDateString('es-ES', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('es-ES', optionsTime);
    } else if (currentLanguage === 'fr') {
        // French locale
        currentDateTime = new Date().toLocaleDateString('fr-FR', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('fr-FR', optionsTime);
    } else if (currentLanguage === 'ja') {
        // Japanese locale
        currentDateTime = new Date().toLocaleDateString('ja-JP', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('ja-JP', optionsTime);
    } else if (currentLanguage === 'ko') {
        // Korean locale
        currentDateTime = new Date().toLocaleDateString('ko-KR', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('ko-KR', optionsTime);
    } else {
        // Default to English if the language is not recognized
        currentDateTime = new Date().toLocaleDateString('en-US', optionsDate) +
            '<br>' +
            new Date().toLocaleTimeString('en-US', optionsTime);
    }

    currentDateTimeElement.classList.add("current-date-time");

    currentDateTimeElement.innerHTML = currentDateTime;
}
