"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Section, 
  Title, 
  Subtitle, 
  ComparisonContainer, 
  Column, 
  List, 
  ListItem, 
  Badge 
} from "./CreativeApproach.style";

const CreativeApproach: React.FC = () => {
  return (
    <motion.div
    id="why-metatale"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Section>
        <Badge>SPECIAL • SPECIAL • SPECIAL</Badge>
        <Title>Our Creative Approach</Title>
        <Subtitle>Metatale Media V/S Others</Subtitle>
        <ComparisonContainer>
          <Column >
            <Badge variant="gray">OTHERS</Badge>
            <List>
              <ListItem>AI generated scripting</ListItem>
              <ListItem>No content production and guidance</ListItem>
              <ListItem>Low level simple editing</ListItem>
              <ListItem>No on-time Management</ListItem>
            </List>
          </Column>
          <Column>
            <Badge variant="blue">Metatale Media</Badge>
            <List>
              <ListItem>Research and Scripting</ListItem>
              <ListItem>Content Production</ListItem>
              <ListItem>High Level Editing</ListItem>
              <ListItem>Uploading of the video</ListItem>
              {/* <ListItem>Account and Community Management</ListItem> */}
            </List>
          </Column>
        </ComparisonContainer>
      </Section>
    </motion.div>
  );
};

export default CreativeApproach;
