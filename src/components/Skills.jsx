import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";


const Skills = () => {
    const skills = ['Html', 'CSS', 'Javascript', 'PHP', 'Laravel', 'NodeJs', 'Bootstrap', 'ReactJs', 'Git', 'MongDB', 'Postman', 'MySQL', 'SEO']

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    
    return (
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  Ecco un elenco delle competenze che ho acquisito fino ad ora.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {skills.map((skill) => {
                    return (
                      <div className="item">
                        <img src="" alt="" />
                        <h5>{skill}</h5>
                      </div>
                    );
                  })}
                  {/* <div className="item">
                    <img src="" alt="" />
                    <h5>Brand Identity</h5>
                  </div>
                  <div className="item">
                    <img src="" alt="" />
                    <h5>Logo Design</h5>
                  </div>
                  <div className="item">
                    <img src="" alt="" />
                    <h5>Seo</h5>
                  </div> */}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="" />
      </section>
    );
};

export default Skills;
