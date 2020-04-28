import Slider from "react-slick";

import Heading from "../Heading/Heading";

import hardwaresData, {
    heading,
    HardwareData,
    thumbnailsData,
} from "./HardwareCarousel.data";
import styles from "./HardwareCarousel.module.scss";
import { useState } from "react";

type HardwareCardProps = {
    card: HardwareData;
};

const HardwareCard = ({
    card: { title, image, list, imageWide },
}: HardwareCardProps) => {
    return (
        <div className={styles.card}>
            <div
                className={`${styles.productImage} ${
                    imageWide ? styles.wide : ""
                }`}
            >
                <img src={image} alt="hardware" />
            </div>
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <ul className={styles.list}>
                    {list.map(
                        (item, index): React.ReactNode => (
                            <li key={index}>{item}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${styles.prevArrow} ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src="/arrow.png" alt="arrow" />
        </div>
    );
};

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${styles.nextArrow} ${className}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src="/arrow.png" alt="arrow" />
        </div>
    );
};

const HardwareCarousel = () => {
    const [thumbnails, setThumbnails] = useState(thumbnailsData);
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        cssEase: "linear",
        dots: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        afterChange: (current: number) => {
            if (current === 0) {
                setThumbnails(thumbnailsData);
                return;
            } else if (current === hardwaresData.length - 1) {
                setThumbnails([hardwaresData[0], hardwaresData[current - 1]]);
                return;
            }
            setThumbnails([
                hardwaresData[current + 1],
                hardwaresData[current - 1],
            ]);
        },
    };
    return (
        <section className={styles.carousel}>
            <Heading heading={heading} hasBorder={true} />
            <div className={styles.thumbnails}>
                {thumbnails.map(
                    ({ id, image, imageWide }): React.ReactNode => (
                        <div
                            className={`${styles.thumbnail} ${
                                imageWide ? styles.wide : ""
                            }`}
                            key={id}
                        >
                            <img src={image} alt="hardware picture" />
                        </div>
                    )
                )}
            </div>
            <Slider {...settings} className={styles.slider}>
                {hardwaresData.map(
                    (item): React.ReactNode => (
                        <HardwareCard key={item.id} card={item} />
                    )
                )}
            </Slider>
        </section>
    );
};

export default HardwareCarousel;
