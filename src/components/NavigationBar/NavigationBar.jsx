import zayd from "../../assets/zayd.jpg"
import styles from "./NavigationBar.module.css"

export default function NavigationBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={ zayd } alt="zayd"/>
                </div>

                <div className={styles.menu}>
                    <span className="material-symbols-outlined">menu</span>
                </div>
                <div className={styles.leftContent}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Skills</span>
                    <span>Portfolio</span>
                    <span>Contact</span>
                </div>
            </nav>
        </>
    )
}