import Subtitle from "./Subtitle";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import P from "./P";
import Image from "next/image";
import Button from "./Button";
import ChangeNumberProduct from "./ChangeNumberProduct";
import { BsCartXFill } from "react-icons/bs";
import { createCheckOut } from "../utils/shopify";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const CartNav = ({ open = false }) => {
  const { cart, handleDeleteCart } = useContext(CartContext);

  const router = useRouter();

  const handleCheckOut = async () => {
    const listCheckout = cart.cart.map((item) => ({
      variantId: item.id,
      quantity: item.quantity,
    }));

    const res = await createCheckOut(listCheckout);
    if (res) {
      router.push(res.webUrl);
    }
  };

  return (
    <div
      className={`w-screen lg:w-[450px] h-[calc(100%-75px)] bg-slate-900  right-0 top-[75px] fixed ${
        open ? "translate-x-[0%]" : "translate-x-[105%]"
      } transition duration-500 ease-in-out z-[999999999999] flex flex-col justify-between`}
    >
      {cart.cart.length > 0 ? (
        <>
          <div className="h-[70%] overflow-y-scroll">
            {cart.cart.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex gap-3 p-5 flex-grow">
                    <div className="relative w-[30%] min-h-[100px] self-center">
                      <Image
                        src={item.image.url}
                        alt="item"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <Subtitle color="text-white">
                        {item.product.title}
                      </Subtitle>
                      <div>
                        {item.selectedOptions.map((option) => {
                          return (
                            <div key={option.name} className="flex w-full">
                              <div>
                                <P bold={true}>
                                  {option.name}:{" "}
                                  <span className="font-normal">
                                    {option.value}
                                  </span>
                                </P>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <P bold={true}>
                        Price:
                        <span className="font-normal">
                          {item.priceV2.amount}
                          <span className="font-bold">
                            {item.priceV2.currencyCode}
                          </span>
                        </span>
                      </P>
                      <P bold={true}>
                        Total:{item.priceV2.amount * item.quantity}
                        {item.priceV2.currencyCode}
                      </P>
                      <ChangeNumberProduct item={item} />
                      <div className="mt-5">
                        <Button
                          bg="bg-white"
                          color="text-black"
                          onClick={() => handleDeleteCart(item.id)}
                        >
                          Delete Item
                        </Button>
                      </div>
                    </div>
                  </div>
                  <hr className="my-5" />
                </div>
              );
            })}
          </div>
          <div className="h-[30%] flex-shrink-0 w-full bg-slate-800 flex flex-col p-5 justify-between">
            <div className="w-full flex justify-between">
              <P>SubTotal:</P>
              <P bold={true}>
                {cart.cart.reduce(
                  (prev, current) =>
                    (prev += current.priceV2.amount * current.quantity),
                  0
                )}
              </P>
            </div>
            <div className="w-full flex justify-between">
              <P>Taxes:</P>
              <P bold={true}>Calculated at checkout</P>
            </div>
            <div className="w-full flex justify-between">
              <P>Shipping:</P>
              <P bold={true}>Free</P>
            </div>
            <hr />
            <div className="w-full flex justify-between">
              <P>Total:</P>
              <P bold={true}>
                {cart.cart.reduce(
                  (prev, current) =>
                    (prev += current.priceV2.amount * current.quantity),
                  0
                )}
              </P>
            </div>
            <Button bg="bg-white" color="text-black" onClick={handleCheckOut}>
              CheckOut
            </Button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full flex-col gap-5">
          <Subtitle color="text-white">Your Cart is Empty</Subtitle>
          <BsCartXFill size={40} className="text-white" />
        </div>
      )}
    </div>
  );
};

CartNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default CartNav;
