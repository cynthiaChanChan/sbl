import Layout from "../components/Layout/Layout";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import AboutContent from "../components/AboutContent/AboutContent";

export default function About() {
    return (
        <Layout>
            <AboutBanner />
            <AboutContent />
        </Layout>
    );
}
