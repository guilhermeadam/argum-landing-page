import { Analytics } from '@vercel/analytics/react';
import Main from './pages/Main';
import GlobalStyle from './styles/globalStyle';

export function App() {
  return (
    <>
      <Main />

      <Analytics />
      <GlobalStyle />
    </>
  );
}
