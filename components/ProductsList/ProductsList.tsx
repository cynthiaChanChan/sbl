import Product from "../Product/Product";

import styles from "./ProductsList.module.scss";
import productsData from "./ProductsList.data";

const ProductsList = () => {
    return (
        <section className={styles.products}>
            {productsData.map(
                (product, index): React.ReactNode => (
                    <Product product={product} key={index} />
                )
            )}
        </section>
    );
};

export default ProductsList;
