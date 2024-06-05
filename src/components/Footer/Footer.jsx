import styles from "./Footer.module.css"
import {useRef} from "react";
import emailjs from "@emailjs/browser";


export default function Footer() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_qzzngcr', 'template_bq4gzt9', form.current, {
                publicKey: 'qQ3U7yCukpgZvy9aS',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.sendMessage}>
                    <p>Get in touch.</p>
                    <div className={styles.formMessage}>
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Name" required/> <br/>

                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Email" required/> <br/>

                            <label htmlFor="message"></label>
                            <textarea type="text" id="message" name="message" placeholder="Message" required/> <br/>

                            <button type="submit"> Send Message</button>
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