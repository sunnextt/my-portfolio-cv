import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


  const handleClick = () => {
  location.href = "www.linkedin.com/in/samyink";
  }


const Hero = (props) => (

  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        A software engineer specialized in both front-end and back-end, experience creating custom websites through various software technologies such as JavaScript, typeScript, CSS, Redux, React.js, AWS and Node.js. 
        </SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;