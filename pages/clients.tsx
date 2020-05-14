import Head from "next/head";

import Layout from "../components/Layout/Layout";
import ClientsBanner from "../components/ClientsBanner/ClientsBanner";
import ClientList from "../components/ClientList/ClientList";
import { useContext } from "react";
import { AppContext } from "../providers/app.provider";

export default function Clients() {
    const { title } = useContext(AppContext);
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="识伯乐与全国各地驾校、驾培协会、驾培机构等合作，为客户创造财富，全力解决驾校运营难题，提高通过率，降低运营成本，实现数据化管理驾校。"
                />
                <meta
                    name="keyword"
                    content="驾校，驾培协会，驾培机构，3号学车，中驾驾校，骏龙驾校，招生利器，学车潮流，智慧学车，高精度教学，驾校管理系统，模拟考试，驾校管理"
                />
                <title>{title}</title>
            </Head>
            <Layout>
                <ClientsBanner />
                <ClientList />
            </Layout>
        </>
    );
}
