import { baseApi } from "@/redux/api/baseApi";

const ProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (productId) => {
        return {
          url: `/products/${productId}`,
          method: "DELETE",
        };
      },
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/products/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
    }),
    addProduct: builder.mutation({
      query: (options) => {
        return {
          url: "/products",
          method: "POST",
          body: options,
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = ProductsApi;
