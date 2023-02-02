import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import LogoIcon from "../../images/logo/logo-no-bg.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  const [bgcolor, setBgcolor] = useState("black");
  const [textcolor, setTextcolor] = useState("white");

  function handleHighlightTab() {
    setBgcolor("white");
    setTextcolor("black");
  }

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
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/" smooth={true}>
            <img
              src={LogoIcon}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            />
            <h1
              style={{ marginLeft: "15px", color: "black" }}
              className="font20 extraBold"
            >
              NFLP
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
            </li>
            <li className="semiBold font15 pointer links">
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
            </li>
            <li className="semiBold font15 pointer links">
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
            </li>
            <li className="semiBold font15 pointer links">
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
            </li>
          </UlWrapper>
          <UlWrapperRight
            className="flexNullCenter navlinks"
            style={{ padding: "0", margin: "0" }}
          >
            <li className="semiBold font15 pointer links">
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
            </li>
            <li className="semiBold font15 pointer flexCenter links">
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
                Join
              </NavLink>
            </li>
          </UlWrapperRight>
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
