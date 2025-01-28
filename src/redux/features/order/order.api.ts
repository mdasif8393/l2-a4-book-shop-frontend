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
    }),
  }),
});

export const { usePostOrderMutation } = OrderApi;
