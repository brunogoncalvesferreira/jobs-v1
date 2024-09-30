import styles from './footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © {new Date().getFullYear()} - Todos os direitos reservados.
      </p>
    </footer>
  );
}
