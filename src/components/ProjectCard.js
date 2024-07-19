import { Col } from "react-bootstrap";

export const ProjectCard = ({ project, handleShow }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => handleShow(project)}>
        <img src={project.imgUrl} alt={project.title} />
        <div className="proj-txtx">
          <h4>{project.title}</h4>
          <span>{project.description}</span>
        </div>
      </div>
    </Col>
  );
};
