import "./style/FooterNav.css";

const FooterNav = ({ linkIcon, imgIcon }) => {
  return (
    <a href={linkIcon}>
      <img className="icon" src={imgIcon} alt="icon" />
    </a>
  );
};
export default FooterNav;
