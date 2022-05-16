import Image from "next/image";
import P from "./P";
import Subtitle from "./Subtitle";

const BuyWithUs = () => {
  const prefix = process.env.NEXT_PUBLIC_BASE_URL_PAGE;

  return (
    <section className="max-w-[999px] m-auto w-full h-full grid grid-cols-1 grid-rows-2 gap-5 lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex flex-col justify-center">
        <Subtitle>Buy With Us</Subtitle>
        <P color="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          necessitatibus mollitia voluptas repellat amet veritatis, ipsam
          commodi nisi explicabo odio natus porro velit placeat! Vitae modi hic
          voluptatem ducimus recusandae?
        </P>
      </div>
      <div className="relative min-h-[300px]">
        <Image
          src={`/images/buywithus.jpg`}
          alt="buywithus"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default BuyWithUs;
