import Image from "next/image";
import PropTypes from "prop-types";

const RowImages = ({
  images = [],
  selectedImage = {},
  handleChangeImage = () => {},
}) => {
  return (
    <div className="flex flex-nowrap gap-3 overflow-x-scroll">
      {images.map((img) => {
        return (
          <div
            key={img.node.id}
            className={`w-[100px] h-[100px] flex flex-shrink-0 flex-col gap-2 border-4 border-slate-300 hover:border-red-400 transition-all ${
              img.node.id === selectedImage.id
                ? "border-red-400"
                : "border-slate-600"
            }`}
          >
            <div className="h-[100px] relative cursor-pointer">
              <Image
                src={img.node.url}
                alt="image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                quality={5}
                onClick={() => handleChangeImage(img.node)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

RowImages.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object.isRequired,
  handleChangeImage: PropTypes.func.isRequired,
};

export default RowImages;
