import styles from "./CreateNewProject.module.scss";
import Title from "@/components/Title/Title";

export default function CreateNewProject() {
    return (
        <div className={styles.create_new_project} onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
        }}>
            <Title text="Create New Project"/>

            <div className={styles.project_info}>
                <label htmlFor="project_name">
                    Project name
                    <input type="text" placeholder="Save the Amazon ..."/>
                </label>

                <label htmlFor="project_description">
                    Project description
                    <input type="text" placeholder="This project focuses on the conservation of ..."/>
                </label>
            </div>

            <label htmlFor="ecosystem">
                Ecosystem name
                <input type="text" placeholder="Amazon Rainforest ..."/>
            </label>
            <input type="button" value="Save project"/>
        </div>
    );
}
