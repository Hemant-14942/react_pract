import React from 'react'

const Cards = ({ name, bio, profilePicture, friend, handlefollow }) => {
  // const { name, bio, profilePicture, button } = values;
  return (
    <div className="container mt-7 ">
      <div className="p-2 card bg-slate-400" style={{ width: "12rem" }}>
        <div className="rounded-full w-[70%] h-[8rem] overflow-hidden img-con relative ml-6 bg-slate-400">
          <img
            src={profilePicture}
            className="absolute object-cover object-center w-full h-full "
            alt="Card example"
          />
        </div>
        <div className=" card-body">
          <h5 className="text-2xl card-title">{name}</h5>
          <p className="text-sm card-text">{bio}</p>
          <button
            className="px-4 py-1 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handlefollow}
          >
            {friend ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards