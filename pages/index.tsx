import type { NextPage } from "next";
import styled from "styled-components";
import { Nav } from "../components";
import { FloatingProjects } from "../components/FloatingProjects";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

const LandingContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  margin: 0 7vw;
  width: 90vw;
  min-height: 100vh;
`;

const Occupation = styled.h2`
  width: 100%;
  font-size: 3vw;
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
  width: 100%;
  height: 100%;
`;

const FirstName = styled.h1`
  font-size: 8vw;
  font-weight: bold;
  z-index: 2;
  color: ${({ theme }) => theme.background};
  mix-blend-mode: difference;
  transform: scale(1, 1.8);
`;

const LastName = styled.h1`
  font-size: 8vw;
  font-weight: bold;
  margin: 0;
  z-index: 2;
  color: ${({ theme }) => theme.background};
  mix-blend-mode: difference;
  transform: scale(1.5, 0.8);
  transform-origin: left;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
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
      </LandingContainer>
      <FloatingProjects />
    </Wrapper>
  );
};

export default Home;
