import { Container } from "react-bootstrap";
function About() {
    return (
        <Container className="py-5">
            <h2>About</h2>
            <p>Campus Event Navigator is an SBA301 routing practice application.</p>
            <p>Current data is local JavaScript data; no backend request is performed.</p>
        </Container>
    );
}
export default About;