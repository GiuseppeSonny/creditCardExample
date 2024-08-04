"use client";

import styles from "./page.module.css";
import CreditCard from "./components/creditCard";
import CardForm from "./components/creditCardForm";
import CardValidator from "./components/cardValidator";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: null,
    number: null,
    mm: null,
    yy: null,
    cvc: null,
  });
  const [validate, setValidate] = useState(false);

  return (
    <main className={styles.main}>
      <CreditCard formData={formData} />
      <div>
        <div>
          {validate ? (
            <CardValidator setFormData={setFormData} />
          ) : (
            <CardForm setFormData={setFormData} formData={formData} />
          )}
        </div>
      </div>
    </main>
  );
}
