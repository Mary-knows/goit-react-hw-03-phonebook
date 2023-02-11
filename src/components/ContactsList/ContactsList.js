import React from 'react';
import PropTypes from 'prop-types';
import './ContactsList.css'

const ContactsList = ({ contacts, onDelete }) => (
    <ul className='ContactsList'>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className='ContactsList__item'>
                {name} : {number}
                <button className='ContactsList__btn' type="button" onClick={() => onDelete(id)}>Delete</button>
            </li> 
        )
        )}
    </ul>
)

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
