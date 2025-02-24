import styles from "./experience.module.css"

const experience_list = [{work: 'GorGaz, Kaspiysk - Django developer', work_time:'June 2024 to September 2024', achieves:['Developed CRM system', 'Acted as technical support']}]

export default function Experience () {
    return (
        <div className={styles.experience_block}>
            <h2 className={styles.experience_title}>Experience</h2>
            <ul className ={styles.experience_list}>
                {experience_list.map((exp, index) => (
                    <li key={index} className={styles.todo_item}>
                        <h2 className={styles.worker}>{exp.work}</h2>
                        <br />
                        <span className={styles.work_time}>{exp.work_time}</span>
                        <ul className={styles.achieves}>
                        {exp.achieves.map((ach, index) => (
                            <li className={styles.todo_item_2}>{ach}</li>
                        ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}