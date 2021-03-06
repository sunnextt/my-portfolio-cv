import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
// import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {

const handleClick = () => {
window.location.href = "https://www.linkedin.com/in/samyink"
}

  return (
    <Layout>
      <Section grid>
        <Hero handleClick={handleClick}/>
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      {/* <Timeline /> */}
      <Acomplishments />
    </Layout>
  );
};

export default Home;
