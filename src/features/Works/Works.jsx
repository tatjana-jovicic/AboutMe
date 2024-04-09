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

export const projects = [
  {
    id: 0,
    image: Candel,
    heading: "Candle",
    paragraph: "Creative Candle Light",
    group: "html",
  },
  {
    id: 1,
    image: WallArt,
    heading: "Paint",
    paragraph: "Creative wall painting",
    group: "react",
  },
  {
    id: 2,
    image: UiUx,
    heading: "UI/UX Sample",
    paragraph: "UI/UX Sample design mockup",
    group: "ux",
  },
  {
    id: 3,
    image: PackageMilk,
    heading: "Packet",
    paragraph: "Packet design mockup",
    group: "node",
  },
  {
    id: 4,
    image: PackagePets,
    heading: "Packet",
    paragraph: "Packet design for pets",
    group: "react",
  },
  {
    id: 5,
    image: Creme,
    heading: "Cream",
    paragraph: "Creative cream box design",
    group: "ux",
  },
];

const Works = () => {
  const [selectedGroup, setSelectedGroup] = useState("all");

  console.log(selectedGroup);

  const filteredProjects =
    selectedGroup === "all"
      ? projects
      : projects.filter((project) => project.group === selectedGroup);

  return (
    <>
      <h1 className="my_works">MY WORKS</h1>
      <di className="button_container">
        <Button
          additionalClass={selectedGroup === "all" ? "active" : ""}
          onclick={() => setSelectedGroup("all")}
          buttonText="ALL"
        />
        <Button
          additionalClass={selectedGroup === "ux" ? "active" : ""}
          onclick={() => setSelectedGroup("ux")}
          buttonText="UI/UX DESIGN"
        />
        <Button
          additionalClass={selectedGroup === "html" ? "active" : ""}
          onclick={() => setSelectedGroup("html")}
          buttonText="HTML & CSS"
        />
        <Button
          additionalClass={selectedGroup === "react" ? "active" : ""}
          onclick={() => setSelectedGroup("react")}
          buttonText="REACT JS"
        />
        <Button
          additionalClass={selectedGroup === "node" ? "active" : ""}
          onclick={() => setSelectedGroup("node")}
          buttonText="NODE JS"
        />
      </di>
      <div className="design_container">
        {filteredProjects.map((works) => (
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
