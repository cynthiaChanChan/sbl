import HeadingWithBorder from "../HeadingWithBorder/HeadingWithBorder";

import { ProductData } from "../Softwares/Softwares.data";
import styles from "./DetailWithList.module.scss";

type DetailWithListProps = {
    product: ProductData;
};

const DetailWithList = ({
    product: { list, img, background, heading },
}: DetailWithListProps) => {
    const style = background ? { backgroundImage: `url(${background})` } : {};
    return (
        <div className={styles.box} style={style}>
            <div className={styles.productImg}>
                <img src={img} alt="product image" />
            </div>
            <div className={styles.content}>
                <HeadingWithBorder heading={heading} />
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
