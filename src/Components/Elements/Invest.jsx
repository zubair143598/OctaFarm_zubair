import React from "react";

const Invest = () => {
  return (
    <div className="invest-section">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-4 investMT">
            <h5 className="fw-bolder" style={{ color: "#6fffe9c7" }}>
              Invest The Right Way
            </h5>
            <h2 className="fw-bolder">Supercharge Your Returns</h2>
            <h4>Save Time & Gas Fees Through Automation</h4>
          </div>


          <div className="col-lg-4 investMT2">
            <div
              className="card h-100"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #6fffe9c7",
              }}
            >
              <div className="card-body">
                <p className="p-0 m-0 " style={{ fontSize: "18px" }}>
                  {" "}
                  Highest Auto
                </p>
                <p className="p-0 m-0 " style={{ fontSize: "18px" }}>
                  Compounding Pools
                </p>
                <p
                  className="fw-bolder"
                  style={{ color: "#6fffe9c7", fontSize: "13px" }}
                >
                  UPTO
                </p>
                <h1 className="numstyle">7000%</h1>
                <h5 className="" style={{ color: "#6fffe9c7" }}>
                  Invest The Right Way
                </h5>
              </div>
            </div>
          </div>

          
          <div className="col-lg-4 investMT2">
            <div
              className="card h-100"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #6fffe9c7",
              }}
            >
              <div className="card-body">
                <p className="p-0 m-0 " style={{ fontSize: "18px" }}>
                  {" "}
                  Projected 
                </p>
                <p className="p-0 m-0 " style={{ fontSize: "18px" }}>
                Total Value Locked (TVL)
                </p>
                
                 <span><h1 className="d-inline">$</h1><h1 className="d-inline" style={{fontSize:"5rem"}}> 538.4M</h1></span>
                <h5 className="" style={{ color: "#6fffe9c7" }}>
                Within 6 Months of Launch
                </h5>
              </div>
            </div>
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default Invest;
