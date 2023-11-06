import { createSlice } from '@reduxjs/toolkit';

interface IWishlistState {
    wishlistItems: Array<any>;
}

const initialState: IWishlistState = {
    wishlistItems: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const item = {
                product: action.payload?.product._id,
                name: action.payload?.product.name,
                price: action.payload?.product.price,
                cuttedPrice: action.payload?.product.cuttedPrice,
                image: action.payload?.product.images[0].url,
                ratings: action.payload?.product.ratings,
                reviews: action.payload?.product.numOfReviews,
            };
            const itemExist = state.wishlistItems.find(
                (i) => i.product === item.product,
            );

            if (itemExist) {
                state.wishlistItems = state.wishlistItems.map((i) =>
                    i.product === itemExist.product ? item : i,
                );
            } else {
                state.wishlistItems = [...state.wishlistItems, item];
            }
            localStorage.setItem(
                'wishlistItems',
                JSON.stringify(state.wishlistItems),
            );
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(
                (i) => i.product !== action.payload,
            );
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
