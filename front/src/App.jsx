import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.container}>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
