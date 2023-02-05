import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/Forms/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <ContactForm />
      {isLoading && <div>'Request in progress...'</div>}
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
}
