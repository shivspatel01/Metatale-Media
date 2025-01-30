import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;

  img {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const TextWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color:  #03013B
`;


export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  font-style: italic;
  margin-top: 10px;

  &:hover {
    color: #2a2a72;
  }
`;
