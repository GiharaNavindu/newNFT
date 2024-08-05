

import React, { useState } from "react";
import { AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import BidModal from "../components/modal/BidModal.jsx";
import Swal from "sweetalert2";

function ProductCard({ img, title, price, likes, sale }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState(price);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBidSubmit = async () => {
    const data = {
      Username: userName,
      Email: email,
      Bid: bidAmount,
      NFTTitle: title,
    };

    console.log("Submitting bid with data:", data);

    try {
      const response = await fetch("http://localhost:4000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        let errorData;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          errorData = await response.json();
        } else {
          errorData = await response.text();
        }
        console.error("Error response data:", errorData);
        throw new Error(
          `Network response was not ok. Status: ${response.status}. Response: ${errorData}`
        );
      }

      const responseData = await response.json();
      console.log("Bid submitted successfully:", responseData);
      Swal.fire("Success", "Your bid has been placed successfully!", "success");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire(
        "Oops...",
        `Failed to place your bid. ${error.message}`,
        "error"
      );
    }

    toggleModal();
  };

  return (
    <>
      <div className="w-64 h-70 flex group flex-col space-y-3 rounded-2xl overflow-hidden border border-slate-400/10 hover:border-pink-500/50 pb-6 hover:shadow-2xl hover:shadow-pink-500/20 duration-300 ease-in-out hover:scale-105 relative bg-gradient-to-b from-gray-900 to-black p-4">
        {/* Image & Counter */}
        <div className="w-full h-40 flex flex-col items-start relative overflow-hidden rounded-xl group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 p-2">
          <img
            src={img}
            alt="NFT"
            className="w-full h-full object-cover p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300"
          />
          {sale && (
            <div className="flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-pink-500 rounded-full absolute bottom-3 left-3 shadow-lg">
              <AiOutlineClockCircle className="animate-pulse" />
              <p className="text-xs font-semibold">66 : 08 : 19 : 27</p>
            </div>
          )}
        </div>
        {/* Content */}
        <div className="px-2 flex flex-col space-y-3 flex-1">
          {/* Title */}
          <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
            {title}
          </h1>
          {/* Price & Like */}
          <div className="flex justify-between items-center pt-2">
            {/* Price */}
            <div className="flex space-x-2 text-pink-400 items-center group">
              <FaEthereum size={18} className="group-hover:animate-bounce" />
              <p className="text-sm font-semibold group-hover:text-pink-300 transition-colors duration-300">
                {price} ETH
              </p>
            </div>
            {/* Like */}
            <div className="flex space-x-2 items-center group">
              <AiFillHeart className="text-rose-600 group-hover:text-pink-500 transition-colors duration-300 group-hover:scale-110 transform" />
              <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {likes}
              </p>
            </div>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            className="text-sm px-6 py-2 bg-pink-600 rounded-md hover:bg-pink-700 duration-200 ease-in-out"
            onClick={toggleModal}
          >
            Place bid
          </button>
        </div>
      </div>
      {/* Modal */}
      <BidModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBidSubmit={handleBidSubmit}
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
        nftTitle={title}
      />
    </>
  );
}

export default ProductCard;
