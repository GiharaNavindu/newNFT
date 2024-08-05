// import { Link } from "react-router-dom";

// const usersData = [
//   { id: 1, username: "annabeck99", fullName: "Anna Becker", email: "annabeck99@gmail.com", status: "active", transaction: "$120.00" },
//   { id: 2, username: "johnsmith", fullName: "John Smith", email: "johnsmith@gmail.com", status: "inactive", transaction: "$150.00" },
//   // Add more users as needed
// ];

// export default function Users() {
//   return (
//     <div className="p-5 bg-gray-800 text-gray-200">
//       <h1 className="text-3xl font-semibold text-teal-400 mb-5">Users</h1>
//       <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
//         <thead>
//           <tr>
//             <th className="text-left px-6 py-4 text-gray-400">Username</th>
//             <th className="text-left px-6 py-4 text-gray-400">Full Name</th>
//             <th className="text-left px-6 py-4 text-gray-400">Email</th>
//             <th className="text-left px-6 py-4 text-gray-400">Status</th>
//             <th className="text-left px-6 py-4 text-gray-400">Transaction</th>
//             <th className="text-left px-6 py-4 text-gray-400">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {usersData.map(user => (
//             <tr key={user.id} className="border-b border-gray-600">
//               <td className="px-6 py-4">{user.username}</td>
//               <td className="px-6 py-4">{user.fullName}</td>
//               <td className="px-6 py-4">{user.email}</td>
//               <td className="px-6 py-4">{user.status}</td>
//               <td className="px-6 py-4">{user.transaction}</td>
//               <td className="px-6 py-4">
//                 <Link to={`/user/${user.id}`}>
//                   <button className="rounded border-none p-2 cursor-pointer bg-teal-500 text-white font-semibold hover:bg-teal-600">
//                     Edit
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




import React from 'react';
import { Link } from "react-router-dom";

const usersData = [
  { id: 1, username: "annabeck99", fullName: "Anna Becker", email: "annabeck99@gmail.com", status: "active", transaction: "$120.00" },
  { id: 2, username: "johnsmith", fullName: "John Smith", email: "johnsmith@gmail.com", status: "inactive", transaction: "$150.00" },
  // Add more users as needed
];

function Users() {
  return (
    <div className="p-5 bg-gray-800 text-gray-200">
      <h1 className="text-3xl font-semibold text-teal-400 mb-5">Users</h1>
      <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="text-left px-6 py-4 text-gray-400">Username</th>
            <th className="text-left px-6 py-4 text-gray-400">Full Name</th>
            <th className="text-left px-6 py-4 text-gray-400">Email</th>
            <th className="text-left px-6 py-4 text-gray-400">Status</th>
            <th className="text-left px-6 py-4 text-gray-400">Transaction</th>
            <th className="text-left px-6 py-4 text-gray-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map(user => (
            <tr key={user.id} className="border-b border-gray-600">
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.fullName}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.status}</td>
              <td className="px-6 py-4">{user.transaction}</td>
              <td className="px-6 py-4">
                <Link to={`/user/${user.id}`}>
                  <button className="rounded border-none p-2 cursor-pointer bg-teal-500 text-white font-semibold hover:bg-teal-600">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
