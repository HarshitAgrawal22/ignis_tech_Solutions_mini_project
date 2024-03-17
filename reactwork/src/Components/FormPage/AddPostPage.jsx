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
    // const formData = new FormData();
    // formData.append("event_name", document.getElementById("event_name").value);
    // formData.append("date", document.getElementById("date").value);
    // formData.append("time", ${document.getElementById("time").value}:00);
    // formData.append("location", document.getElementById("location").value);
    // formData.append("user_id", 1);
    const formData = {
    event_name:  document.getElementById("event_name").value,
    date:  document.getElementById("date").value,
    time:  document.getElementById("time").value,
    location:  document.getElementById("location").value,
   image:document.getElementById("image").value
    }

    console.log(formData);
    

    // Send a POST request with the form data
    try {
      const response = await fetch("http://127.0.0.1:8000/frontend/create-post/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
          
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const json = await response.json();
      console.log(json);
  
      // document.getElementById("response").innerText = `${json.event_name} ${json.date} ${json.time} ${json.location} ${json.user_id} ${json.details} ${json.image} ${document.getElementById("event_name").value} ${document.getElementById("date").value} ${document.getElementById("time").value}:00 ${document.getElementById("location").value} ${1}`;
      handlePath()
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("response").innerText = error;
    }
     
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
              required
              id="event_name"
              placeholder="event Name"
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
              required
              className="flex flex-col w-1/2"
              placeholder="Date"
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
              required
              className="flex flex-col w-1/2"
              placeholder="Time"
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
              required
              className="flex flex-col w-1/2"
              placeholder="Location"
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
              type="Url"
              
              id="image"
              required
              
              
              className="flex flex-col w-1/2"
              placeholder="Url"
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