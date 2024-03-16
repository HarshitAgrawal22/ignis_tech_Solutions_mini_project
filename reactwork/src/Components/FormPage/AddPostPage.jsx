import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddPostsPage = () => {
  const navigate = useNavigate();
  const handlePath = () => {
    navigate("/Likes");
  };
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData();
    formData.append("event_name", document.getElementById("event_name").value);
    formData.append("date", document.getElementById("date").value);
    formData.append("time", `${document.getElementById("time").value}:00`);
    formData.append("location", document.getElementById("location").value);
    formData.append("user_id", 1);
    

    // Send a POST request with the form data
    let res = await fetch("http://127.0.0.1:8000/frontend/create-post/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((json) => {
        document.getElementById(
          "response"
        ).innerText = `${json.event_name}   ${json.date}   
        ${json.time}   ${json.location}   ${json.user_id}  ${json.details} ${json.image}    ${document.getElementById("event_name").value} ${document.getElementById("date").value} ${ document.getElementById("time").value}:00 ${document.getElementById("location").value} ${1}`;
      })
      .catch((error) => {
        document.getElementById("response").innerText = "fg";
      });
     
  };
  return (
    <form action="" method="post" onSubmit={handleSubmit} id="register-form">
      <center>
        <div className="flex flex-col h-96 w-1/2  justify-between  ">
          <h1 className="text-2xl font-bold text-orange-600 ">ADD POST</h1>
          <div className="flex flex-row  ">
            <label
              htmlFor="heading"
              className="flex flex-col w-1/2 text-orange-600 font-bold text-xl"
            >
              event_name:
            </label>

            <input
              type="text"
              id="event_name"
              name="heading"
              placeholder="username"
              className="flex flex-col w-1/2"
            />
          </div>
          <div className="flex flex-row">
            <label
              htmlFor="date-time"
              className="flex flex-col w-1/2 text-orange-600 font-bold text-xl"
            >
              Date:
            </label>

            <input
              type="date"
              id="date"
              name="date-time"
              className="flex flex-col w-1/2"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-row">
            <label
              htmlFor="date-time"
              className="flex flex-col w-1/2 text-orange-600 font-bold text-xl"
            >
              time:
            </label>

            <input
              type="time"
              id="time"
              name="date-time"
              className="flex flex-col w-1/2"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-row">
            <label
              htmlFor="date-time"
              className="flex flex-col w-1/2 text-orange-600 font-bold text-xl"
            >
              location:
            </label>

            <input
              type="text"
              id="location"
              name="date-time"
              className="flex flex-col w-1/2"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-row">
            <label
              htmlFor="date-time"
              className="flex flex-col w-1/2 text-orange-600 font-bold text-xl"
            >
              Image:
            </label>

            <input
              type="file"
              accept=".jpg,.jpeg,.png,"
              id="image"
              name="date-time"
              className="flex flex-col w-1/2"
              placeholder="Password"
            />
          </div>
          <button className="text-orange-600 font-bold">Submit</button>
        </div>
      </center>
      <p id="response"></p>
    </form>
  );
};

export default AddPostsPage;
