import styles from "./Heading.module.scss";

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
}: HeadingProps) => (
    <div
        className={`${styles.wrapper} ${className} ${
            hasBorder ? styles.border : ""
        }`}
    >
        <h3 className={styles.heading}>{title}</h3>
        <h2 className={styles.sub_heading}>{subTitle}</h2>
    </div>
);

export default Heading;
