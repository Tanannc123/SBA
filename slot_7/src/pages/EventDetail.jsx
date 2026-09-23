import { Alert, Badge, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { events } from "../data/events";
function EventDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find((item) => item.id === id);
    if (!event) {
        return (
            <Container className="py-5">
                <Alert variant="warning">
                    <Alert.Heading>Event not found</Alert.Heading>
                    <p>No local event has id: <strong>{id}</strong>.</p>
                    <Button as={Link} to="/events">Back to Events</Button>
                </Alert>
            </Container>
        );
    }
    return (
        <Container className="py-5">
            <Card className="shadow-sm">
                <Card.Body>
                    <div className="mb-3">
                        <Badge bg={event.featured ? "warning" : "secondary"}>
                            {event.category}
                        </Badge>
                    </div>
                    <Card.Title as="h2">{event.title}</Card.Title>
                    <Card.Text>{event.description}</Card.Text>
                    <hr />
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Organizer:</strong> {event.organizer}</p>
                    <p><strong>Seats:</strong> {event.seats}</p>
                    <div className="d-flex gap-2">
                        <Button as={Link} to="/events" variant="primary">Back to Events</Button>
                        <Button variant="outline-secondary" onClick={() => navigate(-1)}>Go Back</Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
export default EventDetail;