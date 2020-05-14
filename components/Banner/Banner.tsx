import styles from "./Banner.module.scss";
import service from "./Banner.data";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Banner = () => {
    const router = useRouter();
    const [animation, setAnimation] = useState(false);
    useEffect(() => {
        setAnimation(!animation);
    }, [router.query.section, router.query.status]);
    return (
        <section className={styles.banner}>
            <div
                className={`${styles.container} container ${
                    animation ? styles.animation : ""
                }`}
            >
                <div className={styles.titleBox}>
                    <h1 className={styles.heading}>
                        <span>助力驾校&nbsp;&nbsp;解决痛点</span>
                        <span>提升招生&nbsp;服务&nbsp;管理</span>
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
};

export default Banner;
