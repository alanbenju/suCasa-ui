import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { AttendeeFormContainer } from './containers/AttendeeForm.container';
import { PresentationFormContainer } from './containers/PresentationForm.container';
import { AddAttendeeFormContainer } from './containers/AddAttendeeForm.container';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <AttendeeFormContainer></AttendeeFormContainer>
          </Col>
          <Col>
            <PresentationFormContainer></PresentationFormContainer>
          </Col>
          <Col>
            <AddAttendeeFormContainer></AddAttendeeFormContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
