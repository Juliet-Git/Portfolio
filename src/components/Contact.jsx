// import { useState } from "react"
// import { Container, Row, Col  } from "react-bootstrap"

// const Contact = () => {
//     const formInitialDetails = {
//         firstName: '',
//         lastNme: '',
//         email: '',
//         message: ''
//     }

//     const [formDetails, setFormDetails] = useState(formInitialDetails)
//     const [buttonText, setButtonText] = useState('Send');
//     const [status, setStatus] = useState({});

//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formDetails,
//             [category]: value
//         })
//     }

//     const handleSubmit = () => {

//     }

//     return (
//       <section className="contact" id="connect">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <img src="" alt="Contact Us" />
//             </Col>
//             <Col md={6}>
//               <h2>Ricevi il mio CV</h2>
//               <form onSubmit={handleSubmit}>
//                 <Row>
//                   <Col sm={6} className="px-1">
//                     <input
//                       type="text"
//                       value={formDetails.firstName}
//                       placeholder="First Name"
//                       onChange={(e) =>
//                         onFormUpdate("firstName", e.target.value)
//                       }
//                     />
//                   </Col>
//                   <Col sm={6} className="px-1">
//                     <input
//                       type="text"
//                       value={formDetails.firstName}
//                       placeholder="Last Name"
//                       onChange={(e) =>
//                         onFormUpdate("lastName", e.target.value)
//                       }
//                     />
//                   </Col>
//                   <Col sm={6} className="px-1">
//                     <input
//                       type="email"
//                       value={formDetails.firstName}
//                       placeholder="Email"
//                       onChange={(e) =>
//                         onFormUpdate("email", e.target.value)
//                       }
//                     />
//                   </Col>
//                   <Col sm={6} className="px-1">
//                     <textarea
//                     row='6' 
//                       value={formDetails.firstName}
//                       placeholder="Message"
//                       onChange={(e) =>
//                         onFormUpdate("message", e.target.value)
//                       }
//                     ></textarea>
//                     <button type="submit"><span>{buttonText}</span></button>
//                   </Col>
//                   {
//                     status.message && 
//                     <Col>
//                         <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
//                     </Col>
//                   }
//                 </Row>
//               </form>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     );
// }

// export default Contact