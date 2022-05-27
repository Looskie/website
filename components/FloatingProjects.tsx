import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Project = styled(Parallax)`
  position: absolute;
  width: fit-content;
  display: flex;
  height: 250px;
  background: ${({ theme }) => theme.secondaryBackground};
  bottom: 5%;
  right: 10%;
  border-radius: 8px;

  &:first-of-type {
    top: 10%;
    left: 5%;
  }

  img {
    margin: 10px -18px 0 10px;
    width: auto;
    height: 100%;
    border-radius: 8px;
  }
`;

export const FloatingProjects = () => {
  return (
    <Wrapper>
      <Project speed={10}>
        <img
          src="/img/designs/offwhite.png"
          alt="Offwhite design made by DEVLOOSKIE"
        />
      </Project>
      <Project speed={4}>
        <img
          src="/img/designs/quadeca.png"
          alt="QUADECA design made by DEVLOOSKIE"
        />
      </Project>
    </Wrapper>
  );
};
