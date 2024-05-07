import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/logo.png"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button size="huge" inverted as={Link} to="/events">
          Get Started
          <Icon name="arrow right" inverted />
        </Button>
      </Container>
    </Segment>
  );
}
export default HomePage;
