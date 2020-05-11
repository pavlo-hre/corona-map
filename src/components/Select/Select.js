import React, {useContext} from 'react';
import Select from 'react-select';
import {CountriesContext} from '../../context/countries/context';
import {customStyles} from './customStyle';


const NoOptionsMessage = () => {
  return (
    <div style={{padding: 10}}>Совпадений не
      найдено...</div>
  );
};

const HeaderSelect = () => {
  const {countries, setLocation, location} = useContext(CountriesContext);
  const options = countries
    ?
    countries.map(item => ({
      value: item.name,
      label: item.nameRus,
    }))
    :
    [];
  const handleChange = option => {
    let location = option ? countries.find(el => el.name === option.value) : null;
    setLocation(location);
  };

  return (
    <Select
      styles={customStyles}
      autoFocus
      components={{NoOptionsMessage}}
      isClearable
      onChange={handleChange}
      options={options}
      placeholder={'Введите страну'}
      value={location && {value: location.name, label: location.nameRus}}
    />
  );
};
export default HeaderSelect;
