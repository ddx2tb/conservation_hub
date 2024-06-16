import styles from "./Tasks.module.scss";

export default function Task() {
    return (
        <div className={styles.task}>
            <div className={styles.task_title}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>

            <div className={styles.task_content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate dicta .
            </div>
        </div>
    );
}
