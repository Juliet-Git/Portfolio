import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Technologies from "./Technologies";
// import colorSharp2 from "../assets/img/color-sharp2.png"
import javascriptImg from '../assets/img/JavaScript.svg'
import CSSImg from '../assets/img/CSS.svg'
import htmlImg from '../assets/img/Html.svg'
import phpImg from '../assets/img/PHP.svg'
import bootstrapImg from '../assets/img/Bootstrap.svg'
import mysqlImg from '../assets/img/MySQL.svg'
import NodeImg from '../assets/img/NodeJs.svg'
import laravelImg from '../assets/img/Laravel.svg'
import reactImg from '../assets/img/React.svg'
import mongoDBImg from '../assets/img/MongoDB.svg'
import proj3Img from '../assets/img/project-3.png'
import proj2Img from '../assets/img/project-2.png'
import proj1Img from '../assets/img/project-1.png'

const Projects = () => {
    const projects = [
      {
        title: "M Fashion Shop",
        description: "Design & Development",
        imgUrl: proj1Img,
        link: "https://portfolio-progetto-1.herokuapp.com/",
      },
      {
        title: "LaBrumDelCapo",
        description: "Design & Development",
        imgUrl: proj2Img,
        link: "https://portfolio-progetto-2.herokuapp.com/",
      },
      {
        title: "Travel map",
        description: "REST APIs project",
        imgUrl: proj3Img,
        link: "https://coruscating-panda-d381eb.netlify.app/",
      },
    ];

    const technologies = [
      {
        title: "Bootstrap",
        imgUrl: bootstrapImg,
      },
      {
        title: "MySQL",
        imgUrl: mysqlImg,
      },
      {
        title: "Node.js",
        imgUrl: NodeImg,
      },
      {
        title: "Laravel",
        imgUrl: laravelImg,
      },
      {
        title: "MongoDB",
        imgUrl: mongoDBImg,
      },
      {
        title: "React",
        imgUrl: reactImg,
      },
    ];

    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Progetti</h2>
              <p>
                Ecco i miei ultimi progetti, puoi vedere anche le tecnologie e i linguaggi che utilizzo.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web site</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Linguaggi</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tecnologie</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col md={3} sm={6} className="my-3">
                        <img src={javascriptImg} alt="javascript logo" />
                      </Col>
                      <Col md={3} sm={6} className="my-3">
                        <img src={CSSImg} alt="html logo" />
                      </Col>
                      <Col md={3} sm={6} className="my-3">
                        <img src={htmlImg} alt="css logo" />
                      </Col>
                      <Col md={3} sm={6} className="my-3">
                        <img src={phpImg} alt="php logo" />
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {technologies.map((technology, index) => {
                        return <Technologies key={index} {...technology} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        {/* <img src={colorSharp2} alt="" className="background-image-right" /> */}
      </section>
    );
}

export default Projects