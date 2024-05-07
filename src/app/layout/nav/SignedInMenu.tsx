import { Dropdown, Image, Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";

type Props = {
  setAuth: (auth: boolean) => void;
};

function SignedInMenu({ setAuth }: Props) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png" />
      <Dropdown pointing="top left" text="Bob">
        <Dropdown.Menu>
          <Dropdown.Item
            // as={Link}
            // to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            // as={Link}
            // to="/createEvent"
            text="My profile"
            icon="user"
          />
          <Dropdown.Item
            // as={Link}
            // to="/createEvent"
            onClick={() => setAuth(false)}
            text="Sign out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
export default SignedInMenu;