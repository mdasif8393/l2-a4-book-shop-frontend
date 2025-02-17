import { baseApi } from "@/redux/api/baseApi";

const ProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (query) => ({
        url: `/products?searchTerm=${query?.searchTerm}`,
        method: "GET",
      }),
      providesTags: ["products"],
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
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/products/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (options) => {
        return {
          url: "/products",
          method: "POST",
          body: options,
        };
      },
      invalidatesTags: ["products"],
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
