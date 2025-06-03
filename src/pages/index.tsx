import { HomeView } from "@/views/home/HomeView";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pássaro Azul - Segurança Privada</title>
      </Head>

      <HomeView />
    </>
  );
}
