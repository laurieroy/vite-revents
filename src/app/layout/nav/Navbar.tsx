import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutButtons from "./SignedOutButtons";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

export default function Navbar() {
  const [auth, setAuth] = useState(true);
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo" />
          Revents
        </MenuItem>

        <MenuItem name="Events" as={NavLink} to="/events" />

        <MenuItem>
          <Button
            as={NavLink}
            to="/createEvent"
            floated="right"
            positive
            inverted
            content="Create Event"
          />
        </MenuItem>
        {auth ? <SignedInMenu setAuth={setAuth} /> : <SignedOutButtons setAuth={setAuth} />}
      </Container>
    </Menu>
  );
}
