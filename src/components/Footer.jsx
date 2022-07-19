import {Container, Row, Col} from 'react-bootstrap';
import { GrLinkedinOption } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
      <footer>
        <Container>
          <Row className="align-item-center gap-5 py-5">
            <Col sm={12} className="d-flex justify-content-center">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/julietmaingi/">
                  <i>
                    <GrLinkedinOption />
                  </i>
                </a>
                <a href="ttps://discordapp.com/users/825257136752689152">
                  <i>
                    <SiDiscord />
                  </i>
                </a>
                <a href="https://github.com/Juliet-Git">
                  <i>
                    <BsGithub />
                  </i>
                </a>
              </div>
            </Col>
            <Col sm={12} className="text-center">
              <p>Copyright 2022. All Right Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer