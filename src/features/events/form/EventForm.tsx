import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { FieldValues, Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { createId } from "@paralleldrive/cuid2";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { createEvent, updateEvent } from "../eventSlice";
import { categoryOptions } from "./categoryOptions";
import "react-datepicker/dist/react-datepicker.css";

export default function EventForm() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onTouched" });
  let { id } = useParams();
  const event = useAppSelector((state) =>
    state.events.events.find((evt) => evt.id === id)
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit(data: FieldValues) {
    console.log(data);
    id = id ?? createId();
    event
      ? dispatch(updateEvent({ ...event, ...data, date: data.date.toString() }))
      : dispatch(
          createEvent({
            ...data,
            id,
            hostedBy: "bob",
            attendees: [],
            hostPhotoURL: "",
            date: data.date.toString(),
          })
        );
    navigate(`/events/${id}`);
  }

  return (
    <Segment clearing>
      <Header content="Event details" sub color="teal" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input
          defaultValue={event?.title || ""}
          placeholder="EventTitle"
          {...(register("title"), { required: "Title is required" })}
          error={errors.title && errors.title.message}
        />
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          defaultValue={event?.category || ""}
          render={({ field }) => (
            <Form.Select
              options={categoryOptions}
              clearable
              placeholder="Category"
              {...field}
              onChange={(_, d) =>
                setValue("category", d.value, { shouldValidate: true })
              }
              error={errors.category && errors.category.message}
            />
          )}
        />

        <Form.TextArea
          defaultValue={event?.description || ""}
          placeholder="Description"
          {...(register("description"),
          { required: "Description is required" })}
          error={errors.description && errors.description.message}
        />
        <Header sub content="Location details" color="teal" />
        <Form.Input
          placeholder="City"
          defaultValue={event?.city || ""}
          {...(register("city"), { required: "City is required" })}
          error={errors.city && errors.city.message}
        />
        <Form.Input
          placeholder="Venue"
          defaultValue={event?.venue || ""}
          {...(register("venue"), { required: "Venue is required" })}
          error={errors.venue && errors.venue.message}
        />
        <Form.Field>
          <Controller
            name="date"
            control={control}
            rules={{ required: "Date is required" }}
            defaultValue={(event && new Date(event.date)) || null}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(value) =>
                  setValue("date", value, { shouldValidate: true })
                }
                showTimeSelect
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Event Date and Time"
              />
            )}
          />
        </Form.Field>

        <Button
          disabled={!isValid}
          loading={isSubmitting}
          type="submit"
          floated="right"
          positive
          content="Submit"
        />
        <Button
          disabled={isSubmitting}
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
