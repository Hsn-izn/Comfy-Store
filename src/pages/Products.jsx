import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export async function loader({ request }) {
  // const params = Object.fromEntries([
  //   ...new URL(request.url).searchParams.entries(),
  // ]);
  const params = new URL(request.url).searchParams;

  const response = await customFetch({ url, params });

  const products = response.data.data;
  const meta = response.data.meta;
  const paramsObject = Object.fromEntries([...params.entries()]);
  return { products, meta, paramsObject };
}

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
