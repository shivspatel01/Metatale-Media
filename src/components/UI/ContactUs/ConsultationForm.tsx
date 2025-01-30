"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ModalOverlay,
  ModalContent,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormActions,
  CancelButton,
  SubmitButton,
} from "./ContactUs.style";

interface ConsultationFormProps {
  onClose: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/shivsagar07/google_sheets/zyQdUtVveCUkIQDt?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [formData.name, formData.email, formData.phone, formData.message],
          ]),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
        onClose(); // Close the form modal
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContent>
        <FormTitle>Book a Schedule</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <FormInput
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </FormGroup>
          <FormActions>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </SubmitButton>
          </FormActions>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ConsultationForm;