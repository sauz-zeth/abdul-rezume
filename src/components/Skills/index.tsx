import styles from './skills.module.css'

const skills_list = ['HTML/CSS', 'JavaScript', 'Python', 'Git/Github', 'Linux']

export default function Skills () {
    return (
        <div className={styles.skills_block}>
            <h2 className={styles.skills_title}>Skills</h2>
            <ul className={styles.skills_list}>
                {skills_list.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}