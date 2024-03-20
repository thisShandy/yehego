import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "~/core/router";
import useInit from "~/core/initial";

import "react-toastify/dist/ReactToastify.css";

const router = Router();

const Core = () => {
  useInit();

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default Core;
