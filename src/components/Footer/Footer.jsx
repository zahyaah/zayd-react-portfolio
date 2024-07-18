import styles from "./Footer.module.css"
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


export default function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});

    const handleNameChange = e => setName(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handleMessageChange = e => setMessage(e.target.value);

    const validate = () => {
        let allErrors = {}
        if (!name) allErrors.name = "Name is mandatory, fam!";
        if (!email) allErrors.email = "Email is a must, no cap!";
        if (!message) allErrors.message = "Message is essential, bruh!";
        setError(allErrors);
        return Object.keys(allErrors).length === 0;
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if (!validate()) {
            // if any of the fields are empty
            return;
        }

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
        setName("");
        setEmail("");
        setMessage("");

    };

    useEffect(() => {
        if (error.name) alert(error.name);
        if (error.email) alert(error.email);
        if (error.message) alert(error.message);
    }, [error]);

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.sendMessage}>
                    <p>Get in touch.</p>
                    <div className={styles.formMessage}>
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name"></label>
                            <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={handleNameChange} /> <br/>
                            { " " }

                            <label htmlFor="email"></label>
                            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} /> <br/>
                            { " " }

                            <label htmlFor="message"></label>
                            <textarea id="message" name="message" placeholder="Message" value={message} onChange={handleMessageChange} /> <br/>
                            { " " }

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