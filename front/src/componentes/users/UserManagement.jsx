// UserManagement.js
import React, { useState } from 'react';
import HeaderUsermanagement from './headerUserManagement';
import UserCard from './UserCard';
import styles from './UserManagement.module.css';

const initialUsers = [
  { name: 'Marina Hirst', username: 'marina_h', photo: 'url_to_photo_1' },
  { name: 'Luis Delgado', username: 'ldelgado', photo: 'url_to_photo_2' },
  { name: 'Teresa Castro', username: 'teresacastro', photo: 'url_to_photo_3' },
  { name: 'Carmen Gil', username: 'carmen_gil', photo: 'url_to_photo_4' },
  { name: 'Ian Jander', username: 'ijander', photo: 'url_to_photo_5' },
  { name: 'Lucia Llus', username: 'lucia_llus', photo: 'url_to_photo_6' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  const user = {
    name: 'Antonio Díaz',
    photo: 'url_to_antonio_photo'
  };

  return (
    <div className={styles.userManagement}>
      <HeaderUsermanagement user={user} />
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
