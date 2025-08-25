import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

const allProductsQuery = (queryParams) => {
	const { search, category, company, order, price, shipping, page } =
		queryParams;

	return {
		queryKey: [
			"products",
			search ?? "",
			category ?? "all",
			company ?? "all",
			order ?? "a-z",
			price ?? 100000,
			shipping ?? false,
			page ?? 1,
		],
		queryFn: () =>
			customFetch(url, {
				params: queryParams,
			}),
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		// const params = Object.fromEntries([
		//   ...new URL(request.url).searchParams.entries(),
		// ]);
		const params = new URL(request.url).searchParams;
		const paramsObject = Object.fromEntries([...params.entries()]);

		const response = await queryClient.ensureQueryData(
			allProductsQuery(paramsObject)
		);

		const products = response.data.data;
		const meta = response.data.meta;

		return { products, meta, paramsObject };
	};

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
