import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";

import Router from "~/core/router";

const router = Router();

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
