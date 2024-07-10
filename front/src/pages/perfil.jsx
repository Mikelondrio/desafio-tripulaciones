import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../componentes/Header/Navbar.jsx";
import { Profile } from "../componentes/users/Profile.jsx";
import { UserList } from "../componentes/users/UsersForAdmin.jsx";
import { GraphicHistoric } from "../componentes/GraphicHistoric.jsx";
import { getCurrentUser } from "../api/userApi.js";
import "./perfil.css";

function Perfil() {
  const [component, setComponent] = useState("A");
  const [user, setUser] = useState({});
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData.data);
        setRole(userData.data.role);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUser();
  }, []);

  const componentRender = () => {
    switch (component) {
      case "A": return <Profile />;
      case "B": return <GraphicHistoric />;
      case "C": return <UserList />;
      default: return <Profile />;
    }
  };

  async function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/inicio');
  }

  const avatarUrl = `https://unavatar.io/${user.email}`;

  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-content">
        <div className="headerImage"></div>
        <div className="profile-main">
          <aside className="sidebar">
            <div className="user-info">
              <img src={avatarUrl} alt="Profile" className="profileImage" />
              <h2>{user.username}</h2>
            </div>
            <nav>
              <ul>
                <li className={component === "A" ? "active" : ""} onClick={() => setComponent("A")}>Tus datos</li>
                <li className={component === "B" ? "active" : ""} onClick={() => setComponent("B")}>Material de proyecto</li>
                {role=="admin" ? <li className={component === "C" ? "active" : ""} onClick={() => setComponent("C")}>Usuarios</li> : <></>}
                <li onClick={logout}>Cerrar Sesión</li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">
            {componentRender()}
          </main>
        </div>
      </div>
    </div>
  );
}

export { Perfil };