import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Subtitle from "./Subtitle";
import PropTypes from "prop-types";

const Collections = ({ collections = [] }) => {
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimation((animation) =>
        animation >= collections.length - 1 ? 0 : animation + 1
      );
    }, 5000);

    return () => clearInterval(animationInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const positionAnimation = {
    transform: `translateX(-${animation * 100}%)`,
  };

  return (
    <div className="w-full h-[350px] flex overflow-x-hidden">
      {collections.map((collection) => {
        return (
          <div
            key={collection.node.id}
            className={`w-full h-full relative flex-grow flex-shrink-0 transition ease-in-out duration-500  flex items-center justify-center cursor-pointer`}
            style={positionAnimation}
          >
            <Link href={`/products/${collection.node.handle}`} passHref={true}>
              <a className="w-full h-full flex justify-center items-center">
                <div className="absolute z-50 p-3 bg-black w-max">
                  <Subtitle color="text-white">
                    {collection.node.title}
                  </Subtitle>
                </div>
                <Image
                  src={collection.node.image.url}
                  alt="images"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="50% 15%"
                  className="w-screen h-full"
                  priority={true}
                  quality={40}
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

Collections.propTypes = {
  collections: PropTypes.array.isRequired,
};

export default Collections;
