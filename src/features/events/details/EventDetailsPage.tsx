import { Grid } from "semantic-ui-react"
import EventDetailsHeader from "./EventDetailsHeader"
import EventDetailsInfo from "./EventDetailsInfo"
import EventDetailsChat from "./EventDetailsChat"
import EventDetailsSidebar from "./EventDetailsSidebar"

type Props = {}

function EventDetailsPage({}: Props) {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader />
        <EventDetailsInfo />
        <EventDetailsChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailsSidebar />
        </Grid.Column>
    </Grid>
  )
}
export default EventDetailsPage