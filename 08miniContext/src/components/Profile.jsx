import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-red-600 font-medium">
          Please login to view your profile
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white px-6 py-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome 👋
        </h2>
        <p className="mt-2 text-lg text-blue-600 font-medium">
          {user.username}
        </p>
      </div>
    </div>
  );
}

export default Profile;