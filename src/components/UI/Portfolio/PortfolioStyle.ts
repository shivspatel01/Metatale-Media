import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 20px auto;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 1300px) {
    padding: 40px;
    margin: 20px 1.9rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: 1.9rem;
    margin-right: 1.9rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  animation: zoomIn 1.5s ease-out;

  @keyframes zoomIn {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  img {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    width: 100%;
    height: auto;
    max-width: 200px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 150px;
    }
  }
`;

export const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: slideUp 1.5s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #03013b;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HighlightedText = styled.span`
  font-size: 0.8rem;
  color: #03013b;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: fit-content;
  padding: 12px 24px;
  background-color: #03013b;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(64, 64, 126);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px 18px;
  }
`;

export const WorksSection = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
`;

export const WorksHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #03013b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const WorksSubheading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #03013b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  gap:1rem;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: fit;
  }
`;

export const VideoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  video {
    width: 100%;
    height: auto;
  }
`;