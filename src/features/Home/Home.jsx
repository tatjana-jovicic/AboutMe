import { useState } from "react";
import "./Home.css";
import FooterNav from "./components/FooterNav";
import GitHub from "../../assets/githhub.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const Home = () => {
  const [object, setObject] = useState([
    {
      linkIcon: "https://sr-rs.facebook.com/tatjana.jovicic.505",
      imgIcon: Facebook,
    },
    {
      linkIcon: "https://twitter.com",
      imgIcon: Twitter,
    },
    {
      linkIcon:
        "https://www.linkedin.com/in/tatjana-jovi%C4%8Di%C4%87-113474290",
      imgIcon: Linkedin,
    },
    {
      linkIcon: "https://github.com/tatjana-jovicic",
      imgIcon: GitHub,
    },
  ]);
  return (
    <div>
      <ProfilePicture />
      <h1 className="headCss">
        Hi, I am <span className="color_name">Tatjana Jovičić!</span>
      </h1>
      <p className="paragraph">
        I am a frontend web developer. I can provide clean code and pixel
        perfect design. I also make website more & more interactive with web
        animations.
      </p>
      <div className="footer_1">
        {object.map((footer) => (
          <div className="footer_2">
            <FooterNav linkIcon={footer.linkIcon} imgIcon={footer.imgIcon} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
