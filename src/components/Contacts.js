
import PropTypes from 'prop-types';
import { DeleteButton, FilterBlock } from './Layout.js';

export const Contacts = ({ contactsFilter, onDelete }) => {
  return (
    <ul>
      {contactsFilter.map(({ id, name, number }) => (
        <li key={id} >
              <FilterBlock>
                    <span>{name}: </span>
                    <span>{number}</span>     
            <DeleteButton onClick={() => onDelete(name)} >
            Delete
          </DeleteButton>        
              </FilterBlock>
        </li>
      ))}
    </ul>
  );
};



Contacts.propTypes = {
    contactsFilter: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

