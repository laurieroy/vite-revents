import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {
  return (
    <Segment clearing>
      <Header content="Create Event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="EventTitle" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Date" />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button type="button" floated="right" content="Cancel" />
      </Form>
    </Segment>
  );
}
