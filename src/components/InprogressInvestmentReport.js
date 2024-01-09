import React from "react";
import styled from "styled-components";

const InprogressInvestmentReportStyled = styled.div`
  .investmentReport {
    margin: 20px;
    padding: 30px;
  }
  .bodyReport {
    background: #dbf7ff;
    padding-left: 15px;
    padding-top:20px;
    border-radius: 20px;
    width: 598px;
    height: 263px;
    align-items: left;
    color: rgba(13, 58, 92, 1);
    font-size: 24px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 6px -6px #d3d7de;
}
  }
  .columns {
    margin-top: 5px;
    padding-left: 25px;
    padding-top: 15px;
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .bodyReportColumn1 {
    display: flex;
    flex-direction: row;
    flex-flow: column;
    row-gap: 13px;
    align-items: start;
     
  }
  .bodyReportColumn1 h2 {
    font-size: 16px;
    font-weight: normal;
  }
  .bodyReportColumn1 h4 {
    font-size: 36px;
    font-weight: normal;
  }
  .bodyReportColumn1 h1 {
    font-weight: bold;
    font-size: 36px;
  }

  .bodyReportColumn3 h3 {
    display: flex;
    flex-direction: row;
    flex-flow: column;
    row-gap: 13px;
    font-size: 16px;
  }

  .bodyReportColumn3 h2 {
    font-size: 16px;
    font-weight: normal;
  }
  .columns h3 {
    font-weight: normal;
    font-size: 36px;
  }
  .bodyReportColumn3 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    padding-left: 18px;
  }

  .bodyReportRow {
    padding: 13px;
    text-align: left;
  }
  .bodyReportRow h1 {
    font-weight: normal;
    padding-left: 18px;
    font-size: 24px;
    font-weight: bold;
  }
  .line {
    height: 120px;
    border: 2px solid;
    color: #a2e6fa;
    width: 0.34px;
    margin-top: 22px;
    border-radius: 10px;
    margin-top: 40px;
    margin-left: 20px;
  }
`;

const InprogressInvestmentReport = () => {
  return (
    <InprogressInvestmentReportStyled>
      <div className="investmentReport">
        <div className="bodyReport">
          <div className="bodyReportRow">
            <h1>Mi inversión en curso</h1>
          </div>
          <div className="columns">
            <div className="bodyReportColumn1">
              <div>
                <h1> s/3318.5</h1>
              </div>
              <div style={{ fontSize: "16px", fontWeight: "normal" }}>
                <h2>Dinero inicial</h2>
              </div>
              <div>
                <h4>s/3000</h4>
              </div>
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
                <h2>Total intereses generados</h2>
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
      </div>
    </InprogressInvestmentReportStyled>
  );
};
export default InprogressInvestmentReport;
