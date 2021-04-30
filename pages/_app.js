import { createGlobalStyle, ThemeProvider } from 'styled-components'
// COMPONENTS
import Head from 'next/head';
import Layout from '../components/layout/layout';


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
    font-weight: 400;
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;

const theme = {
  colors: {
    primary: 'hsl(231, 69%, 60%)',
    secondry: 'hsl(0, 94%, 66%)',
    grayishBlue: 'hsl(229, 8%, 60%)',
    veryDarkBlue: 'hsl(229, 31%, 21%)',
    white: '#FFF'
  },
  animations: {
    transitionTime: 200
  },
  bp: {
    xs: '375px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1440px'
  }
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
