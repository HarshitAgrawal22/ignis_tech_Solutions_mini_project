import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import "./Likes.css";
import { IoHeart } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import FormPage from "../FormPage/RegisterPage";
import { Navigate, useNavigate } from "react-router-dom";

const Likes = () => {
  const navigate = useNavigate();
  const [Heart, setHeart] = useState(false);

  const changeHeart = () => {
    setHeart(!Heart);
  };

  const handlePath = () => {
    navigate("/AddPostsPage");
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <h1 className="text-5xl my-8 font-bold">Likes</h1>

      <button
        onClick={handlePath}
        className=" flex items-center gap-x-4 box-shadow px-4 py-2 rounded-xl font-semibold"
      >
        Add <IoAdd />{" "}
      </button>
      <div className="lg:flex-row sm:flex-col md:items-center flex  p-2 space-x-7 mt-8 ">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="lg:w-72 lg:h-32 md:w-[700px] md:h-80 "
        />

        <div>
          <h1 className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio
            quas{" "}
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipis
          </p>
          <p className="text-gray-500">Lorem ipsum dolor sit </p>
        </div>

        <div className="flex items-end space-x-6">
          <div class="image-upload ">
            <label for="file-input">
              <MdOutlineFileUpload className="text-2xl" />
            </label>

            <input id="file-input" type="file" />
          </div>
          {Heart ? (
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
    </div>
  );
};

export default Likes;
