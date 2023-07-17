import Home from "@/page/Home";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    index: true,
    path: "/",
    element: <Home />,
  },
]);

export default router;
