import { Form, Button } from "react-bootstrap";

export function AttendeeFormComponent(props) {
    const { name, email, company, onNameChanged, onEmailChanged, onCompanyChanged, onCreateAttendee} = props
    return (
        <>
            <h2>Create attende</h2>
            <Form onSubmit={onCreateAttendee}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={onNameChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter company" value={company} onChange={onCompanyChanged} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </>
    )
}