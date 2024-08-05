

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { AiOutlineCloudUpload } from 'react-icons/ai';
// import { FaEthereum } from 'react-icons/fa';
// import Swal from 'sweetalert2';

// export default function NFTCreationsPage() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState('');
//   const [nfts, setNfts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     fetchSubmittedNFTs();
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(false);

//     const username = localStorage.getItem('username');
//     if (!username) {
//       setError('Username is not found in localStorage');
//       return;
//     }

//     const nftData = new FormData();
//     nftData.append('title', title);
//     nftData.append('description', description);
//     nftData.append('price', price);
//     nftData.append('username', username);
//     if (image) {
//       nftData.append('image', image);
//     }

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('http://localhost:4000/api/nfts', nftData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuccess(true);
//       console.log('NFT submitted successfully:', response.data);
//       fetchSubmittedNFTs(); // Refresh the list of NFTs
//     } catch (error) {
//       setError('Failed to submit NFT');
//       console.error('Error submitting NFT:', error.response ? error.response.data : error.message);
//     }
// };


//   const fetchSubmittedNFTs = async () => {
//     setIsLoading(true);
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:4000/api/nfts', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error('Error response:', errorText);
//         throw new Error(`Failed to fetch submitted NFTs: ${response.status} ${errorText}`);
//       }

//       const data = await response.json();
//       console.log('Fetched NFTs:', data);
//       setNfts(data);
//     } catch (error) {
//       console.error('Error fetching submitted NFTs:', error);
//       Swal.fire('Error', `Failed to load submitted NFTs. ${error.message}`, 'error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen px-4 py-12 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-12">
//           Your NFT Creations
//         </h1>

//         {/* NFT Submission Form */}
//         <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12">
//           <div className="px-4 py-5 sm:p-6">
//             <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-8">
//               Submit New NFT
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="NFT Title"
//                 className="w-full px-3 py-2 bg-gray-700 text-white rounded"
//                 required
//               />
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Description"
//                 className="w-full px-3 py-2 bg-gray-700 text-white rounded"
//                 required
//               ></textarea>
//               <input
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 placeholder="Price (ETH)"
//                 className="w-full px-3 py-2 bg-gray-700 text-white rounded"
//                 required
//               />
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
//                 <div className="space-y-1 text-center">
//                   {previewUrl ? (
//                     <img src={previewUrl} alt="NFT Preview" className="mx-auto h-64 w-64 object-cover rounded-md" />
//                   ) : (
//                     <AiOutlineCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
//                   )}
//                   <div className="flex text-sm text-gray-400">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-pink-500 hover:text-pink-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
//                     >
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="file-upload"
//                         type="file"
//                         className="sr-only"
//                         onChange={handleImageChange}
//                         accept="image/*"
//                         required
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700"
//               >
//                 Submit NFT
//               </button>
//             </form>
//             {error && <p className="text-red-500 mt-4">{error}</p>}
//             {success && <p className="text-green-500 mt-4">NFT submitted successfully!</p>}
//           </div>
//         </div>

//         {/* Submitted NFTs Display */}
//         <div>
//           <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-8">
//             Your Submitted NFTs
//           </h2>
//           {isLoading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
//             </div>
//           ) : nfts.length === 0 ? (
//             <p className="text-center text-gray-400 text-xl">You haven't submitted any NFTs yet.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
//               {nfts.map((nft) => (
//                 <NFTCard key={nft._id} nft={nft} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function NFTCard({ nft }) {
//   return (
//     <div className="w-64 h-70 flex group flex-col space-y-3 rounded-2xl overflow-hidden border border-slate-400/10 hover:border-pink-500/50 pb-6 hover:shadow-2xl hover:shadow-pink-500/20 duration-300 ease-in-out hover:scale-105 relative bg-gradient-to-b from-gray-900 to-black p-4">
//       {/* Image */}
//       <div className="w-full h-40 flex flex-col items-start relative overflow-hidden rounded-xl group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 p-2">
//         <img
//           src={nft.imageUrl}
//           alt={nft.title}
//           className="w-full h-full object-cover p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//       {/* Content */}
//       <div className="px-2 flex flex-col space-y-3 flex-1">
//         {/* Title */}
//         <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
//           {nft.title}
//         </h1>
//         {/* Price & Description */}
//         <div className="flex justify-between items-center pt-2">
//           <div className="flex space-x-2 text-pink-400 items-center group">
//             <FaEthereum size={18} className="group-hover:animate-bounce" />
//             <p className="text-sm font-semibold group-hover:text-pink-300 transition-colors duration-300">
//               {nft.price} ETH
//             </p>
//           </div>
//         </div>
//         <p className="text-sm text-gray-400 truncate">{nft.description}</p>
//       </div>
//     </div>
//   );
// }





import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import Swal from 'sweetalert2';

export default function NFTCreationsPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchSubmittedNFTs();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const username = localStorage.getItem('username');
    if (!username) {
      setError('Username is not found in localStorage');
      return;
    }

    const nftData = new FormData();
    nftData.append('title', title);
    nftData.append('description', description);
    nftData.append('price', price);
    nftData.append('username', username);
    if (image) {
      nftData.append('image', image);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:4000/api/nfts', nftData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess(true);
      console.log('NFT submitted successfully:', response.data);
      fetchSubmittedNFTs(); // Refresh the list of NFTs
      // Reset form fields
      setTitle('');
      setDescription('');
      setPrice('');
      setImage(null);
      setPreviewUrl('');
    } catch (error) {
      setError('Failed to submit NFT');
      console.error('Error submitting NFT:', error.response ? error.response.data : error.message);
    }
  };

  const fetchSubmittedNFTs = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:4000/api/nfts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Failed to fetch submitted NFTs: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      console.log('Fetched NFTs:', data);
      setNfts(data);
    } catch (error) {
      console.error('Error fetching submitted NFTs:', error);
      Swal.fire('Error', `Failed to load submitted NFTs. ${error.message}`, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-12">
          Your NFT Creations
        </h1>

        {/* NFT Submission Form */}
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-8">
              Submit New NFT
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="NFT Title"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                required
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                required
              ></textarea>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price (ETH)"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded"
                required
              />
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {previewUrl ? (
                    <img src={previewUrl} alt="NFT Preview" className="mx-auto h-64 w-64 object-cover rounded-md" />
                  ) : (
                    <AiOutlineCloudUpload className="mx-auto h-12 w-12 text-gray-400" />
                  )}
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-pink-500 hover:text-pink-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700"
              >
                Submit NFT
              </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">NFT submitted successfully!</p>}
          </div>
        </div>

        {/* Submitted NFTs Display */}
        <div>
          <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 mb-8">
            Your Submitted NFTs
          </h2>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          ) : nfts.length === 0 ? (
            <p className="text-center text-gray-400 text-xl">You haven't submitted any NFTs yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {nfts.map((nft) => (
                <NFTCard key={nft._id} nft={nft} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NFTCard({ nft }) {
  return (
    <div className="w-64 h-70 flex group flex-col space-y-3 rounded-2xl overflow-hidden border border-slate-400/10 hover:border-pink-500/50 pb-6 hover:shadow-2xl hover:shadow-pink-500/20 duration-300 ease-in-out hover:scale-105 relative bg-gradient-to-b from-gray-900 to-black p-4">
      {/* Image */}
      <div className="w-full h-40 flex flex-col items-start relative overflow-hidden rounded-xl group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 p-2">
        <img
          src={`data:image/jpeg;base64,${nft.image}`}
          alt={nft.title}
          className="w-full h-full object-cover p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Content */}
      <div className="px-2 flex flex-col space-y-3 flex-1">
        {/* Title */}
        <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
          {nft.title}
        </h1>
        {/* Price & Description */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex space-x-2 text-pink-400 items-center group">
            <FaEthereum size={18} className="group-hover:animate-bounce" />
            <p className="text-sm font-semibold group-hover:text-pink-300 transition-colors duration-300">
              {nft.price} ETH
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-400 truncate">{nft.description}</p>
      </div>
    </div>
  );
}