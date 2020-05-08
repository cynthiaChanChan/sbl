import Head from "next/head";

import Layout from "../components/Layout/Layout";
import ProductsBanner from "../components/ProductsBanner/ProductsBanner";
import Solutions from "../components/Solutions/Solutions";
import Represent from "../components/Represent/Represent";
import Softwares from "../components/Softwares/Softwares";
import HardwareCarousel from "../components/HardwareCarousel/HardwareCarousel";

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="识伯乐助力驾校解决痛点，让驾校利益最大化。提供的服务：高精度模拟考设备、智能驾培教学系统、学车数据分析系统、驾校数据管理系统、软件定制开发服务。"
                />
                <meta
                    name="keyword"
                    content="高精度，智能学车，智慧驾培，驾培管理，校长端，学员端，教练端，驾校管理系统，驾校OA研发系统，智能模拟考试设备，科目二模拟考试，科目三模拟考试，车载终端，GNSS，北斗天线，练车成绩，练车轨迹，练车记录，练车数据，培训计时，语音播报，智能评判"
                />
                <title>识伯乐-产品服务</title>
            </Head>
            <Layout>
                <ProductsBanner />
                <Softwares />
                <HardwareCarousel />
                <Solutions page="product" />
                <Represent />
            </Layout>
        </>
    );
}
