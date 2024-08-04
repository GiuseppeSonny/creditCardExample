"use client";

import { useState, useRef } from "react";
import styles from "./form.module.scss";

export default function CardForm({ setFormData, formData, animateSlider }) {
  const numberInputRef = useRef(null);
  const mmInputRef = useRef(null);
  const yyInputRef = useRef(null);
  const cvcInputRef = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    switch (name) {
      case "number":
        newValue = value
          .replace(/\s/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim()
          .slice(0, 19);
        break;
      case "mm":
      case "yy":
        newValue = value
          .toString()
          .replace(/[^0-9]/g, "")
          .substring(0, 2);
        if (name === "mm" && Number(newValue) > 12) {
          newValue = "12";
        }
        break;
      case "cvc":
        newValue = value.substring(0, 3);
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleError = (target, message = "Error", type = "add") => {
    const errorElement = document.querySelector(`.label${target} + p.info`);
    const inputElement = document.querySelector(`[name="${target}"]`);

    if (type === "add") {
      errorElement.classList.remove(styles["info--hidden"]);
      errorElement.textContent = message;
      inputElement.classList.add(styles["input--error"]);
    } else {
      errorElement.classList.add(styles["info--hidden"]);
      errorElement.textContent = "";
      inputElement.classList.remove(styles["input--error"]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;

    if (!formData.number || formData.number.trim() === "") {
      handleError("number", "Card number is required");
      hasErrors = true;
    } else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(formData.number)) {
      handleError("number", "Invalid card number format");
      hasErrors = true;
    }

    if (!formData.name || formData.name.trim() === "") {
      handleError("name", "Cardholder name is required");
      hasErrors = true;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      handleError("name", "Invalid cardholder name");
      hasErrors = true;
    }

    if (!formData.mm || !formData.yy) {
      handleError("mm", "Expiry date is required");
      hasErrors = true;
    } else if (Number(formData.mm) < 1 || Number(formData.mm) > 12) {
      handleError("mm", "Invalid expiry month");
      hasErrors = true;
    } else if (Number(formData.yy) < 0 || Number(formData.yy) > 99) {
      handleError("yy", "Invalid expiry year");
      hasErrors = true;
    }

    if (!formData.cvc || formData.cvc.trim() === "") {
      handleError("cvc", "CVC is required");
      hasErrors = true;
    } else if (!/^\d{3}$/.test(formData.cvc)) {
      handleError("cvc", "Invalid CVC");
      hasErrors = true;
    }

    if (!hasErrors) {
      animateSlider(true);
    }
  };
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <label className={styles.labelname}>
        Nome Cognome
        <input
          type="text"
          placeholder="Leonardo Da Vinci"
          onChange={handleInput}
          name="name"
          className={styles.cardInput}
        />
      </label>

      <label className={styles.labelnumber}>
        Numero Carta
        <input
          type="text"
          placeholder=" 1234 5678 9123 0000"
          onChange={handleInput}
          name="number"
          className={styles.cardInput}
          minLength={19}
          ref={numberInputRef}
        />
      </label>

      <div className={styles.cvc}>
        <label className={styles.labelMmYy}>
          Exp. Date (MM/YY)
          <div>
            <input
              type="text"
              placeholder="MM"
              onChange={handleInput}
              name="mm"
              className={styles.cardInput}
              ref={mmInputRef}
            />
            <input
              type="text"
              placeholder="YY"
              onChange={handleInput}
              name="yy"
              className={styles.cardInput}
              ref={yyInputRef}
            />
          </div>
        </label>

        <label className="labelcvc">
          CVC
          <input
            type="text"
            placeholder="123"
            onChange={handleInput}
            name="cvc"
            className={styles.cardInput}
            ref={cvcInputRef}
          />
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Confirm
      </button>
    </form>
  );
}
