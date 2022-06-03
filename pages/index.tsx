import type { NextPage } from "next";
import HorizontalScroll from "react-scroll-horizontal";
import styled from "styled-components";
import { Nav } from "../components";
import { FloatingProjects } from "../components/FloatingProjects";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

const LandingContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  margin: 0 7em;
  min-width: 90vw;
  min-height: 100vh;
`;

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  padding: 0 7em;

  p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 2em;
    max-width: 50ch;
    margin-top: 8vw;
  }
`;

const Title = styled.h1`
  font-size: 8em;
  font-weight: bold;
  z-index: 2;
  color: ${({ theme }) => theme.textPrimary};
  mix-blend-mode: difference;
  transform: scale(1, 1.5);
  transform-origin: top;
`;

const Occupation = styled.h2`
  width: 100%;
  font-size: 3em;
  font-weight: bold;
  text-align: right;
  margin: 0;
  z-index: 2;
  color: ${({ theme }) => theme.textSecondary};
  mix-blend-mode: difference;
  transform: scale(1, 0.8);
  transform-origin: right;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

const FirstName = styled.h1`
  font-size: 8em;
  font-weight: bold;
  z-index: 2;
  color: ${({ theme }) => theme.textPrimary};
  mix-blend-mode: difference;
  transform: scale(1, 1.8);
`;

const LastName = styled.h1`
  font-size: 8em;
  font-weight: bold;
  margin: 0;
  z-index: 2;
  color: ${({ theme }) => theme.textPrimary};
  mix-blend-mode: difference;
  transform: scale(1.5, 0.8);
  transform-origin: left;
`;

const Home: NextPage = () => {
  return (
    <Wrapper style={{ height: `100vh`, width: `100%` }}>
      <HorizontalScroll
        reverseScroll
        config={{
          stiffness: 200,
          damping: 25,
        }}
      >
        <Nav />
        <LandingContainer>
          <Name>
            <FirstName>CODY</FirstName>
            <LastName>MILLER</LastName>
          </Name>

          <Occupation>
            SOFTWARE ENGINEER,
            <br />
            DESIGNER
          </Occupation>
          <FloatingProjects />
        </LandingContainer>
        <Section>
          <Title>ABOUT</Title>
          <p>
            Hey, I&apos;m Cody, a 17 y/o full-stack web developer & designer. I
            love building things for the web and tools for people from all over
            the world to use. I&apos;ve contributed to many Open Source(d)
            organizations, and have worked for two notable names, dahliaOS and
            BlissOS. I am currently working at Giggl.
          </p>
        </Section>
        <Section>
          <Title>WORKS</Title>
          <p>not yet implemented</p>
        </Section>
        <Section>
          <Title>CONTACT</Title>
          <p>not yet implemented</p>
        </Section>
      </HorizontalScroll>
    </Wrapper>
  );
};

export default Home;
