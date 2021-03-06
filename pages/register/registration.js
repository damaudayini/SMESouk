import Head from "next/head";
import OnBoard from "../../components/onboarding/onBoard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <OnBoard />
    </div>
  );
}
