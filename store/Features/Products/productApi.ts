import { api } from '@/store/API/apiSlice';

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => ({
                // headers: {
                //     Authorization: `${localStorage.getItem('token')}`,
                // },
                url: `/product/${id}`,
            }),
        }),
    }),
});

export const { useGetProductQuery } = productApi;
