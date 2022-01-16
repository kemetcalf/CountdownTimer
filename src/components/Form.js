import React from "react";
import useForm from "./useForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MyForm = (props) => {
  const { values, handleChange, handleSubmit } = useForm(countDown);

  function countDown() {
    props.dateInput(values.endDate);
    console.log(values.endDate);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Event
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="string"
            placeholder="Event name"
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Date
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="datetime-local"
            name="endDate"
            placeholder="Date"
            onChange={handleChange}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Begin Countdown</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

//   <div className="section is-fullheight">
//     <div className="container">
//       <div className="column is-4 is-offset-4">
//         <div className="box">
//           <form onSubmit={handleSubmit}>
//             <div className="field">
//               <label className="label">Countdown Date:</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   type="datetime-local"
//                   name="endDate"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="field">
//               <label className="label">Event name: </label>
//               <input
//                 className="input"
//                 type="text"
//                 name="name"
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <Button as="input" type="submit" value="Begin Countdown" />
//             {""}
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default MyForm;
