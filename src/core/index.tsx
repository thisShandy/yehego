import { RouterProvider } from "react-router-dom";

import Router from "~/core/router";
import useInit from "~/core/initial";

const router = Router();

const Core = () => {
  useInit();

  return (
    <RouterProvider router={router} />
  );
};

export default Core;
