import styles from "./AboutContent.module.scss";
import Heading from "../Heading/Heading";

const AboutContent = () => {
    const headings = {
        company: { title: "公司简介", subTitle: "Company profile" },
        team: { title: "创始团队", subTitle: "Our team" },
    };
    return (
        <section className={styles.about_content}>
            <div className={styles.wrapper}>
                <div className={styles.contentBox}>
                    <Heading
                        hasBorder={true}
                        heading={headings.company}
                        className={styles.small_font}
                    />
                    <p className={styles.company__text}>
                        广州驾悦信息科技有限公司，致力于在驾培行业领域进行培训优化、服务升级、品牌策划，驾培智能化多维度整合，力图打造新一代智慧驾培服务。
                    </p>
                    <p>
                        「识伯乐」是驾悦旗下自主研发的智能驾培教学管理系统，拥有国内领先专利技术。集高科技设备，高精度智能模拟教学系统、数据分析管理系统，为驾校的运营管理提供一体化解决方案。
                    </p>
                </div>
                <div className={styles.imgBox}>
                    <img src="/staffs.jpg" alt="staffs" />
                </div>
                <div className={styles.contentBox}>
                    <Heading
                        hasBorder={true}
                        heading={headings.team}
                        className={styles.small_font}
                    />
                    <p className={styles.team__text}>
                        资深驾培人，对驾培行业具有高度洞察力及分析力
                        <br />
                        拥有丰富的一线教学、驾校管理等经验积累
                        <br />
                        深度剖析驾校运营痛点，敏锐洞悉学员学车需求
                        <br />
                        技术研发源于实战经验，拒绝一切伪需求，真正帮助驾校解决问题
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
