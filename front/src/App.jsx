import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import Footer from './componentes/footer/footer.jsx'
import stylesApp from './App.module.css'
import Header from './componentes/Header/Header.jsx'


function App() {

  return (
    <>
        <RouterProvider router={router} />
<<<<<<< HEAD
        

=======
        <Header />
>>>>>>> 71f344f0be7e65d2143fe5509bccaf9c8951ce5b
        <Footer />

    </>
  )
}

export default App
