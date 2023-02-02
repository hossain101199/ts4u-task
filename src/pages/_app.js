import Header from "@/layout/Header";
import "@/styles/globals.scss";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>{`TS4U - ${router?.pathname}`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{`TS4U - ${router?.pathname}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
