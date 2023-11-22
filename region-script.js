function updateDateTime() {
    var currentDateTimeElement = document.getElementById('currentDateTime');
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    var currentDateTime;

    if (currentLanguage === 'de') {
        // German locale
        currentDateTime = new Date().toLocaleString('de-DE', options);
    } else if (currentLanguage === 'en') {
        // English locale
        currentDateTime = new Date().toLocaleString('en-US', options);
    } else if (currentLanguage === 'es') {
        // Spanish locale
        currentDateTime = new Date().toLocaleString('es-ES', options);
    } else if(currentLanguage === 'fr') {
		// French locale
		currentDateTime = new Date().toLocaleString('fr-FR', options);
	} else if(currentLanguage === 'ja') {
		// Japanese locale
		currentDateTime = new Date().toLocaleString('ja-JP', options);
	} else if(currentLanguage === 'ko') {
		// Korean locale
		currentDateTime = new Date().toLocaleString('ko-KR', options);
	} else {
        // Default to English if the language is not recognized
        currentDateTime = new Date().toLocaleString('en-US', options);
    }

    currentDateTimeElement.innerHTML = currentDateTime;
}
