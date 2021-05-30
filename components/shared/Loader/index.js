import styles from 'styles/partials/Loader.module.scss'

export default function Loader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.roll}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}