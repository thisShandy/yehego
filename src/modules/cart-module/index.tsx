import type { RouteObject } from "react-router-dom";

import CartPage from "~/modules/cart-module/ui/pages/cart-page";

const cartModule: RouteObject[] = [
  {
    path: "/cart",
    element: <CartPage />
  }
];

export default cartModule;
