import { createBrowserRouter } from "react-router-dom";

import modules from "~/modules";

const Router = () => {
  const pages = Object.values(modules).flat();
  const router = createBrowserRouter(pages);

  return router;
};

export default Router;
