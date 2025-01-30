import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  padding: 60px;
  text-align: center;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }
`;

export const ServiceCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const ServiceIcon = styled.div`
  font-size: 50px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #3B47CA;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 16px;
  color:rgb(0,0,0);
  line-height: 1.6;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 14px;
    -webkit-line-clamp: 3;
  }
`;