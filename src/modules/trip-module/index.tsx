import type { RouteObject } from "react-router-dom";

import ResultsPage from "~/modules/trip-module/ui/pages/results-page";

const tripModule: RouteObject[] = [
  {
    path: "/trips/results",
    element: <ResultsPage />
  }
];

export default tripModule;
