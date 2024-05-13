import { Dropdown, Image, Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { signOut } from "@/features/auth/authSlice";

function SignedInMenu() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSignOut() {
    dispatch(signOut());
    navigate("/");
  }
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png" />
      <Dropdown pointing="top left" text={currentUser?.email}>
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
            onClick={handleSignOut}
            text="Sign out"
            icon="power"
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
export default SignedInMenu;
