import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import Solutions from "../components/Solutions/Solutions";
import ProductsList from "../components/ProductsList/ProductsList";
import Represent from "../components/Represent/Represent";

const Products = () => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="识伯乐 - 行业领先的驾校服务商。集驾校营销宣传，高精度智能学车设备，模拟考试系统，语音播报系统，驾校数据分析管理系统，为驾校的运营管理提供一体化解决方案。"
                />
                <meta
                    name="keyword"
                    content="识伯乐，驾校，驾培，驾校服务，驾校宣传，高精度设备，模拟考试，语音播报，驾校管理，驾校系统，智能学车，驾校管理微信端，驾校硬件及软件，车辆管理，学员管理，教练管理，科二通过率，招生优势，练车成绩，练车记录，教练机器人，驾校培训，驾校报名，驾校财务管理，学车计时培训系统，驾校预约系统"
                />
                <title>识伯乐-首页</title>
            </Head>
            <Layout>
                <Banner />
                <Solutions page="index" />
                <ProductsList />
                <Represent />
            </Layout>
        </>
    );
};

export default Products;
