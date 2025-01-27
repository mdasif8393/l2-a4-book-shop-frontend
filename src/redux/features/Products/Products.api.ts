import { baseApi } from "@/redux/api/baseApi";

const ProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getSingleService: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleServiceQuery } = ProductsApi;
