import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "@/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "@/types/event";

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
};

export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvents((prevState) => {
      return [...prevState, event];
    });
  }

  function handleSelectEvent(event: AppEvent) {
    setSelectedEvent(event);
    setFormOpen(true);
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={handleSelectEvent} />
      </Grid.Column>

      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
