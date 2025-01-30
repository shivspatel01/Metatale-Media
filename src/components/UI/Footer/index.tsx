'use client'
import React from 'react';
import { FooterContainer, FooterContent, LogoContainer, CompanyName, HorizontalLine, IconContainer } from './styles';
import Image from 'next/image';
import instagram from '../../../../public/svgs/instagram.svg';
import linkedin from '../../../../public/svgs/linkedin.svg';
import whatsapp from '../../../../public/svgs/whatsapp.svg';
import logo from '../../../../public/images/logo.png'; // Replace with your logo path

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Image src={logo} alt="Company Logo" width={50} height={50} /> {/* Adjust width and height as needed */}
        <CompanyName>Metatale Media</CompanyName>
      </LogoContainer>
      <HorizontalLine />
      <FooterContent>
        © 2024 Metatale Media | All Rights Reserved
      </FooterContent>
      <IconContainer>
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src={instagram} alt="Instagram" width={24} height={24} style={{ margin: '0 8px' }} />
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src={linkedin} alt="LinkedIn" width={24} height={24} style={{ margin: '0 8px' }} />
        </a>
        <a href="http://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <Image src={whatsapp} alt="WhatsApp" width={24} height={24} style={{ margin: '0 8px' }} />
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;