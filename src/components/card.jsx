import styles from "./card.module.css"

export function Card({ title, company, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.infoJob}>
        <h3>{title}</h3>
        <p>{company}</p>
      </div>

      <p>{description}</p>
    </div>
  );
}
