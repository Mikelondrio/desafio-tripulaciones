// App.jsx
import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import styles from './App.module.css'; // Importa tus estilos de App.module.css
import router from './router.jsx'; // Importa tu configuración de router
import StatesProvider from './utils/StateProvider.jsx'; // Importa StatesProvider si es necesario
import Preloader from './componentes/Preloader.jsx'; // Importa el componente Preloader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Después de unos segundos, quita el preloader
    }, 3000); // Tiempo en milisegundos (en este caso, 3 segundos)

    return () => clearTimeout(timer);
  }, []);

  return (
    <StatesProvider>
      {loading ? (
        <Preloader />
      ) : (
        <div className={styles.container}>
          <RouterProvider router={router} />
        </div>
      )}
    </StatesProvider>
  );
}

export default App;
