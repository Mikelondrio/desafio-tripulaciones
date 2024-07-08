import React, { useState, useEffect } from 'react';
import  { getCurrentUser } from '../../api/userApi.js';
import './Profile.css';

const UserProfile = () => {
    
  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData.data);
      
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUser();
  }, []);

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="profile-container">
      <article className="section-containeruser-card" key={user._id}>
        <div>
        <h2>Email:{user.email}</h2>
        <p>Name: {user.username}</p>
        </div>
        <div>
        <p>Company: {user.company}</p>
        <p>Sector: {user.sector}</p>
        </div>
      </article>
    </div>
  );
};

export {UserProfile};