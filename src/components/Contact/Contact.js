import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

import { ContactItem, Item, DeleteContact } from './Contact.styled';

export function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  return (
    <ContactItem key={id}>
      <Item>
        {name}
        {': '}
        {number}
      </Item>
      <DeleteContact type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </DeleteContact>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
