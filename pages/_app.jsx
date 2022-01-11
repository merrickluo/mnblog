import Head from "next/head";
import Image from "next/image";
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
        <footer className="w-full">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <span className="w-6">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
