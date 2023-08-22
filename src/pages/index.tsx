import PokedexContent from "@/components/pokedex";
import SearchBar from "@/components/searchBar";
import { ContainerMain } from "@/styles/pages/app";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Antena Pokedex</title>
        <meta name="Pokedex Pokemon" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerMain>
        <SearchBar />

        <PokedexContent />
      </ContainerMain>
    </>
  );
}
