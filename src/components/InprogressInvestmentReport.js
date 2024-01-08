import React from "react";
import styled from "styled-components";

const InprogressInvestmentReportStyled = styled.div`
  .investmentReport {
    margin: 20px;
    padding: 30px;
  }
  .bodyReport {
    background: #dbf7ff;
    border-radius: 20px;
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
    display: flex;
    flex-direction: row;
    flex-flow: column;
    row-gap: 13px;
  }

  .bodyReportColumn3 {
    display: flex;
    flex-direction: row;
    flex-flow: column;
    row-gap: 13px;
  }
  .bodyReportColumn3 h3 {
    font-weight: normal;
  }

  .bodyReportRow {
    text-align: left;
    font-size: 24px;
  }
  .bodyReportRow h1 {
    font-weight: normal;
    padding-left: 18px;
  }
  .line {
    height: 130px;
    border-right: 5px solid;
    color: #a2e6fa;
    width: 40px;
    margin-top: 40px;
    border-radius: 3px;
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
            <div>
              <h3> s/3318.5</h3>
            </div>
            <div style={{ fontSize: "16px", fontWeight: "normal" }}>
              <h3>Dinero inicial</h3>
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
              <h3>Total intereses generados</h3>
            </div>
            <div
              style={{
                color: "rgba(50, 160, 113, 1)",
                fontWeight: "normal",
                fontSize: "36px",
              }}
            >
              <h3>s/318.5</h3>
            </div>
          </div>
        </div>
      </div>
    </InprogressInvestmentReportStyled>
  );
};

export default InprogressInvestmentReport;
