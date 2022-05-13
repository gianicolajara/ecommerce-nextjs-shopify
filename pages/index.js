import { getAllCollections, getCollectionByHandle } from "../utils/shopify";
import Heroe from "../components/Heroe";
import "../utils/shopify";
import Collections from "../components/Collections";
import { useState } from "react";
import BuyWithUs from "../components/BuyWithus";
import Customers from "../components/Customers";

export default function Home({ collections, allCollections }) {
  const [allCollectionsState, setAllCollectionsState] = useState(
    allCollections.filter(
      (collection) => collection.node.handle !== "home-page"
    )
  );

  return (
    <div>
      <Heroe collections={collections} />
      <BuyWithUs />
      <Collections collections={allCollectionsState} />
      <Customers />
    </div>
  );
}

export const getServerSideProps = async () => {
  const collections = await getCollectionByHandle("home-page");
  const allCollections = await getAllCollections();

  return {
    props: {
      collections: collections.edges,
      allCollections,
    },
  };
};
