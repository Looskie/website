import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 7vw;
  position: absolute;
  left: 0;
  writing-mode: vertical-rl;
  z-index: 1;

  li {
    list-style: none;
    font-size: 8vh;
    font-weight: bold;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.textSecondary};
      transition: color 0.15s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.textPrimary};
      }
    }
  }
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <li>
        <Link href="#about">about</Link>
      </li>
      <li>
        <Link href="#works">works</Link>
      </li>
      <li>
        <Link href="#contact">contact</Link>
      </li>
    </NavWrapper>
  );
};
