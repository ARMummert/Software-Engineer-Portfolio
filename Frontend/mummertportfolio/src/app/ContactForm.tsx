"use client";
import styles from "./ContactForm.module.css";
import React, { useState } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation function to check if all fields are filled
    const isFormValid = () => {
    return Object.values(formData).every(field => field.trim() !== '');
    };

    if (!isFormValid()) {
    setErrors({
      message: 'Please fill in all boxes.'
    });
    return;
    }
    try {
      const response: EmailJSResponseStatus = await emailjs.sendForm('service_aye206j', 'template_gngktn3', e.target as HTMLFormElement, 'Vo4gprOEh22YSfCQy');
      if (response.status === 200) {
        setSubmitSuccess(true);
        console.log('Form submitted successfully!');
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        console.error('Error submitting form:', response.text);
        setErrors({
          message: 'Please fill in all boxes.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        message: 'An error occurred while submitting the form. Please try again later.'
      });
    }
  };

  return (
    <div>
      {submitSuccess && <SuccessMessage />}
      {!submitSuccess && (
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
          errors={errors} 
        />
      )}
    </div>
  );
};

const SuccessMessage = () => (
  <div className="success-message">Form submitted successfully! Page will refresh shortly...</div>
);

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData: FormData;
  errors: Errors | null;
}

const Form = ({ handleSubmit, handleChange, formData, errors }: FormProps) => (
    <form className={styles.form} onSubmit={handleSubmit}>
        <div>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: '#327CBD', height: 100, width: 100, marginRight: '10px'}} />
        </div>
        <p className={styles.contact}>Feel free to contact me with any questions or comments!</p>
        <label className={styles.name}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label className={styles.email}>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label className={styles.message}>
            <input type="text" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        {errors && errors.message && <div className={styles.error}>{errors.message}</div>}
        <div>
        <button type="submit">
            Submit
        </button>
        </div>
    </form>
);

export default ContactForm;
