import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css'

const Filter = ({ value, onChange }) => (
    <label className='Filter__label'> Find contacts by Name
        <input className='Filter__input' type="text" name="filter" value={value} onChange={onChange}></input>
    </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter; 