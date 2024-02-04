import React from "react";
import "./Footer.scss";
import {FiInstagram, FiLinkedin, FiTwitter} from "react-icons/fi";

function Footer() {
   const date = new Date();
   const year = date.getFullYear();
   return (
      <div className="footer_container">
         <div className="footer_wrapper">
            <div className="social_media">
               <p>Find us on</p>
               <div className="icon_wraper">
                  <FiInstagram className="icon" />
                  <FiLinkedin className="icon" />
                  <FiTwitter className="icon" />
               </div>
            </div>
            <div className="address_container">
               <p>Address</p>
               <p>B - 181,</p>
               <p> Sector 105, Noida</p>
            </div>
            <div className="developer_and_maintainer">
               <p>Developer</p>
               <p>
                  Made with <span>❤</span> by
                  <span>
                     <a target="blank" href="https://github.com/vishal-gg">
                        Vishal
                     </a>
                  </span>
                  &
                  <span>
                     <a target="blank" href="https://github.com/7hourspg">
                        Rajiv
                     </a>
                  </span>
               </p>
            </div>
         </div>
         <div className="footer_bottom">
            <p>
               © {year}
               <span> Lilavati Academy</span>
            </p>
            <p>
               All illustrations are from
               <a
                  href="https://storyset.com/
               "
               >
                  Storyset
               </a>
            </p>
         </div>
      </div>
   );
}

export default Footer;
