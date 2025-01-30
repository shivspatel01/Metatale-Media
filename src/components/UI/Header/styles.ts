'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.header`
  padding: 1rem 0;
  border-bottom: 0.5px solid rgb(255, 255, 255);
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Logo = styled.div`
  width: 140px; /* Adjust logo size */
  height: auto;

  img {
    width: 100%;
    height: 50px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 120px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;
  }

  div {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;

    span {
      width: 100%;
      height: 4px;
      background-color: var(--emerald);
      border-radius: 2px;
      transition: all 0.3s;
    }

    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translateY(6px);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg) translateY(-6px);
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  margin-right: -6.3rem;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    transition: color 0.3s;

    /* Add the underline effect */
    position: relative;
    padding-bottom: 2px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: #03013B;
      transition: width 0.3s ease; /* Smooth transition for the underline */
    }

    &:hover {
      color: #03013B;
      
      /* Trigger the underline transition on hover */
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    gap: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    right: 20px;
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.7s ease-in-out;
    margin-right: -1.2rem;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;


export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 220px;
    right: 20px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
