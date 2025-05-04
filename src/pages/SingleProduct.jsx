import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export async function loader({ params }) {
  const result = await customFetch(`/products/${params.id}`);
  console.log(result);
  return { product: result.data.data };
}

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  return <h1 className="text-4xl">SingleProduct</h1>;
}

export default SingleProduct;
