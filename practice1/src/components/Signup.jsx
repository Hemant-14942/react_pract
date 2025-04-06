import React, { useState } from 'react'
import { useNavigate } from 'react-router';
const Signup = () => {
  const person =  {
    name:" ",
    email:" ",
    pass:" "
  }
  const [data , setData] = useState(person);
  const nav  = useNavigate();
  
  const handleChange = (e) =>{
    let value = e.target.value;
    let name = e.target.name; 
    setData((prev)=>(
      {
        ...prev,
        [name]:value,
      }
    ))
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    const { name, email, pass } = data; 
   if (!name.trim() || !email.trim() || !pass.trim()) 
    {
     alert("Please fill all the inputs");
     return; // Stop further execution
    } 
    else {
      let getdata = JSON.parse(localStorage.getItem("user") || "[]")
      let arr = []
      arr = [...getdata]
      arr.push(data)
      // console.log(arr);
      
      
     localStorage.setItem("user", JSON.stringify(arr));
     alert("user added succesfully");
     nav("/home");
     
    }
  }
  // console.log(data);
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md overflow-hidden bg-white shadow-xl rounded-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Sign Up
          </h2>
          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="pass"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handlesubmit}
            >
              Sign Up
            </button>

            <div className="mt-4 text-sm text-center text-gray-600">
              Already have an account?
              <a
                href="/login"
                className="ml-1 text-blue-500 hover:text-blue-600"
              >
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;