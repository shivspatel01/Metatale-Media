import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 0 2rem;
  gap: 1rem;
  background-color: transparent;
  position: relative;

  @media (max-width: 480px) {
    padding: 1rem; // Reduce padding for smaller screens
    margin: 0 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color:rgb(97, 163, 255);
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem; // Reduce font size for smaller screens
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column; // Stack images and details vertically on smaller screens
    align-items: center;
    gap: 1rem; // Reduce gap for smaller screens
    width:36rem
  }
`;

export const SliderContainer = styled.div`
  width: 16rem;
  height: 25rem;
  overflow-y: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  scroll-behavior: smooth;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    cursor: grab;
  }

  @media (max-width: 768px) {
    width: 50%; // Full width on smaller screens
    height: 20rem; // Reduce height for smaller screens
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsContainer = styled.div`
  flex: 1;
  text-align: left;
  padding: 1rem;

  @media (max-width: 768px) {
    text-align: center; // Center text on smaller screens
    padding: 0.5rem; // Reduce padding for smaller screens
  }
`;

export const ClientName = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: rgb(97, 163, 255);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; // Reduce font size for smaller screens
  }
`;

export const ClientText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  word-wrap: break-word; /* Ensure long words break properly */
  // text-align: center; /* Center align for better readability */
  padding: 0 1rem; /* Add padding to prevent text from touching the screen edges */

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 3rem; /* Increase padding for better readability */
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
    padding: 0 7rem; /* Adjust padding for small screens */
  }
`;

export const NextButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background-color: #03013B;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #374151;
  }

  @media (max-width: 768px) {
    width: 100%; // Full width on smaller screens
    padding: 0.75rem; // Increase padding for better touch targets
    width: fit-content
  }
`;