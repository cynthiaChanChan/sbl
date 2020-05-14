import { useState, useCallback } from "react";

import { SolutionItem } from "../Solutions/Solutions.data";
import styles from "./SolutionCard.module.scss";

type CardProps = {
    card: SolutionItem;
};

const SolutionCard = ({
    card: { icon, title, subTitle, content, subContent, textCenter },
}: CardProps) => {
    const [isElemVisible, setIsElemVisible] = useState(false);

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);
    return (
        <div
            className={`${styles.card} ${
                isElemVisible ? styles.animation : ""
            }`}
        >
            <div className={styles.imgBox}>
                <img src={icon} alt="icon" />
            </div>
            <h3 className={styles.heading}>
                <span>{title}</span>
                {subTitle && (
                    <span className={styles.sub_heading}>{subTitle}</span>
                )}
            </h3>
            <div
                className={`${styles.text} ${textCenter ? styles.center : ""}`}
            >
                <p>{content}</p>
                {subContent && <p>{subContent}</p>}
            </div>
        </div>
    );
};

export default SolutionCard;
