import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { createId } from "@paralleldrive/cuid2";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { createEvent, updateEvent } from "../eventSlice";

export default function EventForm() {
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((evt) => evt.id === id)
  );
  const initialValues = event ?? {
    id: "",
    title: "",
    date: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    // hostedBy: ""
    // hostPhotoURL: ""
    // attendees: Attendee[];
  };
  const [values, setValues] = useState(initialValues);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit() {
    id = id ?? createId();
    event
      ? dispatch(updateEvent({ ...event, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id,
            hostedBy: "bob",
            attendees: [],
            hostPhotoURL: "",
          })
        );
    navigate(`/events/${id}`);
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment clearing>
      <Header content={event ? "Update Event" : "Create Event"} />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="EventTitle"
            value={values.title}
            name="title"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            value={values.city}
            name="city"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            value={values.venue}
            name="venue"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          as={Link}
          to="/events"
          type="button"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
