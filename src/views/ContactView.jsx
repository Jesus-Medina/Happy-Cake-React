import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function ContactView() {
  return (
    <>
      <h2 className="text-center mt-5">Cuentanos, ¿en que te podemos ayudar?</h2>
      <Form className="text-center w-75 d-block mt-5 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="cakenjoyer@gmail.com" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripción</Form.Label>
          <div className="form-floating">
            <textarea className="form-control p-0" required ></textarea>
          </div>
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ContactView
