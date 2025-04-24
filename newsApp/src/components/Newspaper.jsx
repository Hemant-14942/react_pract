import React, { useState } from "react";
import Cards from "./Cards";
import axios from "axios";

const Newspaper = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  const apiKey = "c0481d813e90a5fc65d88199bf8c30f2";

  const getSearch = async () => {
    try {
      const resp = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${search}&languages=en`
      );
      setArticles(resp.data.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    const keyword = e.target.innerText;
    setSearch(keyword);
    getSearch();
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      <nav className="bg-zinc-800 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow">
        <h1 className="text-4xl font-bold text-amber-400">🗞Newsify</h1>
        <div className="flex gap-4">
          <input
            className="bg-zinc-700 text-white border border-amber-400 px-4 py-2 rounded-md outline-none"
            type="text"
            placeholder="Search news..."
            onChange={handleChange}
          />
          <button
            onClick={getSearch}
            className="bg-amber-400 text-zinc-900 px-5 py-2 rounded-md font-semibold hover:bg-amber-500 transition"
          >
            Search
          </button>
        </div>
      </nav>

      <p className="text-center text-2xl mt-6 text-gray-300">
        Get trending news here!
      </p>

      <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
        {["sports", "politics", "music", "india", "car"].map((topic, idx) => (
          <button
            key={idx}
            className="bg-amber-400 text-zinc-900 px-5 py-2 rounded-full uppercase text-sm font-semibold hover:bg-amber-500 transition"
            onClick={handleClick}
          >
            {topic}
          </button>
        ))}
      </div>

      {articles.length > 0 ? (
        <Cards data={articles} />
      ) : (
        <p className="text-center mt-16 text-gray-500">
          No news to display. Try searching!
        </p>
      )}
    </div>
  );
};

export default Newspaper;
