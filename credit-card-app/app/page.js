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

  const animateSlider = (validate) => {
    const axis = window.matchMedia("(max-width: 750px)").matches ? "Y" : "X";
    document.querySelector(
      ".cardOverflow > div"
    ).style.transform = `translate${axis}(50${axis === "Y" ? "vh" : "vw"})`;

    document.body.classList.add("body-slider");

    setTimeout(() => {
      setValidate(validate);
      document.body.classList.remove("body-slider");
      document.querySelector(".cardOverflow > div").style.transform =
        "translate(0)";
    }, 500);
  };

  return (
    <>
      <CreditCard formData={formData} />
      <main>
        <div>
          {validate ? (
            <CardValidator
              setFormData={setFormData}
              animateSlider={animateSlider}
            />
          ) : (
            <CardForm
              setFormData={setFormData}
              animateSlider={animateSlider}
              formData={formData}
            />
          )}
        </div>
      </main>
    </>
  );
}
