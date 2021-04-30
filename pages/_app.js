import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 100%;
  }
  
  *,
  *::after,
  *::before {
    font-size: inherit;
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik', sans-serif;
    font-size: 1.125rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
  
  p {
    margin: 0;
  }
`;

const theme = {
  colors: {
    primary: 'hsl(231, 69%, 60%)',
    secondry: 'hsl(0, 94%, 66%)',
    grayishBlue: 'hsl(229, 8%, 60%)',
    veryDarkBlue: 'hsl(229, 31%, 21%)'
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <title>Frontend Mentor | Bookmark landing page</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
