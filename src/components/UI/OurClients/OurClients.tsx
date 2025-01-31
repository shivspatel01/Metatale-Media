"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ajayImage from "../../../../public/images/ajay.jpg";
// import ajayImage from "../../../../public/images/ajay.jpg";
import himanshuImage from "../../../../public/images/himanshu.webp";
import akashImage from "../../../../public/images/akash.jpg";
import saifImage from "../../../../public/images/saif.png";
import {
  Container,
  Heading,
  ContentWrapper,
  SliderContainer,
  Slide,
  DetailsContainer,
  ClientName,
  ClientText,
  NextButton,
} from "./OurClientsStyle";

const clients = [
  {
    image: ajayImage,
    text: "MetaTale Media has completely transformed my Instagram Reels game! Working with Sumit and his team has been an absolute pleasure. My content stands out, and the engagement speaks volumes. MetaTale is more than a creative agency; they are partners in success. If you're looking to make waves on Instagram, look no further!",
    name: "Ajay Pandey",
  },
  {
    image: himanshuImage,
    text: "Working with MetaTale Media has been a game-changer for my videos. The attention to detail in video editing is unmatched, and they truly know how to bring my content to life. Sumit and the team at MetaTale are not just editors; they are storytellers. The seamless process from conceptualization to the final cut exceeded my expectations. My audience engagement has soared, all thanks to the creative touch MetaTale adds to each video. Highly recommend them to any content creator looking to level up their game!",
    name: "Himanshu Rai",
  },
  {
    image: akashImage,
    text: "I have been working with Sumit for the past few months and to be very honest. It has been just an amazing journey. This guy is right there available for you whenever you need him and he is going to make sure that you are satisfied with your content before it goes, would definitely recommend him any day.",
    name: "Akash Bhalla",
  },
  {
    image: saifImage,
    text: "MetaTale Media turned our company presentation into a masterpiece! Sumit and his team took our ideas and magically transformed them into a video that speaks to our audience. Their attention to detail and creativity shone through, making our edtech platform, 'TheFasttrick,' look its absolute best. Working with them felt like having a friend in the creative process, understanding our goals and bringing them to life.",
    name: "Saif Jain",
  },
];

const OurClients: React.FC = () => {
  const [activeClient, setActiveClient] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNextClient = () => {
    const nextClient = (activeClient + 1) % clients.length;
    setActiveClient(nextClient);

    // Scroll to the next client's image
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        top: nextClient * sliderRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container  id="clients">
      <Heading>Our Clients</Heading>
      <ContentWrapper>
        <SliderContainer ref={sliderRef}>
          {clients.map((client, index) => (
            <Slide key={index}>
              <Image
                src={client.image.src}
                alt={client.name}
                width={300}
                height={400}
                style={{ objectFit: "cover", width: "100%", height: "100%" }} // Fit image into rectangle fully
              />
            </Slide>
          ))}
        </SliderContainer>

        {/* Client Details */}
        <DetailsContainer>
          <motion.div
         
            key={activeClient}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ClientName>{clients[activeClient].name}</ClientName>
            <ClientText>{clients[activeClient].text}</ClientText>
            <NextButton onClick={handleNextClient}>Next Client</NextButton>
          </motion.div>
        </DetailsContainer>
      </ContentWrapper>
    </Container>
  );
};

export default OurClients;