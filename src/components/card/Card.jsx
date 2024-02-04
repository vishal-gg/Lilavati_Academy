import "./Card.scss";
import {FaLongArrowAltRight} from "react-icons/fa";

const Card = () => {
   return (
      <div>
         <div className="card-heading">
            <h1>THREE PILLERS OF EXCELLENCE</h1>
            <p>
               Lilavati Academy's commitment to excellence is built upon three
               fundamental pillars: Mathematics, Humanities, and Commerce. Our
               aim is to offer academic support across all three branches of
               education.
            </p>
         </div>
         <div className="card_container">
            <div className="card_wrapper">
               <div className="card_1">
                  <div className="card_content">
                     <div>
                        <div
                           style={{backgroundColor: "#f73e3e"}}
                           className="icon-container"
                        >
                           <img src="assets/science.svg" alt="icon" />
                        </div>
                        <h4>The Institute of Mathematics and Science</h4>
                        <p>
                           The Institute of Math and Science (IMS) champions
                           interdisciplinary research.
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=9262909499&text=Hey There">
                           <button>
                              Join Us <FaLongArrowAltRight />
                           </button>
                        </a>
                     </div>
                  </div>
                  <div className="backdrop"></div>
               </div>
               <div className="card_2">
                  <div className="card_content">
                     <div>
                        <div
                           style={{backgroundColor: "rgb(11 174 0)"}}
                           className="icon-container"
                        >
                           <img src="assets/humanities.svg" alt="icon" />
                        </div>
                        <h4> The Institute of Humanities</h4>
                        <p>
                           Institute for Humanities (IFH): Pioneering deep
                           insights and cultivating tomorrow's thought leaders.
                        </p>
                        
                        <a href="https://api.whatsapp.com/send?phone=9262909499&text=Hey There">
                            <button>
                                Join Us <FaLongArrowAltRight />
                            </button>
                        </a>
                     </div>
                  </div>
                  <div className="backdrop"></div>
               </div>
               <div className="card_3">
                  <div className="card_content">
                     <div>
                        <div
                           style={{backgroundColor: "#0079ff"}}
                           className="icon-container"
                        >
                           <img src="assets/commerce.svg" alt="icon" />
                        </div>
                        <h4> The Institiue of Commerce</h4>
                        <p>
                           Institute for Commerce (IFC): Navigating global trade
                           trends and molding tomorrow's business visionaries.
                        </p>
                        <a href="https://api.whatsapp.com/send?phone=9262909499&text=Hey There">
                            <button>
                                Join Us <FaLongArrowAltRight />
                            </button>
                        </a>
                     </div>
                  </div>
                  <div className="backdrop"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
