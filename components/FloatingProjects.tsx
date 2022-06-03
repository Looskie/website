import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Project = styled(Parallax)`
  position: absolute;
  width: fit-content;
  display: flex;
  height: 250px;
  background: ${({ theme }) => theme.secondaryBackground};
  bottom: 10%;
  right: -5%;
  border-radius: 8px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);

  &:first-of-type {
    top: 10%;
    left: 20%;
  }

  img {
    margin: 10px -18px 0 10px;
    width: auto;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
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
