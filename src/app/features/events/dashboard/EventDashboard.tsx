import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../api/sampleData";

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList event={sampleData} />
      </Grid.Column>
      {/* <h1>Events</h1> */}

      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  );
}
