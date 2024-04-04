import "./Works.css";
import WallArt from "../../assets/wallArt.png";
import PackageMilk from "../../assets/packageMilk.jpg";
import PackagePets from "../../assets/packagePets.jpg";
import Creme from "../../assets/cremee.png";
import Candel from "../../assets/candels.jpg";
import UiUx from "../../assets/ui_ux.png";

const Works = () => {
  const listDesigns = [
    {
      image: Candel,
      heading: "Candle",
      paragraph: "Creative Candle Light",
    },
    {
      image: WallArt,
      heading: "Paint",
      paragraph: "Creative wall painting",
    },
    {
      image: UiUx,
      heading: "UI/UX Sample",
      paragraph: "UI/UX Sample design mockup",
    },
    {
      image: PackageMilk,
      heading: "Packet",
      paragraph: "Packet design mockup",
    },
    {
      image: PackagePets,
      heading: "Packet",
      paragraph: "Packet design for pets",
    },
    {
      image: Creme,
      heading: "Cream",
      paragraph: "Creative cream box design",
    },
  ];

  return (
    <>
      <h1 className="my_works">MY WORKS</h1>
      <h1 className="my_works">MY WORKS</h1>
      <div className="button_container">
        <button className="button active">ALL</button>
        <button className="button">UI/UX DESIGN</button>
        <button className="button">HTML & CSS</button>
        <button className="button">RECT JS</button>
        <button className="button">NODE JS</button>
      </div>
      <div className="design_container">
        {listDesigns.map((works) => (
          <div className="design" key={works.paragraph}>
            <div className="design_inside">
              <img className="image_design" src={works.image} alt="design" />
              <h4 className="heading_design">{works.heading}</h4>
              <p className="paragraph_design">{works.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Works;
