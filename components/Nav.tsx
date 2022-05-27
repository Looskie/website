import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 4vw;
  position: absolute;
  left: 0;
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <h1>nav</h1>
    </NavWrapper>
  );
};
