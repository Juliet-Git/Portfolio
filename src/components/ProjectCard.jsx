import {Col} from 'react-bootstrap'

const ProjectCard = ({title, description, imgUrl, link}) => {
    return (
        <Col sm={12} md={4}>
            <a href={link} className='text-white'>
            <div className="proj-imgbx">
                <img src={imgUrl} alt=""/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            </a>
        </Col>
    )
}

export default ProjectCard