import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import LogoIcon from "../../images/logo/logo-no-bg.png";
import BurgerIcon from "../../images/svg/BurgerIcon";
import Reveal, { Fade } from "react-awesome-reveal";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter" style={{borderBottom: "1px solid #cc44cc1a"}}>
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <img
              src={LogoIcon}
              alt="logo"
              style={{ width: "80px", height: "80px" }}
            />
            <h1
              style={{ marginLeft: "15px", color: "black" }}
              className="font20 extraBold"
            >
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper
            className="flexNullCenter"
            style={{ padding: "0", margin: "0" }}
          >
            <li
              className="semiBold font15 pointer links"
              style={{ padding: "0", margin: "0" }}
            >
              <Fade direction="down">
              <NavLink
                className=""
                style={{ padding: "10px 15px" }}
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: " #d49733",
                }}
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </NavLink>
              </Fade>
            </li>
            <li className="semiBold font15 pointer links">
            <Fade direction="down" delay='25'>
              <NavLink
                className=""
                style={{ padding: "10px 15px" }}
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  color: " #d49733",
                }}
                spy={true}
                smooth={true}
                offset={-80}
              >
                About
              </NavLink>
              </Fade>
            </li>
            <li className="semiBold font15 pointer links">
            <Fade direction="down" delay='50'>
              <NavLink
                className=""
                activeStyle={{
                  fontWeight: "bold",
                  color: " #d49733",
                }}
                style={{ padding: "10px 15px" }}
                to="/blog"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Publications
              </NavLink>
              </Fade>
            </li>
            <li className="semiBold font15 pointer links">
            <Fade direction="down" delay='75'>
              <NavLink
                className=""
                style={{ padding: "10px 15px" }}
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  color: " #d49733",
                }}
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </NavLink>
              </Fade>
            </li>
            <li className="semiBold font15 pointer links">
            <Fade direction="down" delay='100'>
              <NavLink
                className=""
                style={{ padding: "10px 15px" }}
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: " #d49733",
                }}
                spy={true}
                smooth={true}
                offset={-80}
              >
                Login
              </NavLink>
              </Fade>
            </li>
            <li className="semiBold font15 pointer links">
            <Fade direction="down" delay='125'>
              <NavLink
                className=""
                style={{ padding: "10px 15px" }}
                to="/register"
                activeStyle={{
                  fontWeight: "bold",
                  color: " #d49733",
                }}
                spy={true}
                smooth={true}
                offset={-80}
              >
                Register
              </NavLink>
              </Fade>
            </li>
            {/* </Rotate> */}
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
