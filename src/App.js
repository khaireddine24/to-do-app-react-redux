import "./App.css";
import AddForm from "./components/AddForm";
import ListTask from "./components/ListTask";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Todo App</h1>
          <AddForm />
          <ListTask />
        </Col>
      </Row>
    </Container>
  );
}

export default App;