import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import Footer from './componentes/footer/footer.jsx'



function App() {

  return (
    <>
        <RouterProvider router={router} />

        <Footer />

    </>
  )
}

export default App
