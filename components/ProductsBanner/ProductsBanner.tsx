import styles from "./ProductsBanner.module.scss";

const ProductsBanner = () => {
    const arrayData = ["高精设备", "智能教学", "数据分析", "驾培管理"];

    return (
        <section className={styles.products_banner}>
            <div className="container">
                <h1 className={styles.heading}>
                    <span>智能驾培教学管理系统</span>
                    <span>让驾校更赚钱</span>
                </h1>
                <ul className={styles.list}>
                    {arrayData.map(
                        (item): React.ReactNode => (
                            <li key={item} className={styles.item}>
                                {item}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default ProductsBanner;
