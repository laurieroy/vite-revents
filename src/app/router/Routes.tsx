import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashboard from "@/features/events/dashboard/EventDashboard";
import EventDetails from "@/features/events/details/EventDetails";
import EventForm from "@/features/events/form/EventForm";

type Props = {};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/events",
        element: <EventDashboard />,
        // loader: teamLoader,
      },
      {
        path: "/events/:id",
        element: <EventDetails />,
        // loader: teamLoader,
      },
      {
        path: "/manage/:id",
        element: <EventForm />,
        // loader: teamLoader,
      },
      {
        path: "/createEvent",
        element: <EventForm />,
        // loader: teamLoader,
      },
    ],
  },
]);
