import VisibilitySensor from "react-visibility-sensor";
import { useState, useCallback } from "react";

import styles from "./Client.module.scss";
import { ClinetItem } from "../ClientList/ClientList.data";

type ClientProps = {
    client: ClinetItem;
};

const Client = ({ client }: ClientProps) => {
    const { imgUrl, hasBackground, title, content } = client;
    const [isElemVisible, setIsElemVisible] = useState(false);

    const handleChange = useCallback((isVisible: boolean): void => {
        isVisible && setIsElemVisible(true);
    }, []);
    return (
        <div
            className={`${styles.client} ${
                hasBackground ? styles.background : ""
            }`}
        >
            <div className={styles.container}>
                <div className={styles.imgBox}>
                    <img src={imgUrl} alt="car image" />
                </div>
                <div
                    className={`${styles.textBox} ${
                        isElemVisible ? styles.animation : ""
                    }`}
                >
                    <VisibilitySensor onChange={handleChange}>
                        <h2 className={styles.heading}>{title}</h2>
                    </VisibilitySensor>
                    <div className={styles.line} />
                    <p className={styles.content}>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Client;
