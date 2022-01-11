import Head from "next/head";
import BackHome from "../components/back_home";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getHeader = Component.getHeader || (() => <BackHome />);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full p-6 md:w-2/3 md:px-0 md:mx-auto xl:w-2/5">
        {getHeader()}
        <main>
          <Component {...pageProps} />
        </main>
        <footer className="mt-16 w-full flex flex-row items-baseline">
          <span>Made with</span>
          <span className="px-2">
            <a href="https://orgmode.org">Org Mode</a>
          </span>
          <span>and</span>
          <span className="px-2">
            <a href="https://tailwindcss.com">TailwindCSS</a>
          </span>
          <span>and</span>
          <span className="pl-2">
            <a href="https://nextjs.org">Next.js</a>
          </span>
          <span>.</span>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
