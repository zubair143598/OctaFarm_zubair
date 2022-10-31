import React from "react";

const Hero = () => {
  return (
    <div className="hero-section">
      <img src="./Assists/10005.png" className=" w-75" style={{position:"absolute",width:"57%",right:'0px',top:"-13rem"}} alt="" />
      <div className="container " style={{position:"relative"}}>
        <div className="row">
          <div className="col-lg-6 text-white mt-5">
            <h1 className="fw-bolder  mt-5">
              Maximize Staking Returns
              <br />
              with Auto-Compounding
            </h1>
            <h3 className="mt-3">
              Automate your DeFi reinvestment with Octafarm to compound your
              returns even when you sleep!
            </h3>
            <a href="#" class="mt-4 w-75 p-3 fs-5   fw-bolder button btn btn1">
              Buy on Pancakeswap
            </a>
            <p className="mt-3 " style={{ color: "#CF3483" }}>
              Official Contract: 0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
            </p>
            <a
              target="_blank"
              href="https://app.octafarm.fi/#/bsc"
              className="mt-4 text-white btn border p-2 btn2 mx-3 px-5 fs-5 "
            >
              Launch App
            </a>

            <a
              target="_blank"
              href="https://app.octafarm.fi/#/bsc"
              className="mt-4 text-white btn border p-2 btn2 mx-3 px-5 fs-5 "
            >
              Documentation
            </a>
          </div>
          <div className="col-lg-6 mt-5 bgImg">
            <iframe
              style={{ width: "100%" }}
              className="mt-5"
              height={415}
              src="https://www.youtube.com/embed/07d2dXHYb94"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="row mt-2 mt-md-5">
          <div className="col-lg-4 mt-2 mt-md-5">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="https://www.digitaljournal.com/wp-content/uploads/2021/01/Digital-Journal-Logosm.png"
                  className="w-50 mt-2 mt-md-5"
                  alt=""
                />
              </div>
              <div className="col-lg-12">
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/solidproof.d0d435cca0c0cc3d536dcd39f4d68319.png"
                  className="w-50 mt-2 mt-md-5"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2 mt-md-5">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/media/m1.598bc43d10774b9f6869aba2144020b3.png"
                  className="w-50 mt-2 mt-md-5"
                  alt=""
                />
              </div>
              <div className="col-lg-12">
                <img
                  src="https://www.digitaljournal.com/wp-content/uploads/2021/01/Digital-Journal-Logosm.png"
                  className="w-50 mt-2 mt-md-5"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-2 mt-md-5">
            <div className="row">
              <div className="col-lg-12">
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/media/logo-marketwatch.b3b02c56890449a57a4e11fc73b176d1.svg"
                  className="w-50 mt-2 mt-md-5"
                  alt=""
                />
              </div>
              <div className="col-lg-12">
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/techrate.d731e0de03daeda515ab5f270b825731.png"
                  className="w-50 mt-2 mt-md-5"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
