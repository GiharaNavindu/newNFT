// import React, { useState } from 'react';
// import axios from 'axios';

// const NFTForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const res = await axios.post('http://localhost:4000/api/nfts', formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       onSubmit(res.data);
//       setTitle('');
//       setDescription('');
//       setImage(null);
//       setError(null); // clear any previous errors
//     } catch (err) {
//       console.error('Error creating NFT:', err);
//       setError('Error creating NFT');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded">
//       <h2 className="text-xl mb-4">Create NFT</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/png, image/jpeg"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-2 rounded"
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Create NFT
//       </button>
//     </form>
//   );
// };

// export default NFTForm;


import React, { useState } from 'react';
import axios from 'axios';

const NFTForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!title || !description || !price || !image) {
        console.error('All fields are required');
        return;
      }
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('image', image); // Append the file directly
  
      const response = await axios.post('http://localhost:4000/api/nfts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('NFT created:', response.data);
      // Reset form fields after successful submission
      setTitle('');
      setDescription('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error creating NFT:', error);
    }
  };
  

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={(e) => {
          const file = e.target.files[0];
          setImage(file); // Store the file directly
        }} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NFTForm;
