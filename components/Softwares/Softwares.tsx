import DetailWithList from "../DetailWithList/DetailWithList";
import ProductDetail from "../ProductDetail/ProductDetail";

import productsData from "./Softwares.data";
import styles from "./Softwares.module.scss";

const Softwares = () => {
    return (
        <section className={styles.products}>
            {productsData.map(
                (product, index): React.ReactNode => {
                    if (product.list) {
                        return (
                            <DetailWithList
                                product={product}
                                key={index}
                                className={styles.detailList}
                            />
                        );
                    } else {
                        return <ProductDetail product={product} key={index} />;
                    }
                }
            )}
        </section>
    );
};

export default Softwares;
