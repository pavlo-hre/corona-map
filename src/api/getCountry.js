import Axios from 'axios';

export const getCountry = async () => {

  const {data: totalData} = await Axios.get('https://corona.lmao.ninja/v2/all');

  const {data: {'-M6xgO2PkOLn2zZvB_DX': countries}} = await Axios
    .get('https://countrydata-2c7ac.firebaseio.com/countries.json');

  const {data: newApiData} = await Axios.get('https://corona.lmao.ninja/v2/countries');

  const result = newApiData.map(country => {
    countries.forEach(item => {
      if (country.countryInfo && country.countryInfo.iso2 === item.alpha2Code) {
        country = {
          ...item,
          latlng: [...item.latlng].reverse(),
          cases: country.cases,
          active: country.active,
          recovered: country.recovered,
          deaths: country.deaths,
          todayCases: country.todayCases,
          todayDeaths: country.todayDeaths
        };
      }
    });
    return country;
  });

  return {totalData, result};
};

