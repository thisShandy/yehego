import type { RouteObject } from "react-router-dom";

import ResultsPage from "~/modules/trip-module/ui/pages/results-page";
import LoadingPage from "~/modules/trip-module/ui/pages/loading-page";
import DetailsPage from "~/modules/trip-module/ui/pages/details-page";

const tripModule: RouteObject[] = [
  {
    path: "/trips/results",
    element: <ResultsPage />
  },
  {
    path: "/trips/details",
    element: <LoadingPage />
  },
  {
    path: "/trips/details/:id",
    element: <DetailsPage />
  }
];

export default tripModule;
