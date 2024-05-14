import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import SignedOutButtons from "./SignedOutButtons";
import SignedInMenu from "./SignedInMenu";
import { useAppSelector } from "@/app/store/store";

export default function Navbar() {
  const { authenticated } = useAppSelector((state) => state.auth);

  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo" />
          Re-events
        </MenuItem>

        <MenuItem name="Events" as={NavLink} to="/events" />
        <MenuItem name="Scratch" as={NavLink} to="/scratch" />

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
        {authenticated ? <SignedInMenu /> : <SignedOutButtons />}
      </Container>
    </Menu>
  );
}
