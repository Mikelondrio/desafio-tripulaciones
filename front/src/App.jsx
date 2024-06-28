import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import AccessModal from './componentes/AccessModal/AccessModal.jsx'


function App() {

  return (
    <>
        <RouterProvider router={router} />

        <AccessModal />


    </>
  )
}

export default App
