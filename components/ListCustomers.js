import Image from "next/image";
import P from "./P";
import PropTypes from "prop-types";

const ListCustomers = ({ customersMessags = [] }) => {
  return (
    <>
      {customersMessags.map((item) => (
        <div
          key={item.id}
          className="min-w-full flex flex-col items-center gap-5"
        >
          <div className="w-[75px] h-[75px] relative rounded-full overflow-hidden shadow-lg border-4 border-slate-800">
            <Image src={item.image} alt="customers" layout="fill" />
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
    </>
  );
};

ListCustomers.propTypes = {
  customersMessags: PropTypes.array.isRequired,
};

export default ListCustomers;
