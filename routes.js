const COUNTRIES = 'https://restcountries.eu/rest/v2'
const GET_COUNTRY_BY_FULLNAME = (name, params) => `${COUNTRIES}/name/${name}?${params}`

