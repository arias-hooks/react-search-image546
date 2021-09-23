import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  }

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input onChange={onInputChange} type="text" name="search" placeholder="" value={value} />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
