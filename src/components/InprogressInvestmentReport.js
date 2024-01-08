import React from "react";
import styled from "styled-components";

const InprogressInvestmentReportStyled = styled.div`
  .investmentReport {
    margin: 20px;
    border-radius: 30px;
    background: #dbf7ff;
    padding: 30px;
  }
  .bodyReport {
    width: 598px;
    height: 263px;
    align-items: center;
    color: rgba(13, 58, 92, 1);
    font-size: 24px;
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
  }

  .bodyReportColumn1 {
    font-size: 36px;
    font-weight: bold;
  }
  .bodyReportRow {
    text-align: left;
    font-size: 24px;
  }
  .bodyReportRow h1 {
    font-weight: normal;
  }
  .line {
    height: 180px;
    border-right: 5px solid;
    color: #a2e6fa;
    width: 40px;
  }
`;

const InprogressInvestmentReport = () => {
  return (
    <InprogressInvestmentReportStyled>
      <div className="investmentReport">
        <div className="bodyReportRow">
          <h1>Mi inversión en curso</h1>
        </div>

        <div className="bodyReport">
          <div className="bodyReportColumn1">
            <p>s/3318.5</p>
            <div
              style={{
                fontSize: "16px",
                padding: "10px",
                fontWeight: "normal",
              }}
            >
              <p>Dinero inicial</p>
            </div>
            <div style={{ fontWeight: "normal" }}>s/3000</div>
          </div>

          <div className="bodyReportColumn2">
            <div className="line"></div>
          </div>

          <div className="bodyReportColumn3">
            <div
              style={{
                fontSize: "16px",
                paddingTop: "10px",
                fontWeight: "normal",
              }}
            >
              <p>Total intereses generados</p>
            </div>
            <div
              style={{
                color: "rgba(50, 160, 113, 1)",
                fontWeight: "normal",
                fontSize: "36px",
              }}
            >
              <p>s/318.5</p>
            </div>
          </div>
        </div>
      </div>
    </InprogressInvestmentReportStyled>
  );
};

export default InprogressInvestmentReport;
