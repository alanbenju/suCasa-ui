import { Form, Button } from "react-bootstrap";

export function PresentationFormComponent(props) {
    const { name, room, details, speaker, onNameChanged, onRoomChanged, onDetailsChanged, onSpeakerNameChanged, onSpeakerEmailChanged,
        onSpeakerCompanyChanged,
        onSpeakerBioChanged,
        onCreatePresentation
    } = props
    return (
        <>
            <h2>Create presentation</h2>
            <Form onSubmit={onCreatePresentation}>
                <Form.Group className="mb-3" controlId="presentation">
                    <Form.Label>Presentation</Form.Label>
                    <Form.Control type="text" placeholder="Enter presentation name" value={name} onChange={onNameChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="room">
                    <Form.Label>Room</Form.Label>
                    <Form.Control type="number" placeholder="Enter room" value={room} onChange={onRoomChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="details">
                    <Form.Label>Details</Form.Label>
                    <Form.Control type="text" placeholder="Enter details" value={details} onChange={onDetailsChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Speaker Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={speaker.name} onChange={onSpeakerNameChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Speaker Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={speaker.email} onChange={onSpeakerEmailChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Speaker Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter company" value={speaker.company} onChange={onSpeakerCompanyChanged} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>Speaker Bio</Form.Label>
                    <Form.Control type="text" placeholder="Enter bio" value={speaker.bio} onChange={onSpeakerBioChanged} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </>
    )
}