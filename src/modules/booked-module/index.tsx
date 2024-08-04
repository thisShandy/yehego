import type { RouteObject } from "react-router-dom";

import UpcomingPage from "~/modules/booked-module/ui/pages/upcoming-page";

const bookedModule: RouteObject[] = [
  {
    path: "/trips",
    element: <UpcomingPage key="trips" />
  },
  {
    path: "/trips/company",
    element: <UpcomingPage key="trips_company" />
  }
];

export default bookedModule;
