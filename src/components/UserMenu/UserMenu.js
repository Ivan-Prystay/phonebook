import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Greeting, LogOut, Wraper } from './UserMenu.styled';

export function UserMenu() {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <Wraper>
      <Greeting>
        Welcome, <UserName>{user.name}</UserName>
      </Greeting>
      <LogOut type="button" onClick={() => dispath(logOut())}>
        Logout
      </LogOut>
    </Wraper>
  );
}
