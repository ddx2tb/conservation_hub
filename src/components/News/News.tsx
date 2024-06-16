import styles from "./News.module.scss";
import New from "@/components/News/New";
import Title from "@/components/Title/Title";

export default function News() {
    return (
        <div className={styles.news}>
            <Title text="News"/>

            <New/>
            <New/>
            <New/>
            <New/>

            <div className={styles.news_view_more}>
                View more
            </div>
        </div>
    );
}
