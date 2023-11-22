function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName("section-box");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active-section");
    }

    // Remove bold style from all nav links
    var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].style = "font-weight: normal";
        navLinks[i].style.backgroundImage = "none";
    }

    // Show the selected section and make font bold for the nav link
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add("active-section");

    // Highlight the active nav link
    var newSelectedNavLink = document.querySelector('nav a[href="#' + sectionId + '"]');
    newSelectedNavLink.style = "background-image: linear-gradient( 135deg, #D0EDA6 10%, #99DB39 100%); font-weight: 900";
}