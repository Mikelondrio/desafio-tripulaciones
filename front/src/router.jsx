import { createBrowserRouter } from "react-router-dom";
import Layout from './componentes/Layout.jsx'
import Inicio from "./pages/Inicio.jsx";
import Contactar from "./pages/Contactar.jsx";
import Resultados from "./pages/Resultados.jsx";
import Registro from "./pages/Registro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/inicio",
        element: <Inicio />,
      },
      {
        path: "/resultados",
        element: <Resultados />,
      },
      {
        path: "/contactar",
        element: <Contactar />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
    ],
  },
]);

export default router;
