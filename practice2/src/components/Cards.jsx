import React from "react";
import Card from "./Card";

function Cards({ user , handleRemove }) {
  return (
    <div className="flex w-[70%] flex-wrap items-center justify-center gap-4 bg-gray-200 h-[50vh]">
      {user.map((item, index) => {
         return <Card key={index} id={index} user={item} handleRemove={handleRemove} />;
      })}
    </div>
  );
}

export default Cards;
