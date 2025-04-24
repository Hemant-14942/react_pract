import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-10 px-10 mt-16 justify-center">
      {data.map((item, index) => {
        if (item.image==null) return null;
        return (
          <div
            key={index}
            className="bg-zinc-800 w-[360px] p-4 rounded-xl shadow-lg transition hover:scale-105 duration-300"
          >
            <img
              className="w-full h-[220px] object-cover rounded-md"
              src={item.image}
              alt="img"
            />
            <div className="mt-3 text-left">
              <h2 className="text-xl text-amber-400 font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
