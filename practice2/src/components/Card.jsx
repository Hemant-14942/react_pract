import React from "react";

function Card({user , handleRemove,id}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4 bg-gray-100 rounded-lg">
      <div className="card-img h-[100px] w-[100px] overflow-hidden rounded-full ">
        <img className="object-fill object-center w-full h-full" src={user.url} alt="placeholder" />
      </div>
      <div className="card-body">
        <h2 className="mb-2 font-semibold text-center card-title text-capitalize">{user.title}</h2>
        <p className="text-center card-text text-gray-600 w-[200px]">{user.desc}</p>
      </div>
      <button onClick={()=>handleRemove(id)} className="p-2 text-white bg-red-500 rounded-md">remove it</button>
    </div> 
  );
}

export default Card;
