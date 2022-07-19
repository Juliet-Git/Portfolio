import { Col } from "react-bootstrap";

const Technologies = ({imgUrl, title}) => {
  return (
    <Col sm={6} md={4}>
        <img src={imgUrl} alt={title} />
    </Col>
  );
};

export default Technologies;
