import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  width: 100%;
  height: 100%;
`;

const Project = styled(Parallax)`
  position: absolute;
  width: fit-content;
  display: flex;
  height: 250px;
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 8px;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);

  img {
    margin: 10px -18px 0 10px;
    width: auto;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  }
`;

export const FloatingProjects = () => {
  const designs = [
    {
      alt: "Offwhite design",
      img: "/img/designs/offwhite.png",
    },
    {
      alt: "QUADECA design",
      img: "/img/designs/quadeca.png",
    },
  ];
  return (
    <Wrapper>
      {designs.map((design, id) => (
        <Project
          key={id}
          style={{
            left: id * 50 + "%",
            top: id % 2 === 0 ? "10%" : "40%",
          }}
        >
          <img src={design.img} alt={design.alt + "made by DEVLOOSKIE"} />
        </Project>
      ))}
    </Wrapper>
  );
};
