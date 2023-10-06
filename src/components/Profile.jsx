
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

function Profile() {
  const [cookies] = useCookies(['user']);
  const [user_donations, set_donations] = useState([]);
  const user_data = cookies.user[0];
 

  useEffect(() => {
    // Fetch user donations when the component mounts
    fetch(`https://nnbackend.onrender.com/userDonations/${user_data.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        set_donations(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {user_donations.length > 0 ? (
        <div className="bg-gray-100 p-8 rounded-md max-w-md mx-auto mt-10">
          <h1 className="text-2xl font-bold mb-4">Hello {user_data.name}</h1>
          <div className="mb-4">
            <h2 className="font-bold">Email:</h2>
            <p>{user_data.email}</p>
          </div>
          <ul>
            {user_donations.map((donation) => (
              <li key={donation.id} className="mb-4 border-b pb-2">
                <h3 className="font-bold">Amount:</h3>
                <p>{donation.amount}</p>
                <h3 className="font-bold">Date:</h3>
                <p>{donation.date}</p>
                <h3 className="font-bold">Type:</h3>
                <p>{donation.type}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-gray-100 p-8 rounded-md max-w-md mx-auto mt-10 text-center">
          <h1 className="text-2xl font-bold mb-4">Hello {user_data.name}</h1>
          <p>You have not made any donations yet.</p>
          <br />
          <Link to="/" className='font-bold underline'>Go back to HomePage</Link>
        </div>
      )}
    </>
  );
}

export default Profile;
