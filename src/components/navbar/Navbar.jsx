import "./Navbar.scss";
import {useState} from "react";
// import { Link } from "react-router-dom";
import {MdContactSupport} from "react-icons/md";
import {HiMiniHome} from "react-icons/hi2";
import {RiTeamFill} from "react-icons/ri";
import {BsInfoCircleFill} from "react-icons/bs";
import {BiSolidPhoneCall} from "react-icons/bi";
import {Link, animateScroll as scroll} from "react-scroll";

const Navbar = () => {
   const [toggleSidebar, setToggleSidebar] = useState(false);

   const tabs = [
      {title: "Home", path: "/", icon: HiMiniHome},
      {title: "About", path: "about", icon: BsInfoCircleFill},
      {title: "Team", path: "team", icon: RiTeamFill},
      {title: "Contact us", path: "contact", icon: BiSolidPhoneCall},
      // { title: "FAQ", path: "/faq", icon: MdContactSupport },
   ];

   return (
      <div className="nav-containter">
         <div className="nav-wrapper">
            <Link to="/" className="logo">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
               </svg>
            </Link>
            <nav className={`nav-menu ${toggleSidebar && "show"}`}>
               <ul
                  onClick={(e) => e.stopPropagation()}
                  className={`nav-list ${toggleSidebar && "show"}`}
               >
                  {tabs.map((tab, i) => (
                     <li
                        style={
                           tab.title === "Contact us"
                              ? {marginLeft: "2rem"}
                              : null
                        }
                        key={i}
                     >
                        <Link
                           onClick={() => setToggleSidebar(false)}
                           to={tab.path}
                           className={`nav_link ${
                              tab.title === "Contact us" && "contact"
                           }`}
                           spy={true}
                           smooth={true}
                           hashSpy={true}
                           offset={-60}
                           duration={1000}
                           isDynamic={true}
                           ignoreCancelEvents={false}
                        >
                           <tab.icon />
                           {tab.title}
                           {tab.title !== "Contact us" && <span></span>}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
            {toggleSidebar ? (
               <span
                  onClick={() => setToggleSidebar(false)}
                  className="handburger_menu"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="white"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </span>
            ) : (
               <span
                  onClick={() => setToggleSidebar(true)}
                  className="handburger_menu"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="white"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                     />
                  </svg>
               </span>
            )}
         </div>
      </div>
   );
};

export default Navbar;
