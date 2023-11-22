function applyTranslations(translation) {
  // Apply translations to header elements as needed
  document.title = translation.heading;
  document.getElementById('heading').querySelector('h2').textContent = translation.heading;
  document.getElementById('introduction').querySelector('h2').textContent = translation.introduction;
  document.getElementById('appearance').querySelector('h2').textContent = translation.appearance;
  document.getElementById('habitat').querySelector('h2').textContent = translation.habitat;
  document.getElementById('diet').querySelector('h2').textContent = translation.diet;
  document.getElementById('solitary-nature').querySelector('h2').textContent = translation.solitary_nature;
  document.getElementById('survival-threats').querySelector('h2').textContent = translation.survival_threats;

  // Apply translations to navigation elements as needed
  document.getElementById('nav1').textContent = translation.introduction;
  document.getElementById('nav2').textContent = translation.appearance;
  document.getElementById('nav3').textContent = translation.habitat;
  document.getElementById('nav4').textContent = translation.diet;
  document.getElementById('nav5').textContent = translation.solitary_nature;
  document.getElementById('nav6').textContent = translation.survival_threats;

  // Apply translations to paragraph elements as needed
  document.getElementById('introduction').querySelector('p').textContent = translation.introduction_p;
  document.getElementById('appearance').querySelector('p').textContent = translation.appearance_p;
  document.getElementById('habitat').querySelector('p').textContent = translation.habitat_p;
  document.getElementById('diet').querySelector('p').textContent = translation.diet_p;
  document.getElementById('solitary-nature').querySelector('p').textContent = translation.solitary_nature_p;
  document.getElementById('survival-threats').querySelector('p').textContent = translation.survival_threats_p;

  // Apply translations to copyright element as needed
  document.getElementById('footer').textContent = translation.copyright;

}