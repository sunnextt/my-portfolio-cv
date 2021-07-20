import React from 'react';
import Link from 'next/link'


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const style = {
    boxSizing: "borderBox",
    padding: 0,
    lineHeight: 1.15,
    margin: 0,
    overflow: "visible",
    textTransform: "none",
    fontFamily: "Space Grotesk, sans-serif",
    border: "none",
    borderRadius: "50px",
    color: "#fff",
    display: "flex",
    position: "absolute",
    // top: 0,
    left: 0,
    width: "25rem",
    height: "7rem",
    background: "linear-gradient(270deg,#13ADC7 0%,#945DD6 100%)",
    opacity: 1,
    transition: "4s ease",
    fontSize: "24px",
    fontWeight: 600,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "none",
}

const Hero = (props) => (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        A software engineer specialized in both front-end and back-end, experience creating custom websites through various software technologies such as JavaScript, typeScript, CSS, Redux, React.js, AWS and Node.js.
        <a style={style} href="www.linkedin.com/in/samyink">Learn More</a>
        </SectionText>
      </LeftSection>
    </Section>
);

export default Hero;