import React from 'react';
import Likes from './Components/Likes/Likes';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import RegisterPage from './Components/FormPage/RegisterPage';
import LoginPage from './Components/FormPage/LoginPage';
import AddPostsPage from './Components/FormPage/AddPostPage';
import YourLikes from './Components/Likes/YourLike';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/Likes" element={<Likes/>} />
        <Route path="/YourLikes" element={<YourLikes/>} />
        <Route path="/RegisterPage" element={<RegisterPage/>} />
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/AddPostsPage" element={<AddPostsPage/>}/>
        <Route path="/YourLike" element={<YourLikes/>} />

      </Routes>
      
    </div>
  )
}

export default App