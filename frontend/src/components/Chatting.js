import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Chatting.css"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Chat = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  const chatContainerRef = useRef(null);

  // Define an array of image URLs
  const imageUrls = [
    "https://media2.giphy.com/media/Xq2dHBndWUEtU2gZyp/giphy.gif",
    "https://media1.giphy.com/media/hDAGXIVNI0v0vQamCF/giphy.gif",
    "https://media2.giphy.com/media/S2gLtPdALesjLz7Yib/giphy.gif",
  ];

  useEffect(() => {
      if (!isLoggedIn) {
        // Redirect or handle unauthorized access
        console.log("User not logged in. Redirecting...");
        navigate("/login"); // Redirect to login page
        return;
      }
    // Fetch initial messages
    fetchMessages();

    // Set up the interval to switch images after 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    scrollToBottom();
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('https://mindfulpals-user-backend.onrender.com/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('https://mindfulpals-user-backend.onrender.com/api/messages', { text: newMessage });
      const newMessageData = response.data;

      // Add the new message and response to the messages array
      setMessages([...messages, { sent: true, text: newMessage }, newMessageData]);

      // Clear the input field
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const scrollToBottom = () => {
    // Scroll to the bottom of the chat container
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  return (
    <>
      <div className='wholechat'>
        <div className='chatui' ref={chatContainerRef}>
          <div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sent ? 'sent' : 'received'}`}
                style={{ alignSelf: message.sent ? 'flex-end' : 'flex-start' }}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className='chat_interact'>
          <input
            type="text"
            placeholder='Type here to interact with pet'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <FontAwesomeIcon icon={faPaperPlane} onClick={sendMessage} style={{ color: "#B197FC" }} />
        </div>
      </div>
      <div className='pet-act'>
        {/* Display the current image based on the currentImageIndex */}
        <img src={imageUrls[currentImageIndex]} height='350' width='350' alt='pet-act' />
      </div>
    </>
  );
};

export default Chat;
