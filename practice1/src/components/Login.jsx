import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")
  const nav = useNavigate();

  let val =""
  let name=""
  const handleChange = (e)=>{
     val = e.target.value;
     name = e.target.name;
     if(name =="email"){
      setEmail(val)
     }
     if(name =="pass"){
      setPass(val)
     }
     
  }
  const handleSubmit= (e)=>{

      e.preventDefault();
      let data = JSON.parse(localStorage.getItem("user"))
      const userinfo = data.some((curr)=> curr.email==email && curr.pass==pass)
         if (userinfo) {
           alert("login succesfully");
           nav("/home");
         } else {
          alert("login unsuccesfully");
          setEmail("")
          setPass("")
         }
    
      
  }
  // console.log(val,name);
  
  
   return (
     <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-green-100 to-green-300">
       <div className="w-full max-w-md overflow-hidden bg-white shadow-xl rounded-xl">
         <div className="p-6">
           <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
             Log In
           </h2>
           <form
            onSubmit={handleSubmit} 
            className="space-y-4">
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
                 value={email}
                 onChange={handleChange}
                 placeholder="Enter your email"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                 value={pass}
                 onChange={handleChange}
                 placeholder="Enter your password"
                 className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                 required
               />
             </div>

             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <input
                   id="remember-me"
                   type="checkbox"
                   className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                 />
                 <label
                   htmlFor="remember-me"
                   className="block ml-2 text-sm text-gray-900"
                 >
                   Remember me
                 </label>
               </div>
               <div className="text-sm">
                 <a
                   href="/forgot-password"
                   className="font-medium text-green-600 hover:text-green-500"
                 >
                   Forgot password?
                 </a>
               </div>
             </div>

             <button
               type="submit"
               className="w-full py-2 text-white transition-colors duration-300 bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
             >
               Log In
             </button>

             <div className="mt-4 text-sm text-center text-gray-600">
               Don't have an account?
               <a
                 href="/"
                 className="ml-1 text-green-500 hover:text-green-600"
               >
                 Sign up
               </a>
             </div>
           </form>
         </div>
       </div>
     </div>
   );
}

export default Login;