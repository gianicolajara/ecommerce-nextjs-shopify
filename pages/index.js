import { getAllCollections, getCollectionByHandle } from "../utils/shopify";
import Heroe from "../components/Heroe";
import "../utils/shopify";
import Collections from "../components/Collections";
import { useState } from "react";
import BuyWithUs from "../components/BuyWithus";
import Customers from "../components/Customers";
import Head from "next/head";

export default function Home({ collections, allCollections }) {
  const [allCollectionsState, setAllCollectionsState] = useState(
    allCollections.filter(
      (collection) => collection.node.handle !== "home-page"
    )
  );

  return (
    <>
      <Head>
        <title>Home | E-Shopy</title>
      </Head>
      <Heroe collections={collections} />
      <BuyWithUs />
      <Collections collections={allCollectionsState} />
      <Customers />
    </>
  );
}

export const getStaticProps = async () => {
  const collections = await getCollectionByHandle("home-page");
  const allCollections = await getAllCollections();

  //h

  return {
    props: {
      collections: collections.edges,
      allCollections,
    },
  };
};
