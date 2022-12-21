import PropTypes from 'prop-types';
import Contact from './Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.map(contact => (
    <Contact
      key={contact.id}
      contact={contact}
      onDeleteContact={onDeleteContact}
    />
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
