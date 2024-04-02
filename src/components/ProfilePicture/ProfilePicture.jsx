import "./ProfilePicture.css";
import PictureOfMe from "../../assets/piccture.png";

const ProfilePicture = () => {
  return <img className="my_pic" src={PictureOfMe} alt="pictureOfMe" />;
};
export default ProfilePicture;
