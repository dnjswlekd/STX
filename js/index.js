function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// header
function scrollToSection(sectionClass) {
  const section = document.querySelector(sectionClass);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
