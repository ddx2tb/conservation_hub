import styles from "./News.module.scss";

export default function New() {
    return (
        <div className={styles.new}>
            <div className={styles.new_title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>

            <div className={styles.new_tags}>
                <div>Tag 1</div>
                <div>Tag 2</div>
                <div>Tag 3</div>
            </div>

            <div className={styles.new_content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Blanditiis cupiditate dicta explicabo inventore ipsam optio rerum tempore veniam!
                Ab aliquam aspernatur consectetur fugit itaque laudantium, molestias possimus repellat
                soluta sunt.
            </div>
        </div>
    );
}
