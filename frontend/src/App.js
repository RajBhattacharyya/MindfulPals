import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Headbar from './components/Headbar';
import Login from "./components/Login";
import Signup from "./components/Signup";
import WebcamCapture from "./components/WebcamCapture";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chatting';
import AboutUs  from './components/AboutUs'
function App() {
  return (
    <>
      <BrowserRouter>
      <Headbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="header">
              <LandingPage />
            </div>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/webcamcapture" element={<WebcamCapture />} />
        <Route exact path="/chatwithpet" element={<Chat />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
