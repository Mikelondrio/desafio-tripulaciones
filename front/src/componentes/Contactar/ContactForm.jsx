// ContactForm.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css'; // Importa el archivo CSS

export function ContactForm() {
  const [state, handleSubmit] = useForm("xgvwvenw"); // Reemplaza con tu ID de Formspree
  if (state.succeeded) {
    return <p className={styles.successMessage}>¡Gracias por tu mensaje!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label htmlFor="email">Correo Electrónico</label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        className={styles.error}
      />
      <label htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        className={styles.error}
      />
      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
