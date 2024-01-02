function updateCountryCode() {
    var countrySelect = document.getElementById("country");
    var selectedOption = countrySelect.options[countrySelect.selectedIndex];
    var countryCode = selectedOption.getAttribute("data-image");

    countrySelect.style.backgroundImage = "none";

    countrySelect.style.backgroundImage = "url('" + countryCode + "')";
}
window.onload = updateCountryCode;

// Ajouter l'écouteur d'événements "change"
document.getElementById("country").addEventListener("change", updateCountryCode);