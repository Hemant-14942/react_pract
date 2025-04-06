import React, { useState } from 'react'

const todolist = () => {
  const [tasks, setTasks] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  // hadle submit function
  const handlesubmit = (e) => {
      e.preventDefault();
    if (!tasks || !desc) {
      alert("Please fill the task and desc");
    } else {
      setList((prev) =>{
        const updatedList = [...prev, { tasks, desc }];
        console.log(updatedList);
        return updatedList;
      })
       setTasks("");
       setDesc("");
    }
  };
  const handleremove = (i) => {
    const updatedList = list.filter((item, ind) => ind !== i);
    setList(updatedList);
  }
  return (
    <>
      <form
        className="flex items-center justify-center gap-5 p-5 bg-yellow-700 form-box"
        onSubmit={handlesubmit}
      >
        <input
          type="text"
          className="p-2 text-2xl task-input"
          placeholder="task.."
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <input
          type="text"
          className="p-2 text-2xl desc-input"
          placeholder="desc.."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="p-3 text-white uppercase rounded-xl todo-button bg-slate-900"
          type="submit"
        >
          add
        </button>
      </form>
      {list.length >= 1 ? (
        list.map((item, ind) => (
          <div
           key={ind}
            className="flex items-center justify-around w-screen p-3 mt-1 mb-1 bg-blue-300 data">
            <h1
             className="text-2xl ">
              {item.tasks}
              </h1>
            <h3 className="text-md">{item.desc} sqs</h3>
            <button
             className="p-2 text-white rounded-full bg-slate-600"
             onClick={() => handleremove(ind)}>
              remove
            </button>
          </div>
        ))
      ) : (
        <h1 className="text-2xl text-center">No task added</h1>
      )}
    </>
  );
}

export default todolist