import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./WebcamCapture.css";

const WebcamCapture = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [emotionLabel, setEmotionLabel] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const intervalIdRef = useRef(null);
  const [petResponseImageUrl, setPetResponseImageUrl] = useState(null);
  const [chatMessage, setChatMessage] = useState("It's a wonderful day, let's your buddy detect your emotion. Press start capturing.");

  const imageUrls = [
    "https://media2.giphy.com/media/Xq2dHBndWUEtU2gZyp/giphy.gif",
    "https://media1.giphy.com/media/hDAGXIVNI0v0vQamCF/giphy.gif",
    "https://media2.giphy.com/media/S2gLtPdALesjLz7Yib/giphy.gif",
  ];
  // Customize chat message based on emotionLabel
  const getChatMessage = (emotion) => {
    if (emotion === "Happy") {
      setChatMessage("You look happy! Want to share your joy?");
    } else if (emotion === "Sad") {
      setChatMessage("You seem a bit sad. Would you like to talk about it?");
    } else if (emotion === "Neutral") {
      setChatMessage("You look calm and neutral. Anything on your mind?");
    }
  }
  

  const getImageUrlForEmotion = (emotion) => {
    const emotionImageMap = {
      Happy: imageUrls[0],
      Sad: imageUrls[1],
      Neutral: imageUrls[2],
      // Add more emotions and corresponding image URLs as needed
    };

    // Default to a placeholder image if the emotion is not in the map
    return (
      emotionImageMap[emotion] ||
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnhjY3luajBoNXZ5ZjY4Y211aW93eTB0MGc5djAzMzIxcGRzcjRrMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wHJlptgM3czAhFUf3N/giphy.gif"
    );
  };

  useEffect(() => {
    console.log("Emotion Label changed:", emotionLabel);
    setPetResponseImageUrl(getImageUrlForEmotion(emotionLabel));
    getChatMessage(emotionLabel);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emotionLabel]);
  

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect or handle unauthorized access
      console.log("User not logged in. Redirecting...");
      navigate("/login"); // Redirect to login page
      return;
    }

    const fetchData = async () => {
      try {
        if (isCapturing) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          webcamRef.current.srcObject = stream;

          webcamRef.current.onloadedmetadata = () => {
            intervalIdRef.current = setInterval(async () => {
              if (webcamRef.current.srcObject) {
                const canvas = document.createElement("canvas");
                canvas.width = webcamRef.current.videoWidth;
                canvas.height = webcamRef.current.videoHeight;
                const context = canvas.getContext("2d");
                context.drawImage(
                  webcamRef.current,
                  0,
                  0,
                  canvas.width,
                  canvas.height
                );
                const imageData = canvas.toDataURL("image/jpeg");

                // Send the frame to the Python Flask server
                const response = await axios.post(
                  `https://57d5-34-67-89-170.ngrok-free.app/api/send_frame`,
                  { frame: imageData }
                );

                // Update the emotion label state with the received value from the server
                setEmotionLabel(response.data.emotion);
              }
            }, 10000);
          };
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    fetchData();

    // Cleanup function to stop the webcam and clear the interval when component unmounts or capturing is stopped
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      if (webcamRef.current && webcamRef.current.srcObject) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        webcamRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCapturing]);

  const handleCapturingToggle = () => {
    setIsCapturing((prevIsCapturing) => {
      // If capturing is being stopped, set emotionLabel to null
      if (prevIsCapturing) {
        setEmotionLabel(null);
      }
      return !prevIsCapturing;
    });
  };

  const handleChatClick = () => {
    navigate("/chatwithpet");
  };


  return (
    <>
      <div className="webcambody">
        <div className="heading">
          <h1>Webcam Capture</h1>
        </div>
        <div className="webcam">
          {isCapturing ? (
            <video
              ref={webcamRef}
              width="300"
              height="300"
              autoPlay
              style={{ borderRadius: "50px" }}
            />
          ) : (
            <img
              className="sleeping"
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnhjY3luajBoNXZ5ZjY4Y211aW93eTB0MGc5djAzMzIxcGRzcjRrMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wHJlptgM3czAhFUf3N/giphy.gif"
              width="250"
              height="250"
              alt="sleeping cat"
            />
          )}
        </div>
        <div className="emotion-label">
          <h2>Emotion: {emotionLabel}</h2>
        </div>
        <div className="record-button">
          <button onClick={handleCapturingToggle}>
            {isCapturing ? "Stop Capturing" : "Start Capturing"}
          </button>
        </div>
      </div>
      <div className="next-page">
        <div className="chat_I">
          <p>{chatMessage}</p>
        </div>
        <button className="next-page-btn" onClick={handleChatClick}>Interact with your pet</button>
      </div>
      <div className="pet-response">
        <img
          className="pet-response"
          src={petResponseImageUrl}
          width="250"
          height="250"
          alt="pet_response"
        />
      </div>
    </>
  );
};

export default WebcamCapture;
