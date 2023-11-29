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

    var currentDate;
    var currentTime;

    if (currentLanguage === 'de') {
        // German locale
        currentDate = new Date().toLocaleDateString('de-DE', optionsDate);
        currentTime = new Date().toLocaleTimeString('de-DE', optionsTime);
    } else if (currentLanguage === 'en') {
        // English locale
        currentDate = new Date().toLocaleDateString('en-US', optionsDate);
        currentTime = new Date().toLocaleTimeString('en-US', optionsTime);
    } else if (currentLanguage === 'es') {
        // Spanish locale
        currentDate = new Date().toLocaleDateString('es-ES', optionsDate);
        currentTime = new Date().toLocaleTimeString('es-ES', optionsTime);
    } else if (currentLanguage === 'fr') {
        // French locale
        currentDate = new Date().toLocaleDateString('fr-FR', optionsDate);
        currentTime = new Date().toLocaleTimeString('fr-FR', optionsTime);
    } else if (currentLanguage === 'ja') {
        // Japanese locale
        currentDate = new Date().toLocaleDateString('ja-JP', optionsDate);
        currentTime = new Date().toLocaleTimeString('ja-JP', optionsTime);
    } else if (currentLanguage === 'ko') {
        // Korean locale
        currentDate = new Date().toLocaleDateString('ko-KR', optionsDate);
        currentTime = new Date().toLocaleTimeString('ko-KR', optionsTime);
    } else {
        // Default to English if the language is not recognized
        currentDate = new Date().toLocaleDateString('en-US', optionsDate);
        currentTime = new Date().toLocaleTimeString('en-US', optionsTime);
    }

    currentDateTimeElement.classList.add("current-date-time");

    // Create separate span elements for date and time
    currentDateTimeElement.innerHTML = '<span class="date">' + currentDate + '</span>' +
        '<br>' +
        '<span class="time">' + currentTime + '</span>';
}