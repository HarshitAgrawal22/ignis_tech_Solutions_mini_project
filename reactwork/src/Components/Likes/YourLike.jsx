
import React, { useState, useEffect } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoHeart } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import "./Likes.css";

const YourLikes = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/frontend/specific-posts/",{
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
          
        });
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const changeHeart = () => {
    setHeart(!heart);
  };

  const handlePath = () => {
    navigate("/AddPostsPage");
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-5xl my-8 font-bold">My Likes</h1>

      <button
        onClick={handlePath}
        className=" flex items-center gap-x-4 box-shadow px-4 py-2 rounded-xl font-semibold"
      >
        Add <IoAdd />{" "}
      </button>

      {posts.map((post) => (
        <div key={post.id} className="lg:flex-row sm:flex-col md:items-center flex p-2 space-x-7 mt-8">
          <img src={post.image} alt={post.title} className="lg:w-72 lg:h-32 md:w-[700px] md:h-80" />
          {post.is_liked}
          <div>
            <h1 className="text-lg font-semibold">{post.event_name}</h1>
            <p className="text-gray-500">{post.location}</p>
            
          <p className="text-gray-500">{post.time}</p>
          </div>


          
          <div className="flex items-end space-x-6">
            <div className="image-upload">
              <label htmlFor="file-input">
                <MdOutlineFileUpload className="text-2xl" />
              </label>
              {/* <input id="file-input" type="file" /> */}
            </div>
            {heart ? (
              <IoHeart
                onClick={changeHeart}
                className="text-red-500 cursor-pointer text-2xl"
              />
            ) : (
              <IoHeart
                onClick={changeHeart}
                className="text-2xl text-gray-400 cursor-pointer"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default YourLikes;
