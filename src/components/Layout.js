import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import bgImage from '../images/business-2846221_1280.jpg';

import styled from 'styled-components';

const Container = styled.div`
  background-color: grey;
  background-image: url(${bgImage});
  background-size: cover;
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
