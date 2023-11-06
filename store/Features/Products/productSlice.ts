import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk<
    any,
    {
        keyword: string;
        category?: string;
        price?: [number, number];
        ratings?: number;
        currentPage?: number;
    }
>(
    'lproducts/getProducts',
    async (
        keyword,
        category,
        price = [0, 200000],
        ratings = 0,
        currentPage = 1,
    ) => {
        let url = `http://localhost:4000/api/v1/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
        if (category) {
            url = `http://localhost:4000/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}&page=${currentPage}`;
        }
        const { data } = await axios.get(url);
        return data;
    },
);

export const getSliderProducts = createAsyncThunk(
    'products/getSliderProducts',
    async () => {
        const { data } = await axios.get(
            'http://localhost:4000/api/v1/products/all',
        );
        return data;
    },
);
export const getAdminProducts = createAsyncThunk(
    'products/getAdminProducts',
    async () => {
        const { data } = await axios.get(
            'http://localhost:4000/api/v1/admin/products',
        );
        return data;
    },
);
interface IProductsState {
    productsLoading: boolean;
    products: Array<any>;
    productsCount: number;
    resultPerPage: number;
    filteredProductsCount: number;
    error: any;
}

const initialState: IProductsState = {
    productsLoading: false,
    products: [],
    productsCount: 0,
    resultPerPage: 0,
    filteredProductsCount: 0,
    error: '',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearErrors: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productsLoading = true;
            })
            .addCase(getProducts.rejected, (state) => {
                state.productsLoading = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsLoading = false;
                state.products = action.payload.products;
                state.productsCount = action.payload.productsCount;
                state.resultPerPage = action.payload.resultPerPage;
                state.filteredProductsCount =
                    action.payload.filteredProductsCount;
            })
            .addCase(getSliderProducts.pending, (state) => {
                state.productsLoading = true;
            })
            .addCase(getSliderProducts.rejected, (state) => {
                state.productsLoading = false;
            })
            .addCase(getSliderProducts.fulfilled, (state, action) => {
                state.productsLoading = false;
                state.products = action.payload.products;
            })
            .addCase(getAdminProducts.pending, (state) => {
                state.productsLoading = true;
            })
            .addCase(getAdminProducts.rejected, (state) => {
                state.productsLoading = false;
            })
            .addCase(getAdminProducts.fulfilled, (state, action) => {
                state.productsLoading = false;
                state.products = action.payload.products;
            });
    },
});

export const { clearErrors } = productSlice.actions;

export default productSlice.reducer;
