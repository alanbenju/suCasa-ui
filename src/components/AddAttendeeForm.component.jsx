import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";

export function AddAttendeeFormComponent(props) {
    const { email, onEmailChanged, presentations, onAddAttendee, onPresentationChange, dropdownTitle } = props
    return (
        <>
            <h2>Add attende to presentation</h2>
            <DropdownButton onSelect={onPresentationChange} id="dropdown-basic-button" title={dropdownTitle} style={{marginTop: '20px', marginBottom: '20px'}}>
                {presentations && presentations.map((presentation) => {
                    return <Dropdown.Item key={presentation._id} eventKey={presentation._id}>{presentation.presentation}</Dropdown.Item>
                })}
            </DropdownButton>
            <Form onSubmit={onAddAttendee}>
                <Form.Group className="mb-3" controlId="attendeeEmail">
                    <Form.Label>Ateendee email</Form.Label>
                    <Form.Control type="email" placeholder="Enter attendee email" value={email} onChange={onEmailChanged} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add attendee
                </Button>
            </Form>
        </>
    )
}