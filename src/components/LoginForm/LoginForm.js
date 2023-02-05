import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormLogin, EmailInput, PasswordInput } from './LoginForm.styled';

export const LoginForm = () => {
  const dispath = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispath(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormLogin onSubmit={handleSubmit} autoComplete="on">
      <label>
        Email <br />
        <EmailInput type="email" name="email" />
      </label>
      <label>
        Password
        <br />
        <PasswordInput type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </FormLogin>
  );
};
