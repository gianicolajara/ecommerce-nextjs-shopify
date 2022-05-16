import Image from "next/image";
import Link from "next/link";
import Subtitle from "./Subtitle";

const ImageHeroe = ({ img, title, price, money, link, alt }) => {
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
              className="hover:scale-150 transition duration-300"
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

export default ImageHeroe;
