import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleformsub }) {
  const { register, handleSubmit, reset } = useForm();

  function onsub(data) {
    handleformsub(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onsub)} className="flex items-center justify-center gap-5">
      <input
        {...register("url")}
        className="p-2 border-2 border-gray-300 rounded-md outline-none"
        type="text"
        placeholder="url"
      />
      <input
        {...register("title")}
        className="p-2 border-2 border-gray-300 rounded-md outline-none"
        type="text"
        placeholder="title"
      />
      <input
        {...register("desc")}
        className="p-2 border-2 border-gray-300 rounded-md outline-none"
        type="text"
        placeholder="desc"
      />
      <button className="p-2 bg-blue-300 rounded-md" type="submit">Submit</button>
    </form>
  );
}

export default Form;
