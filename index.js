const countryName = document.getElementById("countryName");
const searchBtn = document.getElementById("searchCountry");
const title = document.getElementById("title");
const capital = document.getElementById("capital");
const population = document.getElementById("population");
const currencies = document.getElementById("currencies");
const language = document.getElementById("language");
const flag = document.getElementById("flag")

// Adding Event Listener
searchBtn.addEventListener("click", () => {
    countryData();
});

// Fetching data from API
const countryData = async () => {
    try {
        const rawData = await fetch(
            `https://restcountries.com/v3.1/name/${countryName.value}`
        );
        const response = await rawData.json();

        const country = response[0];
        countryInfo(country);
        function countryInfo(response) {
            flag.src = response.flags.png;
            title.innerHTML = response.name.official;
            capital.innerHTML = response.capital;
            population.innerHTML = response.population;
            currencies.innerHTML = Object.keys(response.currencies)[0];
            language.innerHTML = Object.keys(response.languages)[0];

        }

    } catch (error) {
        console.log(error);
    }

};