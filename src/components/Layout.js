import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

const Container = styled.div`
  padding: 30px;
  background-color: grey;
  background-image: url(https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_960_720.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}
