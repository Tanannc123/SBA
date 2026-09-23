import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <Container className="py-5 text-center">
            <h1>Campus Event Navigator</h1>
            <p className="lead">Discover technology, research, business and skills events.</p>
            <Button onClick={() => navigate("/events")}>Explore Events</Button>
        </Container>
    );
}
export default Home;