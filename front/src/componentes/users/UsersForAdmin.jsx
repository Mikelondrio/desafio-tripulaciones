import React, { useState, useEffect } from 'react';
import  { getAllUsers } from '../../api/userApi.js';
import './UsersForAdmin.css';

const UserList = () => {

  const [AllUser, setAllUser] = useState([]);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await getAllUsers();
        userData = userData.data;
        const DataAllUsers = await userData.map((data)=>
            <article key={data._id}>
            <div>
                <h2>Email:{data.email}</h2>
                <p>Name: {data.username}</p>
            </div>
            <div>
                <p>Company: {data.company}</p>
                <p>Sector: {data.sector}</p>
            </div>
            </article>
        );
      setAllUser(DataAllUsers);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUser();
  }, []);


  return (
    <div className="profile-container">
      <article className="section-containeruser-card">
        {AllUser}
      </article>
    </div>
  );
};

export {UserList};