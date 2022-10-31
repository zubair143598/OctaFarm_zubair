import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Private Sale", 62.5],
  ["Initial Liquidity (will be lock)", 10],
  ["Protocol Mining Rewards", 5],
  ["Presale", 2],
  ["Team & Advisors", 4],
  ["Airdrop", 10],
  ["Marketing", 2],

  ["CEX & DEX Listing", 5], // CSS-style declaration
];

export const options = {
  // title: "My Daily Activities",
  pieHole: 0.5,
  is3D: false,
};

const TokenAllocation = () => {
  return (
    <div className="TokenAllocation-section">
      <div className="container text-white">
        <div className="row ">
          <div className="col-lg-12 mt-lg-5 mt-2">
            <h1>Token Allocation</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-3 col-4">
            <p className="m-0 p-0">Ticker</p>
            <h1 className="m-0 p-0 fw-bolder" style={{ color: "#6fffe9c7" }}>
              OCTF
            </h1>
          </div>
          <div className="col-lg-3 col-4">
            <p className="m-0 p-0">Network</p>
            <h1 className="m-0 p-0 fw-bolder" style={{ color: "#6fffe9c7" }}>
              BSC
            </h1>
          </div>
          <div className="col-lg-3 col-4">
            <p className="m-0 p-0">Total Fixed Supply</p>
            <h1 className="m-0 p-0 fw-bolder" style={{ color: "#6fffe9c7" }}>
              10 Million
            </h1>
          </div>
          <div className="col-lg-3 col-4">
            <p className="m-0 p-0">Emission</p>
            <h1 className="m-0 p-0 fw-bolder" style={{ color: "#6fffe9c7" }}>
              2 Years
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-lg-5 ">
            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
          <div className="col-lg-6 mt-lg-5 ">
            <img src="./Assists/10004.png" className="w-100  " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenAllocation;
