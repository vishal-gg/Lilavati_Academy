import "./Team.scss";
import Team_Mobile from "./Team_Mobile";

const Team = () => {
   return (
      <>
         <h1 className="team-heading" id="team">
            MEET OUR TEAM
         </h1>
         <div className="team_container">
            <div className="team_wrapper">
               <div className="card_container">
                  <div className="card_1">
                     <div>
                        <div>
                           <img src="images/kanhaiya_jee.jpg" />
                        </div>
                     </div>
                     <div>
                        <div>
                           <h4>Kanhaiya Jee</h4>
                           <p>Founder</p>
                           <span>
                              Leadership in Education. A Decade of Teaching
                              Experience. Teaching Versatility. Unique Approach.
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="card_2">
                     <div>
                        <div>
                           <img src="images/rahul_kumar.jpg" />
                        </div>
                     </div>
                     <div>
                        <div>
                           <h4>Rahul Kumar</h4>
                           <p>Founder</p>
                           <span>
                              Patience. Highly Regarded. Teaching Enthusiasm.
                              Passion for Life.
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="card_3">
                     <div>
                        <div>
                           <img src="images/suresh_kumar_gupta.jpg" />
                        </div>
                     </div>
                     <div>
                        <div>
                           <h4>Suresh Kumar Gupta</h4>
                           <p>Founder</p>
                           <span>
                           Extensive teaching experience with 25,000+ students, showcasing dedication to student success.
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="card_4">
                     <div>
                        <div>
                           <img src="images/kamlesh_kumar.jpg" />
                        </div>
                     </div>
                     <div>
                        <div>
                           <h4>Kamlesh Kumar</h4>
                           <p>Founder</p>
                           <span>
                              Dynamic and Passionate. Magical Dedication to
                              Teaching. Engaging Classes. Youthful and Vibrant.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Team_Mobile />
      </>
   );
};

export default Team;
