import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ContactInfo,
  ContactItem,
  ContactItemDiv,
  ContactText,
  ResumeButton,
} from "./HeroStyle";
import RajImg from "../../images/RajImage.jpeg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { HiLocationMarker, HiMail, HiPhone, HiExternalLink } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ContactInfo>
              {Bio.location && (
                <ContactItemDiv>
                  <HiLocationMarker size={18} />
                  <ContactText>{Bio.location}</ContactText>
                </ContactItemDiv>
              )}
              {Bio.email && (
                <ContactItem href={`mailto:${Bio.email}`}>
                  <HiMail size={18} />
                  <ContactText>{Bio.email}</ContactText>
                </ContactItem>
              )}
              {Bio.phone && (
                <ContactItem href={`tel:${Bio.phone}`}>
                  <HiPhone size={18} />
                  <ContactText>{Bio.phone}</ContactText>
                </ContactItem>
              )}
              {Bio.linkedin && (
                <ContactItem href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={18} />
                  <ContactText>LinkedIn</ContactText>
                  <HiExternalLink size={14} />
                </ContactItem>
              )}
              {Bio.github && (
                <ContactItem href={Bio.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={18} />
                  <ContactText>GitHub</ContactText>
                  <HiExternalLink size={14} />
                </ContactItem>
              )}
            </ContactInfo>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={RajImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
