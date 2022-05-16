import Image from "next/image";
import Link from "next/link";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";

const ImageHeroe = ({
  img = "",
  title = "title",
  price = "",
  money = "",
  link = "",
  alt = "",
}) => {
  return (
    <div className="relative flex h-full">
      <Link href={`/product/${link}`} passHref>
        <a>
          <div className="z-20">
            <Image
              src={img}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className="hover:scale-125 transition duration-500"
              priority={true}
              quality={50}
            />
          </div>

          <div className="flex z-30 bg-black absolute bottom-0 right-0 justify-between items-center p-3 h-max max-w-[100%]">
            <Subtitle color="text-white">{title}</Subtitle>
          </div>
          <div className="absolute top-0 right-0 bg-white z-30 p-3">
            <Subtitle color="text-black">{`${price} ${money}`}</Subtitle>
          </div>
        </a>
      </Link>
    </div>
  );
};

ImageHeroe.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageHeroe;
