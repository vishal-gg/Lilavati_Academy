import "./Home.scss";
import Card from "../../components/card/Card";
import CanvasBgAnimation from "./CanvasBgAnimation";
import Contact from "../contact/Contact";
import Team from "../team/Team";
import Choose from "../choose/Choose";

const Home = () => {
   return (
      <div className="home_container" id="home">
         <div className="home_wrapper">
            <div className="hero-section">
               <div className="bg-gradient">
                  <CanvasBgAnimation />
               </div>
               <div>
                  <h1>
                     <span>LILAVATI</span>
                     <br />
                     <span>ACADEMY</span>
                  </h1>
                  <p>
                  Lilavati Academy, a renowned educational institution in Noida, prides itself on its three pillars of excellence: the Institute of Mathematics, the Institute of Humanities, and the Institute of Commerce. Our expertise extends to preparing students for a variety of prestigious examinations, including BOARD, CUET, and NDA. Don't miss the chance to secure your spot in esteemed colleges. Join us now and embark on your journey to success.
                  </p>
                  <button>Join Us</button>
                  <div>
                     <ul>
                        <li>
                           <a href="/">
                              <img src="assets/insta.svg" alt="instagram" />
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="assets/twitter.svg" alt="twitter" />
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="assets/linkedIn.svg" alt="linkedIn" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div>
                  <img src="assets/placeholder.svg" alt="icon" />
               </div>
            </div>
            <div className="section_2" id="about">
               <Card />
            </div>
         </div>
         {/* <Card /> */}
         <Choose />
         <Team />
         <Contact />
      </div>
   );
};

export default Home;
