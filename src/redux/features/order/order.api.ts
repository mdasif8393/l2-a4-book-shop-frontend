import { baseApi } from "@/redux/api/baseApi";

const OrderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["orders"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["orders"],
    }),
    getSingleOrder: builder.query({
      query: (id) => {
        return {
          method: "GET",
          url: `/orders/${id}`,
        };
      },
    }),
    deleteOrder: builder.mutation({
      query: (orderId) => {
        return {
          url: `/orders/${orderId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["orders"],
    }),
    updateOrder: builder.mutation({
      query: (options) => {
        return {
          url: `/orders/${options?.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  usePostOrderMutation,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = OrderApi;
