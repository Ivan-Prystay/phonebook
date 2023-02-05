import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LogOut } from './UserMenu.styled';

export function UserMenu() {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
      <h4 style={{ margin: '0', paddingLeft: '10px' }}>
        Welcome,{' '}
        <span style={{ fontSize: '18px', textDecoration: 'underline' }}>
          {' '}
          {user.name}
        </span>
      </h4>
      <LogOut type="button" onClick={() => dispath(logOut())}>
        Logout
      </LogOut>
    </div>
  );
}
