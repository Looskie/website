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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  margin: 0 4vw;
  width: 94vw;
  min-height: 100vh;
`;

const Name = styled.h1`
  font-size: 5vw;
  font-weight: bold;
  transform: scale(1, 1.5);
  z-index: 2;
  color: ${({ theme }) => theme.textPrimary};
  mix-blend-mode: difference;
`;

const Occupation = styled.h2`
  font-size: 3vw;
  font-weight: bold;
  transform: scale(1, 1);
  z-index: 2;
  color: ${({ theme }) => theme.textPrimary};
  mix-blend-mode: difference;
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Nav />
      <ContentContainer>
        <FloatingProjects />
        <Name>CODY MILLER,</Name>
        <Occupation>DEVELOPER AND DESIGNER.</Occupation>
      </ContentContainer>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
      <h1>yo</h1>
    </Wrapper>
  );
};

export default Home;
