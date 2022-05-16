import Head from "next/head";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import { firtsLetterUpper } from "../../utils/letters";
import { getAllCollections, getCollectionByHandle } from "../../utils/shopify";

const Products = ({ products }) => {
  const router = useRouter();

  if (!products) return <>...loading</>;

  return (
    <>
      <Head>
        <title>{`${firtsLetterUpper(router.query.products)} | E-Shopy`}</title>
      </Head>
      <section className="max-w-[999px] m-auto grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 py-10 ">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.node.key}
              handle={product.node.handle}
              image={product.node.featuredImage.url}
              price={`${product.node.priceRange.minVariantPrice.amount} ${product.node.priceRange.minVariantPrice.currencyCode}`}
              title={product.node.title}
            />
          );
        })}
      </section>
    </>
  );
};

export const getStaticPaths = async () => {
  const getAllCollectionsRes = await getAllCollections();

  const paths = getAllCollectionsRes.map((item) => {
    return {
      params: {
        products: item.node.handle,
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

  let products = await getCollectionByHandle(params.products);
  products = products.edges.filter((item) => item.node.handle !== "home-page");

  return {
    props: {
      products,
    },
  };
};

export default Products;
