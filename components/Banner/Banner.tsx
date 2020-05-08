import styles from "./Banner.module.scss";
import service from "./Banner.data";
import Card from "../Card/Card";

const Banner = () => (
    <section className={styles.banner}>
        <div className={`${styles.container} container`}>
            <div className={styles.titleBox}>
                <h1 className={styles.heading}>
                    <span>助力驾校解决痛点</span>
                    <span>提升招生服务管理</span>
                </h1>
            </div>
            <div className={styles.service}>
                {service.map(
                    (item): React.ReactNode => (
                        <Card key={item.title} card={item} />
                    )
                )}
            </div>
        </div>
    </section>
);

export default Banner;
