import React, {useState} from 'react';
import Select from 'react-select';

const options = [
  {value: 'a', label: '1', id: 111},
  {value: 'b', label: '2'},
  {value: 'pa', label: 'sd'},
];

const HeaderSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };
  return (
    <Select
      isClearable
      onChange={handleChange}
      options={options}
      placeholder={'Введите страну'}
    />
  );
};
export default HeaderSelect;
