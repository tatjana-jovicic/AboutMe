import "./Works.css";
import AllProjects from "./components/AllProjects";
import WallArt from "../../assets/wallArt.png";
import PackageMilk from "../../assets/packageMilk.jpg";
import PackagePets from "../../assets/packagePets.jpg";
import Creme from "../../assets/cremee.png";
import Candel from "../../assets/candels.jpg";
import UiUx from "../../assets/ui_ux.png";
import Button from "./components/Button";
import { useState } from "react";

const Works = () => {
  const [projects, setProjects] = useState([
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
  ]);

  return (
    <>
      <h1 className="my_works">MY WORKS</h1>
      <di className="button_container">
        <Button buttonText="ALL" />
        <Button buttonText="UI/UX DESIGN" />
        <Button buttonText="HTML & CSS" />
        <Button buttonText="REACT JS" />
        <Button buttonText="NODE JS" />
      </di>
      <div className="design_container">
        {projects.map((works) => (
          <div className="design">
            <AllProjects
              image={works.image}
              heading={works.heading}
              paragraph={works.paragraph}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Works;
