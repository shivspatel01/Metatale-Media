"use client";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import {
  Container,
  Content,
  Title,
  Description,
  TextWrapper,
  ImageWrapper,
} from "./CoFounderStyle";
import Image from "next/image";

const CoFounder: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starting animation state
      whileInView={{ opacity: 1, y: 0 }} // Animation on scroll
      transition={{ duration: 0.6 }} // Duration of the animation
      viewport={{ once: true }} // Animates only once when in view
    >
      <Container>
        <Content>
          <ImageWrapper>
            <Image
              src="/images/aishal.png"
              alt="Aishal Kujur Opeka"
              width={200} // Adjusted dimensions to match OurClients
              height={200}
              style={{
                borderRadius: "50%", // Circular design like OurClients images
                objectFit: "cover",
              }}
            />
          </ImageWrapper>
          <TextWrapper>
            <Title>Something About Co-Founder</Title>
            <Description>
              I'm the co-founder of Meta Tale Media, where storytelling and
              content creation is my passion and expertise. I’m dedicated to
              bringing stories to life through captivating visuals and
              innovative editing techniques.
            </Description>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#03013B", // Highlighted color
                fontStyle: "italic",
                marginTop: "10px",
              }}
            >
              Aishal Kujur Opeka
            </motion.p>
          </TextWrapper>
        </Content>
      </Container>
    </motion.div>
  );
};

export default CoFounder;
