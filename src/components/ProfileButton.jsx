import React, { useState } from 'react';
import Profile from './Profile';

const ProfileButton = () => {
  const [isProfileVisible, setProfileVisible] = useState(false);

  const toggleProfile = () => {
    setProfileVisible(!isProfileVisible);
  };

  return (
    <div>
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px'
        }}
        onClick={toggleProfile}
      >
        P
      </button>
      {isProfileVisible && <Profile />}
    </div>
  );
};

export default ProfileButton;
