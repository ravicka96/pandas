function applyTranslations(translation) {
  // Apply translations to header elements as needed
  document.title = translation.heading;
  document.getElementById('heading').querySelector('h2').textContent = translation.heading;
  document.getElementById('introduction').querySelector('h2').textContent = translation.introduction;
  document.getElementById('appearance').querySelector('h2').textContent = translation.appearance;
  document.getElementById('habitat').querySelector('h2').textContent = translation.habitat;
  document.getElementById('diet').querySelector('h2').textContent = translation.diet;
  document.getElementById('solitary_nature').querySelector('h2').textContent = translation.solitary_nature;
  document.getElementById('survival_threats').querySelector('h2').textContent = translation.survival_threats;

  // Apply translations to navigation elements as needed
  document.getElementById('introduction_p').textContent = translation.introduction;
  document.getElementById('appearace_p').textContent = translation.appearance;
  document.getElementById('habitat_p').textContent = translation.habitat;
  document.getElementById('diet_p').textContent = translation.diet;
  document.getElementById('solitary_nature_p').textContent = translation.solitary_nature;
  document.getElementById('survival_threats_p').textContent = translation.survival_threats;

  // Apply translations to paragraph elements as needed
  document.getElementById('introduction').querySelector('p').textContent = translation.introduction_p;
  document.getElementById('appearance').querySelector('p').textContent = translation.appearance_p;
  document.getElementById('habitat').querySelector('p').textContent = translation.habitat_p;
  document.getElementById('diet').querySelector('p').textContent = translation.diet_p;
  document.getElementById('solitary_nature').querySelector('p').textContent = translation.solitary_nature_p;
  document.getElementById('survival_threats').querySelector('p').textContent = translation.survival_threats_p;

  // Apply translations to copyright element as needed
  document.getElementById('footer').textContent = translation.copyright;

}