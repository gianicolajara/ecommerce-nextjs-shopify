import Image from "next/image";
import { useEffect } from "react";
import P from "./P";
import Subtitle from "./Subtitle";

let timeOut = null;

const Notification = ({ msg = null, handleClear = () => {} }) => {
  if (msg.message === null) return null;

  if (timeOut != null) clearTimeout(timeOut);

  timeOut = setTimeout(() => {
    handleClear();
    clearTimeout(timeOut);
  }, 5000);

  const { message } = msg;

  return (
    <>
      {msg.message !== null && (
        <div className="absolute lg:mt-5 lg:mr-5 right-0 w-full max-w-[400px] h-max z-30 bg-white p-3 shadow-md lg:animate-[notificationlg_5s_ease-in-out_infinite] animate-[notification_5s_ease-in-out_infinite]">
          <Subtitle>{message.variantSelected.product.title ?? ""}</Subtitle>
          <div className="w-full h-full flex min-h-[150px]">
            <div className="relative h-[150px] w-[30%]">
              <Image
                src={message.variantSelected.image.url ?? ""}
                alt={message.variantSelected.product.title ?? ""}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col justify-center items-center flex-grow flex-shrink-0">
              <P bold={true} color="text-black">
                Quantity:{" "}
                <span className="font-normal">{message.quantity}</span>
              </P>
              {message.variantSelected.selectedOptions.map((option) => {
                return (
                  <P key={option.name} color="text-black" bold={true}>
                    {option.name}
                    <span className="font-normal">: {option.value}</span>
                  </P>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
