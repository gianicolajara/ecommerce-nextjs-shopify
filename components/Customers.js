import Image from "next/image";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useEffect } from "react";
import P from "./P";

const customersMessags = [
  {
    id: 1,
    name: "Olga W Phillips",
    image:
      "https://www.fakepersongenerator.com/Face/female/female1021576215485.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
  },
  {
    id: 2,
    name: "Marilyn R Christofferse",
    image:
      "https://www.fakepersongenerator.com/Face/female/female1021665339417.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
  },
  {
    id: 3,
    name: "Bianca T Martinez",
    image:
      "https://www.fakepersongenerator.com/Face/female/female20161025281720215.jpg",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu lobortis elementum nibh tellus molestie. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.",
  },
];

const initialPosition = 0;

const Customers = () => {
  const [position, setPosition] = useState(initialPosition);

  const handleLeftPosition = () => {
    setPosition((position) =>
      position >= customersMessags.length - 1
        ? customersMessags.length - 1
        : position + 1
    );
  };

  const handleRightPosition = () => {
    setPosition((position) => (position <= 0 ? 0 : position - 1));
  };

  const positionAnimation = {
    transform: `translateX(-${position * 100}%)`,
  };

  return (
    <section>
      <div className="w-full h-[400px] overflow-x-hidden relative">
        <div className="absolute top-0 right-0 z-20 flex p-3 gap-5">
          <AiFillCaretLeft
            size={30}
            color="black"
            className={`cursor-pointer  ${
              position <= 0 ? "invisible" : "visible"
            }`}
            onClick={handleRightPosition}
          />
          <AiFillCaretRight
            size={30}
            color="black"
            className={`cursor-pointer  ${
              position >= customersMessags.length - 1 ? "invisible" : "visible"
            }`}
            onClick={handleLeftPosition}
          />
        </div>

        <div
          className={`w-full h-full flex flex-grow flex-shrink-0 flex-nowrap  items-center transition-all`}
          style={positionAnimation}
        >
          {customersMessags.map((item) => (
            <div
              key={item.id}
              className="min-w-full flex flex-col items-center gap-5"
            >
              <div className="w-[75px] h-[75px] relative rounded-full overflow-hidden shadow-lg border-4 border-slate-800">
                <Image src={item.image} alt="avatar" layout="fill" />
              </div>
              <div className="max-w-[500px] w-full flex flex-col gap-5 items-center">
                <P>
                  <cite className="text-center inline-block text-black">
                    {item.message}
                  </cite>
                </P>
                <P color="text-black" bold={true}>
                  {item.name}
                </P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
