import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

export function UserMenu() {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <div style={{ border: '2px solid tomato' }}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispath(logOut())}>
        Logout
      </button>
    </div>
  );
}
