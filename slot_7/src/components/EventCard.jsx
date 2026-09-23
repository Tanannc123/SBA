import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function EventCard({ event }) {
    return (
        <Card className="h-100 shadow-sm">
            <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                    <Badge bg={event.featured ? "warning" : "secondary"}>
                        {event.featured ? "Featured" : event.category}
                    </Badge>
                </div>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text className="mb-1"><strong>Date:</strong> {event.date}</Card.Text>
                <Card.Text className="mb-3"><strong>Location:</strong> {event.location}</Card.Text>
                <Button
                    as={Link}
                    to={`/events/${event.id}`}
                    className="mt-auto"
                >
                    View Details
                </Button>
            </Card.Body>
        </Card>
    );
}
export default EventCard;