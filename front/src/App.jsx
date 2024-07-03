import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import Footer from './componentes/footer/footer.jsx'
import stylesApp from './App.module.css'
import Header from './componentes/Header/Header.jsx'


function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
