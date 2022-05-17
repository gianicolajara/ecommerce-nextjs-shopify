import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";
import Link from "next/link";

const ProductCard = ({
  image = "",
  title = "",
  price = "",
  handle = "",
  details = "",
}) => {
  const router = useRouter();

  const handlePushProduct = (handle) => {
    router.push(`/product/${handle}`);
  };

  return (
    <article
      className="hover:outline hover:outline-4 hover:outline-black rounded-md overflow-hidden transition-all shadow-md"
      onClick={() => handlePushProduct(handle)}
    >
      <div className="flex flex-col h-[500px] select-none shadow-md cursor-pointer hover:outline-8 hover:outline-black">
        <div className="relative w-full h-full max-h-[60%]">
          <div className="text-center absolute z-10 bg-white p-2">
            <Subtitle bold={false}>${price}</Subtitle>
          </div>
          <Image src={image} alt="imagen" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col flex-grow flex-shrink-0 justify-center p-3 gap-5">
          <div className="text-center">
            <Subtitle>{title}</Subtitle>
            <small>{details}</small>
          </div>
        </div>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default ProductCard;
