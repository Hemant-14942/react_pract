import React from "react";

const Cards = ({data}) => {
  // console.log(data[0]); // This will log the entire array once but in log it is printing two 

  return (
    <>
      <div className="con flex flex-wrap gap-16 px-[100px] mt-17 text-center">
        {data.map((item, index) => {
          if(!item.urlToImage){
            return null
          }
          else{
            return(

            <div key={index} className="card bg-amber-200 w-[360px] p-3">
            <img className="w-full h-[220px]" src={item.urlToImage} alt="img" />
            <div className="card-content">
              <h2 className="text-[1em] text-blue-700 font-bold ">{item.title}</h2>
              <p className="text-left">{item.description}</p>
            </div>
          </div>
            )
          }
        })}
      </div>
    </>
  );
};

export default Cards;
