import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';

export const ContactList = ({ contacts }) => {
  return contacts.map(contact => (
    <Contact key={contact.id} contact={contact} />
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
