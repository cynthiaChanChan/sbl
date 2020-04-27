import styles from "./Client.module.scss";
import { ClinetItem } from "../ClientList/ClientList.data";

type ClientProps = {
    client: ClinetItem;
};

const Client = ({ client }: ClientProps) => {
    const { imgUrl, hasBackground, title, content } = client;
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
                <div className={styles.textBox}>
                    <h2 className={styles.heading}>{title}</h2>
                    <div className={styles.line} />
                    <p className={styles.content}>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default Client;
