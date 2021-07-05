const getElement = (selector) => document.querySelector(selector);

const main = getElement("#main");
const form = getElement("#form");
const search = getElement("#search");

const searchWithFullText = "fullText=true";

const getCountry = async(url) => {  
  const res = await fetch(url);
  const data = await res.json();
  showCountry(data);
}

const renderCountry = ({ flag, capital, currencies, languages }) => {
  return `<img src=${flag} alt="">
    <div class="country-info">
      <div>
        <h4 class="capital">Capital: ${capital}</h4>
      </div>
      <div class="language">
        <h4>Language: ${languages[0].name}</h4>
      </div>
      <div class="currency">
        <h4>Curreny: ${currencies[0].name + " " + currencies[0].symbol }</h4>
      </div>
    </div>`
}

const showCountry = (countries) => {
  countries.forEach((country) => {// convert to map 
    const countryElement = document.createElement('div');
    countryElement.classList.add('country');
    countryElement.innerHTML = renderCountry(country);
    main.innerHTML = '';
    main.append(countryElement);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault(); //Prevents from refreshing the page
  const searchValue = search.value.trim();
  if (searchValue && searchValue.length) {
    getCountry(GET_COUNTRY_BY_FULLNAME(searchValue, searchWithFullText));
    search.value = '' 
  }
})













  


