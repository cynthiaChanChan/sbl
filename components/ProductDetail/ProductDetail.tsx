import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback } from "react";

import Heading from "../Heading/Heading";
import styles from "./ProductDetail.module.scss";
import { ProductData } from "../Softwares/Softwares.data";

type ProductDetailProps = {
    product: ProductData;
};

const ProductDetail = ({
    product: { icon, heading, img, background, sectionHeading },
}: ProductDetailProps) => {
    const style = background ? { backgroundImage: `url(${background})` } : {};
    const [isElemVisible, setIsElemVisible] = useState(false);

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);

    return (
        <div className={styles.box} style={style}>
            <div className={styles.productImg}>
                {sectionHeading && (
                    <Heading
                        heading={{
                            title: "软件系统",
                            subTitle: "Software system",
                        }}
                        hasBorder={true}
                        className={styles.sectionHeading}
                    />
                )}
                <img src={img} alt="product image" />
            </div>
            <div
                className={`${styles.content} ${
                    isElemVisible ? styles.animation : ""
                }`}
            >
                <div className={styles.icon}>
                    <VisibilitySensor onChange={handleChange}>
                        <img src={icon} alt="icon" />
                    </VisibilitySensor>
                </div>
                <p className={styles.title}>{heading.title}</p>
                <p
                    className={styles.info}
                    dangerouslySetInnerHTML={{ __html: heading.subTitle }}
                ></p>
            </div>
        </div>
    );
};

export default ProductDetail;
