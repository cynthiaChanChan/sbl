import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback, useEffect } from "react";

import styles from "./Heading.module.scss";
import { useRouter } from "next/router";

type HeadingProps = {
    heading: {
        title: string;
        subTitle: string;
    };
    className?: string;
    hasBorder?: boolean;
};

const Heading = ({
    heading: { title, subTitle },
    className,
    hasBorder,
}: HeadingProps) => {
    const [isElemVisible, setIsElemVisible] = useState(false);
    const router = useRouter();
    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);
    useEffect(() => {
        if (router.route === "/about") {
            return;
        }
        setIsElemVisible(false);
    }, [router.query.section, router.query.status]);
    return (
        <div
            className={`${styles.wrapper} ${className} ${
                hasBorder ? styles.border : ""
            } ${isElemVisible ? styles.animation : ""}`}
        >
            <VisibilitySensor onChange={handleChange} partialVisibility={true}>
                <h3 className={styles.heading}>{title}</h3>
            </VisibilitySensor>
            <h2 className={styles.sub_heading}>{subTitle}</h2>
        </div>
    );
};

export default Heading;
