import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px; /* Increased padding for height */
  background-color: #f8f8f8; /* Adjust background color as needed */
  text-align: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between logo and company name */
  margin-bottom: 20px;
`;

export const CompanyName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333; /* Adjust color as needed */
  margin: 0;
`;

export const HorizontalLine = styled.hr`
  width: 80%;
  border: 0;
  border-top: 1px solid #ccc; /* Adjust line color and thickness */
  margin: 20px 0;
`;

export const FooterContent = styled.p`
  font-size: 14px;
  color: #666; /* Adjust color as needed */
  margin: 10px 0;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;