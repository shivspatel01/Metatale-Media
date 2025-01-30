'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
  Logo,
} from './styles';
import logo from '../../../../public/images/logo.png';
import { GetStartedButton } from '@/components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // // Scroll to section function

const handleScroll = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    const offset = 100; // Adjust this value according to your navbar height
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });
  }
};

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Logo>
           <a href="#hero"
           ><Image src={logo} alt="logo" /></a> 
          </Logo>
        </LogoContainer>

        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? 'active' : ''}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </BurgerMenu>

        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.url);  
              }}
            >
              {link.linkTo}
            </a>
          ))}
        </Nav>

        <CallToActions className={isOpen ? 'active' : ''}>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
