import React from 'react';
import './AboutUs.css';
import cat from '../assets/Cute-cartoon-cat-on-transparent-background-PNG.svg'
import cat2 from '../assets/cat-cartoon-clip-art-cat.svg'

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Welcome to Our Pet Simulator</h1>
        <p >
          At PET-SIMULATOR, we bring you a unique and interactive experience that blends
          cutting-edge technology with the joy of pet companionship. Our journey began with a simple idea:
          to create a virtual environment where users can connect with virtual pets using facial recognition
          and emotion analysis powered by advanced machine learning models.
        </p>
        <p>
          Our innovative Pet Simulator utilizes the latest in artificial intelligence to analyze your
          emotions in real-time through facial recognition technology. Your pet companion responds to your
          emotions, providing a personalized and delightful interaction. Whether you're feeling happy, sad,
          or anything in between, your virtual pet is here to accompany you on your emotional journey.
        </p>
        <p>
          Our dedicated team of developers and pet enthusiasts is passionate about creating a safe and
          enjoyable space for users to experience the joy of having a virtual pet. We believe in the power
          of technology to enhance our lives and create meaningful connections.
        </p>
        <p>
          Thank you for being a part of our Pet Simulator community. We are excited to continue evolving
          and expanding our features, bringing more joy and companionship to your virtual pet experience.
          Get ready to embark on a unique journey with your digital furry friend!
        </p>
        <div className='img'><img className="cat-1" src={cat} alt='cat-img' height ={"300px"} /></div>
      </div>
      
      <img className="cat-2" src={cat2} alt='cat-img2' height ={"470px"} />
      
    </div>
  );
}
