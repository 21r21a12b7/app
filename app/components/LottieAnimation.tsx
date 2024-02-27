// components/LottieAnimation.js
import React from 'react';
import Lottie from 'lottie-react';
import animationData from 'public/animation.json'; // Replace with your animation JSON file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default LottieAnimation;
