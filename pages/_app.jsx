import Head from "next/head";
import BackHome from "@components/back_home";
import "../styles/globals.css";
import { Overpass } from "next/font/google";

const sitefont = Overpass({
  weight: "400",
  subsets: [],
});

function MyApp({ Component, pageProps }) {
  const getHeader = Component.getHeader || (() => <BackHome />);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg?v=2" />
      </Head>
      <div
        className={`${sitefont.className} w-full p-6 md:w-2/3 md:px-0 md:mx-auto xl:w-2/5`}
      >
        {getHeader()}
        <main>
          <Component {...pageProps} />
        </main>
        <footer className="mt-16 w-full flex flex-col items-center">
          <div className="text-xs mb-2 flex">
            <p>Copyright &copy; All original content is licensed under&nbsp;</p>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/">
              CC BY-SA 4.0
            </a>
          </div>
          <img width="16" height="16" src="/favicon.svg" alt="Icon" />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
