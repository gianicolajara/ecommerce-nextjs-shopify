import Image from "next/image";
import { useRouter } from "next/router";
import Button from "./Button";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";

const ProductCard = ({ image = "", title = "", price = "", handle = "" }) => {
  const router = useRouter();

  const handlePushProduct = (handle) => {
    router.push(`/product/${handle}`);
  };

  return (
    <article className="flex flex-col h-[500px]">
      <div className="relative w-full h-full max-h-[60%]">
        <Image src={image} alt="imagen" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow flex-shrink-0 justify-center p-3 gap-5">
        <div className="text-center">
          <Subtitle>{title}</Subtitle>
          <Subtitle bold={false} color="text-blue-500">
            {price}
          </Subtitle>
        </div>
        <div className="flex w-full justify-center">
          <Button onClick={() => handlePushProduct(handle)}>Show</Button>
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
};

export default ProductCard;
