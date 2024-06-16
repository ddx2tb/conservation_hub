import styles from "./Projects.module.css";
import Project from "@/components/Projects/Project";
import Title from "@/components/Title/Title";

export default function Projects() {
    return (
        <div className={`${styles.projects_container}`}>
            <Title text="Projects"/>

            <div className="two_rows">
                <div className={styles.projects}>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>

                <div className={styles.create_new_project}></div>
            </div>
        </div>
    );
}
