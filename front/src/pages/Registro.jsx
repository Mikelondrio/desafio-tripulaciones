// Importar React y la imagen de fondo
import React from 'react';
import './Registro.css'; // Asegúrate de tener una hoja de estilos para los estilos

function Registro() {
    return (
        <div className="registro-container" style={{ backgroundImage: `url(/path/to/your/background-image.png)` }}>
            <div className="form-container">
                <h2>¡Te damos la bienvenida a Silver Test!</h2>
                <p>Nos gustaría saber un poco sobre ti. De esta forma garantizamos la seguridad de las personas que confían en Seniority.</p>
                <form>
                    <label>
                        Nombre
                        <input type="text" name="nombre" required />
                    </label>
                    <label>
                        Correo
                        <input type="email" name="correo" placeholder="Ejemplo@ejemplo.com" required />
                    </label>
                    <label>
                        Contraseña
                        <input type="password" name="contrasena" required />
                    </label>
                    <label>
                        Confirmar Contraseña
                        <input type="password" name="confirmarContrasena" required />
                    </label>
                    <button type="submit">Continuar</button>
                </form>
            </div>
        </div>
    );
}

export default Registro;
