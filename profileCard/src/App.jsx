import React, { useState } from 'react'
import Cards from './components/Cards';
const profileData = [
  {
    id: 1,
    name: "John Doe",
    jobTitle: "Frontend Developer",
    bio: "Passionate about building interactive and user-friendly web applications.",
    profilePicture: "https://via.placeholder.com/150",
    friend: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    jobTitle: "UI/UX Designer",
    bio: "Creating seamless user experiences with a focus on design and usability.",
    profilePicture: "https://via.placeholder.com/150",
    friend: true,
  },
  {
    id: 3,
    name: "Mike Johnson",
    jobTitle: "Backend Developer",
    bio: "Specializing in building robust and scalable backend systems.",
    profilePicture: "https://via.placeholder.com/150",
    friend: false,
  },
];
const App = () => {
  const [follow, setFollow] = useState(profileData);
 const handlefollow = (index) => {
  console.log(index)
    setFollow(prev =>{
      return prev.map((item,i)=>{
        if(i==index){
          return {...item, friend:!item.friend}
        }
        return item
      })
    })
  }
  return (
    <>
      <div className="flex items-center justify-around h-screen mx-auto gap card-con bg-slate-300 max-w-7xl">
        {follow.map((item, index) => (
          <Cards
            key={index}
            {...item}
            handlefollow={() => handlefollow(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App