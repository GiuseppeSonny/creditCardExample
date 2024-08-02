import styles from "./card.module.scss";

export default function CreditCard({ formData }) {
  return (
    <aside className={styles.main}>
      <div className={styles.cardFront}>
        <span>{formData.number || "0000 0000 0000 0000"}</span>
        <div>
          <span>{formData.name || "Leonardo Da vinci"}</span>
          <span>
            {formData.mm || "00"}/{formData.yy || "00"}
          </span>
        </div>
      </div>

      <div className={styles.cardBack}>
        <span>{formData.cvc || "000"}</span>
      </div>
    </aside>
  );
}
