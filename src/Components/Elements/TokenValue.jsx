import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";

const TokenValue = () => {
  
  const data1 = [
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/trading-fee-rev.5a8d049cb8d51e3dfbb56c0b1553d7fa.svg",
      title: "Trading Fee Revenue",
      text: `Earn higher APYs from DEX trading revenue and OCTF`,
    },

    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/buy-back-burn.fe7d2d6065ece2fceae96eb28cd4f2de.svg",
      title: "Buy-Back & Burn",
      text: `Deflationary token supply with inherent buybacks to further reduce supply`,
    },
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/staking.b575ec167fe39d43dfdd71b7eb45492d.svg",
      title: `Staking Rewards`,
      text: "Stake your LP on Octa to get the highest APY in the market",
    },

    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/earning.5f4f732a61c4c872e6f9f6bb5b07a852.svg",
      title: `Earning Partner Tokens`,
      text: "Earn free partner project tokens on Octafarm",
    },

    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/gov.14dbdf5e242404e29a30d55e3905e25b.svg",
      title: `Governance`,
      text: "Create and vote on proposals to effect improvements to the",
    },

    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/proposal.0340fcc3f563f36c3763fd6495f5b824.svg",
      title: `Proposal Submission Staking`,
      text: "Our novel strategy builder requires strategists to stake OCTF and earn performance fees",
    },
  ];

  return (
    <div className="TokenValue-section text-white ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Token Value-Accrual & Utility</h1>
            <h5>
              OCTF is predicated on a fixed-supply model that is integrated with
              a continual buyback-and-burn mechanism for maximum value-accrual
              and token value sustainability.
            </h5>
          </div>
        </div>
        
          <div className="row ">
            
          {data1.map((v, i) => {
              return (
                < >
                  <div className="col-md-4 mt-3 rounded-3">
                    <div
                      className="card h-100    border-0  "
                      style={{ width: "100%" }}
                    >
                      <div className="card-body ">
                        <img
                          src={v.img}
                          
                          className="card-img-top w-25 p-2 cardImg"
                          alt="..."
                        />
                        <h4 className=" p-2 fw-bolder mb-2">{v.title}</h4>
                        <p className=" fw-bolder  pb-3">
                            {v.text}
                        </p>
                       
                      </div>
                      
                    </div>
                    
                  </div>
                  
                </>
                
              );
            })}
          </div>
          <br /><br /><br />
          
      </div>
    </div>
  );
};

export default TokenValue;
