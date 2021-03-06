import { useCallback, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./Represent.module.scss";

const Represent = () => {
    const [isElemVisible, setIsElemVisible] = useState(false);
    const handleChange = useCallback(
        (isVisible: boolean): void => {
            isVisible && setIsElemVisible(true);
        },
        [isElemVisible]
    );

    return (
        <section className={styles.represent}>
            <div className={styles.image}>
                <img src="/coorperation.jpg" alt="join us" />
            </div>
            <div className={styles.content}>
                <div
                    className={`${styles.heading} ${
                        isElemVisible ? styles.animation : ""
                    }`}
                >
                    <h5>诚招渠道代理，合作共赢</h5>
                    <VisibilitySensor onChange={handleChange}>
                        <p>We welcome you to join us!</p>
                    </VisibilitySensor>
                </div>
                <ul className={styles.list}>
                    <li>模式好</li>
                    <li>市场大</li>
                    <li>发展快</li>
                    <li>利润高</li>
                    <li>支持多</li>
                    <li>体系全</li>
                    <li>八大支持，为您保驾护航</li>
                </ul>
                <ul className={styles.sublist}>
                    <li>广告支持</li>
                    <li>培训支持</li>
                    <li>物料支持</li>
                    <li>营销支持</li>
                    <li>技术支持</li>
                    <li>售后支持</li>
                    <li>市场活动</li>
                    <li>达量奖励</li>
                </ul>
            </div>
        </section>
    );
};

export default Represent;
