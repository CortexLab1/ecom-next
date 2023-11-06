import { api } from '@/store/API/apiSlice';

const wishlistApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addToWishlist: builder.query({
            query: ({ id }) => ({
                // headers: {
                //     Authorization: `${localStorage.getItem('token')}`,
                // },
                url: `/product/${id}`,
            }),
        }),
        addUser: builder.mutation({
            query: ({ data }) => ({
                url: `/auth/signup`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useAddToWishlistQuery, useAddUserMutation } = wishlistApi;
