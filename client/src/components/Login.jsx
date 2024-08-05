// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:4000/api/auth/login', { username, password });
//       onLogin(res.data.token);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });
//       console.log('Login response:', response.data);
//       const { token } = response.data;
//       onLogin(token);
//       console.log('Registration is successful for user:', username);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Login failed');
//       console.log('Login failed for user:', username);
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
//         <button type="submit" style={{ backgroundColor: 'yellow', color: 'white' }}>Login</button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
//     </div>
//   );
// };

// export default Login;







//------------------------------


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import HeroVid from '../assets/video.webm';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });
//       console.log('Login response:', response.data);
//       const { token } = response.data;
//       onLogin(token);
//       console.log('Registration is successful for user:', username);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Login failed');
//       console.log('Login failed for user:', username);
//     }
//   };

//   return (
    
//     <div
//       className="flex items-center justify-center min-h-screen bg-cover bg-center"
//       // style={{
//       //   backgroundImage: 'url(/images/h.jpg)'
//       // }}
//     >
//       <video className='w-full h-full object-cover absolute -z-10' src={HeroVid} autoPlay loop muted />
//       <form onSubmit={handleSubmit} className="bg-black bg-opacity-80 p-10 rounded-lg shadow-lg">
//         <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
//         <div className="mb-4">
//           <label htmlFor="userName" className="block text-white">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             id="userName"
//             placeholder="Type your username"
//             required
//             className="w-full bg-transparent border-b border-white text-white py-2 px-0 mb-4 focus:outline-none"
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="userPassword" className="block text-white">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="userPassword"
//             placeholder="Type your password"
//             required
//             className="w-full bg-transparent border-b border-white text-white py-2 px-0 mb-4 focus:outline-none"
//           />
//         </div>
//         <div className="flex items-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
//           >
//             Login
//           </button>
//           <a
//             href="/register"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//           >
//             Register
//           </a>
//         </div>
//         {error && <p className="mt-4 text-red-500">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;











// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import HeroVid from '../assets/video.webm';
// import Navbar from './Navbar';


// const Login = ({ onLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });
//             const { token } = response.data;
//             localStorage.setItem('token', token);
//             localStorage.setItem('username', username); 
//             onLogin(token, username);
//             console.log('Login successful for user:', username);
//             navigate('/dashboard', { state: { username } });
//         } catch (err) {
//             console.error('Login error:', err);
//             setError('Login failed. Please check your credentials.');
//             console.log('Login failed for user:', username);
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <div className="flex-grow flex items-center justify-center relative">
//                 <video className="absolute inset-0 w-full h-full object-cover " autoPlay loop muted>
//                     <source src={HeroVid} type="video/webm" />
//                 </video>
//                 <div className="z-10 w-full max-w-md backdrop-filter backdrop-blur-md bg-opacity-30 bg-white bg-opacity-20 py-8 px-4 shadow sm:rounded-lg sm:px-10">
//                     <h2 className="mb-6 text-center text-3xl font-extrabold text-white">
//                         Sign in
//                     </h2>
//                     <form className="space-y-6" onSubmit={handleSubmit}>
//                         <div>
//                             <label htmlFor="username" className="block text-sm font-medium text-white">
//                                 Username
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="username"
//                                     name="username"
//                                     type="text"
//                                     autoComplete="username"
//                                     required
//                                     value={username}
//                                     onChange={(e) => setUsername(e.target.value)}
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="password" className="block text-sm font-medium text-white">
//                                 Password
//                             </label>
//                             <div className="mt-1">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     required
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                             >
//                                 Sign in
//                             </button>
//                         </div>
//                     </form>

//                     {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

//                     <div className="mt-6">
//                         <div className="relative">
//                             <div className="absolute inset-0 flex items-center">
//                                 <div className="w-full border-t border-gray-300" />
//                             </div>
//                             <div className="relative flex justify-center text-sm">
//                                 <span className="px-2 bg-black bg-opacity-70 text-white">
//                                     Or
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="mt-6">
//                             <a
//                                 href="/register"
//                                 className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30"
//                             >
//                                 Register
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;





import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVid from '../assets/video.webm';
import Navbar from './Navbar1';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('username', username); 
            // if (typeof onLogin === 'function') {
            //     onLogin(token, username);
            // } else {
            //     console.warn('onLogin prop is not a function');
            // }
            console.log('Login successful for user:', username);
            navigate('/dashboard', { state: { username } });
        } catch (err) {
            console.error('Login error:', err);
            setError('Login failed. Please check your credentials.');
            console.log('Login failed for user:', username);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center relative">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src={HeroVid} type="video/webm" />
                </video>
                <div className="z-10 w-full max-w-md backdrop-filter backdrop-blur-md bg-opacity-30 bg-white  py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <h2 className="mb-6 text-center text-3xl font-extrabold text-white">Sign in</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-black bg-opacity-70 text-white">Or</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <a
                                href="/register"
                                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;
