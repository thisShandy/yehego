import type { RouteObject } from "react-router-dom";

import ResultsPage from "~/modules/hotel-module/ui/pages/results-page";
import HotelPage from "~/modules/hotel-module/ui/pages/hotel-page";

const hotelsModule: RouteObject[] = [
  {
    path: "/hotels/results",
    element: <ResultsPage />
  },
  {
    path: "/hotels/:id",
    element: <HotelPage />
  }
];

export default hotelsModule;
