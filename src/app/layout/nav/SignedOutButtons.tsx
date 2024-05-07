import { Button, MenuItem } from "semantic-ui-react";

type Props = {
  setAuth: (auth: boolean) => void;
};

function SignedOutButtons({ setAuth }: Props) {
  return (
    <MenuItem position="right">
      <Button basic inverted content="Login" onClick={() => setAuth(true)} />
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
