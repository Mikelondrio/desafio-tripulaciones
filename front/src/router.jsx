import { createBrowserRouter } from "react-router-dom";
import  Inicio  from "./pages/Inicio.jsx";
import  Contactar  from "./pages/Contactar.jsx";
import  Resultados  from "./pages/Resultados.jsx";


const router = createBrowserRouter([

        {
          path: "/",
          element: <Inicio />
        },
  
        {
          path: "/inicio",
          element: <Inicio />
        },

        {
          path: "/resultados",
          element: <Resultados />
        },

        {
          path: "/contactar",
          element: <Contactar />
        }
 
  ]);


export default router;