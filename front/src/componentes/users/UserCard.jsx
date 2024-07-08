// UserCard.js
import React from 'react';
import styles from './UserCard.module.css';

const UserCard = ({ user, onDelete }) => {
  const avatarUrl = `https://unavatar.io/instagram/${user.username}`;

  return (
    <div className={styles.userCard}>
      <img src={avatarUrl} alt={user.name} className={styles.userPhoto} />
      <h3>{user.name}</h3>
      <p>@{user.username}</p>
      <button className={styles.viewProfileBtn}>Ver perfil</button>
      <button className={styles.deleteBtn} onClick={() => onDelete(user.username)}>Borrar</button>
    </div>
  );
};

export default UserCard;
