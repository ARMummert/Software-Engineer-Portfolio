"use client";

import React, { useEffect } from 'react';

const VideoPlayer = ({ onEnded }: { onEnded: () => void }) => {
  useEffect(() => {
    const videoElement = document.getElementById('videoElement') as HTMLVideoElement;
    let timeoutId: NodeJS.Timeout | null = null;
    
    if (videoElement) {
      videoElement.addEventListener('ended', onEnded);
    
      timeoutId = setTimeout(() => {
        videoElement.pause();
        onEnded();
      }, 10000);
    }
    return () => {
        clearTimeout(timeoutId!);
      if (videoElement) {
        videoElement.removeEventListener('ended', onEnded);
      }
    };
  }, [onEnded]);

  return (
    <video id="videoElement" autoPlay muted className="video">
      <source src="/videos/214402.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;