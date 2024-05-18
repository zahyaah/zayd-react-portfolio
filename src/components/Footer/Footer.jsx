import styles from "./Footer.module.css"


export default function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.sendMessage}>
                    <p>Get in touch.</p>
                    <div className={styles.formMessage}>
                        <form>
                            <label htmlFor="name"></label>
                            <input type="text" id="name" placeholder="Name"/> <br/>

                            <label htmlFor="email"></label>
                            <input type="email" id="email" placeholder="Email"/> <br/>

                            <label htmlFor="message"></label>
                            <input type="text" id="message" placeholder="Message"/> <br/>

                            <button type="submit"> Send Message </button>
                        </form>
                    </div>
                </div>

                <div className={styles.footerOfFooter}>
                    <div className={styles.allSocials}>
                        <a href="https://instagram.com/zahyaah" target="_blank">Instagram</a>
                        <a href="https://twitter.com/zahyaah" target="_blank">X</a>
                        <a href="https://github.com/zahyaah" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/k-zayd-ahmed-b36751170/" target="_blank">LinkedIn</a>
                    </div>
                    <div> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">© Copyright {(new Date()).getFullYear()} K Zayd Ahmed </a></div>
                </div>



            </footer>
        </>
    )
}