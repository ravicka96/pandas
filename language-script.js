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
// Function to populate language list drop-down
function populateLanguageList() {
    const languageList = document.getElementById("language-list");
    languages.forEach((language) => {
        const listItem = document.createElement("li");
        listItem.textContent = language.name;
        listItem.setAttribute("data-code", language.code);
        listItem.addEventListener("click", () => changeLanguage(language.code));
        // Add the "dropdown-item" class to the list item
        listItem.classList.add("dropdown-item");
        languageList.appendChild(listItem);
    });
}
// Event listener for the globe icon click
const languageSelector = document.getElementById("language-selector");
const languageList = document.getElementById("language-list");

  languageSelector.addEventListener("mouseenter", () => {
    languageList.style.display = "block";
  });

  languageSelector.addEventListener("click", () => {
    languageList.style.display = "none";
  });

  languageSelector.addEventListener("mouseleave", () => {
      languageList.style.display = "none";
  });
// Function to fetch translations asynchronously
async function fetchTranslations(language) {
  try {
    const response = await fetch(`i18N files/${language}.json`);
    const translation = await response.json();
    return translation;
  } catch (error) {
    console.error(`Error fetching ${language} translations:`, error);
    return null;
  }
}
async function changeLanguage(language) {
  const selectedLanguage = document.getElementById('current-language');
  selectedLanguage.textContent = getLanguageName(language);
  currentLanguage = language;

  // Fetch and apply translations
  const translation = await fetchTranslations(language);
  if (translation) {
    applyTranslations(translation);
  }
}
function getLanguageName(language) {
  // Replace with actual language names or use a language library
 switch (language) {
     case 'en':
       return 'English';
     case 'ko':
       return '한국어';
     case 'de':
       return 'Deutsch';
     case 'es' :
       return 'Español';
     case 'ja' :
       return 'Japanese';
     case 'fr' :
       return 'Français';
     // Add more cases as needed
     default:
       return language;
   }
}
