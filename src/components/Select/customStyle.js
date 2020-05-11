export const customStyles = {
  menu: provided => ({
    ...provided,
    backgroundColor: '#393939',
    marginTop: 5,
    color: '#fff',
  }),
  control: (provided, {isFocused}) => ({
    ...provided,
    backgroundColor: '#393939',
    border: 'none',
    cursor: 'pointer',
    boxShadow: isFocused ? '0 0 15px 1px rgba(219,42,42,0.75)' : 'none',
  }),
  option: (provided, {isFocused, isSelected}) => ({
    ...provided,
    backgroundColor: isSelected
      ? '#fff'
      : isFocused
        ? '#fff'
        : null,
    color: isSelected
      ? '#000'
      : isFocused
        ? '#000'
        : null,
    cursor: 'pointer',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#fff',
  }),
  singleValue: provided => ({
    ...provided,
    color: '#fff',
  }),
  input: provided => ({
    ...provided,
    color: '#fff',
  }),
  clearIndicator: provided => ({
    ...provided,
    color: '#fff',
    ':hover': {
      color: '#fff',
    }
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#fff',
    ':hover': {
      color: '#fff',
    }
  }),
};
