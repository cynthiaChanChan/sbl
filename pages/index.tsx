import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Solutions from "../components/Solutions/Solutions";
import ProductsList from "../components/ProductsList/ProductsList";
import Represent from "../components/Represent/Represent";

const Products = () => {
    return (
        <Layout>
            <Banner />
            <Solutions page="index" />
            <ProductsList />
            <Represent />
        </Layout>
    );
};

export default Products;
