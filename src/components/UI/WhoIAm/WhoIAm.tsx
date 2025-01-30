"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Content,
  Title,
  Description,
  TextWrapper,
  ImageWrapper,
} from "./WhoIAm.style";
import Image from "next/image"; // Next.js Image component
import sumit from "../../../../public/images/sumit.png";

const WhoIAm: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container>
        <Content>
          <ImageWrapper>
            <Image
              src={sumit}
              alt="Sumit Kushwaha"
              width={200} // Matches dimensions with OurClients
              height={200}
              style={{
                borderRadius: "50%", // Matches the circular style of OurClients images
                objectFit: "cover",
              }}
            />
          </ImageWrapper>
          <TextWrapper>
            <Title>Something About Me</Title>
            <Description>
              I understand that the ultimate goal of video editing is to drive
              results. Whether it’s increasing engagement, boosting conversions,
              or enhancing your brand’s visibility, I tailor my editing to meet
              your specific objectives. With Sumit Kushwaha as the creative
              force behind video editing endeavors, your content will rise to
              new heights. So get ready to rock now with me and my whole team!
            </Description>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: '#03013B',
                fontStyle: "italic",
                marginTop: "10px",
              }}
            >
              Sumit Kushwaha
            </motion.p>
          </TextWrapper>
        </Content>
      </Container>
    </motion.div>
  );
};

export default WhoIAm;
