import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback } from "react";

import HeadingWithBorder from "../HeadingWithBorder/HeadingWithBorder";
import { ProductData } from "../Softwares/Softwares.data";
import styles from "./DetailWithList.module.scss";

type DetailWithListProps = {
    product: ProductData;
    className?: string;
};

const DetailWithList = ({
    product: { list, img, background, heading },
    className,
}: DetailWithListProps) => {
    const style = background ? { backgroundImage: `url(${background})` } : {};
    const [isElemVisible, setIsElemVisible] = useState(false);

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);
    return (
        <div className={`${styles.box} ${className}`} style={style}>
            <div className={styles.productImg}>
                <img src={img} alt="product image" />
            </div>
            <div
                className={`${styles.content} ${
                    isElemVisible ? styles.animation : ""
                }`}
            >
                <VisibilitySensor onChange={handleChange}>
                    <HeadingWithBorder heading={heading} />
                </VisibilitySensor>
                <ul className={styles.list}>
                    {list?.map(
                        (item, index): React.ReactNode => (
                            <li key={index}>{item}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default DetailWithList;
