import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

import { ContactItem, Item, DeleteContact } from './Contact.styled';

export function Contact({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const message = (name, number) => {
    toast.success(
      `Contact with name "${name}" and number #${number}# has been successfully deleted.`
    );
  };

  return (
    <ContactItem key={id}>
      <Item>
        {name}
        {': '}
        {number}
      </Item>
      <DeleteContact
        type="button"
        onClick={() => dispatch(deleteContact(id), message(name, number))}
      >
        Delete contact
      </DeleteContact>
    </ContactItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
