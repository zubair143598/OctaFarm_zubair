import React from "react";

const CrossChain = () => {
  return (
    <div className="CrossChain-section">
      <div className="container text-white">
        <div className="row text-center">
          <div className="col-lg-1" style={{ marginTop: "5rem" }}></div>
          <div className="col-lg-9" style={{ marginTop: "5rem" }}>
            <h5 className="" style={{ color: "#6fffe9c7" }}>
              EASIEST GATEWAY TO
            </h5>
            <h1 style={{ fontSize: "3rem" }} className="fw-bolder">
              Cross-Chain Yield Farming For All
            </h1>
            <h5>
              Octafarm will be deployed on various blockchain networks so anyone
              can access supercharged yields seamlessly cross-chain, thereby
              maximizing opportunities to access the highest yields.
            </h5>
          </div>
          <div className="col-lg-1" style={{ marginTop: "5rem" }}></div>
        </div>

        <div className="row mt-5 " style={{ position: "relative" }}>
          <div className="col-lg-2">
            <ul className="list-unstyled">
              <li className="text-end" style={{
                  position: "absolute",
                  top: "-1rem",
                  left: "1rem",
                  width: "17%",
                }}>
                <p className="d-inline mx-3" >Binance</p>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/BSC.9142e1281fff2051cf1976cf27fa322c.svg"
                  className="w-25"
                  alt=""
                />
              </li>
              <li
                className="text-end"
                style={{
                  position: "absolute",
                  top: "5rem",
                  left: "1rem",
                  width: "17%",
                }}
              >
                <p className="d-inline mx-4">Polygon</p>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/MATIC.d0306e5a877a16624114e6c88576b334.svg"
                  className="w-25"
                  alt=""
                />
              </li>
              <li className="text-end" style={{
                  position: "absolute",
                  top: "13rem",
                  left: "1rem",
                  width: "17%",
                }}>
                <p className="d-inline mx-3">Moonbeam</p>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/MOON.dda25e37f4a01f397d58ae41fe9e847f.svg"
                  className="w-25"
                  alt=""
                />
              </li>
              <li className="text-end " style={{
                  position: "absolute",
                  top: "20rem",
                  left: "1rem",
                  width: "17%",
                }}>
                <p className="d-inline mx-3">Avalanche</p>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/AVAX.1ebf2d23750b3f69e124384311d3dd3a.svg"
                  className="w-25"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="col-lg-1">
            <img src="./Assists/10002.svg" className="" alt="" />
          </div>
          <div className="col-lg-2">
            <img
              src="./Assists/10004.svg"
              className="w-25"
              style={{ position: "absolute", top: "52px", left: "25rem" }}
              alt=""
            />
          </div>
          <div className="col-lg-1">
            <img
              src="./Assists/10005.svg"
              style={{ position: "absolute", top: "52px", left: "44rem" }}
              alt=""
            />
          </div>
          <div className="col-lg-2">
            <ul
              className="list-group right-table"
              style={{ position: "absolute", top: "32px", right: "19rem" }}
            >
              <li className="list-group-item">PancakeSwap Vaults</li>
              <li className="list-group-item" style={{ marginTop: "34px" }}>
                QuickSwap Vaults
              </li>
              <li className="list-group-item" style={{ marginTop: "34px" }}>
                SolarBeam Vaults
              </li>
              <li className="list-group-item" style={{ marginTop: "34px" }}>
                Trader Joe Vaults
              </li>
            </ul>
          </div>
          <div className="col-lg-1">
            <img
              src="./Assists/10006.svg"
              style={{ position: "absolute", top: "52px", right: "14rem" }}
              alt=""
            />
          </div>
          <div className="col-lg-1">
            <ul
              className="list-group right-table"
              style={{ position: "absolute", top: "50px", right: "2rem" }}
            >
              <li className="list-group-item">Auto-Comp. Pools</li>
              <li className="list-group-item" style={{ marginTop: "49px" }}>
                Multi-Dex Strategy
              </li>
              <li className="list-group-item" style={{ marginTop: "50px" }}>
                Maximizer Pools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossChain;
