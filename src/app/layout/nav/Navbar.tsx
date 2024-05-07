import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header>
          <img src="/logo.png" alt="logo" />
          Revents
        </MenuItem>

        <MenuItem name="Events" />

        <MenuItem>
          <Button
            floated="right"
            positive
            inverted
            content="Create Event"
          />
        </MenuItem>
        <MenuItem position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5rem" }}
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
