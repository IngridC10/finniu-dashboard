import React from "react";
import CurveChartComponent from "./CurveChartComponent";
import styled from "styled-components";

const UserMenuStyled = styled.div`
  &.general {
    justify-content: center;
    align-content: center;
    background-color: #dbf7ff;
    padding: 25px;
  }
`;

export const UserMenu = () => {
  return (
    <UserMenuStyled className="general">
      <div className="bodyMenu">
        <div className="container">
          <h1> Hola ,Mario!</h1>
          <label className="switch">
            <input type="checkbox" id="modeSwitch" />
            <span className="slider round"></span>
          </label>
          <div className="curveComponent">
            <CurveChartComponent />
          </div>
        </div>
      </div>
    </UserMenuStyled>
  );
};
export default UserMenu;
