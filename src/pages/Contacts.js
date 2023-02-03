import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'} </div>
      <Filter />
      <ContactList />
    </>
  );
}
