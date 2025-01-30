import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background: transparent;
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
    margin: 20px 1.9rem; /* Adjust margin for tablets */
  }

  @media (max-width: 480px) {
    padding: 30px;
    margin: 10px 2rem; /* Reduce margin for mobile */
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: rgb(97, 163, 255);;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Icon = styled.span`
  font-size: 2rem;
`;

export const ContactCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
  animation: fadeIn 1.5s ease-in-out;
  margin: 0 auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 90%; /* Make card width responsive on tablets */
  }

  @media (max-width: 480px) {
    padding: 15px;
    width: 100%; /* Make card width responsive on mobile */
  }
`;

export const MediaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;


export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Consultation = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #6a0dad;
  margin-bottom: 20px;
  // cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
// export const bton = styled.div`
// cursor:pointer;
// `
export const CookieSettings = styled.div`
  font-size: 0.9rem;
  color: #0073e6;
  text-decoration: underline;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
// import styled from "styled-components";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 28rem;
`;

export const FormTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #000;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #000;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  resize: vertical;
  color: #000;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #d1d5db;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #bfdbfe;
    cursor: not-allowed;
  }
`;