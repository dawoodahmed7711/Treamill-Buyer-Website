"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cities, whatsappLink } from "../config/site";

const initial = { name: "", city: "", details: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!values.city) errors.city = "Please select your city.";
  if (values.details.trim().length < 5)
    errors.details = "Please add a few details (brand, model, condition).";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (status) setStatus(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("error");
      return;
    }

    const message = [
      "Hello TreadCash Punjab! I want to sell my treadmill.",
      "",
      `Name: ${values.name.trim()}`,
      `City: ${values.city}`,
      `Treadmill details: ${values.details.trim()}`,
    ].join("\n");

    const win = window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    if (!win) {
      // Popup blocked: fall back to same-tab navigation.
      window.location.href = whatsappLink(message);
    }
    setStatus("success");
    setValues(initial);
  };

  return (
    <motion.form
      className="form-card"
      onSubmit={onSubmit}
      noValidate
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {status === "success" && (
        <div className="alert alert-success" role="status">
          ✅ WhatsApp is opening with your message ready to send. If it didn&apos;t open, tap the
          WhatsApp button on this page.
        </div>
      )}
      {status === "error" && (
        <div className="alert alert-error" role="alert">
          Please fix the highlighted fields and try again.
        </div>
      )}

      <div className={`field${errors.name ? " has-error" : ""}`}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Ahmed Khan"
          value={values.name}
          onChange={onChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
      </div>

      <div className={`field${errors.city ? " has-error" : ""}`}>
        <label htmlFor="city">City (Punjab) *</label>
        <select
          id="city"
          name="city"
          value={values.city}
          onChange={onChange}
          aria-invalid={Boolean(errors.city)}
          aria-describedby={errors.city ? "city-error" : undefined}
        >
          <option value="">Select your city</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.city && <p className="field-error" id="city-error">{errors.city}</p>}
      </div>

      <div className={`field${errors.details ? " has-error" : ""}`}>
        <label htmlFor="details">Treadmill details</label>
        <textarea
          id="details"
          name="details"
          placeholder="Brand, model, motorized or manual, condition, age…"
          value={values.details}
          onChange={onChange}
          aria-invalid={Boolean(errors.details)}
          aria-describedby={errors.details ? "details-error" : undefined}
        />
        {errors.details && <p className="field-error" id="details-error">{errors.details}</p>}
      </div>

      <motion.button
        type="submit"
        className="btn btn-whatsapp form-submit"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        Send on WhatsApp →
      </motion.button>
      <p className="form-note">WhatsApp will open with your message ready to send.</p>
    </motion.form>
  );
}
