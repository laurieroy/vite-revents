import { Container } from "semantic-ui-react";
import Navbar from "./nav/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppEvent } from "@/app/types/event";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  function handleSelectEvent(event: AppEvent | null) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  return (
    <>
      <Navbar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
