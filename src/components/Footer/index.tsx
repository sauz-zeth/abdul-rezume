import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div>
            <h2 className={styles.across_title}>Across the internet</h2>
            <div className={styles.links_block}>
            <h3 className={styles.links}>Github: <a className={styles.real_links}href="https://github.com/Morffo">Morffo</a></h3>
            <h3 className={styles.links}>LinkedIn: <a className={styles.real_links}href="#">Example</a></h3>

            </div>
        </div>
    )
}