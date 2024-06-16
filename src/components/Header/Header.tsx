import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`${styles.header_sections} container`}>
                <div className={styles.logo}>
                    <h1>Conservation HUB</h1>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link href="/login">Sign In</Link>
                        </li>
                        <li>
                            <Link href="/login">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
