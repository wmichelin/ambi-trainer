import styles from '@/styles/Key.module.css'

interface Props {
    letter: string;
}

export const Key = (props: Props) => (
    <span className={styles.key}>{props.letter}</span>
);