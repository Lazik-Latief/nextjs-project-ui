"use client";  

import { useRef, useState } from "react"; 

export default function ChunkVideoPlayer({ videoId, onPlayStateChange }) {
  const videoRef = useRef(null);
  const [isBuffering, setIsBuffering] = useState(false); // Track buffering state
  const [error, setError] = useState(null);

  const streamUrl = `/api/videos/${videoId}/stream`; // API URL for streaming video

  const handlePlay = () => {
    if (!videoRef.current) return;  

    // Send play event data to parent
    onPlayStateChange?.({
      eventType: "play",
      currentTime: videoRef.current.currentTime,
      videoId,
      timestamp: new Date().toISOString(),
    });
  };

  const handlePause = () => {
    if (!videoRef.current) return;  

    // Send pause event data to parent
    onPlayStateChange?.({
      eventType: "pause",
      currentTime: videoRef.current.currentTime,
      videoId,
      timestamp: new Date().toISOString(),
    });
  };

  const handleEnded = async () => {
    try {
      // Send completion request to backend
      const response = await fetch(
        `/api/videos/${videoId}/complete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Completion API failed"); 
      }

      console.log("Completion recorded successfully");  

      
      onPlayStateChange?.({
        eventType: "ENDED",
        currentTime: videoRef.current?.currentTime || 0,
        videoId,
        timestamp: new Date().toISOString(),
      });

    } catch (err) {
      console.error("Error sending completion:", err); 
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto group">
      <div className="relative rounded-2xl overflow-hidden p-[2px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 shadow-[0_0_40px_rgba(255,215,0,0.15)]">
        <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden">

          {/* Show buffering overlay */}
          {isBuffering && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-yellow-400 z-10">
              Buffering...
            </div>
          )}

          {/* Show error overlay */}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black text-red-500 z-10">
              {error}
            </div>
          )}

          {/* Video element with event handlers */}
          <video
            ref={videoRef}
            src={streamUrl}
            controls
            className="w-full h-full"
            onPlay={handlePlay}
            onPause={handlePause}
            onWaiting={() => setIsBuffering(true)} 
            onCanPlay={() => setIsBuffering(false)}  
            onError={() => setError("Failed to load video")}  
            onEnded={handleEnded} // Handle video completion
          />

        </div>
      </div>
    </div>
  );
}