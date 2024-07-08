// UserManagement.js
import React, { useState } from 'react';
import HeaderUserManagement from './headerUserManagement';
import UserCard from './UserCard';
import styles from './UserManagement.module.css';

const initialUsers = [
  { name: 'Marina Hirst', username: 'marina_hirst_insta' },
  { name: 'Luis Delgado', username: 'luis_delgado_insta' },
  { name: 'Teresa Castro', username: 'teresa_castro_insta' },
  { name: 'Carmen Gil', username: 'carmen_gil_insta' },
  { name: 'Ian Jander', username: 'ian_jander_insta' },
  { name: 'Lucia Llus', username: 'lucia_llus_insta' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  const user = {
    name: 'Antonio Díaz',
    photo: 'url_to_antonio_photo' // Actualiza esto con la URL de la foto de Antonio si es necesario
  };

  return (
    <div className={styles.userManagement}>
      <HeaderUserManagement user={user} />
      <h1>Usuarios</h1>
      <div className={styles.userCardsContainer}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
