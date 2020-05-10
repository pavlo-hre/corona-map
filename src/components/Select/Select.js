import React, {useState} from 'react';
import Select from 'react-select';

// const options = [
//   {value: 'a', label: '1', id: 111},
//   {value: 'b', label: '2'},
//   {value: 'pa', label: 'sd'},
// ];
const NoOptionsMessage = () => {
  return (
    <div style={{padding: 10}}>Совпадений не найдено...</div>
  );
};

let options = new Array(250).fill(1).map((el, i) => ({
  value: `value-${i}`,
  label: i
}));

const HeaderSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  return (
    <Select

      // components={{NoOptionsMessage}}
      isClearable
      onChange={handleChange}
      options={options}
      placeholder={'Введите страну'}
    />
  );
};
export default HeaderSelect;
