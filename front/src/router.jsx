import { createBrowserRouter } from "react-router-dom";
import Layout from './componentes/Layout.jsx'
import Inicio from "./pages/Inicio.jsx";
import Contactar from "./pages/Contactar.jsx";
import Results from "./pages/Results.jsx";
import Registro from "./pages/Registro.jsx";
import  {Perfil}  from "./pages/perfil.jsx";
import Formaciones from "./pages/Formaciones.jsx";
import Recursos from "./pages/Recursos.jsx";


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
        path: "/formaciones",
        element: <Formaciones />,
        // element: <Formaciones />, hay que crear el componente
      },
      {
        path: "/recursos",
        element: <Recursos />,
        // element: <Resources />, hay que crear el componente
      },
      {
        path: "/contactar",
        element: <Contactar />,
      },
      {
        path: "/analisis",
        element: <Results />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/registro/gestionusuarios",
        element: <Perfil/>,
      },
      
    ],
  },
]);

export default router;