import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import styles from './App.module.css'
import StatesProvider from './utils/StateProvider.jsx'

function App() {

  return (
    <StatesProvider>
      <div className={styles.container}>
          <RouterProvider router={router} />
      </div>
    </StatesProvider>
    
  )
}

export default App
