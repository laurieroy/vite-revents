import { openModal } from "@/app/common/modals/modalSlice";
import { useAppDispatch } from "@/app/store/store";
import { Button, MenuItem } from "semantic-ui-react";

function SignedOutButtons() {
  const dispatch = useAppDispatch();

  return (
    <MenuItem position="right">
      <Button
        basic
        inverted
        content="Login"
        onClick={() => dispatch(openModal({ type: "LoginForm" }))}
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5rem" }}
      />
    </MenuItem>
  );
}
export default SignedOutButtons;
