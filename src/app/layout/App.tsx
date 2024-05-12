import { Container } from "semantic-ui-react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./nav/Navbar";
import HomePage from "@/features/home/HomePage";
import ModalManager from "../common/modals/ModalManager";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/" ? (
        <HomePage />
      ) : (
        <>
          <ModalManager />
          <Navbar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
