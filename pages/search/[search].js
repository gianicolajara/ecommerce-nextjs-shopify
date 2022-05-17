import Head from "next/head";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title";
import { firtsLetterUpper } from "../../utils/letters";
import { getProductByTitle } from "../../utils/shopify";

const SearchPage = ({ products }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{firtsLetterUpper(router.query.search)} | E-Shopy</title>
      </Head>
      {products && products.length > 0 ? (
        <section className="max-w-[999px] m-auto grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 lg:py-10">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.node.id}
                handle={product.node.handle}
                image={product.node.images.edges[0].node.url}
                price={`${product.node.priceRange.minVariantPrice.amount}${product.node.priceRange.minVariantPrice.currencyCode}`}
                title={product.node.title}
                details={product.node.productType}
              />
            );
          })}
        </section>
      ) : (
        <Title>Product not found</Title>
      )}
    </>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const products = await getProductByTitle(params.search);

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
