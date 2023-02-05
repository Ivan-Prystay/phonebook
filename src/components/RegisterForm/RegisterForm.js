import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import {
  FormRegister,
  UserNameInput,
  EmailInput,
  PasswordInput,
} from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispath = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispath(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="on">
      <label>
        Username <br />
        <UserNameInput type="text" name="name" />
      </label>
      <label>
        Email <br />
        <EmailInput type="email" name="email" />
      </label>
      <label>
        Password <br />
        <PasswordInput type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </FormRegister>
  );
};
