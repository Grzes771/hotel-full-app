import styled from 'styled-components';

export const Navbar = styled.div`
  position: absolute;
  background-color: green;
  height: 60px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  top: 100px;
  left: 0px;
  top: 0px;
  border-radius: 5px;

  .menu-bars {
    font-size: 2rem;
    background: none;
  }
`;

export const Nav = styled.nav`
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  ul {
    width: 100%;
  }
  .navbar-toggle {
    background-color: green;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .menu-bars {
    font-size: 2rem;
    background: none;
  }
`;
