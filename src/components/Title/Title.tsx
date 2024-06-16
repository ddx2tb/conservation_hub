import styles from "./Title.module.scss";
import {Fragment} from "react";


export default function Title({text}) {
    return (
        <Fragment>
            <h2 className={styles.title_section}>{text}</h2>
        </Fragment>
    );
}
