"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Content,
  Title,
  Description,
  Button,
  ImageWrapper,
  HighlightedText,
  WorksSection,
  WorksHeading,
  WorksSubheading,
  ThumbnailGrid,
  Thumbnail,
  VideoSection,
  VideoWrapper,
} from "./PortfolioStyle";
import Image from "next/image";
import portfolioImage from "../../../../public/images/Portfolio.jpg";
import thumbnail1 from "../../../../public/images/thumbnail1.jpg"; // Add your thumbnail images
import thumbnail2 from "../../../../public/images/thumbnail2.jpg";
import thumbnail3 from "../../../../public/images/thumbnail3.jpg";
import thumbnail4 from "../../../../public/images/thumbnail4.jpg";
import thumbnail5 from "../../../../public/images/thumbnail5.jpg";
import thumbnail6 from "../../../../public/images/thumbnail6.jpg";

const Portfolio: React.FC = () => {
  const [showWorks, setShowWorks] = useState(false);

  const handleButtonClick = () => {
    setShowWorks(!showWorks);
  };

  return (
    <motion.div
    id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container>
        <ImageWrapper>
          <Image
            src={portfolioImage.src}
            alt="Portfolio"
            width={200}
            height={200}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </ImageWrapper>
        <Content>
          <Title>Portfolio</Title>
          <Description>
            <HighlightedText>
              Video Editing • Graphics Designing • Many More...
            </HighlightedText>
            <br />
            We craft visuals that speak to your ideal customers. Ready for an
            extraordinary brand transformation with our services?
          </Description>
          <Button onClick={handleButtonClick}>
            Click here to check my portfolio
          </Button>
        </Content>

        {showWorks && (
          <WorksSection>
            <WorksHeading>Works</WorksHeading>
            <WorksSubheading>Graphics Design</WorksSubheading>
            <ThumbnailGrid>
              {[thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6].map(
                (thumbnail, index) => (
                  <Thumbnail key={index}>
                    <Image
                      src={thumbnail.src}
                      alt={`Thumbnail ${index + 1}`}
                      width={200}
                      height={200}
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    />
                  </Thumbnail>
                )
              )}
            </ThumbnailGrid>

            <WorksSubheading>Videos</WorksSubheading>
            <VideoSection>
              <VideoWrapper>
                {/* <video controls width="100%">
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                 <video
            src="/videos/video1.mp4"
            className="mt-10 w-full max-w-[600px] mx-auto rounded-lg shadow-lg"
            loop
            controls
          />
              </VideoWrapper>
              <VideoWrapper>
                 <video
            src="/videos/video2.mp4"
            className="mt-10 w-full max-w-[600px] mx-auto rounded-lg shadow-lg"
            loop
            controls
          />
              </VideoWrapper>
              <VideoWrapper>
                <video
            src="/videos/video3.mp4"
            className="mt-10 w-full max-w-[600px] mx-auto rounded-lg shadow-lg"
            loop
            controls
          />
              </VideoWrapper>
            </VideoSection>
          </WorksSection>
        )}
      </Container>
    </motion.div>
  );
};

export default Portfolio;