"use client";

export default function CardValidator({ setFormData }) {
  const resetForm = () => {
    setFormData({ name: null, number: null, mm: null, yy: null, cvc: null });
  };

  return (
    <div>
      <p> added card details</p>
      <button onClick={resetForm}>Continue</button>
    </div>
  );
}
