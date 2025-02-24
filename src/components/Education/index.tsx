import styles from "./education.module.css"

const education_list = ['Academy of Yandex - Graduated', 'RTU MIREA - First year']

export default function Education () {
    return (
        <div className={styles.education_block}>
            <h2 className={styles.education_title}>Education</h2>
            <ul className={styles.education_list}>
                {education_list.map((education, index) => (
                    <li key={index} className={styles.todo_item}>{education}</li>
                ))}
            </ul>
        </div>
    ) 
}