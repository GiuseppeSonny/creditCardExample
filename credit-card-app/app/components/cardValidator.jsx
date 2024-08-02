"use client";

export default function CardValidator({ setFormData, animateSlider }) {
  const resetForm = () => {
    setFormData({ name: null, number: null, mm: null, yy: null, cvc: null });
    animateSlider(false);
  };

  return (
    <div className="cardThanks">
      <p>Thank you!</p>
      <p>We&apos;ve added your card details</p>
      <button className="btn-primary" onClick={resetForm}>
        Continue
      </button>
    </div>
  );
}
