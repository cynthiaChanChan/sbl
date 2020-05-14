import Head from "next/head";

import Layout from "../components/Layout/Layout";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import AboutContent from "../components/AboutContent/AboutContent";
import { useContext } from "react";
import { AppContext } from "../providers/app.provider";

export default function About() {
    const { title } = useContext(AppContext);
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="识伯乐致力于在驾培行业进行培训优化、服务升级、品牌策划，驾培智能化多维度整理，力图打造新一代智慧驾培服务。"
                />
                <meta
                    name="keyword"
                    content="广州驾悦信息科技有限公司，驾校，驾培，智慧驾培，智能驾培管理系统，高精度智能模拟教学，数据分析管理，驾校运营管理，学车学员，驾校系统开发，驾校考试管理，学员管理系统"
                />
                <title>{title}</title>
            </Head>
            <Layout>
                <AboutBanner />
                <AboutContent />
            </Layout>
        </>
    );
}
