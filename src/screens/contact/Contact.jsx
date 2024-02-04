import "./Contact.scss";
import { useState } from "react";
import { FaUserTie, FaUserAstronaut } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
   firstName: '',
   lastName: '',
   phone: '',
   email: '',
   message: ''
  })

  const handleForm = async (e) => {
    e.preventDefault();

    if(!userData.firstName || !userData.email || !userData.message) {
      return alert('fields are required!')
    }

    const payload = encodeURIComponent(
      `${userData.firstName}?
       ${userData.lastName !== '' ? userData.lastName : undefined}?
       ${userData.phone !== '' ? userData.phone : undefined}?
       ${userData.message}`
    )

    const resetForm = () => {
      setUserData({
         firstName: '',
         lastName: '',
         phone: '',
         email: '',
         message: ''
      })
    }

    const toastStyle = {
      fontSize: '1.5rem',
      borderRadius: '10px',
      backdropFilter: 'blur(2rem)',
      backgroundColor: '#00000090',
      color: '#fff'
    }

    // try {
    //   setLoading(true)
    //   const { data } = await axios.post("http://localhost:5000/send-email", {payload, email: userData.email});
    //   toast.success(data.message, {style: toastStyle})
    //   resetForm()
    // } catch (err) {
    //   console.log(err)
    //   toast.error(err.response.data.error || err.message, {style: toastStyle});
    // } finally {
    //   setLoading(false)
    // }
  }

  return (
    <div className="contact_container" id="contact">
      <Toaster />
      <div className="contact_header">
        <h1 className="contact_header_title">
          Don't be a stranger <br />
          just say hello!.
        </h1>
      </div>
      <div className="contact_wrapper">
        <div className="networking_svg_container">
          <img
            className="networking_svg"
            src="assets/social_networking.svg"
            alt="social_networking"
          />
        </div>
        <div className="form_container">
          <div className="form_wrapper">
            <form onSubmit={handleForm}>
              <div className="input_container">
                <FaUserAstronaut className="icon" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="input"
                  required
                  value={userData.firstName}
                  onChange={(e) => setUserData(prev => ({ ...prev, firstName: e.target.value }))}
                />
              </div>
              <div className="input_container">
                <FaUserTie className="icon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input"
                  value={userData.lastName}
                  onChange={(e) => setUserData(prev => ({ ...prev, lastName: e.target.value }))}
                />
              </div>
              <div className="input_container">
                <BiSolidPhoneCall className="icon" />
                <input
                  type="number"
                  placeholder="Phone"
                  className="input"
                  value={userData.phone}
                  onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              <div className="input_container">
                <MdAttachEmail className="icon" />
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  required
                  value={userData.email}
                  onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <textarea
                cols="30"
                rows="5"
                placeholder="Message"
                required
                value={userData.message}
                onChange={(e) => setUserData(prev => ({ ...prev, message: e.target.value }))}
              />
              <button style={loading ? {cursor: 'initial'} : null} type="submit" disabled={loading}>
                {!loading ? (
                  <>
                     Submit
                     <BsSendFill size={15} />
                  </>
                ): (
                  <div>
                     loading..
                     <div className="loading"><span></span></div>
                  </div>
                )}
              </button>
            </form>
          </div>
          {/* <div className="details_wrapper">
                  <div>
                     <p>+877999978</p>
                     <p> hello@gmail.com</p>
                     <p>1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                  </div>
               </div> */}
        </div>
      </div>
      <img src="assets/curve.svg" alt="bg-image" />
    </div>
  );
};

export default Contact;
