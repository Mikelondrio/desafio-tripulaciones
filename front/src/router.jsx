import { createBrowserRouter } from "react-router-dom";
import { Root } from './root.jsx'
import { Index } from "./pages/index.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      //element: <Root />,
      children: [
        {
          path: "/",
          element: <Root />
        },

        {
          path: "/index",
          element: <Index />
        },


      ]
    }    
  ]);


export default router;