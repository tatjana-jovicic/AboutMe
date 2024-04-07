import { useState } from "react";
import "./Contact.css";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
  const [ConInfo, setConInfo] = useState([
    {
      logo: "https://www.freeiconspng.com/thumbs/telephone-icon/tel-phone-icon-5.png",
      heading: "Contact on phone",
      paragraph: "+387 65 077 053",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/666/666162.png",
      heading: "Contact on email",
      paragraph: "tatjanajovicic19@gmail.com",
    },
    {
      logo: "https://www.freeiconspng.com/thumbs/location-icon-png/location-symbol-png-circle-location-icon-13.png",
      heading: "Contact address",
      paragraph: "Vlajići, Teslić 74 270, Bosnia and Herzegovina",
    },
  ]);

  return (
    <>
      <h1 className="contact_me">CONTACT ME</h1>
      <div className="container">
        <div className="container_left">
          <h3 className="contact_info">Contact information</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit ament consectetur adipisicing elit. A omnis,
            harum possimus non praesentinum qui facere.
          </p>
          <div className="info_container">
            {ConInfo.map((info) => (
              <div className="info">
                <ContactInfo
                  logo={info.logo}
                  heading={info.heading}
                  paragraph={info.paragraph}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container_right">
          <div className="inputs">
            <label>Name: </label>
            <input type="name" placeholder="Enter Your name..." />
            <label>Email: </label>
            <input type="email" placeholder="Enter Your email..." />
            <label>Subject: </label>
            <input type="subject" placeholder="Enter subject..." />
            <label>Message: </label>
            <textarea name="message" placeholder="Enter Your message..." />
            <button>SEND MAIL</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
