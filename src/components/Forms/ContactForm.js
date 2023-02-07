import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { FormStyled, InputStyled } from './Forms.styled';
import { toast } from 'react-hot-toast';

export function ContactForm() {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    if (
      contacts.find(
        item =>
          item.name.toLowerCase() === form.elements.name.value.toLowerCase()
      )
    ) {
      toast.error(
        `A contact with the name ${form.elements.name.value} already exists.`
      );
      return;
    }
    if (contacts.find(item => item.number === form.elements.phone.value)) {
      toast.error(
        `A contact with the number ${form.elements.phone.value} already exists.`
      );
      return;
    }
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.phone.value,
      }),
      toast.success(
        `A contact with the name ${form.elements.name.value} has been successfully added.`
      )
    );

    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <InputStyled
          type="text"
          name="name"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <br />
        <InputStyled
          type="tel"
          name="phone"
          autoComplete="off"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <InputStyled type="submit" value="Add contact" />
    </FormStyled>
  );
}
