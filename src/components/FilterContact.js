import PropTypes from 'prop-types';
import { FilterStyle, FilterStyleinput } from './Layout.js';

export const FilterContacts = ({ filter, onChangeFilter }) => {
  return (
    <FilterStyle >
          <label>Find contacts by name</label>
          <FilterStyleinput
        type="text"
        value={filter}
        onChange={onChangeFilter}
      ></FilterStyleinput>
     
    </FilterStyle>
  );
};

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
