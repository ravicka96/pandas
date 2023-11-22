// Sample language data
const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
	{ code: "de", name: "German" },
	{ code: "ja", name: "Japanese" },
	{ code: "ko", name: "Korean" },
    // Add more languages as needed
];

let currentLanguage = "en";
let translations; // Object to store language translations

// Function to populate language list
function populateLanguageList() {
    const languageList = document.getElementById("language-list");
    languages.forEach((language) => {
        const listItem = document.createElement("li");
        listItem.textContent = language.name;
        listItem.setAttribute("data-code", language.code);
        listItem.addEventListener("click", () => changeLanguage(language.code));
        languageList.appendChild(listItem);
    });
}

// Function to change the language
function changeLanguage(languageCode) {
    // Implement logic to fetch translations based on languageCode from JSON file
    // For simplicity, just updating the displayed language here
    document.getElementById("current-language").textContent = languages.find((lang) => lang.code === languageCode).name;
	
	// Fetch translations from JSON file based on languageCode
        fetch(`i18N files/${languageCode}.json`)
            .then(response => response.json())
            .then(translationsData => {
                translations = translationsData; // Store translations globally
                updateTranslations(); // Update translations once fetched
            })
            .catch(error => console.error('Error loading translations:', error));
	
	// Update the current language variable
    currentLanguage = languageCode;

    // Update the date and time based on the new language
    updateDateTime();
}

// Event listener for the globe icon click
document.getElementById("language-selector").addEventListener("click", () => {
    const languageList = document.getElementById("language-list");
    languageList.style.display = languageList.style.display === "block" ? "none" : "block";
});

// Set 'Introduction' as the default active section
document.addEventListener("DOMContentLoaded", function () {
    showSection("introduction");
	// Initialize the language list
	populateLanguageList();
	// Update the date and time immediately when the page loads
    updateDateTime();
    // Set up the interval for updating the date and time
    setInterval(updateDateTime, 1000);
});

function updateTranslations(translations) {
    const translation = translations[currentLanguage];

    if (!translation) {
            console.error(`Translation not available for language: ${currentLanguage}`);
            return;
        }

    // Update page heading with translation
    document.getElementById("heading").querySelector("h1").textContent = translation.heading;

    // Update navigation headers with translations
    document.getElementById("nav1").textContent = translation.introduction;
    document.getElementById("nav2").textContent = translation.appearance;
    document.getElementById("nav3").textContent = translation.habitat;
    document.getElementById("nav4").textContent = translation.diet;
    document.getElementById("nav5").textContent = translation['solitary-nature'];
    document.getElementById("nav6").textContent = translation['survival-threats'];

    // Update content with translations
    document.getElementById("introduction").querySelector("h2").textContent = translation.introduction;
    document.getElementById("appearance").querySelector("h2").textContent = translation.appearance;
    document.getElementById("habitat").querySelector("h2").textContent = translation.habitat;
    document.getElementById("diet").querySelector("h2").textContent = translation.diet;
    document.getElementById("solitary-nature").querySelector("h2").textContent = translation['solitary-nature'];
    document.getElementById("survival-threats").querySelector("h2").textContent = translation['survival-threats'];
    // Add more elements to update as needed
}