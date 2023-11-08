import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  //if nav is mobile , take full screen if false back to default
  height: ${(props) => (props.extendNavbar ? "100vh" : "60px")};
  background-color: black;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.nav`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  /* background-color: red; */
`;

export const RightContainer = styled.nav`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  /* background-color: pink; */
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;
  color: white;

  // if screen is less 700px do not display links
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  text-decoration: none;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px;
  color: white;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: white;
  background: none;

  @media (min-width: 700px) {
    display: none;
  }
`;
export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
