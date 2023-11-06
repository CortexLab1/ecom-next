import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import MetaData from '../components/Layouts/MetaData';
import '@/styles/Home.module.css'
import Categories from '@/components/Layouts/Categories';
import Banner from '@/components/Home/Banner/Banner';
import DealSlider from '@/components/Home/DealSlider/DealSlider';
import ProductSlider from '@/components/Home/ProductSlider/ProductSlider';
import { clearErrors, getSliderProducts } from '@/store/Features/Products/productSlice';

const Home = () => {

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const { error, loading } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: "error" });
            dispatch(clearErrors());
        }
        dispatch(getSliderProducts());
    }, [dispatch, error, enqueueSnackbar]);

    return (
        <>
            <MetaData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
            <Categories />
            <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
                <Banner />
                <DealSlider title={"Discounts for You"} />
                {!loading && <ProductSlider title={"Suggested for You"} tagline={"Based on Your Activity"} />}
                <DealSlider title={"Top Brands, Best Price"} />
                {!loading && <ProductSlider title={"You May Also Like..."} tagline={"Based on Your Interest"} />}
                <DealSlider title={"Top Offers On"} />
                {!loading && <ProductSlider title={"Don't Miss These!"} tagline={"Inspired by your order"} />}
            </main>
        </>
    );
};

export default Home;
