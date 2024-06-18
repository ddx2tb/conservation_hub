"use client";

import styles from "./Projects.module.css";
import Project from "@/components/Projects/Project";
import Title from "@/components/Title/Title";
import CreateNewProject from "@/components/CreateNewProject/CreateNewProject";
import PopUp from "@/components/PopUp/PopUp";
import {useState} from "react";

export default function Projects() {
    const [isOpen, setOpen] = useState(false);

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

                <div className={styles.create_new_project} onClick={() => setOpen(!isOpen)}>
                    {isOpen ? <PopUp closePopUp={() => setOpen(!isOpen)}><CreateNewProject/></PopUp> : null}
                </div>
            </div>
        </div>
    );
}
