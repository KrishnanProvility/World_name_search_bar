const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", 
    "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", 
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Botswana", "Brazil", 
    "Bulgaria", "Burundi", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", 
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", 
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Eritrea", "Estonia", 
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", 
    "Ghana", "Greece", "Greenland", "Guatemala", "Guinea", "Haiti", "Honduras", "Hungary", 
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
    "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", 
    "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malaysia", 
    "Maldives", "Mali", "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Morocco", 
    "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", 
    "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Panama", "Paraguay", "Peru", 
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", 
    "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", 
    "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
    "Tanzania", "Thailand", "Togo", "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates", 
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const searchBox = document.getElementById("searchBox");
const countryList = document.getElementById("countryList");
const totalCountries = document.getElementById("totalCountries");
const filteredCount = document.getElementById("filteredCount");


totalCountries.textContent = countries.length;

searchBox.addEventListener("input", () => {
    const searchValue = searchBox.value.toLowerCase();
    countryList.innerHTML = ""; 

    const filteredCountries = countries.filter(country => country.toLowerCase().includes(searchValue));

    filteredCount.textContent = filteredCountries.length;

    filteredCountries.forEach(country => {
        const div = document.createElement("div");
        div.classList.add("country-item");
        div.textContent = country;
        countryList.appendChild(div);
    });
});
