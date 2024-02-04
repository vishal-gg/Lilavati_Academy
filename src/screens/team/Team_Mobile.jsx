import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./Team_Mobile.scss";

import { EffectCards } from "swiper/modules";

export default function Car() {
  return (
    <>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
        <SwiperSlide>
          <div className="card-top">
            <div>
              <img src="images/kanhaiya_jee.jpg" />
            </div>
          </div>
          <div className="card-bottom">
            <div>
              <h4>Kanhaiya Jee</h4>
              <p>Founder</p>
              <span>
                Leadership in Education. A Decade of Teaching Experience.
                Teaching Versatility. Unique Approach.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-top">
            <div>
              <img src="images/kamlesh_kumar.jpg" />
            </div>
          </div>
          <div className="card-bottom">
            <div>
              <h4>Kamlesh Kumar</h4>
              <p>Founder</p>
              <span>
                Dynamic and Passionate. Magical Dedication to Teaching. Engaging
                Classes. Youthful and Vibrant.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-top">
            <div>
              <img src="images/suresh_kumar_gupta.jpg" />
            </div>
          </div>
          <div className="card-bottom">
            <div>
              <h4>Suresh kr. Gupta</h4>
              <p>Founder</p>
              <span>
                Extensive teaching experience with over 25,000 students,
                demonstrating exceptional dedication to student success.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-top">
            <div>
              <img src="images/rahul_kumar.jpg" />
            </div>
          </div>
          <div className="card-bottom">
            <div>
              <h4>Rahul Kumar</h4>
              <p>Founder</p>
              <span>
                Patience. Highly Regarded. Teaching Enthusiasm. Passion for
                Life.
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
