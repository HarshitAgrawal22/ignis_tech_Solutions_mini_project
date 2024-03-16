import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const RegisterPage = () => {
        const navigate = useNavigate();
        const handlePath = () => {
        navigate("/Likes");
      };
        const handleSubmit = (event) => {
          // Prevent the default form submission behavior
          event.preventDefault();
      
          // Get the form data
          const formData = {
            username: document.getElementById("username").value,
            password: document.getElementById("password1").value,
            email:document.getElementById("email").value
            
          };
      
          // Send a POST request with the form data
          fetch("http://127.0.0.1:8000/frontend/user-register/", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(json => {
                localStorage.setItem("access",json.token.access);
                localStorage.setItem("refresh",json.token.refresh);
                handlePath();
                
        //     document.getElementById("response").innerText = json;
          })
          .catch(error => {
                document.getElementById("response").innerText = error;
          });
        };
  return (
   
    <form action="" method='post' onSubmit={handleSubmit} id="register-form">
      
<center>
      <div className='flex flex-col h-96 w-1/2  justify-between  ' >

      <h1 className='text-2xl font-bold text-orange-600 '>REGISTER</h1>
<div className='flex flex-row  '>

        <label htmlFor="heading" className='flex flex-col w-1/2 text-orange-600 font-bold text-xl'>Username: </label>

        <input type="text" id="username" name='heading' placeholder='username' className='flex flex-col w-1/2' />
</div>
<div className='flex flex-row'>

        <label htmlFor="starts" className='flex flex-col w-1/2 text-orange-600 font-bold text-xl'> Email:</label>

        <input type="text" id="email" name='starts'  className='flex flex-col w-1/2'placeholder='Confirm Password' />
</div>
<div className='flex flex-row'>

        <label htmlFor="date-time" className='flex flex-col w-1/2 text-orange-600 font-bold text-xl'>Password:</label>

        <input type="text" id="password1" name="date-time"  className='flex flex-col w-1/2'placeholder='Password'/>
</div>

<div className='flex flex-row'>

        <label htmlFor="starts" className='flex flex-col w-1/2 text-orange-600 font-bold text-xl'> Confirm Pasword:</label>

        <input type="text" id="password2" name='starts'  className='flex flex-col w-1/2'placeholder='Confirm Password' />
</div>



        <button className='text-orange-600 font-bold'>Submit</button></div></center>
        <p id="response"></p>
    </form>

  )
}

export default RegisterPage;