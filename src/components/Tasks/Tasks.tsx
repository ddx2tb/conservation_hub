import styles from "./Tasks.module.scss";
import Task from "@/components/Tasks/Task";
import Title from "@/components/Title/Title";

export default function Tasks() {
    return (
        <div className={styles.tasks}>
            <Title text="Tasks"/>

            <Task/>
            <Task/>
            <Task/>

        </div>
    );
}
