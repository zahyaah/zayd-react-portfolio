import zayd from "../../assets/zayd.jpg"
import styles from "./NavigationBar.module.css"
import {useState} from "react"
import MenuMobile from "../MenuMobile/MenuMobile.jsx";

export default function NavigationBar() {

    const [menuClick, setMenuClick] = useState(false);

    const handleMenuClick = ()=>{
        setMenuClick(!menuClick);
    }

    if (menuClick)
        return <MenuMobile />

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={ zayd } alt="zayd"/>
                </div>

                <div className={styles.menu}>
                    <span className="material-symbols-outlined" onClick={handleMenuClick} onTouchStart={handleMenuClick}>menu</span>
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