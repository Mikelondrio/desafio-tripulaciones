import React, { useState, useEffect } from 'react';
import { getAllUsers, remove } from '../../api/userApi.js';
import './UsersForAdmin.css';

const UserList = () => {
  const [allUser, setAllUser] = useState([]);
  const [reboot, setReboot] = useState(true);

  useEffect(() => {
    if(reboot){
    const fetchUser = async () => {
      try {
        const userData = await getAllUsers();
        const dataAllUsers = userData.data.map((data) => (
          <article key={data._id} className="user-card">
            <div>
              <p>Email: {data.email}</p>
              <p>Name: {data.username}</p>
              <p>Company: {data.company}</p>
              <p>Sector: {data.sector}</p>
              <button className="deleteBtn" onClick={() => handleRemoveUser(data._id)}>Borrar</button>
            </div>
          </article>
        ));
        setAllUser(dataAllUsers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  };
    setReboot(false);
  }, [reboot]);

  const handleRemoveUser = async (id) => {
    try {
      const result = await remove(id);
      console.log('User deleted:', result);
      setReboot(true);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="profile-container">
      {allUser}
    </div>
  );
};

export { UserList };
