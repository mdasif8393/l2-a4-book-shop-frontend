import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/auth/users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    blockUser: builder.mutation({
      query: (userId) => {
        return {
          url: `/admin/users/${userId}/block`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useBlockUserMutation,
  useGetAllUsersQuery,
} = authApi;
