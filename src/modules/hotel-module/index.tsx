import type { RouteObject } from "react-router-dom";

import ResultsPage from "~/modules/hotel-module/ui/pages/results-page";

const hotelsModule: RouteObject[] = [
  {
    path: "/hotels/results",
    element: <ResultsPage />
  }
];

export default hotelsModule;
