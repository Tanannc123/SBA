import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function NotFound() {
    return (
        <Container className="py-5 text-center">
            <h2>404 - Page Not Found</h2>
            <p>The client route you requested does not exist.</p>
            <Button as={Link} to="/">Go Home</Button>
        </Container>
    );
}
export default NotFound;