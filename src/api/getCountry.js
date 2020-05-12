import Axios from 'axios';

export const getCountry = async () => {

  const {data: totalData} = await Axios.get('https://corona.lmao.ninja/v2/all');


  const {data: {'-M6xgO2PkOLn2zZvB_DX': countries}} = await Axios
    .get('https://countrydata-2c7ac.firebaseio.com/countries.json');
  const {data: covidData} = await Axios.get('https://api.covid19api.com/summary');
  const { Countries} = covidData;
  const res = Countries.map(country => {
    countries.forEach(item => {
      if (country.CountryCode === item.alpha2Code) {
        country = {
          ...item,
          ...country,
          latlng: [...item.latlng].reverse()
        };
      }
    });
    return country;
  });
  return {res,  totalData};
};

