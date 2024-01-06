import React from "react";
import styled from "styled-components";

const InprogressInvestmentReportStyled = styled.div`
  .ContainerPadre {
    margin: 30px;
    border-radius: 30px;
    background-color: rgba(219, 247, 255, 1);
    width: 510px;
    height: 360px;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
  .ContainerHijo1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 45px;
    padding-left: 45px;
    color: rgba(13, 58, 92, 1);
    font-weight: bold;
    font-size: 24px;
  }
  .ContainerHijo2 {
    font-size: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .ContainerHijo3 {
    display: grid;
    grid-template-rows: 1fr;
  }
`;

const InprogressInvestmentReport = () => {
  return (
    <InprogressInvestmentReportStyled>
      <div className="ContainerPadre">
        <div className="ContainerHijo1">
          <div>Mi inversión en curso</div>
          <div style={{ fontSize: "15px", fontWeight: "normal" }}>Soles</div>
        </div>

        <div className="ContainerHijo2">
          <div>S/3318.5</div>
          <div style={{ fontSize: "16px" }}>Total de intereses generados</div>
          <div style={{ fontSize: "16px" }}>Dinero inicial</div>

          <div style={{ color: "rgba(50, 160, 113, 1)" }}>S/318</div>
          <div>S/3000</div>
        </div>

        <div className="ContainerHijo3">
          <div>Ver todas mis inversiones</div>
        </div>
      </div>
    </InprogressInvestmentReportStyled>
  );
};

export default InprogressInvestmentReport;
