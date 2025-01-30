'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';
import bg1 from '../../../../public/images/bg1.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;
  background: url(${bg1.src}) no-repeat center;
  background-size: cover;
  border-radius: 0 0 30px 30px;
  margin-top:0;

  @media (max-width: 1024px) {
    background: none;
    margin-top: 4rem;
    border-radius: 0 0 20px 20px;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
    border-radius: 0 0 15px 15px;
    background: none;
  }
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 9rem 1rem 1rem 1rem;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 6rem 1rem 1rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 4rem;
    font-weight: 400;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  p {
    max-width: 41rem;
    color:rgb(0, 0, 0);
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1rem;
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
