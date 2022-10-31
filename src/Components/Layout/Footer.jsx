import React from "react";
import {BsGithub} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsTelegram} from 'react-icons/bs'

import {FaInstagramSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="Footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <ul className="list-unstyled text-white ">
              <li className="text-start ">COMPANY</li>
              <li className="color">Bug Bounty</li>
              <li className="color">Jobs / Career</li>
            </ul>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <ul className="list-unstyled text-white ">
              <li className="text-start ">DEVELOPER</li>
              <li className="color">Octa Farm Documentation</li>

              <li className="color">Explore Github</li>
            </ul>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <ul className="list-unstyled text-white ">
              <li className="text-start ">COMMUNITY</li>
              <li className="color">Telegram</li>
              <li className="color">Blog</li>
            </ul>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <ul className="list-unstyled text-white ">
              <li className="text-start ">LEGAL</li>
              <li className="color">Privacy & Terms</li>
              <li className="color"></li>
            </ul>
          </div>
          <div className="col-lg-2"></div>
          {/* <div className="col-lg-1"></div> */}
        </div>
        <hr className="hrcl" />
        <div className="row text-white">
          <div className="col-lg-4">
          <img src="./Assists/logo.ico" alt="" className="" style={{width:"50px"}} />
          <p className='d-inline fs-4'>Octa Farm</p>
          </div>
          <div className="col-lg-4 text-center">
            <p style={{color: '#6d8bb0'}}>© 2021-22 Octa Farm. All rights reserved.</p>
          </div>
          <div className="col-lg-4 text-end">
            <BsGithub className="iconclr mx-2" size={30}/>
            <AiFillTwitterCircle className="iconclr mx-2" size={35}/>
            <BsTelegram className="iconclr mx-2" size={30}/>
            <FaInstagramSquare className="iconclr mx-2" size={30}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
