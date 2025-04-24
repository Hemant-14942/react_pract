import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import axios from 'axios';

const Newspaper = () => {
  const [search, setSearch] = useState("india");
  const [article, setArticle] = useState(null);
    const apiKey = "1c6241767e8345498bdf2dad116accf7";
    // 1c6241767e8345498bdf2dad116accf7

    const getSearch = async()=>{
      try {
        if(search){
           const resp = await axios.get(
             `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`
           );
          //  console.log(resp);
           
          //  const data = await resp.json();/
           setArticle(resp.data.articles);
           console.log(resp.data.articles);
           console.log(search);
        }
      } catch (error) {
        console.log(error);
      }
       
        
    }
    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value);
    }

    useEffect(()=>{
      getSearch();
    },[search])

    const handleClick = (e) => {
        console.log(e.target.innerText);
        setSearch(e.target.innerText);
    }
  return (
    <>
      <nav className="bg-amber-200 px-14 py-2  flex justify-between items-center">
        <h1 className="text-5xl">News !</h1>
        <div className="search flex justify-center items-center gap-4">
          <input
            className="outilne-none border-2 text-2xl border-blue-500"
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="button"
            onClick={getSearch}
            className="p-1 bg-blue-700 text-amber-100"
          >
            Search
          </button>
        </div>
      </nav>
      <p className="text-center text-3xl">get trending news here !</p>
      <div className="btn text-center mt-12">
        <button
          className="p-2 text-white uppercase rounded-xl btn bg-blue-700 mx-4 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          sports
        </button>
        <button
          className="p-2 text-white uppercase rounded-xl btn bg-blue-700 mx-4 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          politics
        </button>
        <button
          className="p-2 text-white uppercase rounded-xl btn bg-blue-700 mx-4 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          music
        </button>
        <button
          className="p-2 text-white uppercase rounded-xl btn bg-blue-700 mx-4 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          india
        </button>
        <button
          className="p-2 text-white uppercase rounded-xl btn bg-blue-700 mx-4 cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          car
        </button>
      </div>
      {article ? <Cards data={article} /> : null}
    </>
  );
}

export default Newspaper;