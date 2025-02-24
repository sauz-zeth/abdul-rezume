import styles from './contact.module.css'

export default function Contact () {
    return (
        <div className={styles.conblock}>
            <h2 className={styles.contact_title}>Contacts</h2>
            <h2 className={styles.for_contact}><span className={styles.addr}>Address: </span> Moscow, st.Pushkina</h2>
            <h2 className={styles.phone_number}><span className={styles.addr}>Phone: </span>+79882781322</h2>
            <h2 className={styles.email}><span className={styles.addr}>Email: </span>abdul.suleymanov05@mail.ru</h2>

        </div>
    )
}