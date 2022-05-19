import {
  createCheckOut,
  getAllProducts,
  getProductByHandle,
} from "../../utils/shopify";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { formatterOptions, getSizesFromProduct } from "../../utils/products";
import RowImages from "../../components/RowImages";
import FormProductClothes from "../../components/FormProductClothes";
import { useRouter } from "next/router";
import Head from "next/head";
import { firtsLetterUpper } from "../../utils/letters";
import NavProducts from "../../components/NavProducts";
import Notification from "../../components/Notification";
import { ContextNotification } from "../../contexts/notification.context";

const initialSelectedOptions = {
  Color: "",
  Size: "",
};

const initialXY = {
  x: 0,
  y: 0,
  scale: 100,
};

const initialSizes = [];

const Product = ({ product }) => {
  const router = useRouter();

  const image = useRef();

  const [sizes, setSizes] = useState(initialSizes);

  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );

  const [variantSelected, setVariantSelected] = useState(
    product.variants.nodes[0]
  );

  const [selectedImage, setSelectedImage] = useState(
    product.images.edges[0].node
  );

  const [quantity, setQuantity] = useState(0);

  const [xY, setXY] = useState(initialXY);

  useEffect(() => {
    const selectedOptions = product.variants.nodes[0].selectedOptions;

    setSelectedOptions(formatterOptions(selectedOptions));

    filterOptionsColor(formatterOptions(selectedOptions));
    setVariantSelected(filterVariant(formatterOptions(selectedOptions)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return <>...loading</>;

  const filterOptionsColor = (options) => {
    const filterVariants = product.variants.nodes.filter((variant) => {
      let selectedOptionsFormatted = {};
      selectedOptionsFormatted = formatterOptions(variant.selectedOptions);
      return (
        JSON.stringify(selectedOptionsFormatted.Color) ===
        JSON.stringify(options.Color)
      );
    });

    setSizes(getSizesFromProduct(filterVariants));
    return filterVariants;
  };

  const filterVariant = (options) => {
    const filterVariants =
      product.variants.nodes.filter((variant) => {
        let selectedOptionsFormatted = {};
        selectedOptionsFormatted = formatterOptions(variant.selectedOptions);
        return (
          JSON.stringify(selectedOptionsFormatted) === JSON.stringify(options)
        );
      })[0] ?? [];
    setSelectedImage(filterVariants.image);
    return filterVariants;
  };

  const handleChangeOption = (name, value) => {
    const newOptions = { ...selectedOptions, [name]: value };

    const newOptionsReset =
      name === "Color" ? { ...newOptions, "Size": sizes[0] } : newOptions;

    setSelectedOptions(newOptionsReset);
    filterOptionsColor(newOptionsReset);
    setVariantSelected(filterVariant(newOptionsReset));
  };

  const handleChangeImage = (img) => {
    setSelectedImage(img);
  };

  const checkOut = async () => {
    const res = await createCheckOut(variantSelected.id, quantity);
    if (res) {
      router.push(`${res.webUrl}`);
    }
  };

  const zoomImage = (e) => {
    setXY({
      x: -e.nativeEvent.layerX,
      y: -e.nativeEvent.layerY,

      scale: 200,
    });
  };

  const mouseLeaveHandle = () => {
    setXY(initialXY);
  };

  return (
    <>
      <Head>
        <title>{firtsLetterUpper(product.title)} | E-Shopy</title>
      </Head>
      <div className="max-w-[999px] m-auto">
        <nav className="w-full h-[50px]">
          {product.collections && (
            <NavProducts
              title={product.collections.edges[0].node.title}
              link={product.collections.edges[0].node.handle}
            />
          )}
        </nav>
        <div className="grid grid-cols-1 grid-rows-[400px,_1fr] lg:grid-cols-2 lg:grid-rows-1 pb-10 gap-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <div
              className={`w-full h-[400px] relative  cursor-pointer`}
              ref={image}
              onMouseMove={zoomImage}
              onMouseLeave={mouseLeaveHandle}
              style={{
                backgroundImage: `url('${selectedImage.url}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: `${xY.scale}%`,
                backgroundPositionX: `${xY.x}px`,
                backgroundPositionY: `${xY.y}px`,
                transition: "background-image 0.2s ease-in-out",
              }}
            ></div>
            {/* <RowImages
              images={product.images.edges}
              selectedImage={selectedImage}
              handleChangeImage={handleChangeImage}
            /> */}
          </div>
          <FormProductClothes
            product={product}
            variantSelected={variantSelected}
            sizes={sizes}
            selectedOptions={selectedOptions}
            handleChangeOption={handleChangeOption}
            quantity={quantity}
            setQuantity={setQuantity}
            checkOut={checkOut}
          />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const products = await getAllProducts();

  const paths = products.map((product) => {
    return {
      params: {
        product: product.node.handle,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const product = await getProductByHandle(params.product);

  return {
    props: {
      product,
    },
  };
};

export default Product;
