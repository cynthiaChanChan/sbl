import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback } from "react";

import Heading from "../Heading/Heading";
import styles from "./Product.module.scss";
import { ProductData } from "../ProductsList/ProductsList.data";

type ProductProps = {
    product: ProductData;
};

const Product = ({ product }: ProductProps) => {
    const { heading, img, alt, list, background, subContent } = product;
    const [isElemVisible, setIsElemVisible] = useState(false);

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);

    return (
        <div
            className={styles.product}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className={styles.productImg}>
                <img src={img} alt={alt} />
            </div>
            <div
                className={`${styles.content} ${
                    isElemVisible ? styles.animation : ""
                }`}
            >
                <Heading heading={heading} />
                <VisibilitySensor onChange={handleChange}>
                    <ul className={styles.list}>
                        {list.map(
                            (item, index): React.ReactNode => (
                                <li key={index}>{item}</li>
                            )
                        )}
                    </ul>
                </VisibilitySensor>
                {subContent && (
                    <ul className={styles.subContent}>
                        {subContent.map(
                            ({ icon, title }, index): React.ReactNode => (
                                <li key={index}>
                                    <div className={styles.item}>
                                        <div className={styles.icon}>
                                            <img
                                                src={icon}
                                                alt="product icon"
                                            />
                                        </div>
                                        <span>{title}</span>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Product;
