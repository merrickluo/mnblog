import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found - {process.env.title}</title>
      </Head>
      <div className="text-8xl my-16">404</div>
    </>
  );
}
