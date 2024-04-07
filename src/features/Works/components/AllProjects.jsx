import "./styles/AllProjects.css";

const AllProjects = ({ image, heading, paragraph }) => {
  return (
    <>
      <div className="design_inside">
        <img className="image_design" src={image} alt="design" />
        <h4 className="heading_design">{heading}</h4>
        <p className="paragraph_design">{paragraph}</p>
      </div>
    </>
  );
};
export default AllProjects;
