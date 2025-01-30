import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background:rgba(249, 249, 249, 0);
  border-radius: 20px;
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;

  @media (max-width: 1300px) {
    padding: 40px;
    margin: 20px 1.9rem; /* Adjust margin for tablets */
  }


  @media (max-width: 768px) {
    padding: 40px;
    margin: 20px 1.5rem; /* Adjust margin for tablets */
  }

  @media (max-width: 480px) {
    padding: 30px;
    margin: 15px 2rem; /* Adjust margin for smaller screens */
  }
`;

export const Badge = styled.div<{ variant?: string }>`
  display: inline-block;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 20px;
  margin-bottom: 10px;
  color: white;
  background: ${({ variant }) => (variant === "blue" ? "#03013B" : "#666")};

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: rgb(97, 163, 255);;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgb(97, 163, 255);;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ComparisonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px; /* Add gap between columns in mobile view */
  }
`;

export const Column = styled.div`
  flex: 1;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1.5s ease-in-out;
  height: 220px; // Set a fixed height
  margin-right: 20px; // Add space between columns

  &:last-child {
    margin-right: 0; // Remove margin from the last column
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    height: auto; // Allow height to adjust on smaller screens
    margin-right: 0; // Remove margin on smaller screens
  }

  @media (max-width: 480px) {
    padding: 15px; /* Adjust padding for smaller screens */
    height: auto; /* Allow height to adjust */
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 1.1rem;
  color: #444;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &::before {
    content: "\u2713";
    color: ${({ theme }) => theme.primary || "#2a2a72"};
    font-weight: bold;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for mobile */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Further reduce font size for smaller screens */
    align-items: start;
    text-align: left;
  }
`;

export const ChatContainer = styled.div`
  text-align: center;
  margin-top: 20px;

  a {
    color: #03013B;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 15px; /* Adjust top margin for mobile */
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;
