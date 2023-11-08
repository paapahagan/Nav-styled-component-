import { useState } from "react";
import {
  LeftContainer,
  NavBarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  RightContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Styles/NavBar.styles";
import logo from "../../assets/logo.png";

function NavBar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavBarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarLinkContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <> &#10005;</> : <>&#8801; </>}
          </OpenLinksButton>
        </LeftContainer>
        <RightContainer>
          <Logo src={logo}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavBarContainer>
  );
}

export default NavBar;
