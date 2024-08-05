// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/api/auth/register', { username, password });
//       console.log("registration is successfull"+username);
//       alert('User registered successfully');
      
//       navigate('/login'); // Redirect to login page after successful registration
//     } catch (err) {
//       console.error(err);
//       setError('Registration failed'); // Set error state
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit" style={{ backgroundColor: 'yellow', color: 'white' }}>Register</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
//     </div>
//   );
// };

// export default Register;













import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVid from '../assets/video.webm';
import Navbar from './Navbar1';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/register', { username, password });
      console.log("Registration is successful for user:", username);
      alert('User registered successfully');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      console.error('Registration error:', err);
      setError('Registration failed'); // Set error state
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow items-center justify-center relative">
        <video className="absolute inset-0 w-full h-full object-cover " autoPlay loop muted>
          <source src={HeroVid} type="video/webm" />
        </video>
        <div className="z-10 w-full max-w-md backdrop-filter backdrop-blur-md bg-opacity-30 bg-white  py-20 px-4 shadow sm:rounded-lg sm:px-10 rounded-md"> {/* Added rounded-md here */}
          <h2 className="mb-6 text-center text-3xl font-extrabold text-white">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="userName"
                placeholder="Type your username"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black mb-4"
              />
            </div>
            <div>
              <label htmlFor="userPassword" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="userPassword"
                placeholder="Type your password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black mb-4"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-20"
              >
                Register
              </button>
            </div>
          </form>

          {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
