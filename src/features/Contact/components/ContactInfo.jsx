import "./styles/ContactInfo.css";

const ContactInfo = ({ logo, heading, paragraph }) => {
  return (
    <>
      <div className="con">
        <div className="logo_container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="head_par">
          <h4 className="heading_info">{heading}</h4>
          <p className="paragraph_info">{paragraph}</p>
        </div>
      </div>
    </>
  );
};
export default ContactInfo;
