import { Grid } from "semantic-ui-react";
import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsInfo from "./EventDetailsInfo";
import EventDetailsChat from "./EventDetailsChat";
import EventDetailsSidebar from "./EventDetailsSidebar";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@/app/store/store";

// type Props = {}; {}: Props

function EventDetailsPage() {
  const { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((evt) => evt.id === id)
  );

  if (!event) return <h2>Event not found</h2>;

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader event={event} />
        <EventDetailsInfo event={event} />
        <EventDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSidebar />
      </Grid.Column>
    </Grid>
  );
}
export default EventDetailsPage;
