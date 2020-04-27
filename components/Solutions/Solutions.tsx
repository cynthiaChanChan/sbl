import solutionsData from "./Solutions.data";
import styles from "./Solutions.module.scss";
import Heading from "../Heading/Heading";
import SolutionCard from "../SolutionCard/SolutionCard";

type SolutionsProps = {
    page: string;
};

const Solutions = ({ page }: SolutionsProps) => {
    const { heading, solutions } = solutionsData[page];
    return (
        <section className={`${styles.solutions} ${page ? styles[page] : ""}`}>
            <div className={`${styles.container} container`}>
                <Heading heading={heading} />
                <div className={styles.list}>
                    {solutions.map(
                        (solution): React.ReactNode => (
                            <SolutionCard
                                key={solution.title}
                                card={solution}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
