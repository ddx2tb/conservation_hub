import styles from "./PopUp.module.scss";
import {Fragment} from "react";

export default function PopUp({children, closePopUp}) {
    return (
        <Fragment>
            <div className={styles.popup_background} onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                closePopUp(false);
            }}>
                {children}
            </div>
        </Fragment>
    );
}
