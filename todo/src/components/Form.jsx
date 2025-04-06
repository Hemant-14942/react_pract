import React from 'react'

const Form = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 p-5 mt-8 bg-yellow-700 form-box">
        <input
          type="text"
          className="p-2 text-2xl task-input"
          placeholder="task.."
        />
        <input
          type="text"
          className="p-2 text-2xl desc-input"
          placeholder="desc.."
        />
        <button className="p-3 text-white uppercase rounded-xl todo-button bg-slate-900" type="submit">
          add
        </button>
      </div>
    </>
  );
}

export default Form;