import Layout from "../components/Layout/Layout";
import ProductsBanner from "../components/ProductsBanner/ProductsBanner";
import Solutions from "../components/Solutions/Solutions";
import Represent from "../components/Represent/Represent";
import Softwares from "../components/Softwares/Softwares";

export default function Home() {
    return (
        <Layout>
            <ProductsBanner />
            <Softwares />
            <Solutions page="product" />
            <Represent />
        </Layout>
    );
}
