import "styles/index.css";
import Head from "next/head";
import { AppProps } from "next/app";
// import "styles/globals.css";
import { Nav, Alert } from "components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kanban Board</title>

        {/* bootstrap css */}
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="app-container bg-light">
        <Nav />
        <Alert />
        <div className="container pt-4 pb-4">
<div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
          {/* <Component {...pageProps} /> */}
        </div>
      </div>

      {/* credits */}
      <div className="text-center mt-4">
        <p>
          <a href="/" target="_top">
            Kanban
          </a>
        </p>
        <p>{/* <a href="/" target="_top">Kanban</a> */}</p>
      </div>
    </>
  );
}



