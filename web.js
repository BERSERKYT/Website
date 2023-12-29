function updateCountryCode() {
    var countrySelect = document.getElementById("country");
    var selectedOption = countrySelect.options[countrySelect.selectedIndex];
    var countryCode = selectedOption.getAttribute("data-image");

    countrySelect.style.backgroundImage = "url('" + countryCode + "')";
}

// Si vous souhaitez également mettre à jour l'indicatif dans le champ de téléphone
document.getElementById("country").addEventListener("change", updatePhoneCode);

function updatePhoneCode() {
    var countrySelect = document.getElementById("country");
    var selectedOption = countrySelect.options[countrySelect.selectedIndex];
    var phoneInput = document.getElementById("phone");
    var phoneCode = selectedOption.getAttribute("data-code");

    phoneInput.placeholder = "Ex. " + phoneCode;
}
