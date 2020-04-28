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
            <div className={styles.content}>
                <div className={styles.icon}>
                    <img src={icon} alt="product detail" />
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
