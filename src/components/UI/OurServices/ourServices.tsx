"use client";
import React from 'react';
import { Service } from './ourServices.types';
import { ServicesContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription } from './ourServices.style';
import { color, motion } from 'framer-motion';

const services: Service[] = [
  { title: 'Personal Branding', description: 'Personal branding services help individuals and professionals build and maintain a strong, compelling online presence in today’s digital world.', icon: '📊' },
  { title: 'Video Editing', description: 'Expert editors transform raw footage into professional, engaging videos tailored to meet your specific needs and preferences.', icon: '🎬' },
  { title: 'Social Media Management', description: 'We develop social media strategies, schedule content, and engage with audiences to boost brand visibility and engagement.', icon: '📱' },
  { title: 'Graphics Designing', description: 'Our graphic design services include logo creation, branding, social media graphics, and web design to enhance your visual identity.', icon: '🎨' },
  { title: 'Content Writing', description: 'Quality content drives content marketing success. Our writers create engaging, informative content across various niches to support your strategy.', icon: '✍️' },
  { title: 'Web Development', description: 'Web development services create stunning websites that enhance online presence, captivate audiences, and deliver measurable results.', icon: '💻' }
];

const OurServices:  React.FC = () => {
  return (
    <motion.div 
     id="services"  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
  <h2 
  style={{
    textAlign: 'center', 
    marginTop: '3rem', 
    fontSize: '3rem', 
    fontWeight: 'bold', 
    background: 'rgb(97, 163, 255);', 
    WebkitBackgroundClip: 'text', 
    color: 'transparent'
  }}
>
  Our Services
</h2>


      <ServicesContainer>
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ServiceCard>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          </motion.div>
        ))}
      </ServicesContainer>
    </motion.div>
  );
};

export default OurServices;