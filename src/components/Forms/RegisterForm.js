import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { FormStyled, InputStyled } from './Forms.styled';
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
    <FormStyled onSubmit={handleSubmit} autoComplete="on">
      <label>
        Username <br />
        <InputStyled type="text" name="name" />
      </label>
      <label>
        Email <br />
        <InputStyled type="email" name="email" />
      </label>
      <label>
        Password <br />
        <InputStyled type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </FormStyled>
  );
};
