import React from 'react'

import styles from './header.module.css'

interface Props {
    name: string

}

export default function MyName ({name}: Props) {
    return (
        <header>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.employee}> Junior Frontend Developer</h3>
        </header>
    )
}

