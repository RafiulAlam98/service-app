import { getFromLocalStorage } from "@/helpers/utils/saveData";
import { api } from "../api/apiSlice";
import { authKey } from "@/constants/authKey";

const token = getFromLocalStorage(authKey);
const headers = {
  Authorization: `${token}`,
};

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => ({
        url: `/api/v1/order`,
        method: "POST",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["order"],
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: `/api/v1/order`,
        method: "GET",
        headers: headers,
      }),
      invalidatesTags: ["order"],
    }),
    getSingleOrder: builder.query({
      query: ({ id }) => ({
        url: `/api/v1/order/${id}`,
        method: "GET",
        headers: headers,
      }),
      invalidatesTags: ["order"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/order/${id}`,
        method: "PATCH",
        body: data,
        headers: headers,
      }),
      invalidatesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: ({ id }) => ({
        url: `/api/v1/order/${id}`,
        method: "DELETE",
        headers: headers,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
