import styles from "./MenuMobile.module.css"
import {useState} from "react"
import MainNavBar from "../NavigationBar/NavigationBar.jsx"

export default function MenuMobile() {
    const [home, setHome] = useState(false);
    const handleSetHome = () => {
        setHome(!home);
    }

    if (home)
        return <MainNavBar />

    return (
        <nav className={styles.navbarMobile}>
            <span className="material-symbols-outlined">close</span>
            <span onClick={handleSetHome}>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Portfolio</span>
            <span>Contact</span>
        </nav>
    )
}