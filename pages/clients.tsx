import Layout from "../components/Layout/Layout";
import ClientsBanner from "../components/ClientsBanner/ClientsBanner";
import ClientList from "../components/ClientList/ClientList";

export default function Clients() {
    return (
        <Layout>
            <ClientsBanner />
            <ClientList />
        </Layout>
    );
}
