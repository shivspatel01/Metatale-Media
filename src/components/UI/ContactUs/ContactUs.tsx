"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ConsultationForm from "./ConsultationForm";
import {
  Section,
  Title,
  Icon,
  ContactCard,
  MediaLogo,
  Description,
  Consultation,
  CookieSettings,
  // btn,
} from "./ContactUs.style";

const ContactUs: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div
    id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Section>
        <Title>
          Contact Us <Icon>📱</Icon>
        </Title>
        <ContactCard>
          <MediaLogo>
            <img src="/images/logo.png" alt="MetaTale Media" />
          </MediaLogo>
          <Description>
            Welcome to my scheduling page. Please fill the form to book a schedule.
          </Description>
          <Consultation 
          onClick={() => setShowForm(true)}>
          <button style={{ cursor: "pointer" }} type="button">Book a Schedule</button> 
          </Consultation>
          <CookieSettings>
            <a href="#">Cookie settings</a>
          </CookieSettings>
        </ContactCard>
      </Section>
      {showForm && <ConsultationForm onClose={() => setShowForm(false)} />}
    </motion.div>
  );
};

export default ContactUs;