import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
  setFormOpen: (value: boolean) => void;
};

export default function Navbar({ setFormOpen }: Props) {
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
            onClick={() => setFormOpen(true)}
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
