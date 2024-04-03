import "./About.css";
import PicOfMe from "../../assets/picture.png";

const About = () => {
  const listItems = [
    {
      label: "First Name",
      value: "Tatjana",
    },
    {
      label: "Last Name",
      value: "Jovičić",
    },
    {
      label: "Age",
      value: "23 years",
    },
    {
      label: "Nationality",
      value: "Bosnian",
    },
    {
      label: "Languages",
      value: "Serbian, English",
    },
    {
      label: "Address",
      value: "Vlajići, Teslić",
    },
    {
      label: "Freelance",
      value: "Avaliable",
    },
  ];

  return (
    <div>
      <h2 className="about_me">ABOUT ME</h2>
      <div className="container">
        <img className="picture_style" src={PicOfMe} alt="pictureOfMe" />
        <div className="right_container">
          <h3>
            Hi, I am <span className="color_name">Tatjana Jovičić!</span>
          </h3>
          <ul className="bullets">
            {listItems.map((item) => (
              <li className="items" key={item.label}>
                <span className="label_style">{item.label}: </span>
                <span className="value_style">{item.value}</span>
              </li>
            ))}
          </ul>

          <button className="button">DOWNLOAD RESUME</button>
        </div>
      </div>
    </div>
  );
};
export default About;
