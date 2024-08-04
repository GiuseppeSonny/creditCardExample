import styles from "./card.module.scss";

export default function CreditCard({ formData }) {
  return (
    <aside className={styles.main}>
      <div className={styles.cardFront}>
        <img className={styles.logoFront} src="/logo.svg" alt="logo" />
        <span>{formData.number || "0000 0000 0000 0000"}</span>
        <div>
          <span>{formData.name || "Leonardo Da vinci"}</span>
          <span>
            {formData.mm || "00"}/{formData.yy || "00"}
          </span>
        </div>
      </div>

      <div className={styles.cardBack}>
        <div className={styles.blackstripe}></div>
        <img className={styles.logoBack} src="/logo.svg" alt="logo" />
        <span className={styles.cvcText}>{formData.cvc || "000"}</span>
      </div>
    </aside>
  );
}
