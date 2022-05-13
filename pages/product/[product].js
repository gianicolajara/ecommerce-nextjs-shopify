import {
  createCheckOut,
  getAllProducts,
  getProductByHandle,
} from "../../utils/shopify";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatterOptions, getSizesFromProduct } from "../../utils/products";
import RowImages from "../../components/RowImages";
import FormProductClothes from "../../components/FormProductClothes";
import { useRouter } from "next/router";

const initialSelectedOptions = {
  Color: "",
  Size: "",
};

const Product = ({ product }) => {
  const router = useRouter();

  const [sizes, setSizes] = useState([]);

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

  useEffect(() => {
    const selectedOptions = product.variants.nodes[0].selectedOptions;

    setSelectedOptions(formatterOptions(selectedOptions));

    filterOptionsColor(formatterOptions(selectedOptions));
    setVariantSelected(filterVariant(formatterOptions(selectedOptions)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <div className="max-w-[999px] m-auto">
      <div className="grid grid-cols-1 grid-rows-[550px,_1fr] lg:grid-cols-2 lg:grid-rows-1 lg:py-10 gap-5">
        <div className="flex flex-col gap-5">
          <div className="w-full h-[400px] relative">
            <Image
              src={selectedImage.url}
              alt="image"
              layout="fill"
              objectFit="cover"
              quality={5}
            />
          </div>
          <RowImages
            images={product.images.edges}
            selectedImage={selectedImage}
            handleChangeImage={handleChangeImage}
          />
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

  console.log(product.variants.nodes);

  return {
    props: {
      product,
    },
  };
};

export default Product;
