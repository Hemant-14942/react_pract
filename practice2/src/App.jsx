import Cards from "./components/Cards";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  function handleformsub(data){
    setUser([...user,data]);
  }
  function handleRemove(id){
    setUser(user.filter((item , index) => index !== id));
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 p-5 bg-gray-300 box">
      <Cards user={user} handleRemove={handleRemove}/>
      <Form handleformsub={handleformsub}/>
    </div>
  );
}

export default App;