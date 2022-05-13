import Image from "next/image";
import Link from "next/link";
import ImageHeroe from "./ImageHeroe";
import Subtitle from "./Subtitle";

const Heroe = ({ collections }) => {
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[calc(100vh-150px),_1fr] lg:grid-cols-[60%,_40%] lg:grid-rows-[calc(100vh-75px)]">
      <ImageHeroe
        img={collections[2].node.featuredImage.url}
        money={collections[2].node.priceRange.minVariantPrice.currencyCode}
        price={collections[2].node.priceRange.minVariantPrice.amount}
        title={collections[2].node.title}
        link={collections[2].node.handle}
      />
      <div className="grid grid-cols-1 grid-rows-[repeat(2,_calc(_100vh-150px))] lg:grid-cols-1 lg:grid-rows-2">
        <ImageHeroe
          img={collections[1].node.featuredImage.url}
          money={collections[1].node.priceRange.minVariantPrice.currencyCode}
          price={collections[1].node.priceRange.minVariantPrice.amount}
          title={collections[1].node.title}
          link={collections[1].node.handle}
        />
        <ImageHeroe
          img={collections[0].node.featuredImage.url}
          money={collections[0].node.priceRange.minVariantPrice.currencyCode}
          price={collections[0].node.priceRange.minVariantPrice.amount}
          title={collections[0].node.title}
          link={collections[0].node.handle}
        />
      </div>
    </div>
  );
};

export default Heroe;
