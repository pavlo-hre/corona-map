import React from 'react';
import Select from 'react-select';
import {customStyles} from './customStyle';


const NoOptionsMessage = () => {
  return (
    <div style={{padding: 10}}>Совпадений не
      найдено...</div>
  );
};

const HeaderSelect = props => {
  const {countries, setLocation, location} = props;
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
      placeholder={'Выберите страну'}
      value={location && {value: location.name, label: location.nameRus}}
    />
  );
};
export default HeaderSelect;
