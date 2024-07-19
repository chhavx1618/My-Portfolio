import { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import './../App.css'
import crekart from "../assets/img/crekart.png";
import fit4sure from '.././assets/img/fit4sure.png'
import projImg2 from "../assets/img/project-img2.png";

export const Projects = () => {
    const projectsUI = [
        {
            title: "Crekart",
            description: "A website designed in figma with beautiful layout, advanced animations and great interactivity.",
            imgUrl: crekart,
            links: ["https://example.com"]
        },
        {
            title: "Fit4Sure",
            description: "A complete mobile app, admin panel, as well as major portion of the website designed for a fitness startup.",
            imgUrl: fit4sure,
            links: ["https://example.com"]
        },
        {
            title: "Hello",
            description: "Design",
            imgUrl: projImg2,
            links: ["https://example.com"]
        }
    ];
    const projectsWeb = [
      {
          title: "Portfolio",
          description: "Self portfolio design and build in React to display my skills and projects.",
          imgUrl: crekart ,
          links: ["https://example.com"]
      },
  
  ];
  const projectsRobo = [
    {
        title: "Remote Controlled Car",
        description: "A simple four-wheeled car build using arduino board and bluetooth module that can be controlled with a remote control app directly from your mobile phone",
        imgUrl: projImg2,
        links: ["https://example.com"]
    },
    {
        title: "Robotic Arm ",
        description: "Design",
        imgUrl: projImg2,
        links: ["https://example.com"]
    },
    {
        title: "Hello",
        description: "Design",
        imgUrl: projImg2,
        links: ["https://example.com"]
    }
];

    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleShow = (project) => {
        setSelectedProject(project);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="animate__animated animate__fadeIn">
                            <h2>Projects</h2>
                            <p>Check out the following projects that I have done till now.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">UX/UI Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Robotics and IoT</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projectsUI.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    project={project}
                                                    handleShow={handleShow}
                                                />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Row>
                                            {projectsWeb.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    project={project}
                                                    handleShow={handleShow}
                                                />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <Row>
                                            {projectsRobo.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    project={project}
                                                    handleShow={handleShow}
                                                />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <img src={selectedProject?.imgUrl} alt={selectedProject?.title} className="modal-img" />
                        </Col>
                        <Col md={6}>
                            <p>{selectedProject?.description}</p>
                            {selectedProject?.links.map((link, index) => (
                                <> 
                                <div><p>This project desc</p></div>
                                <Button key={index} variant="primary" href={link} target="_blank" className="mb-2">
                                    Link to the project
                                </Button>
                                </>
                            ))}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
};
