import styled from "styled-components";
import LogoFinniu from "../images/LogoFinniu.png";
import Calendar from "../images/calendar.png";
import Dollar from "../images/dollar-circle.png";
import SignOut from "../images/sign-out.png";
import Graph from "../images/graph.png";
import React, { useState } from "react";

const SideBarComponentStyled = styled.div`
  &.bodyNavbar {
    background-color: white;
    width: 100%;
    height: 100vh;
  }

  .navBarContainer {
    width: 90px;
    height: 980px;
    background-color: #dbf7ff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navBarContainer img {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 32px;
    height: 32px;
    justify-content: flex-end;
  }

  .navBarContainer {
    width: 80px;
    transition: width 0.3s ease;
  }

  .navBarContainer.expanded {
    width: 200px;
  }
`;

const SideBarComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SideBarComponentStyled className="bodyNavbar">
      <div className="container">
        <div className="navBarContainer">
          <img
            style={{ width: "156px", marginLeft: "80px", height: "78px" }}
            src={LogoFinniu}
            alt="logo"
          />
          <button onClick={handleExpandCollapse}>
            {isExpanded ? "Colapsar" : "Expandir"}
          </button>
          {isExpanded && (
            <>
              <img src={Dollar} alt="dollar" />
              <img src={Graph} alt="graph" />
              <img src={Calendar} alt="calendar" />
              <img src={SignOut} alt="signout" />
            </>
          )}
        </div>
      </div>
    </SideBarComponentStyled>
  );
};

export default SideBarComponent;
