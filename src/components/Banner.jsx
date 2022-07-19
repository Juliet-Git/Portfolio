import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from 'react-icons/bs'
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Junior Web Developer", "Problem Solver", "Junior Seo Specialist", "qui puoi trovare i miei progetti"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random()*100)
  const [, setIndex] = useState(1)
  const time = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
        tick()
    }, delta)

    return () => {
        clearInterval(ticker)
    }
  },)

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

    setText(updateText)

    if(isDeleting) {
        setDelta(prevDelta => prevDelta / 2)
    }

    if(!isDeleting && updateText === fullText) {
        setIsDeleting(true)
        setIndex(prevIndex => prevIndex -1)
        setDelta(time)
    }else if(isDeleting && updateText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setIndex(1)
        setDelta(500)
    }else {
        setIndex(prevIndex => prevIndex + 1)
    }
  }

  const sendEmail = () => {
    const link = "mailto:julietmaingi1995@gmaiil.com";

    window.location.href = link;
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h2>
              {`Ciao, mi chiamo Juliet e sono una `}
              <span className="wrap">{text}</span>
            </h2>
            <p>
              Attualmente vivo a Bergamo e sono aperta a nuove esperienze lavorative.
            </p>
            <button onClick={sendEmail}>
              Mettiamoci in contatto <BsArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
