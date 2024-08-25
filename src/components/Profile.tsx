import React, { useEffect, useState } from "react";


const Profile = () => {
  const [userData, setUserData] = useState({
    idToken: '',
    userId: '',
    email: '',
    name: '',
    phone: '',
  });

  useEffect(() => {
    const idToken = localStorage.getItem('idToken');
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const phone = localStorage.getItem('phone');

    if (idToken && userId && email && name && phone) {
      setUserData({ idToken, userId, email, name, phone });
    } else {
      // Redirect to login if no user data
      window.location.href = '/login';
    }
  }, []);

  return (
    <section className="bg-red-400 p-4 w-full">
      <h1 className="p-10 text-center text-5xl font-bold">My Profile</h1>
      {/* image, name, professions */}
      <div className="flex justify-start items-center rounded-2xl mx-10 bg-white shadow-xl">
        <img
          
          alt="profile"
          width={200}
          className="m-10 p-4 object-cover rounded-full"
        />
        <div className="p-4 text-left">
          <p className="p-2 font-bold text-3xl">{userData.name || "User Name"}</p>
          <p className="p-2 font-semibold text-xl">MERN expert</p>
        </div>
      </div>
      {/* personal information */}
      <div className="bg-white m-10 p-4 rounded-xl shadow-xl">
        <h1 className="py-10 px-4 text-left text-3xl font-bold">
          Personal Information
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="p-4">
            <p className="font-medium text-gray-700">First Name</p>
            <p className="font-semibold text-lg">{userData.name.split(' ')[0]}</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Last Name</p>
            <p className="font-semibold text-lg">{userData.name.split(' ')[1]}</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Email address</p>
            <p className="font-semibold text-lg">{userData.email}</p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Phone Number</p>
            <p className="font-semibold text-lg">
              {userData.phone ? `+91 ${userData.phone}` : 'Phone number not available'}
            </p>
          </div>
          <div className="p-4">
            <p className="font-medium text-gray-700">Bio</p>
            <p className="font-semibold text-lg">Student Mentor</p> {/* Placeholder or dynamic */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
