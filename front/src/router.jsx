import { createBrowserRouter } from "react-router-dom";
import Layout from './componentes/Layout.jsx'
import Inicio from "./pages/Inicio.jsx";
import Contactar from "./pages/Contactar.jsx";
import Resultados from "./pages/Resultados.jsx";
import Registro from "./pages/Registro.jsx";
import {ListRegisteredUsers} from "./pages/userlist.jsx"
import { GraphicHistory } from "./pages/history.jsx"
import UserManagement from "./componentes/users/UserManagement.jsx";
import { Perfil } from "./pages/perfil.jsx";
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
    /*   {
        path: "/registro/gestionusuarios/profile",
        element: <Perfil />,
      }, */ 
      {
      path: "/registro/gestionusuarios/list",
      element: <ListRegisteredUsers/>,
      },
      {
        path: "/registro/gestionusuarios/history",
        element: <GraphicHistory/>,
        },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/registro/gestionusuarios",
        element: <UserManagement />,
      },
      {
        path: "/profile",
        element: <Perfil />,
      }
    ],
  },
]);

export default router;
