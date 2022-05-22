import Head from "next/head";
import { useRouter } from "next/router";
import NavProducts from "../../components/NavProducts";
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title";
import { firtsLetterUpper } from "../../utils/letters";
import { getProductByTitle } from "../../utils/shopify";

const SearchPage = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{firtsLetterUpper(router.query.search)} | E-Shopy</title>
      </Head>
      {products && products.length > 0 ? (
        <section className="max-w-[999px] m-auto lg:pb-10">
          <div>
            <NavProducts />
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 ">
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
          </div>
        </section>
      ) : (
        <Title>Product not found</Title>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const products = await getProductByTitle(params.search);

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
